package com.wipro.sfh.csv;

import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVPrinter;
import org.apache.commons.csv.CSVRecord;
import org.apache.commons.csv.QuoteMode;
import org.springframework.web.multipart.MultipartFile;

import com.wipro.sfh.entity.Product;



public class CSVHelper {
	 public static String TYPE = "text/csv";
	  static String[] HEADERs = { "Id", "Title", "Description", "Published" };

	  public static boolean hasCSVFormat(MultipartFile file) {

	    if (!TYPE.equals(file.getContentType())) {
	      return false;
	    }

	    return true;
	  }

	  public static List<Product> csvToTutorials(InputStream is) {
	    try (BufferedReader fileReader = new BufferedReader(new InputStreamReader(is, "UTF-8"));
	        CSVParser csvParser = new CSVParser(fileReader,
	            CSVFormat.DEFAULT.withFirstRecordAsHeader().withIgnoreHeaderCase().withTrim());) {

	      List<Product> prods = new ArrayList<Product>();

	      Iterable<CSVRecord> csvRecords = csvParser.getRecords();

	      for (CSVRecord csvRecord : csvRecords) {
	        Product tutorial = new Product(Integer.parseInt(csvRecord.get("pid")),
	        		csvRecord.get("pname"),
	        		csvRecord.get("description"),
	        		Integer.parseInt(csvRecord.get("price")),
	        		csvRecord.get("image"),
	        		Integer.parseInt(csvRecord.get("stockquantity")),
	        		Integer.parseInt(csvRecord.get("discount")),
	        		csvRecord.get("Category") );

	        prods.add(tutorial);
	      }

	      return prods;
	    } catch (IOException e) {
	      throw new RuntimeException("fail to parse CSV file: " + e.getMessage());
	    }
	  }

	  public static ByteArrayInputStream tutorialsToCSV(List<Product> tutorials) {
	    final CSVFormat format = CSVFormat.DEFAULT.withQuoteMode(QuoteMode.MINIMAL);

	    try (ByteArrayOutputStream out = new ByteArrayOutputStream();
	        CSVPrinter csvPrinter = new CSVPrinter(new PrintWriter(out), format);) {
	      for (Product tutorial : tutorials) {
	        List<String> data = Arrays.asList(
	              String.valueOf(tutorial.getPid()),
	              tutorial.getPname(),
	              tutorial.getDescription(),
	              String.valueOf(tutorial.getPrice()),
	              tutorial.getImage(),
	              String.valueOf(tutorial.getStockquantity()),
	              String.valueOf(tutorial.getDiscount()),
	              tutorial.getCategory()
	            );

	        csvPrinter.printRecord(data);
	      }

	      csvPrinter.flush();
	      return new ByteArrayInputStream(out.toByteArray());
	    } catch (IOException e) {
	      throw new RuntimeException("fail to import data to CSV file: " + e.getMessage());
	    }
	  }


}
