var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.getElementsByTagName("li");

function inputLength() {
	return input.value.length;
}

function listLength(){
	return listItems.length;
}

function removeParent(evt){
	evt.target.parentNode.remove();
}

function deleteButton(){
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete Item"));
	listItems[i].appendChild(btn);
	btn.onclick = removeParent;
}

for(i = 0; i < listItems.length; i++){
	deleteButton();
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	deleteButton();
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

ul.onclick = function(event){
	var target = event.target;
	target.classList.toggle("done");
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
