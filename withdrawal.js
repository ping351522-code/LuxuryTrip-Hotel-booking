// Withdrawal System Logic & Validation
document.addEventListener("DOMContentLoaded", function () {
  console.log("Withdrawal System Initialized");
  setupWithdrawalForm();
});

function setupWithdrawalForm() {
  const withdrawalForm = document.getElementById("withdrawalForm");

  if (withdrawalForm) {
    withdrawalForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const amount = document.getElementById("withdrawAmount").value;
      const method = document.getElementById("withdrawMethod").value;
      const accountInfo = document.getElementById("withdrawAccount").value;

      if (!amount || amount <= 0) {
        alert("Please enter a valid withdrawal amount.");
        return;
      }

      if (!accountInfo) {
        alert("Please enter your account or wallet details.");
        return;
      }

      // Confirm withdrawal request
      const confirmMsg = `Confirm withdrawal request of $${amount} via ${method.toUpperCase()}?`;
      if (confirm(confirmMsg)) {
        alert("Withdrawal request submitted successfully! Pending admin approval.");
        
        // Reset form or redirect
        withdrawalForm.reset();
      }
    });
  }
}

