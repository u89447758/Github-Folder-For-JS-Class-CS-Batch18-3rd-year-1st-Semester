document.addEventListener('DOMContentLoaded', () => {
    const totalAmountInput = document.getElementById('totalAmount');
    const discountButtons = document.querySelectorAll('.discount-btn');
    const amountDueSpan = document.getElementById('amountDue');
    const calculateButton = document.getElementById('calculateBtn');
    const clearButton = document.getElementById('clearBtn');
  
    let discountPercentage = 0;
  
    discountButtons.forEach(button => {
      button.addEventListener('click', () => {
        discountPercentage = parseInt(button.dataset.discount);
        // You might want to visually indicate the selected button here
      });
    });
  
    calculateButton.addEventListener('click', () => {
      const totalAmount = parseFloat(totalAmountInput.value) || 0; // Default to 0 if input is invalid
      const discountAmount = (totalAmount * discountPercentage) / 100;
      const amountDue = totalAmount - discountAmount;
      amountDueSpan.textContent = amountDue.toFixed(2); // Display with 2 decimal places
    });
  
    clearButton.addEventListener('click', () => {
      totalAmountInput.value = '';
      discountPercentage = 0;
      amountDueSpan.textContent = '0';
    });
  });