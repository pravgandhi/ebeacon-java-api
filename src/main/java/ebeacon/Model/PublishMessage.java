package ebeacon.Model;

public class PublishMessage {

	private String channel;
	private String channelId;
	private String discussionId;
	private String sentBy;
	
	public String getDiscussionId() {
		return discussionId;
	}
	public void setDiscussionId(String discussionId) {
		this.discussionId = discussionId;
	}
	public String getChannel() {
		return channel;
	}
	public void setChannel(String channel) {
		this.channel = channel;
	}
	public String getChannelId() {
		return channelId;
	}
	public void setChannelId(String channelId) {
		this.channelId = channelId;
	}
	public String getSentBy() {
		return sentBy;
	}
	public void setSentBy(String sentBy) {
		this.sentBy = sentBy;
	}
	
	
	
}
