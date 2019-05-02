package ebeacon.Model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class User {
	
	boolean IsActive;
	String UserFirstNm;
	String UserLastNm;
	String UserEmail;
	String UserPhone;
	Integer UserId;
	
	@JsonProperty("IsActive")
	public boolean isIsActive() {
		return IsActive;
	}
	@JsonProperty("IsActive")
	public void setIsActive(boolean isActive) {
		IsActive = isActive;
	}
	
	@JsonProperty("UserFirstNm")
	public String getUserFirstNm() {
		return UserFirstNm;
	}
	
	@JsonProperty("UserFirstNm")
	public void setUserFirstNm(String userFirstNm) {
		UserFirstNm = userFirstNm;
	}
	
	@JsonProperty("UserLastNm")
	public String getUserLastNm() {
		return UserLastNm;
	}
	
	@JsonProperty("UserLastNm")
	public void setUserLastNm(String userLastNm) {
		UserLastNm = userLastNm;
	}
	
	@JsonProperty("UserEmail")
	public String getUserEmail() {
		return UserEmail;
	}
	@JsonProperty("UserEmail")
	public void setUserEmail(String userEmail) {
		UserEmail = userEmail;
	}
	
	@JsonProperty("UserPhone")
	public String getUserPhone() {
		return UserPhone;
	}
	
	@JsonProperty("UserPhone")
	public void setUserPhone(String userPhone) {
		UserPhone = userPhone;
	}
	
	@JsonProperty("UserId")
	public Integer getUserId() {
		return UserId;
	}
	
	@JsonProperty("UserId")
	public void setUserId(Integer userId) {
		UserId = userId;
	}

	
	
}
