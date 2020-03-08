'use strict'; 

var name = prompt('what is your name?');
alert('hello, ' + name + ' welcome to my page.');
console.log(name);

var userScore = 0;

//new way to question
function askQuestion(question, correct){
  var answer = prompt(question);
  if (answer === correct){
    alert('correct');
  } else {
    alert('wrong');
  }
}

askQuestion('Welcome, ' + name + '! is the authors name griffin?', 'yes')
askQuestion('did griffin go to cedar park?', 'yes')
askQuestion('is griffinf a dog sitter?', 'yes')
askQuestion('does griffin voulonteer for acs?', 'yes')
askQuestion('is griffin interested in tech?', 'yes')



function askNumberquestion(question, correctNumber, attempt) {
  var answeredCorrectly = false;
  loopattempt:while(attempt > 0 && answeredCorrectly === false){
    var answer = prompt(question); 
    attempt--;
    for (var i = 0; i != 6, i++;){
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


askNumberquestion(
  'how many movies are on the list?',
  10,
  4
)



function askMultipleQuestion(question, correctArray, attempts){
  var answerCorrectly = false;
  while (attempt > 0 && answerCorrectly === false){
    var answer = prompt(question).toLowerCase();
    attempt--;

    for(var i = 0; i < correctArray.length; i++){
        if (answer === correctArray[i]){
          alert('corect');
          answeredCorrectly = true
          break;
          // attempts = =0;
        }
    }
    alert('incorrect, you have' + (attempts - 1 ) + 'attempts');
    if (answercorrectly == false) alert('sorry try again.');
  }
}

askMultiplequestion(
  'what are the primary colors?',
  ['red', 'yellow', 'blue',], 
  6 
); 


alert('thanks for playing ' + name + ' your total score is ' + userScore + ' good job!') 

