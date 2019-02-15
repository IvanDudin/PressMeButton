function onClick() {

	updateLabel();

}

function updateLabel() {
	
  label.textContent = "You are AWESOME!";
  
}

var label = document.querySelector('p');
var button = document.querySelector('button');
button.addEventListener('click', onClick);