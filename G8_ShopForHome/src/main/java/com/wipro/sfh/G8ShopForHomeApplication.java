package com.wipro.sfh;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class G8ShopForHomeApplication {

	public static void main(String[] args) {
		SpringApplication.run(G8ShopForHomeApplication.class, args);
	}

}
