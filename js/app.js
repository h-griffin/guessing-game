'use strict'; 
//name prompt
var name = prompt('what is your name?');
alert('hello, ' + name + ' welcome to my page.');

var userScore = 0;

//function question
function askQuestion(question, correct){
  var answer = prompt(question);
  if (answer === correct){
    alert('correct');
  } else {
    alert('wrong');
  }
}
 //5 yes or no
askQuestion('Welcome, ' + name + '! is the authors name griffin?', 'yes')
askQuestion('did griffin go to cedar park?', 'yes')
askQuestion('is griffinf a dog sitter?', 'yes')
askQuestion('does griffin voulonteer for acs?', 'yes')
askQuestion('is griffin interested in tech?', 'yes')

//number question 6 with 4 attempts
// var attempt = 4;

//question to ask / correct number answer / number of attempts
function askNumberquestion(question, correctNumber, attempt) {
  var answeredCorrectly = false;

  loopattempt:while(attempt > 0 && answeredCorrectly === false){
    var answer = prompt(question); 
    attempt--;

    checkloop: for (var i = 0; i != 6, i++;){
      if (Number(answer) === correctNumber){
        alert('correct');
        answeredCorrectly = true; 
        userScore++
        break loopattempt;
      }
    }
    alert('incorrect, you have' + (attempts - 1 ) + 'attempts');
    if (answeredCorrectly === false) alert('sorry try again')
  }
}

//question to ask / correct number answer / number of attempts
askNumberquestion(
  'how many movies are on the list?',
  10,
  4
)

//multiple coorect for question 7 with 6 attempts
function askMultipleQuestion(question, correctArray, attempts){
  var answerCorrectly = false;

  attemptsloop: while (attempt > 0 && answerCorrectly === false){
    var answer = prompt(question).toLowerCase();
    attempt--;

    loopcheck: for(var i = 0; i < correctArray.length; i++){
        if (answer === correctArray[i]){
          alert('corect');
          answeredCorrectly = true
          break;
          // attempts = =0;
        }
    }
    alert('incorrect, you have' + (attempts - 1 ) + 'attempts');
  }
}

askMultiplequestion(
  'what are the primary colors?',
  ['red', 'yellow', 'blue',], 
  6 
); 


alert('thanks for playing ' + name + ' your total score is ' + userScore + ' good job!') 

