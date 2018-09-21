function abrirmenu() {
	var x = document.getElementById('menu');

	if (x.className === 'menu') {
		x.className += ' menujs';
		document.getElementById('iconemenu').innerHTML = '&Cross;';
	}
	
	else {
		x.className = 'menu'
		document.getElementById('iconemenu').innerHTML = '&#9776;';
	}
}