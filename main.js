var hexDigits = document.getElementById('code');
var button = document.getElementsByTagName('button');
function onRandom() {
	console.log(hexDigits);
	console.log(button);
	let hexNumbers = [
		'0',
		'1',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'A',
		'B',
		'C',
		'D',
		'E',
		'F',
	];
	let length = hexNumbers.length;
	let hexCode = '';
	let buttonCode = '';
	for (let i = 0; i < 6; i++) {
		let randomIndex = Math.floor(Math.random() * length);
		console.log(hexNumbers[randomIndex]);
		hexCode += hexNumbers[randomIndex];
	}
	for (let j = 0; j < 6; j++) {
		let buttonIndex = Math.floor(Math.random() * length);
		console.log(hexNumbers[buttonIndex]);
		buttonCode += hexNumbers[buttonIndex];
	}
	hexDigits.innerHTML = hexCode;
	document.getElementsByTagName('body')[0].style.background = '#' + hexCode;
	console.log(button[0]);

	console.log(document.getElementsByTagName('button')[0].style);

	document.getElementsByTagName('button')[0].style.background =
		'#' + buttonCode;
}
