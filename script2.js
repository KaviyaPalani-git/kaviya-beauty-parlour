document
  .getElementById("appointmentForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const service = document.getElementById("service").value;

    const message = `✅ Thank you, ${name}! Your appointment for ${service} on ${date} is confirmed.`;
    document.getElementById("confirmation").textContent = message;

    this.reset();
  });