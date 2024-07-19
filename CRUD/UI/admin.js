var domainUrl = "http://localhost:8080/demo_application";
var loginUrl = "http://localhost:8090/login.html";

/*Session Handling*/
console.log("Outer Session id", localStorage.getItem('sessionId'));

// window.onload = function () {
 
    console.log("Session id", localStorage.getItem('sessionId'));
    let isSessionAvilable = localStorage.getItem('sessionId');
    if (!isSessionAvilable) {
        window.addEventListener('pageshow', function(event) {
            if (event.persisted) {
                window.location.reload(); // Reloads the page to clear bfcache
            }
            console.log("Session id in event listener ", localStorage.getItem('sessionId'));
        });
        window.location.replace(loginUrl);
        
    }
    else{
        console.log("Session id in else cond", localStorage.getItem('sessionId'));
    }

    // let isSessionAvilable = localStorage.getItem('sessionId');
    // if (isSessionAvilable) {
    //     if (isSessionAvilable == "Admin") {
    //         window.location.replace(adminUrl);
    //     }
    //     if (isSessionAvilable == "User") {
    //         window.location.replace(userUrl);
    //     }
    // }
    console.log("ADMIN JS GETALLUSER FUNCTION");
    getalldata();/*Table data called in initially */
// }
setTimeout(function (){
    console.log("Set time Involked");
},1000)



/*Table data called from Boot */
async function getalldata(formDataObject) {
    const response = await fetch(domainUrl + "/getalluser", { //Url in Controller
        method: "GET", // Method to Display Data

        headers: {
            "Content-Type": "application/json",
        },
        // Convert the formDataObject to JSON
        body: JSON.stringify(formDataObject),
    });
    console.log("Response")
    console.log(response);
    if (response.ok) {

        const data = await response.json();
        console.log(data); // Log re


        /*Table Data */
        const tableBody = document.getElementById('table-body');//Table div id

        // Loop through data array and create table rows

        data.forEach(function (item) {
            const row = document.createElement('tr');
            // Create cells (td) for each column in the row
            const nameCell = document.createElement('td');
          //  nameCell.setAttribute('contenteditable', 'false');
            nameCell.textContent = item.username;
            row.appendChild(nameCell);

            const deptcell = document.createElement('td');
          //  deptcell.setAttribute('contenteditable', 'false');
            deptcell.textContent = item.department;

            row.appendChild(deptcell);

            const emailCell = document.createElement('td');
          //  emailCell.setAttribute('contenteditable', 'false');
            emailCell.textContent = item.emailid;
            row.appendChild(emailCell);

            const rolecell = document.createElement('td');
          //  rolecell.setAttribute('contenteditable', 'false');
            rolecell.textContent = item.role;
            row.appendChild(rolecell);

            // Edit button
            const editCell = document.createElement('td');
            editCell.classList.add("edit_delete")
            const editIcon = document.createElement('i');
            editIcon.classList.add('fa', 'fa-edit');  

            getPagination('#data-table');
            editIcon.onclick = function () {
                alert('Update icon enable');

                const username = nameCell.textContent.trim();
                item.username = username;
                console.log("Username ", username);


                const department = deptcell.textContent.trim();
                item.department = department;

                console.log("Department ", department);

                const emailid = emailCell.textContent.trim();
                item.emailid = emailid;
                console.log("Emailid ", emailid);

                const role = rolecell.textContent.trim();
                item.role = role;
                console.log("Role ", role);

                document.getElementById('updateUsername').value = username;
                document.getElementById('updateEmail').value = emailid;
                document.getElementById('updateDepartment').value = department;
                document.getElementById('updateRole').value = role;

                var modal = document.getElementById("myModal");



                // Get the <span> element that closes the modal
                var span = document.getElementsByClassName("close")[0];

                // When the user clicks the button, open the modal 

                modal.style.display = "block";


                // When the user clicks on <span> (x), close the modal
                span.onclick = function () {
                    modal.style.display = "none";
                    
                }

                // When the user clicks anywhere outside of the modal, close it
                window.onclick = function (event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                    }
                }

                console.log("Username ", username);
            };
            editCell.appendChild(editIcon);
            row.appendChild(editCell);



            // Create delete icon cell
            const deleteCell = document.createElement('td');
            deleteCell.classList.add("edit_delete");
            const deleteIcon = document.createElement('i');
            deleteIcon.classList.add('fa', 'fa-user-times');

            deleteIcon.onclick = function () {
                // Call your Delete function with item.username
                Delete(item.username);
            };

            deleteCell.appendChild(deleteIcon);
            row.appendChild(deleteCell);
            // Append the row to the table body
            tableBody.appendChild(row);
        });
    }
}


async function editRow(formDataObject) {
    console.log("Entered inside ...");
    console.log(JSON.stringify(formDataObject));

    const response = await fetch(domainUrl + "/update", { //Url in Controller
        method: "PUT", // Method to Display Data

        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataObject),
    });
    console.log("Update Response")
    console.log(Request);
    if (response.ok) {
        const data = await response.json();
        console.log(data); // Log re
        data.username
        if (data.result == 'Success') {

            localStorage.setItem('sessionId', "Update-Admin");
            console.log("Session id", localStorage.getItem('sessionId'));
            console.log("Delete-Admin console");
            window.location.reload();
        }
    }
}

async function Delete(username) {
    alert('Delete icon enable ' + JSON.stringify(username));
    const response = await fetch(domainUrl + "/delete/" + username, { //Url in Controller
        method: "POST", // Method to Display Data

        headers: {
            "Content-Type": "application/json",
        },

    });
    console.log("Delete Response")
    console.log(Request);
    if (response.ok) {
        const data = await response.json();
        console.log(data); // Log re

        if (data.result == 'Success') {
            localStorage.setItem('sessionId', "Delete-Admin");
            console.log("Session id", localStorage.getItem('sessionId'));
            console.log("Delete-Admin console");
            window.location.reload();
        }
    }
}




function updateForm(event) {
    event.preventDefault();

    // Get form data
    var formData = new FormData(event.target);
    var formDataObject = {};
    formData.forEach(function (value, key) {
        formDataObject[key] = value;
    });

    console.log("dataaaaa " + JSON.stringify(formDataObject));
    // Call function to send login data
    // await sendData(formDataObject);

    // Example: Validate form fields
    var Uusername = formDataObject.updateUsername;
    var Uemailid = formDataObject.updateEmail;
    var Udepartment = formDataObject.updateDepartment;
    var Urole = formDataObject.updateRole;
    var UisValid = true;

    if (Uusername === "") {
        document.getElementById("UusernameError").innerHTML = "Username is required";
        UisValid = false;
    } else {
        document.getElementById("UusernameError").innerHTML = "";
    }
    // Email Validatiobn
    if (Uemailid === "") {
        document.getElementById("UemailError").innerHTML = "E-Mail is required";
        UisValid = false;
    } else {
        document.getElementById("UemailError").innerHTML = "";
    }
    //Role Validatiobn
    if (Urole === "") {
        document.getElementById("UroleError").innerHTML = "Role is required";
        UisValid = false;
    } else {
        document.getElementById("UroleError").innerHTML = "";
       
    }
    //Department Validatiobn
    if (Udepartment === "") {
        document.getElementById("UdepartmentError").innerHTML = "Department is required";
        UisValid = false;
    } else {
        document.getElementById("UdepartmentError").innerHTML = "";		
    } 
	if(UisValid){
		 updateData(formDataObject);
	}
    return UisValid;

}


async function updateData(formDataObject) {
    try {
        const response = await fetch(domainUrl + "/update", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            // Convert the formDataObject to JSON
            body: JSON.stringify(formDataObject),

        });
        if (response.ok) {
            const data = await response.json();
            console.log(data.result); // Log re

            if (data.result == 'Success') {

                localStorage.setItem('sessionId', "Admin");
                console.log("Session id", localStorage.getItem('sessionId'));
                console.log("Admin console");
                window.location.reload();
            }

            if (data.result == 'fail') {

                localStorage.setItem('sessionId', "Admin");
                console.log("Session id", localStorage.getItem('sessionId'));
                console.log("Admin console");
                document.getElementById("UexistUsernameError").innerHTML = "Username is Already Exist";
            }

        }
    } catch (error) {
        console.error('Error:', error);
    }
}

async function handlSubmit(event) {
    event.preventDefault();
    // Get form data
    var formData = new FormData(event.target);
    var formDataObject = {};
    formData.forEach(function (value, key) {
        formDataObject[key] = value;
    });
    validateForm(formDataObject);
}





async function handledit(event) {
    event.preventDefault();

    // Get form data
    var formData = new FormData(event.target);
    var formDataObject = {};
    formData.forEach(function (value, key) {
        formDataObject[key] = value;
    });
    validateForm(formDataObject);
}
// ===================================================================================
function validateForm(formDataObject) {

    var confirmPassword = formDataObject.confirmPassword;
    var password = formDataObject.password;
    var username = formDataObject.username;
    var emailid = formDataObject.emailid;
    var department = formDataObject.department;
    var role = formDataObject.role;
    var isValid = true;

    // Validate password
    if (password === "") {
        document.getElementById("passwordError").innerHTML = "Password is required";
        isValid = false;
    } else {
        document.getElementById("passwordError").innerHTML = "";
    }

    // Validate confirm password
    if (confirmPassword === "") {
        document.getElementById("confirmPasswordError").innerHTML = "Confirm Password is required";
        isValid = false;
    } else if (confirmPassword !== password) {
        document.getElementById("confirmPasswordError").innerHTML = "Passwords do not match";
        isValid = false;
    } else {
        document.getElementById("confirmPasswordError").innerHTML = "";
    }

    if (username === "") {
        document.getElementById("usernameError").innerHTML = "Username is required";
        isValid = false;
    } else {
        document.getElementById("usernameError").innerHTML = "";
    }
    // Email Validatiobn
    if (emailid === "") {
        document.getElementById("emailError").innerHTML = "E-Mail is required";
        isValid = false;
    } else {
        document.getElementById("emailError").innerHTML = "";
    }
    //Role Validatiobn
    if (role === "") {
        document.getElementById("roleError").innerHTML = "Role is required";
        isValid = false;
    } else {
        document.getElementById("roleError").innerHTML = "";
    }
    //Department Validatiobn
    if (department === "") {
        document.getElementById("departmentError").innerHTML = "Department is required";
        isValid = false;
    } else {
        document.getElementById("departmentError").innerHTML = "";
    }
    if(isValid){
    sendData(formDataObject);
    }
    return isValid;
}

async function sendData(formDataObject) {
    try {

        const response = await fetch(domainUrl + "/admin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            // Convert the formDataObject to JSON
            body: JSON.stringify(formDataObject),
        });
        if (response.ok) {
            const data = await response.json();
            console.log(data.result); // Log re

            if (data.result == 'Success') {

                localStorage.setItem('sessionId', "Admin");
                console.log("Session id", localStorage.getItem('sessionId'));
                console.log("Admin console");
                //window.location.replace("C:/Users/badhrinarayanan/Desktop/JS_Learning/admin.html");
                window.location.reload();
            }

            if (data.result == 'fail') {

                localStorage.setItem('sessionId', "Admin");
                console.log("Session id", localStorage.getItem('sessionId'));
                console.log("Admin console");
                document.getElementById("existUsernameError").innerHTML = "Username is Already Exist";
            }
        }
    } catch (error) {
        console.error('Error:', error);
    }
}