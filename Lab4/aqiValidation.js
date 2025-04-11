document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const pass = document.getElementById("pass").value;
    const cPass = document.getElementById("cPassword").value;
    const location = document.getElementById("location").value.trim();
    const pCode = document.getElementById("pCode").value.trim();
    const terms = document.getElementById("terms").checked;
  
    const emailRegex = /^[0-9]{2}-[0-9]{5}-[0-9]{1}@student\.aiub\.edu$/;
    
    if (!name || !email || !pass || !cPass || !location || !pCode) {
        alert("Please fill in all required fields.");
        return;
    }
 
    if (!emailRegex.test(email)) {
        alert("Please enter a valid AIUB student email address.");
        return;
    }

    if (pass.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    if (pass !== cPass) {
        alert("Passwords do not match.");
        return;
    }

    if (isNaN(pCode)) {
        alert("Postal Code must be a number.");
        return;
    }

    if (!terms) {
        alert("You must agree to the terms and conditions.");
        return;
    }
    
    alert("Registration successful!");
  });
  