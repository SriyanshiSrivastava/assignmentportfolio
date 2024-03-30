function validateForm() {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
  
    // Check if First Name is empty
    if (fname.trim() === '') {
      alert('Please enter your First Name');
      return false;
    }
  
    // Check if Last Name is empty
    if (lname.trim() === '') {
      alert('Please enter your Last Name');
      return false;
    }
  
    // Check if Email is empty
    if (email.trim() === '') {
      alert('Please enter your Email');
      return false;
    }
  
    // Check if Email is valid
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid Email address');
      return false;
    }
  
    return true;
  }
  