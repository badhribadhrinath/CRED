
/*adminFunctions.js*/

/*Hide Method While Add User Operation */
function hide() {
    var form = document.getElementById("registrationForm");
    form.style.display = "block";
}

function hideExport() {
    var form = document.getElementById("exp");
    form.style.display = "block";
}

/*Refresh Method */
function refresh() {
window.location.reload();
}

/*Reset Method */
function clearInputField() {

    // Username Validation
        document.getElementById("usernameError").innerHTML = "";

    // Password Validation
        document.getElementById("passwordError").innerHTML = "";

    // confirmPassword Validation
        document.getElementById("confirmPasswordError").innerHTML = "";

    // Email Validation
        document.getElementById("emailError").innerHTML = "";
    
    //Role Validation
        document.getElementById("roleError").innerHTML = "";

    //Department Validation
        document.getElementById("departmentError").innerHTML = "";		
}

/*Log Out Method */
function logoff() {
    var loginUrl = "http://localhost:8090/login.html";
    localStorage.removeItem('sessionId');
    localStorage.clear();
    sessionStorage.clear();
    preventBack();
    window.location.href = loginUrl;
}

/*Function to Prevent back button after logout*/
function preventBack() {
window.history.forward();
//setTimeout("preventBack()", 0);
window.onunload = function() {
null
};
}