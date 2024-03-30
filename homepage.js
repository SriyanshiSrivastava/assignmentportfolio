// Function to show Resume
function showResume() {
    hideAll();
    document.getElementById('resumeFrame').style.display = 'block';
  }
  
  // Function to show Projects
  function showProjects() {
    hideAll();
    document.getElementById('projectsFrame').style.display = 'block';
  }
  
  // Function to show Contact
  function showContact() {
    hideAll();
    document.getElementById('contactFrame').style.display = 'block';
  }
  
  // Function to hide all iframes
  function hideAll() {
    var iframes = document.getElementsByTagName('iframe');
    for (var i = 0; i < iframes.length; i++) {
      iframes[i].style.display = 'none';
    }
  }
  