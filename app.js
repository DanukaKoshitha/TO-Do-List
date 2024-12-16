document.getElementById("btnTask").addEventListener("click", addTask);
let orderList = document.getElementById("orderList");
let doList = document.getElementById("DoList");

let listArray = [];

function addTask() {
  let inputText = document.getElementById("inputText").value;

  if (inputText.trim() === "") {
    alert("Please enter a task!");
    return;
  }

  let listItemHTML = `<li class="list-group-item">
        <input class="form-check-input me-1" type="checkbox" value="">
        <label class="form-check-label">${inputText}</label>
    </li>`;

  listArray.push(listItemHTML);

  orderList.innerHTML += listArray[listArray.length - 1];

  document.getElementById("inputText").value = "";

  // Re-bind event listeners to all checkboxes in the order list
  let checkboxes = orderList.querySelectorAll("input[type='checkbox']");
  checkboxes.forEach((checkbox, index) => {
    checkbox.onchange = function () {
      if (this.checked) {
        // Move the corresponding list item to the DoList
        let listItem = this.parentElement;
        doList.appendChild(listItem);
        listArray.splice(index, 1); // Remove from listArray
      } else {
        // Move it back to the OrderList
        let listItem = this.parentElement;
        orderList.appendChild(listItem);
        listArray.push(listItem.outerHTML); // Re-add to listArray
      }
    };
  });
}
