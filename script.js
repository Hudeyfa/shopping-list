var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


// The following function handles both toggling and deleting

function toggleAndDelete(event) {
	var target = event.target;
	//Toggling the 'done' class when a list item is clicked
	if (target.nodeName === 'LI') {
		event.target.classList.toggle('done');
	}
	// Delete the item when clicked on its corresponding delete button
	else if (target.nodeName === 'BUTTON') {
		target.parentNode.remove();
	}
}

ul.addEventListener('click', toggleAndDelete);



// Adding new item

function createListElement() {
	var li = document.createElement("li");
	ul.insertAdjacentHTML('beforeend', '<div class="form-field"><li>' + input.value + '</li> \
	<button class="delete">Delete</button></div>');
	input.value = "";
}

function inputLength() {
	return input.value.length;
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

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


