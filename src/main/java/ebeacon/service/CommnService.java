package ebeacon.service;

import java.net.URI;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.social.yammer.api.MessageInfo;
import org.springframework.social.yammer.api.Yammer;
import org.springframework.social.yammer.api.YammerProfile;
import org.springframework.social.yammer.api.impl.YammerPostDetails;
import org.springframework.social.yammer.api.impl.YammerTemplate;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import com.twilio.Twilio;
import com.twilio.http.HttpMethod;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

import ebeacon.Model.DiscussionList;
import ebeacon.Model.PublishMessage;
import ebeacon.Model.TargetUser;
import ebeacon.Model.User;

@Service
public class CommnService {
	
	// SMS - TWILIO
	private final static String ACCOUNT_SID = "AC297f111041ff1627ec28496fff2436e3";
	private final static String AUTH_ID = "b7baf0ed8f228b3d2ca45824f45c81d1";
	private final static String PUBLISH_MSG = "https://us-central1-us-con-gcp-sbx-0000118-022619.cloudfunctions.net/publishMessage";
	private final static String GET_DISCUSSION_LIST = "https://us-central1-us-con-gcp-sbx-0000118-022619.cloudfunctions.net/getDiscussionsList?userId=";
	private final static String GET_USER_INFO = "https://us-central1-us-con-gcp-sbx-0000118-022619.cloudfunctions.net/getUser";
	// EMAIL - GMAIL
	private final String emailUserName = "ebeaconapp@gmail.com";
	private final String emailPassword = "eBeaconApplication";
	

	String twilioNumber = "+17634529666";
	
	
	static {
	      Twilio.init(ACCOUNT_SID, AUTH_ID);
	       }
	
	public void sendCommunication(String message, String targetEmail, String targetPhoneNumber, String targetUserId, 
				String targetUserName, List<String> targetCommunicationChannel)
	{
		
		List<TargetUser> targetAudience= new ArrayList<TargetUser>();
		targetAudience.add(new TargetUser(targetUserId, targetUserName ,targetCommunicationChannel));
		
		for (TargetUser targetUser : targetAudience)
		{
			for (String channel : targetUser.getChannels())
			{
				switch(channel) {
				case "SMS" :
					sendSMS(targetUser.getUserName(), message, targetPhoneNumber);
					break;
				case "EMAIL" :
					sendEmail(targetUser.getUserName(), message, targetEmail );
					break;
				case "sendYammer" :
					sendYammer(targetUser.getUserName(), message, targetEmail);
					break; 
				}	
			}
		}
		
	}
	
	public void sendSMS(String userName, String message, String phoneNumber)
	{
		System.out.println("BEFORE SENDSMS");	
		Message response = Message.creator(new PhoneNumber(phoneNumber), new PhoneNumber(twilioNumber),
		//Message response = Message.creator(new PhoneNumber("+13215780852"), new PhoneNumber("+17634529666"),
		         "Message from eBeacon: \n"
				+message ).create();
		 System.out.println("AFTER SENDSMS"+ "--> AccountSid --> "+ response.getAccountSid() + "  Sid -->" +response.getSid()
				 	+ "Messaging service Sid -->" + response.getMessagingServiceSid() + " To Number --> "+ response.getTo() );
	}
	
	public void sendEmail(String userName, String message, String email)
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
	                    InternetAddress.parse(email)
	            );
	            emailMessage.setSubject("Message from eBeacon");
	            emailMessage.setText(message);

	            Transport.send(emailMessage);

	        } catch (MessagingException e) {
	            e.printStackTrace();
	           
	        } 
	}
	
	public String sendYammer(String userName, String message, String email)
	{	
		System.out.println("BEFORE SENDYAMMER");	
		String accessToken = "304-DNI89Sej4KmjPVvpJLMLGg"; // access token received from Yammer after OAuth authorization
		Yammer yammer = new YammerTemplate(accessToken);
		YammerProfile profile = yammer.userOperations().getUserByEmail(email);				 
		YammerPostDetails details = new YammerPostDetails();
		details.setDirectToUserId(profile.getId());
		MessageInfo messageInfo = yammer.messageOperations().postUpdate("Message from eBeacon \n" + message, details);
		 System.out.println("AFTER SENDYAMMER");
		return "success";
	}
	
	public String publishMessage(String msg, PublishMessage pubMsg, String targetUserId) {
		HttpHeaders requestHeaders = new HttpHeaders();
		RestTemplate restTemplate = new RestTemplate();
		Map<String, Object> body= new HashMap<String, Object>();		
		requestHeaders.setContentType(MediaType.APPLICATION_JSON);
		body.put("message", msg);
		body.put("options", pubMsg); 	
		body.put("sentBy", targetUserId); 	
		HttpEntity<?> httpEntity = new HttpEntity<Object>(body, requestHeaders);
        String response = restTemplate.postForObject(PUBLISH_MSG, httpEntity, String.class);
        return response;
	}
	
	public DiscussionList[] getDiscussionList(String userId) {
		RestTemplate restTemplate = new RestTemplate();
		DiscussionList[] response = restTemplate.getForObject(GET_DISCUSSION_LIST+userId, DiscussionList[].class);
        return response;
	}
		
	public String getUserInfo(String userPhone) {
		RestTemplate restTemplate = new RestTemplate();
		URI targetUrl = UriComponentsBuilder.fromUriString(GET_USER_INFO)
	            .queryParam("userPhone",userPhone)
	            .build()
	            .toUri();		
		User response = restTemplate.getForObject(targetUrl, User.class);
        return String.valueOf(response.getUserId());
	}
	 	
}
