// Useful / Utility Section Logic & Interactive Features
document.addEventListener("DOMContentLoaded", function () {
  console.log("Useful Utilities System Initialized");
  setupUsefulInteractions();
});

function setupUsefulInteractions() {
  // Example: Add dynamic click actions for useful links or FAQ items
  const usefulLinks = document.querySelectorAll(".useful-link");

  usefulLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      // If it's an internal action or support inquiry
      const actionType = this.getAttribute("data-action");
      if (actionType === "support") {
        e.preventDefault();
        alert("Redirecting to 24/7 VIP Customer Support across Asia...");
      }
    });
  });
}

