package ebeacon.Model;

import java.util.Arrays;

import org.springframework.cloud.gcp.data.datastore.core.mapping.Entity;
import org.springframework.data.annotation.Id;
@Entity(name ="Users")
public class UserChannel {
	@Id
	long registrationId;
	long userId;
	long channel;
	String channelInfo;
	boolean isActive;
	boolean isEnabled;

	public long getRegistrationId() {
		return registrationId;
	}
	public void setRegistrationId(long registrationId) {
		this.registrationId = registrationId;
	}
	public long getUserId() {
		return userId;
	}
	public void setUserId(long userId) {
		this.userId = userId;
	}
	public long getChannel() {
		return channel;
	}
	public void setChannel(long channel) {
		this.channel = channel;
	}
	public String getChannelInfo() {
		return channelInfo;
	}
	public void setChannelInfo(String channelInfo) {
		this.channelInfo = channelInfo;
	}
	public boolean isActive() {
		return isActive;
	}
	public void setActive(boolean isActive) {
		this.isActive = isActive;
	}
	public boolean isEnabled() {
		return isEnabled;
	}
	public void setEnabled(boolean isEnabled) {
		this.isEnabled = isEnabled;
	}
	
	
	@Override
	public String toString() {
		return "UserChannel [registrationId=" + registrationId + ", userId=" + userId + ", channel=" + channel
				+ ", channelInfo=" + channelInfo + ", isActive=" + isActive + ", isEnabled=" + isEnabled + "]";
	}
	
}
