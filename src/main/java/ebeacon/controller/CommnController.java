package ebeacon.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
/*import org.springframework.social.connect.Connection;
import org.springframework.social.connect.ConnectionFactory;
import org.springframework.social.yammer.api.Yammer;
import org.springframework.social.yammer.api.YammerProfile;
import org.springframework.social.yammer.api.impl.YammerTemplate;*/
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import ebeacon.service.CommnService;

@RestController
public class CommnController {
  
	@Autowired
	CommnService commnService;
	
	@RequestMapping(value = "/sendCommunication", method = RequestMethod.POST)
	public String sendCommunication(@RequestBody String message)
	{
		System.out.println("BEFORE SENDING COMMUNICATION");
		
		try {
			
			commnService.sendCommunication(message);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return "failure";
		}
		 
		 System.out.println("AFTER SENDING COMMUNICATION");
		 
		return "success";
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
