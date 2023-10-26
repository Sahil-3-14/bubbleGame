var timer = 3;
var score = 10;
var hitVal ;

//generating bubbles
function makeBubble() {
  var clutter = "";

  for (var i = 1; i <= 220; i++) {
    var randomNumbers = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${randomNumbers}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}

//timer countdown function
function runTimer(){
    var timerInt = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector('#timerVal').textContent = timer;
        }
        else{
            clearInterval(timerInt);
            document.querySelector("#pbtm").innerHTML = `Game Over`;
        }
    },1000)
}

//generating and updating hit value
function getNewHit(){
    hitVal = Math.floor(Math.random()*10);
    document.querySelector("#hitValue").textContent = hitVal;
}

//function to increse score 
function increaseScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

//Event Bubbling Concept
// jispe click karenge uss element pe event raise hoga and event na milne pe event element ke parent pe listener dhundega aur waha bhi nhi mila to parent ke parent par listener dhundega 
document.querySelector("#pbtm").addEventListener("click",function(details){
    var clickedNum = Number(details.target.textContent);
    if(hitVal == clickedNum){
        increaseScore();
        makeBubble();
        getNewHit();

    }
});


runTimer();
makeBubble();
getNewHit();