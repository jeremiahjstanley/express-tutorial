
const changeText = (event) => {
	event.preventDefault();
	document.querySelector('.paragraph').innerText = 'That button, you clicked it, good for you.';
	console.log('Look at you, looking the console, you\'re such an engineer')
}

document.querySelector('.button').addEventListener('click', changeText);

