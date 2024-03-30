function toggleProject(projectId) {
  var project = document.getElementById(projectId);
  var projectDetails = project.querySelector('.project-details');

  if (projectDetails.style.display === 'none') {
    projectDetails.style.display = 'block';
  } else {
    projectDetails.style.display = 'none';
  }
}
