// Create the "Get Total Price" button dynamically
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

// Function to calculate and display the total price
const getSum = () => {
  // Get all price elements (elements with the class "price")
  const prices = document.querySelectorAll('.price');
  
  // Initialize total price to 0
  let totalPrice = 0;

  // Loop through each price element and add its value to the total
  prices.forEach(price => {
    totalPrice += parseFloat(price.textContent); // Convert text content to float
  });

  // Get the table by ID (make sure the table has id="grocery-table")
  const table = document.getElementById('grocery-table');
  
  // Create a new row for the total price
  const totalRow = document.createElement('tr'); 

  // Create a new cell for the total price and set the colspan
  const totalCell = document.createElement('td');
  totalCell.colSpan = 2;  
  totalCell.textContent = `Total Price: Rs ${totalPrice.toFixed(2)}`;
  
  totalRow.appendChild(totalCell);
  
  table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);
