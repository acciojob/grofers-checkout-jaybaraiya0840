// Create the "Get Total Price" button dynamically
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  const prices = document.querySelectorAll('.price');
  
  let totalPrice = 0;

  prices.forEach(price => {
    totalPrice += parseFloat(price.textContent); // Convert text content to float
  });

  const table = document.getElementById('grocery-table');
  
  const totalRow = document.createElement('tr'); 

  const totalCell = document.createElement('td');
  totalCell.colSpan = 2;  
  totalCell.textContent = `Total Price: Rs ${totalPrice.toFixed(2)}`;
  
  totalRow.appendChild(totalCell);
  
  table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);
