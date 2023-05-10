menuListArray = ["Pizza Vegetariana",
                 //adicionar mais itens
                ];

function addItem(){
var htmldata;
var imgtags='<img id="im1" src="images/pizzaImg.png"/>'  
var item=document.getElementById("addItem").value;
  
//completar o código
  
document.getElementById("displayAddedMenu").innerHTML = htmldata;
}

function getMenu(){
var htmldata="";
  
//completar o código
  
document.getElementById("displayMenu").innerHTML = htmldata;
}

function addTop(){
//completar o código
  
document.getElementById("addItem").value="";
addItem();
}
