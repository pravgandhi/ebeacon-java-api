package ebeacon.controller;



import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.util.MultiValueMap;
import org.springframework.validation.support.BindingAwareModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
/*import org.springframework.social.connect.Connection;
import org.springframework.social.connect.ConnectionFactory;
import org.springframework.social.yammer.api.Yammer;
import org.springframework.social.yammer.api.YammerProfile;
import org.springframework.social.yammer.api.impl.YammerTemplate;*/
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ebeacon.Model.DiscussionList;
import ebeacon.Model.PublishMessage;
import ebeacon.Model.Subscription;
import ebeacon.service.CommnService;


@RestController
public class CommnController {
  
	@Autowired
	CommnService commnService;

	String targetUserId = "1004"; 
	String targetUserName = "Praveen";
	List<String> targetCommunicationChannel = Arrays.asList("EMAIL", "SMS", "sendYammer");
	String targetEmail = "pravgandhi@deloitte.com";
	String targetPhoneNumber = "+13215780852";
		
	
	String returnUserId = "1006"; 
	String returnUserName = "Sandiya";
	List<String> returnCommunicationChannel = Arrays.asList("EMAIL","SMS" , "sendYammer");
	String returnEmail = "ssundaramurthy@deloitte.com";
	String returnPhoneNumber = "+19528186680";
	
	
	//@RequestMapping(value = "/sendCommunication", method = RequestMethod.POST)
	@RequestMapping("/sendCommunication/{messaage}")
	//public String sendCommunication(@RequestBody String message)
	public String sendCommunication(@PathVariable("messaage")String messaage)
	{
		System.out.println("BEFORE SENDING COMMUNICATION");
		
		try {
			//commnService.sendCommunication(message);
			commnService.sendCommunication(messaage, targetEmail, targetPhoneNumber, 
					targetUserId, targetUserName, targetCommunicationChannel);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return "failure";
		}
		 
		 System.out.println("AFTER SENDING COMMUNICATION");
		 
		return "success";
	}

	
	/* @RequestMapping(path = "/processSMS", method = RequestMethod.POST)
	 public void saveFilter(@RequestBody Map<String, String> request) { 
		 for( String key :request.keySet()) {
			 System.out.println(request.get(key)) ;
		 }		 
	 }*/
	 
	 @RequestMapping(value= "/processSMS", 
			 method = RequestMethod.POST,
			 consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE
			 )
	 public String processSMS(@RequestParam Map<String, String> body) {
		 String retrunString = "Incoming message from twilio ";
		 //String smsId = paramMap.get("SmsMessageSid").toString();
		 for( String key :body.values()) {
			 retrunString = retrunString + key;
		 }		 
		 PublishMessage pubMsg = new PublishMessage();
		 pubMsg.setChannel("sms");
		 pubMsg.setChannelId(body.get("SmsMessageSid"));
		 DiscussionList[] discussionList = commnService.getDiscussionList(returnUserId);
		 pubMsg.setDiscussionId(discussionList[0].getId());
		 String response = commnService.publishMessage(body.get("Body"), pubMsg, targetUserId);
		// return body.get("Body") + body.get("SmsMessageSid");
		try {
				//commnService.sendCommunication(message);
				commnService.sendCommunication(body.get("Body"), returnEmail, returnPhoneNumber, 
						returnUserId, returnUserName, returnCommunicationChannel);
		}
		catch(Exception e)
		{
				e.printStackTrace();
				return "failure";
		}
		 
		 return response;
	 }
		
	 
	 
	 @RequestMapping("/testSMS")
	 public String test() throws UnsupportedEncodingException {
		 System.out.println("Inside testSMS");
		 PublishMessage pubMsg = new PublishMessage();
		 pubMsg.setChannel("sms");
		 pubMsg.setChannelId("SmsMessageSid");
		 DiscussionList[] discussionList = commnService.getDiscussionList(returnUserId);
		 pubMsg.setDiscussionId(discussionList[0].getId());
		 String response = commnService.publishMessage("message from sms", pubMsg, targetUserId);
		// return body.get("Body") + body.get("SmsMessageSid");
		 try {
				//commnService.sendCommunication(message);
				commnService.sendCommunication("message from sms", returnEmail, returnPhoneNumber, 
						returnUserId, returnUserName, returnCommunicationChannel);
		}
		catch(Exception e)
		{
				e.printStackTrace();
				return "failure";
		}
		 return response;
	 }
	/*@RequestMapping("/sendYammer")
	public String sendYammer()
	{
		
		System.out.println("BEFORE SENDYAMMER");
		
		Connection<Yammer> connection = new SocialConfig().connectionFactoryLocator();
		if (connection != null) {
		    Yammer yammer = connection.getApi();

		    // ... use Yammer API binding
		}
		
		
		String accessToken = "304-ZAPanvbbZF35s4RgUUXjaw"; // access token received from Yammer after OAuth authorization
		Yammer yammer = new YammerTemplate(accessToken);
		
		YammerProfile profile = yammer.userOperations().getUserProfile();
		
		System.out.println("Name : "+profile.getName());
		 
		 System.out.println("AFTER SENDYAMMER");
		return "success";
	}*/
	
		

}
