// Get the "Get Total Price" button
const getTotalPriceBtn = document.getElementById("getTotalPriceBtn");

// Function to calculate and display the total price
const getSum = () => {
  // Get all price elements
  const prices = document.querySelectorAll('.price');
  
  // Initialize total price to 0
  let totalPrice = 0;

  // Loop through each price element and add its value to the total
  prices.forEach(price => {
    totalPrice += parseFloat(price.textContent); // Convert text content to float
  });

  // Create a new row to display the total
  const table = document.getElementById('grocery-table');
  const totalRow = document.createElement('tr'); // Create a new row

  // Create a single cell for the total price
  const totalCell = document.createElement('td');
  totalCell.colSpan = 2; // Make the cell span across both columns (item and price)
  totalCell.textContent = `Total Price: Rs ${totalPrice.toFixed(2)}`; // Display the total price
  
  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
};

getTotalPriceBtn.addEventListener("click", getSum);
