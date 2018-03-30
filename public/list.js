let listitems = ['Grenache', 'Trousseau', 'Carignane'];

let form = document.getElementById('add');
form.addEventListener('submit', addListItem);

window.addEventListener('load', displayWine);

function displayWine() {
	for (let i = 0; i < listitems.length; i++) {
		let node = document.createElement("LI");
		let textnode = document.createTextNode(listitems[i]);
		node.appendChild(textnode);
		document.getElementById('wine').appendChild(node);
	}
}


function addListItem(evt) {
	evt.preventDefault();
	let item = evt.target[0].value;
	listitems.push(item);
	
	let node = document.createElement("LI");
	let textnode = document.createTextNode(item);
	
	node.appendChild(textnode);
	document.getElementById('wine').appendChild(node);
	evt.target[0].value = '';
}