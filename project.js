let btn = document.getElementById('btn');

let output = document.getElementById('output');
let quote = [
	'"You do not find the happy life. YOU MAKE IT - Camilla Eyring"',
	'"There are so many beautiful reasons to be HAPPY - Camilla Eyring"',
	'"For every minute you are angry you lose sixty seconds of happiness - Ralpfh Waldo"',
	'"Happiness is not something readymade. It comes from your own actions - Dalai Lama"',
	'"Happiness is the best makeup - Drew Barrymore"',
	'"Be strong and move on. It is time to be happy again - Drew Barrymore"',
	'"Whatever you decide to do, make sure it makes you happy. - Paulo Coelho"',
]

btn.addEventListener('click', function() {
	var randomQuote = quote[Math.floor(Math.random() * quote.length)]
	output.innerHTML = randomQuote;
})

var item = [];
for(i=0; i<10; i++)
item.push()

//button “Previous” and a button “Next”

var slider = document.querySelector('getPrevious')
var i = 0;

function getPrevious(){
	if(i <= 0 ) i = output.length;
	i--;
	return setOutput();
}

function setOutput(){
	return output.setAttribute('getPrevious', getPrevious);
}

number = document.getElementById("btn2").innerHTML;
console.log
btn2

// A button that gives the number of words in each quote

function btn3(){
	var str ="hello";
	var n = quote.length;
	document.getElementById("quote") = n;
}


















