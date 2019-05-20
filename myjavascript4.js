var chess = [ //шахматная доска
	[0,0,0,0,0,0,0,0,],
	[0,0,0,0,0,0,0,0,],
	[0,0,0,0,0,0,0,0,],
	[0,0,0,0,0,0,0,0,],
	[0,0,0,0,0,0,0,0,],
	[0,0,0,0,0,0,0,0,],
	[0,0,0,0,0,0,0,0,],
	[0,0,0,0,0,0,0,0,],
]

function draw() { //функция для отрисовки шахматной доски
	var out = ''; //строковая переменная для присвояния созданным блокам класс и координаты, как аргументы
	var m = 0; //счётчик
	for (var i = 0; i < chess.length; i++) {
		var arr = chess[i];
		for (var k = 0; k < arr.length; k++) {
			if (m%2 == 0) {
				out += `<div class="block" data-x="${k}" data-y="${i}"></div>`;
			}
			else {
				out += `<div class="block blockBlack" data-x="${k}" data-y="${i}"></div>`;
			}
			m++;
		}
		m++;
	}
	document.querySelector('.test').innerHTML = out;
	document.querySelectorAll('.block').forEach(function (element) {
		element.onclick = move;
	});
}

draw();

function move() { //функция для показа возможных ходов
	document.querySelectorAll('.block').forEach(function(element){ //удаление закраски блоков предыдущего хода, при новом ходе
		element.classList.remove('moveBlock');
		element.classList.remove('activeBlock');
	});
	var x = this.dataset.x; //координата x выбранного блока
	var y = this.dataset.y; //координата y выбранного блока
	this.classList.add('activeBlock');
	if (+x+2 < 8 && +y+1 < 8) {
		document.querySelector(`.block[data-x="${+x+2}"][data-y="${+y+1}"]`).classList.add('moveBlock');

	}
	if (+x+2 < 8 && +y-1 >= 0) {
		document.querySelector(`.block[data-x="${+x+2}"][data-y="${+y-1}"]`).classList.add('moveBlock');
		
	}
	if (+x-2 >= 0 && +y+1 < 8) {
		document.querySelector(`.block[data-x="${+x-2}"][data-y="${+y+1}"]`).classList.add('moveBlock');

	}
	if (+x-2 >= 0 && +y-1 >= 0) {
		document.querySelector(`.block[data-x="${+x-2}"][data-y="${+y-1}"]`).classList.add('moveBlock');
		
	}
	if (+x+1 < 8 && +y+2 < 8) {
		document.querySelector(`.block[data-x="${+x+1}"][data-y="${+y+2}"]`).classList.add('moveBlock');

	}
	if (+x+1 < 8 && +y-2 >= 0) {
		document.querySelector(`.block[data-x="${+x+1}"][data-y="${+y-2}"]`).classList.add('moveBlock');
		
	}
	if (+x-1 >= 0 && +y+2 < 8) {
		document.querySelector(`.block[data-x="${+x-1}"][data-y="${+y+2}"]`).classList.add('moveBlock');

	}
	if (+x-1 >= 0 && +y-2 >= 0) {
		document.querySelector(`.block[data-x="${+x-1}"][data-y="${+y-2}"]`).classList.add('moveBlock');
		
	}
}