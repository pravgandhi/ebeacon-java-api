package ebeacon.Model;

import java.util.List;

public class TargetUser {

	private String UserID;
	private String UserName;
	private List<String> Channels;
	
	public TargetUser()
	{
		super();
	}
	public TargetUser(String userID, String userName, List<String> channels) {
		super();
		UserID = userID;
		UserName = userName;
		Channels = channels;
	}
	public String getUserID() {
		return UserID;
	}
	public void setUserID(String userID) {
		UserID = userID;
	}
	public String getUserName() {
		return UserName;
	}
	public void setUserName(String userName) {
		UserName = userName;
	}
	public List<String> getChannels() {
		return Channels;
	}
	public void setChannels(List<String> channels) {
		Channels = channels;
	}
	
	
}
