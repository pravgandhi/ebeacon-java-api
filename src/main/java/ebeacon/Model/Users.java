package ebeacon.Model;


import org.springframework.cloud.gcp.data.datastore.core.mapping.Entity;
import org.springframework.data.annotation.Id;

@Entity(name ="Users")
public class Users {
@Id 	
	long userId;
	String userFirstNm;
	String userLastNm;
	String userEmail;
	long userPhone;
	boolean isActive;
	public long getUserId() {
		return userId;
	}
	public void setUserId(long userId) {
		this.userId = userId;
	}
	public String getUserFirstNm() {
		return userFirstNm;
	}
	public void setUserFirstNm(String userFirstNm) {
		this.userFirstNm = userFirstNm;
	}
	public String getUserLastNm() {
		return userLastNm;
	}
	public void setUserLastNm(String userLastNm) {
		this.userLastNm = userLastNm;
	}
	public String getUserEmail() {
		return userEmail;
	}
	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}
	public long getUserPhone() {
		return userPhone;
	}
	public void setUserPhone(long userPhone) {
		this.userPhone = userPhone;
	}
	public boolean isActive() {
		return isActive;
	}
	public void setActive(boolean isActive) {
		this.isActive = isActive;
	}
	@Override
	public String toString() {
		return "Users [userId=" + userId + ", userFirstNm=" + userFirstNm + ", userLastNm=" + userLastNm
				+ ", userEmail=" + userEmail + ", userPhone=" + userPhone + ", isActive=" + isActive + "]";
	}

	


}
