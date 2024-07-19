package com.example.demo.model;

public class UpdateUser {
	
	private String updateUsername;
	private String updateDepartment;
	private String updateEmail;
	private String updateRole;
	public String getUpdateUsername() {
		return updateUsername;
	}
	public void setUpdateUsername(String updateUsername) {
		this.updateUsername = updateUsername;
	}
	public String getUpdateDepartment() {
		return updateDepartment;
	}
	public void setUpdateDepartment(String updateDepartment) {
		this.updateDepartment = updateDepartment;
	}
	public String getUpdateEmail() {
		return updateEmail;
	}
	public void setUpdateEmail(String updateEmail) {
		this.updateEmail = updateEmail;
	}
	public String getUpdateRole() {
		return updateRole;
	}
	public void setUpdateRole(String updateRole) {
		this.updateRole = updateRole;
	}
	@Override
	public String toString() {
		return "UpdateUser [updateUsername=" + updateUsername + ", updateDepartment=" + updateDepartment
				+ ", updateEmail=" + updateEmail + ", updateRole=" + updateRole + "]";
	}
	

}
