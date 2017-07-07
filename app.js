console.log('hello');

var allSpots = document.getElementsByTagName('td');
var square = document.getElementsByClassName('square');
var topLeft = document.getElementById('tl');
var topMid = document.getElementById('tm');
var topRight = document.getElementById('tr');
var midLeft = document.getElementById('ml');
var midMid = document.getElementById('mm');
var midRight = document.getElementById('mr');
var botLeft = document.getElementById('bl');
var botMid = document.getElementById('bm');
var botRight = document.getElementById('br');
//var lebron = document.querySelectorAll('img.X');
var total = 0;

//var clickCounter - hidden but impacting scoreboard next moves img render
// for (var i = 0; i < allSpots.length; i++){
// 	allSpots[i].classList.addClass('');
// }
//was there a click on a square
	//has the square been clicked already?
var somebodyMoved = function(){
	var lebron = this.nextSibling;
	console.log(lebron);
	if(total % 2 === 0) {
			
		console.log(lebron);	
	}
};


function addToTotal(){
	alert("Sorry. That's as far as I got last night");
	total += 1;
	console.log(this);
	somebodyMoved();
}
//add click event listener to the game squares
var clickCounter = function(square){
	square.addEventListener('click', addToTotal);
};
clickCounter(topLeft);
clickCounter(topMid);
clickCounter(topRight);
clickCounter(midLeft);
clickCounter(midMid);
clickCounter(midRight);
clickCounter(botLeft);
clickCounter(botMid);
clickCounter(botRight);

console.log(allSpots);









		//if yes do nothing
		//else add 1 to the click counter &
		//trigger the whoseTurn function

//is click even or odd
