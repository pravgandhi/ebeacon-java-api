package ebeacon.Model;

import java.util.Arrays;

public class Subscription {
	long subscriptionId;
	long UserId;
	String[] tags;
	
	public long getSubscriptionId() {
		return subscriptionId;
	}
	public void setSubscriptionId(long subscriptionId) {
		this.subscriptionId = subscriptionId;
	}
	public long getUserId() {
		return UserId;
	}
	public void setUserId(long userId) {
		UserId = userId;
	}
	public String[] getTags() {
		return tags;
	}
	public void setTags(String[] tags) {
		this.tags = tags;
	}
	@Override
	public String toString() {
		return "Subscription [subscriptionId=" + subscriptionId + ", UserId=" + UserId + ", tags="
				+ Arrays.toString(tags) + "]";
	}
	
	

}
