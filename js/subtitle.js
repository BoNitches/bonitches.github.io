// script to generate random greetings

function changeSub(num) {
  document.getElementById("subtitle").innerText = say[num];
}


var say = [];
say[0] = "48 hours with justin bieber or unlimited hours of free games: you choose";
say[1] = "ok but where do you actually store 1000 bottles of baby oil";
say[2] = "diddy rhymes with skibidi";
say[3] = "his music lk fire tho"
// pick a random greeting
var howmany = say.length;
var bRand = 0;
bRand = Math.random();
bRand = Math.floor(bRand * howmany);
sayWhat = say[bRand];
document.getElementById("subtitle").innerText = sayWhat;
