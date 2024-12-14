const toggleMenu = () => {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
};
function toggleDetails(button) {
  // Find the corresponding project details by traversing the DOM from the button
  var details = button
    .closest(".details-container")
    .querySelector(".project-details");

  // Toggle the visibility of the project details
  if (details.style.display === "none") {
    details.style.display = "block";
  } else {
    details.style.display = "none";
  }
}
