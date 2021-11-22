
var buttonEl = document.querySelector("#start-quiz"); 
var mainBodyEl = document.querySelector("#body"); 
var timeLeft = 75;
var timeInterval = 0
var initialsEl = document.createElement ("label")
var timerEl = document.querySelector("#timer")
var titleEl = document.querySelector("#title");
var textEl = document.querySelector("#text");
var inputEl = document.createElement("input")



// Q1 VARIABLES
var q1 = "Commonly used data typed DO NOT inlcude:"
var q1Answers = ["strings", "booleans", "alert", "numbers"]
var q1ValidA = "alert"

// Q2 VARIABLES
var q2 = "The condition in an if/else statement is enclosed within ________________."
var q2Answers = ["quotes", "curly-brackets", "parentheses", "square brackets"]
var q2ValidA = "curly-brackets"

// Q3 VARIABLES
var q3 = "Arrays in JavaScript can be used to store _____________."
var q3Answers = ["numbers and strings", "other arrays", "boolean", "all of the above"]
var q3ValidA = "all of the above"

// Q4 VARIABLES
var q4 = "String values must be enclosed within _____ when being assigned to variables."
var q4Answers = ["commas", "curly-brackets", "quotations", "parentheses"]
var q4ValidA = "quotations"

// Q5 VARIABLES
var q5 = "A very useful tool used during development and debugging for printing content to the debugger is:"
var q5Answers = ["javaScript", "terminal/ bash", "tor loops", "console log"]
var q5ValidA = "console log"

// QUESTION 1 INDEX
var index=1
var currentQ=q1
var currentList=q1Answers
var currentA=q1ValidA

// ANSWER CHECKER
setTimeout(timeout, 5000)
function timeout () {
}


var checkAnswer = function (event) {
var replyEl = document.createElement ("div")
    if (event.target.innerHTML===currentA) {
replyEl.innerHTML = "Correct!"
}
else {
    replyEl.innerHTML = "Wrong!"
    timeLeft-=10
}
var footerEl = document.querySelector ("#card-footer")
footerEl.innerHTML = ""
footerEl.appendChild(replyEl)
index++
if (index===2) {
    currentQ=q2
    currentList=q2Answers
    currentA=q2ValidA
    presentQuestion()
}
else if (index===3) {
    currentQ=q3
    currentList=q3Answers
    currentA=q3ValidA
    presentQuestion()
}
else if (index===4) {
    currentQ=q4
    currentList=q4Answers
    currentA=q4ValidA
    presentQuestion()
}
    else if (index===5) {
        currentQ=q5
        currentList=q5Answers
        currentA=q5ValidA
        presentQuestion()
    }
    else {
endQuiz ()
    }
}

// QUESTION CHANGE FUNCTIONS
var presentQuestion = function() {
titleEl.innerHTML = currentQ;
var a1El = document.createElement ("ol");
textEl.innerHTML = "";
for (var i=0; i<currentList.length; i++){
 var answerLiEl = document.createElement ("li")  
 answerLiEl.innerHTML = currentList[i] 
 answerLiEl.addEventListener("click", checkAnswer);
a1El.appendChild(answerLiEl)
}
textEl.appendChild(a1El);
buttonEl.setAttribute("style", "display:none")
}
 
// start quiz function
var startQuiz = function () {
    countdown();
    presentQuestion();
}

buttonEl.addEventListener("click", startQuiz);


// start timer 
function countdown() {

    timeInterval = setInterval(function () {
      if (timeLeft > 0) {
        timerEl.textContent = ' Time Left:' + timeLeft;
        timeLeft--;
      } else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
      }
    }, 1000);
  }
  
var submitScore = function () {
    
    titleEl.innerHTML = "";
    var a1El = document.createElement ("ol");
   console.log(localStorage.getItem("Highscores2"))
    textEl.innerHTML = "Highscores";
    var oldHighScores = localStorage.getItem("Highscores2") ? JSON.parse(localStorage.getItem("Highscores2")) : []
    oldHighScores.push(inputEl.value + ' - ' + timeLeft)
    localStorage.setItem("Highscores2", JSON.stringify(oldHighScores))
    for (var i=0; i<oldHighScores.length; i++){
     var answerLiEl = document.createElement ("li")  
     answerLiEl.innerHTML = oldHighScores[i] 
    a1El.appendChild(answerLiEl)
    }
    textEl.appendChild(a1El);
    buttonEl.setAttribute("style", "display:none")
timerEl.textContent = ''

var goBackEl = document.createElement("button")
goBackEl.innerHTML = "Go Back"
goBackEl.addEventListener("click", presentQuestion);
textEl.appendChild(goBackEl)


function clearHighScores()  {
    localStorage.setItem("Highscores2", JSON.stringify([]))
    textEl.innerHTML = ""
}
var clearEl = document.createElement("button")
clearEl.innerHTML = "Clear Highscores"
clearEl.addEventListener("click", clearHighScores);
textEl.appendChild(clearEl)


}

// save initials & end
function endQuiz(){
    clearInterval(timeInterval);
var titleEl = document.querySelector("#title");
var textEl = document.querySelector("#text");
titleEl.innerHTML = "All done!";
textEl.innerHTML = ""
var endEl = document.createElement ("p");
endEl.innerHTML = "Your final score is "+timeLeft+"."
textEl.appendChild(endEl);
initialsEl.innerHTML = "Enter initials:"
textEl.appendChild(initialsEl)

inputEl.setAttribute("type", "text") 
textEl.appendChild(inputEl)
var submitEl = document.createElement("button")
submitEl.innerHTML = "Submit" 
submitEl.addEventListener("click", submitScore)
textEl.appendChild(submitEl)
}

