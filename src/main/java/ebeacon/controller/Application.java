package ebeacon.controller;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
//import org.springframework.social.connect.ConnectionFactoryLocator;
//import org.springframework.social.connect.support.ConnectionFactoryRegistry;
//import org.springframework.social.yammer.api.connect.YammerConnectionFactory;

@ComponentScan("ebeacon.controller")
@ComponentScan("ebeacon.service")
@ComponentScan("ebeacon.dao")
@SpringBootApplication
public class Application {

	/*	@Bean
	    public ConnectionFactoryLocator connectionFactoryLocator() {
	        ConnectionFactoryRegistry registry = new ConnectionFactoryRegistry();
	        registry.addConnectionFactory(new YammerConnectionFactory(
	           "9Qbp9uEiEIYrSS8ACThcA",
	           "fblh9ccdktN7ldYOYgSElRG29nmYKcokLtR2jGN16o"));
	        return registry;
	    }
	*/
	
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
