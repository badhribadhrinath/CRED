var domainUrl = "http://localhost:8080/demo_application";
var adminUrl = "http://localhost:8090/admin.html";
var userUrl = "http://localhost:8090/user.html";
var loginUrl = "http://localhost:8090/login.html";
var loginRes;

// import randomName from "./captcha.js";
// import { initCaptcha } from './captcha.mjs';
// Session handling
window.onload = function () {
    //window.location.reload();
    console.log("Session id", localStorage.getItem('sessionId'));
    let isSessionAvilable = localStorage.getItem('sessionId');
    // initCaptcha();
    // if (isSessionAvilable) {
    //     if (isSessionAvilable == "Admin") {
    //         window.location.replace(adminUrl);
    //     }
    //     if (isSessionAvilable == "User") {
    //         window.location.replace(userUrl);
    //     }
    // }
}
// window.onbeforeunload = function() {
//     console.log("Session id", localStorage.getItem('sessionId'));
//     let isSessionAvilable = localStorage.getItem('sessionId');
//     if (isSessionAvilable) {
//         if (isSessionAvilable == "Admin") {
//             window.location.replace(adminUrl);
//         }
//         if (isSessionAvilable == "User") {
//             window.location.replace(userUrl);
//         }
//     }
//     //return "Are you sure you want to leave this page?";
// };

async function handleSubmit(event) {
    console.log("handleSubmit Invoked");
    event.preventDefault();

    // Get form data
    var formData = new FormData(event.target);
    var formDataObject = {};
    formData.forEach(function (value, key) {
        formDataObject[key] = value;
    });
    // Call function to send login data
    await sendData(formDataObject);
}
async function sendData(formDataObject) {
    try {
        const response = await fetch(domainUrl + "/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            // Convert the formDataObject to JSON
            body: JSON.stringify(formDataObject),
        });
        // Check response status
        if (response.ok) {
           // history.pushState(null, null, '');
            const data = await response.json();
            console.log("<---Entered Login Page--->");
            console.log("Result :", data.result); // Log response data
            // alert(data.result);
            // initCaptcha();
            if (data.result == 'Success') {
                //if(data.result =="Success")
                     loginRes="true";
                    //  check(res);
                    //  console.log("Res value:",res);
                    //  if(res==true){

                    
                console.log("Check");
                console.log("res " + data.result)
                console.log("Session id :", localStorage.getItem('sessionId'));
                console.log("Session id", localStorage.getItem('sessionId'));
                // console.log("User console");
                if (data.role == "admin") {
                    localStorage.setItem('sessionId', "Admin");
                    console.log(role);
                    window.location.replace(adminUrl);
                    //  window.location.replace("C:/Users/badhrinarayanan/Desktop/JS_Learning/Bootstrap.html");
                } else if (data.role == "user") {
                    localStorage.setItem('sessionId', "User");
                    console.log(role);
                    window.location.replace(userUrl);
                }
            } else {
                console.log("ERROR");
                console.log(response);
                document.getElementById("errormessage").innerHTML = data.result;
                //   console.error('Failed to login:', response.statusText);
            }
        } 
    } catch (error) {
        console.error('Error:', error);
    }
}
