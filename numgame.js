var answ;
var tries=5;
function rand(min_value , max_value) {
   var random_number = Math.random() * (max_value-min_value) + min_value;
   return Math.round(random_number);
}
function ans(level) {
	if (level===0) {
		tries=5;
		answ = rand(0,100);
		document.getElementById("text").innerHTML="New Game: Easy";
	} else if (level==1) {
		tries=7;
		answ = rand(0,500);
		document.getElementById("text").innerHTML="New Game: Medium";
	} else if (level==2) {
		tries=10;
		answ=rand(0,1000);
		document.getElementById("text").innerHTML="New Game: Hard";
	}
}
function guess() {
	var guess=document.getElementById("1").value;
	guess=Number(guess);
	if (guess<answ) {
		document.getElementById("text").innerHTML="Wrong: Higher";
	} else if (guess>answ) {
		document.getElementById("text").innerHTML="Wrong: Lower";
	} else if (guess==answ) {
		document.getElementById("text").innerHTML="Correct";
	} else {
		document.getElementById("text").innerHTML="Click a Difficulty";
	}
	tries-=1;
	if (tries<=0) {
		document.getElementById("tries").innerHTML="YOU LOST! the number was "+String(answ);
	} else {
		document.getElementById("tries").innerHTML="You have "+String(tries)+" tries left!";
	}
}