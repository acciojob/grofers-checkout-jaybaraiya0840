// Function to calculate and display the total price
const getTotalPrice = () => {
    // Get all price elements (elements with the class "price")
    const prices = document.querySelectorAll('.price');
    
    // Initialize total price to 0
    let totalPrice = 0;

    // Loop through each price element and add its value to the total
    prices.forEach(price => {
        totalPrice += parseFloat(price.textContent); // Convert text content to float
    });

    // Get the table by ID
    const table = document.getElementById('grocery-table');
    
    // Create a new row for the total price
    const totalRow = document.createElement('tr');

    // Create a new cell for the total price and set the colspan
    const totalCell = document.createElement('td');
    totalCell.colSpan = 2;  // Make the cell span across both columns (Item and Price)
    totalCell.textContent = `Total Price: Rs ${totalPrice.toFixed(2)}`;  // Format the total price
    
    // Append the total cell to the total row
    totalRow.appendChild(totalCell);
    
    // Append the total row to the table
    table.appendChild(totalRow);
};

// Call the function to calculate and display the total price when the page loads
getTotalPrice();
