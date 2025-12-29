const form = document.getElementById('investment-form');
const investBtn = document.getElementById('invest-btn');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const amount = document.getElementById('amount').value;
  const address = document.getElementById('address').value;
  const trc20WalletAddress = 'TWHqdigakimBhbUUGfU4zc37frgdPnySce'; // Replace with your TRC20 wallet address

  // Send amount to TRC20 wallet address
  // NOTE: This is a simplified example and doesn't handle actual transactions
  resultDiv.innerText = `Send ${amount} to ${trc20WalletAddress}`;

  // Simulate 24-hour waiting period
  setTimeout(() => {
    const roi = amount * 0.1; // 10% ROI
    resultDiv.innerText = `Investment successful! Your ROI is ${roi} after 24 hours.`;
  }, 86400000); // 24 hours in milliseconds
}););;