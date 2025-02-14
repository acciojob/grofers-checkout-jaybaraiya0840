// Create the "Get Total Price" button dynamically
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

// Function to calculate and display the total price
const getSum = () => {
    // Get all price elements (elements with the class "price")
    const prices = document.querySelectorAll(".price");
    
    // Initialize total price to 0
    let totalPrice = 0;

    // Loop through each price element and add its value to the total
    prices.forEach(price => {
        totalPrice += parseInt(price.textContent); // Use parseInt to get integer values
    });

    // Get the table element
    const table = document.querySelector("table");

    // Create a new row for the total price
    const totalRow = document.createElement("tr");

    // Create a new cell for the total price
    const totalCell = document.createElement("td");

    // Set the text content with the total price
    totalCell.textContent = `Total Price: Rs ${totalPrice}`;

    // Optional: Assign an ID to the total cell if needed
    totalCell.id = "ans";

    // Add the total cell to the total row
    totalRow.appendChild(totalCell);

    // Append the total row to the table
    table.appendChild(totalRow);
};

// Add event listener to the button
getSumBtn.addEventListener("click", getSum);
