// Logout Handler Logic
document.addEventListener("DOMContentLoaded", function () {
  setupLogoutSystem();
});

function setupLogoutSystem() {
  // Create Modal HTML dynamically if not present in index.html
  if (!document.getElementById("logoutModalOverlay")) {
    const modalHTML = `
      <div class="logout-modal-overlay" id="logoutModalOverlay">
        <div class="logout-modal-box">
          <h3>Confirm Logout</h3>
          <p>Are you sure you want to log out from your account?</p>
          <div class="logout-modal-actions">
            <button class="modal-btn btn-cancel-logout" id="cancelLogoutBtn">Cancel</button>
            <button class="modal-btn btn-confirm-logout" id="confirmLogoutBtn">Log Out</button>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML("beforeend", modalHTML);
  }

  const logoutBtn = document.getElementById("logoutBtn");
  const modalOverlay = document.getElementById("logoutModalOverlay");
  const cancelBtn = document.getElementById("cancelLogoutBtn");
  const confirmBtn = document.getElementById("confirmLogoutBtn");

  if (logoutBtn) {
    logoutBtn.addEventListener("click", function (e) {
      e.preventDefault();
      modalOverlay.classList.add("active");
    });
  }

  if (cancelBtn) {
    cancelBtn.addEventListener("click", function () {
      modalOverlay.classList.remove("active");
    });
  }

  if (confirmBtn) {
    confirmBtn.addEventListener("click", function () {
      // Clear user session or storage
      localStorage.removeItem("currentUser");
      localStorage.removeItem("isLoggedIn");
      
      // Redirect to login or home page
      window.location.href = "index.html";
    });
  }

  // Close modal when clicking outside box
  if (modalOverlay) {
    modalOverlay.addEventListener("click", function (e) {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove("active");
      }
    });
  }
}

