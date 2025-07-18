// Smooth Scroll (optional if you want smooth clicks to anchors)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Appointment Form Confirmation Popup
const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // You can add backend integration here (Firebase, EmailJS, etc.)

    alert("🎉 Appointment Confirmed!\nThank you for booking with Glow & Grace ✨");

    // Optional: Reset form fields
    form.reset();
  });
}