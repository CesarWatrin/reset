var liste = document.getElementById('liste');
var img_burger = document.getElementById('img_burger');

function affiche() {
	liste.className = 'affiche';
	img_burger.src = 'img/cross.png';
	img_burger.onclick = function() {
		cache();
	}
}

function cache() {
	liste.className = '';
	img_burger.src = 'img/hamburger.png';
	img_burger.onclick = function() {
		affiche();
	}
}
