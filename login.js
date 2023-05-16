// var loader = document.querySelector(".loader")


// window.addEventListener("load", vanish);

// function vanish(){
//     loader.classList.add("disappear");
// }

// var button1 = document.querySelector("button1")

// window.addEventListener("load",loadhome);

// function loadhome(){
//     button1.classList.add("log");
// }

function loginUser() {
  const adminEmail = "adminara123@gmail.com";
  const adminPassword = "canteenexpress";
  var username = document.getElementById('logemail').value;
  var password = document.getElementById('logpass').value;
  // Check if username and password are correct
  if (username === adminEmail && password === adminPassword) {
    // If login details are correct, load index.html
    // window.location.href = "file:///D:/ARYAN/MPminiproject/admin.html";
    
  } else {
    // If login details are incorrect, display error message
    alert("Incorrect login details. Please try again.");
  }
}

function ValidateEmail(){
    var email=document.getElementById("email").value;
    var mailFormat= /^[a-zA-Z0-9._%+-]+@somaiya\.edu$/;
    if(email.match(mailFormat))
    {
    alert("Valid email address!");
    return true;
    }
    else{
    alert("Invalid Email");
    return false;
    }
    }
function ValidatePassword(){
    var password=document.getElementById("password");
    if(password="")
    {
    alert("Please fill in a password");
    return false;
    }
    if(password.length<8)
    {
    alert("password should have more than 8 chars");
    return false;
    }
    }