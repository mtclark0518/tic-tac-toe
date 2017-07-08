// document.addEventListener('DOMContentLoaded', function(){
// console.log('hello');

// var allSpots = document.getElementsByTagName('td');
// var square = document.getElementsByClassName('square');
// // var topLeft = document.getElementById('tl');
// // var topMid = document.getElementById('tm');
// // var topRight = document.getElementById('tr');
// // var midLeft = document.getElementById('ml');
// // var midMid = document.getElementById('mm');
// // var midRight = document.getElementById('mr');
// // var botLeft = document.getElementById('bl');
// // var botMid = document.getElementById('bm');
// // var botRight = document.getElementById('br');
// var lebron = document.querySelectorAll('img.X');
// var total = 0;
// var steph = document.querySelector('div#steph1');
// console.log(steph);
// steph.classList.add('active');


// //var clickCounter - hidden but impacting scoreboard next moves img render
// // for (var i = 0; i < allSpots.length; i++){
// // 	allSpots[i].classList.addClass('');
// // }
// //was there a click on a square
// 	//has the square been clicked already?
// var somebodyMoved = function(){
// 	var lebron = this.nextSibling;
// 	console.log(lebron);
// 	if(total % 2 === 0) {
			
// 		console.log(lebron);	
// 	}
// };


// function addToTotal(){
// 	alert("Sorry. That's as far as I got last night");
// 	total += 1;
// 	console.log(this);
// 	somebodyMoved();
// }
// //add click event listener to the game squares
// var clickCounter = function(square){
// 	square.addEventListener('click', addToTotal);
// };
// clickCounter(topLeft);
// clickCounter(topMid);
// clickCounter(topRight);
// clickCounter(midLeft);
// clickCounter(midMid);
// clickCounter(midRight);
// clickCounter(botLeft);
// clickCounter(botMid);
// clickCounter(botRight);










// 		//if yes do nothing
// 		//else add 1 to the click counter &
// 		//trigger the whoseTurn function

// //is click even or odd
// });








var gameBoard = document.querySelector('table');
//SCORES
	
var total = 0;

var game = {

	addMove : function(){
		total += 1;
		console.log('clickity');
	},
	whoseTurn : function(){
		if(total % 2 === 0) {
			lebron.myTurn = true;
			steph.myTurn = false;
			console.log('lebron');
		}else if(total % 2 === 1) {
			lebron.myTurn = false;
			steph.myTurn = true;
			console.log('steph');
		}
	}
};

var Squares = function(id, index) {
	this.id = id;
	this.index = index;
	this.selected = document.querySelector('#' + id);
	this.selected.addEventListener('click', game.addMove);

};

Squares.prototype = {
	inPlay : false
};

var Player = function(index, team, myTurn, src, myMoves){
	this.index = index;
	this.team = team;
	this.myTurn = myTurn;
	this.src = src;
	this.myMoves = myMoves || [];
	
};

Player.prototype = {

};

var resetButton = document.getElementById('reset');
resetButton.addEventListener('click', newGame);


function newGame(){
	total = 0;
	console.log('a new game is starting');
	var lebron = new Player(0, "X", true, "img/lebron.png");
	var steph = new Player(1, "O", false, "img/steph.png");
	var tl = new Squares('tl', 0);
	var tm = new Squares('tm', 1);
	var tr = new Squares('tr', 2);
	var ml = new Squares('ml', 3);
	var mm = new Squares('mm', 4);
	var mr = new Squares('mr', 5);
	var bl = new Squares('bl', 6);
	var bm = new Squares('bm', 7);
	var br = new Squares('br', 8);
}


newGame();



