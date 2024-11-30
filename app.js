document.getElementById("btnTask").addEventListener("click",addTask);
let orderList = document.getElementById("orderList");
let DoList = document.getElementById("DoList");

let listArray = [];


function addTask(){
    let inputText = document.getElementById("inputText").value;

    listArray.push( `<li class="list-group-item">
        <input class="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox">
        <label class="form-check-label" for="thirdCheckbox">${inputText}</label>
      </li>`);
    
    orderList.innerHTML+=listArray[listArray.length-1];

  document.getElementById("inputText").value="";  
  
  document.getElementById("thirdCheckbox").addEventListener("change",function () {
    if(this.checked==true){
        console.log("cheked");
        
        
    }else if(this.checked==false){
        console.log("uncked");
        
    }
  })


}




