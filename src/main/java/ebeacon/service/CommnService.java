package ebeacon.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Properties;

import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.social.yammer.api.MessageInfo;
import org.springframework.social.yammer.api.Yammer;
import org.springframework.social.yammer.api.YammerProfile;
import org.springframework.social.yammer.api.impl.YammerPostDetails;
import org.springframework.social.yammer.api.impl.YammerTemplate;
import org.springframework.stereotype.Service;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

import ebeacon.Model.TargetUser;

@Service
public class CommnService {
	
	// SMS - TWILIO
	private final static String ACCOUNT_SID = "AC297f111041ff1627ec28496fff2436e3";
	private final static String AUTH_ID = "b7baf0ed8f228b3d2ca45824f45c81d1";
	// EMAIL - GMAIL
	private final String emailUserName = "ebeaconapp@gmail.com";
	private final String emailPassword = "eBeaconApplication";
	
	
	static {
	      Twilio.init(ACCOUNT_SID, AUTH_ID);
	       }
	
	public void sendCommunication(String message)
	{
		List<TargetUser> targetAudience= new ArrayList<TargetUser>();
		targetAudience.add(new TargetUser("1","Sandiya",Arrays.asList("EMAIL", "SMS", "sendYammer")));
		
		for (TargetUser targetUser : targetAudience)
		{
			for (String channel : targetUser.getChannels())
			{
				switch(channel) {
				case "SMS" :
					sendSMS(targetUser.getUserName(), message);
					break;
				case "EMAIL" :
					sendEmail(targetUser.getUserName(), message);
					break;
				case "sendYammer" :
					sendYammer(targetUser.getUserName(), message, "pravgandhi@deloitte.com");
					break; 
				}	
			}
		}
		
	}
	
	public void sendSMS(String userName, String message)
	{
		
		System.out.println("BEFORE SENDSMS");
		
		 //Message.creator(new PhoneNumber("+19528186680"), new PhoneNumber("+17634529666"),
				 Message.creator(new PhoneNumber("+13215780852"), new PhoneNumber("+17634529666"),
		         "Hi "+userName+ ", "+message).create();
		 
		 System.out.println("AFTER SENDSMS");
	}
	
	public void sendEmail(String userName, String message)
	{
		
		// Setup Mail Server properties
		Properties props = new Properties();
		
		props.put("mail.smtp.host", "smtp.gmail.com");
		props.put("mail.smtp.port", "587");
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.starttls.enable", "true"); //TLS
        
		// Create a server session
		 Session session = Session.getInstance(props,
	                new javax.mail.Authenticator() {
	                    protected PasswordAuthentication getPasswordAuthentication() {
	                        return new PasswordAuthentication(emailUserName, emailPassword);
	                    }
	                });
		 try {

			 // Create a message 
	            MimeMessage emailMessage = new MimeMessage(session);
	            emailMessage.setFrom(new InternetAddress(emailUserName));
	            emailMessage.setRecipients(
	            		MimeMessage.RecipientType.TO,
	                    InternetAddress.parse("pravgandhi@deloitte.com")
	            );
	            emailMessage.setSubject("eBeacon");
	            emailMessage.setText("Dear "+ userName +","
	                    + "\n\n" + message);

	            Transport.send(emailMessage);

	        } catch (MessagingException e) {
	            e.printStackTrace();
	           
	        } 
	}
	
	public String sendYammer(String userName, String message, String yammerEmail)
	{
		
		System.out.println("BEFORE SENDYAMMER");
			
		String accessToken = "304-DNI89Sej4KmjPVvpJLMLGg"; // access token received from Yammer after OAuth authorization
		Yammer yammer = new YammerTemplate(accessToken);
				
		YammerProfile profile = yammer.userOperations().getUserByEmail(yammerEmail);				 
		YammerPostDetails details = new YammerPostDetails();
		
		details.setDirectToUserId(profile.getId());
		
		MessageInfo messageInfo = yammer.messageOperations().postUpdate("Hello !", details);
				
		 System.out.println("AFTER SENDYAMMER");
		return "success";
	}
}
