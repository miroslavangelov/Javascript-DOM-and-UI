function changeBackground() {
	var getInput = document.querySelector("input[type=color]").value;
	var getBody = document.body.style.background = getInput;
	return getBody;
}