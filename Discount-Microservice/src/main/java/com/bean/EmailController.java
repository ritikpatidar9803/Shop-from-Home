package com.bean;

//Java Program to Create Rest Controller that
//Defines various API for Sending Mail


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin
public class EmailController {

	@Autowired private EmailService emailService;

	
	@PostMapping("/sendMail")
	public String
	sendMail(@RequestBody EmailDetails details)
	{
		String status
			= emailService.sendSimpleMail(details);

		return status;
	}

	
}

