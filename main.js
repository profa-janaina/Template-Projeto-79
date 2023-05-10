menuListArray = ["Pizza Vegetariana",
"Pizza de Frango",
"Pizza Portuguesa",
"Pizza Quatro Queijos",
"Pizza de Calabresa",
"Pizza Extravaganza"];

function addItem(){
var htmldata;
var imgtags='<img id="im1" src="images/pizzaImg.png"/>'  // FALTA ESTA LINHA
var item=document.getElementById("addItem").value;
menuListArray.sort();
htmldata=""
for(var i=0;i<menuListArray.length;i++){
htmldata=htmldata+imgtags+ menuListArray[i]+'<br>'; // corrigir esta linha
}
document.getElementById("displayAddedMenu").innerHTML = htmldata; // corrigir esta linha

}
function getMenu(){
var htmldata="";
menuListArray.sort();
for(var i=0;i<menuListArray.length;i++){
htmldata=htmldata+ menuListArray[i] + '<br>'
}
document.getElementById("displayMenu").innerHTML = htmldata;
}

function addTop(){
var item=document.getElementById("addItem").value;
menuListArray.push(item);
document.getElementById("addItem").value="";
addItem();
}