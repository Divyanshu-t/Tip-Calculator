document.getElementById('calculateBtn').addEventListener('click', function () {
    // Get input values
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);

    // Validate input
    if (isNaN(billAmount) || isNaN(tipPercentage) || billAmount <= 0 || tipPercentage <= 0) {
        alert('Please enter valid positive numbers for both fields.');
        return;
    }

    // Calculate tip and total
    const tipAmount = (billAmount * tipPercentage) / 100;
    const totalAmount = billAmount + tipAmount;

    // Update the result
    document.getElementById('tipAmount').innerText = `Tip Amount: ₹${tipAmount.toFixed(2)}`;
    document.getElementById('totalAmount').innerText = `Total Amount: ₹${totalAmount.toFixed(2)}`;
});
