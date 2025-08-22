// SPA Section Switcher
function showSection(sectionId) {
  document.querySelectorAll(".section").forEach((sec) => {
    sec.classList.remove("active");
  });
  document.getElementById(sectionId).classList.add("active");
}

// Load services dynamically
const services = [
  "Haircut & Styling",
  "Facial & Cleanup",
  "Bridal Makeup",
  "Mehndi Design",
  "Manicure & Pedicure"
  "Nail Design"
];

const servicesList = document.getElementById("servicesList");
const serviceDropdown = document.getElementById("service");

services.forEach(service => {
  // Add to list
  const li = document.createElement("li");
  li.textContent = service;
  servicesList.appendChild(li);

  // Add to dropdown
  const option = document.createElement("option");
  option.value = service;
  option.textContent = service;
  serviceDropdown.appendChild(option);
});

// Live preview
document.getElementById("appointmentForm").addEventListener("input", () => {
  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const service = document.getElementById("service").value;

  const preview = name && date && service
    ? `📅 Preview: ${name} booked for ${service} on ${date}`
    : "";

  document.getElementById("previewBox").textContent = preview;
});

// Form submission
document.getElementById("appointmentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const service = document.getElementById("service").value;

  document.getElementById("confirmation").textContent =
    `✅ Thank you, ${name}! Appointment for ${service} on ${date} is confirmed.`;

  this.reset();
  document.getElementById("previewBox").textContent = "";
});
