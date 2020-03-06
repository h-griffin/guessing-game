'use strict'; 

var name = prompt('what is your name?');
alert('hello, ' + name + ' welcome to my page.');
console.log(name);
var userScore = 0;
// var griffin = prompt('is my name griffin?');
// // console.log(griffin);
// var griffin = griffin.toUpperCase();
// // console.log(tree);
// // .tolowercase(tree);
// // console.log(tree);
// if (griffin == 'yes'){
//     alert('yes, griffins name is griffin');
// } else if (griffin == 'no') {
//     alert('no, griffins name is griffin');

// // } else {
// //      griffin= prompt('please answer the question');
// }
// var griffin = prompt('Welcome, ' + name + '! is the authors name griffin?');
// console.log(griffin);
// var griffin = griffin.toLowerCase();
// console.log(griffin);
// while ( griffin !== "yes" && griffin !== "no" ) {
//   griffin = prompt('yes or no');
// }
//   if (griffin === 'yes') {
//   alert('correct!');
//   userScore++;
// } else if (griffin === 'no') {
//   alert('incorrect!');
// }
// console.log(griffin);

// var cpc = prompt('did griffin go to cedar park?');
// // console.log(dog);
// var cpc = cpc.toUpperCase();
// // console.log(dog);
// if (cpc == 'yes'){
//     alert('yes, griffin went to cedar park');
// } else if (cpc == 'no'){
//     alert('no, griffin went to cedar park');
// // } else {
// //     prompt('please answer the question');
// }
// var cpc = prompt('did griffin go to cedar park?');
// console.log(cpc);
// var cpc = cpc.toLowerCase();
// console.log(cpc);
// while ( cpc !== "yes" && cpc !== "no" ) {
//   cpc = prompt('yes or no');
// }
//   if (cpc === 'yes') {
//   alert('correct!');
//   userScore++;
// } else if (cpc === 'no') {
//   alert('incorrect!');
// }
// console.log(cpc);

// var job = prompt('is griffin a dogsitter');
// // console.log(sport);
// var job = job.toUpperCase();
// // console.log(sport);
// if (job == 'yes'){
//     alert('yes, griffin is a dogsitter');
// }else if (job == 'no'){
//     alert('no, griffin is a dogsitter');
// // } else {
// //     prompt('please answer the question');
// }
// var job = prompt('is griffin a dogsitter?');
// console.log(job);
// var job = job.toLowerCase();
// console.log(job);
// while ( job !== "yes" && job !== "no" ) {
//   job = prompt('yes or a no');
// }
//   if (job === 'yes') {
//   alert('correct!');
//   userScore++;
// } else if (job === 'no') {
//   alert('incorrect!')
// }
// console.log(job);

// var acs = prompt('does griffin voulenteer for acs?');
// // console.log(sun);
// var acs = acs.toUpperCase
// // console.log(sun);
// if (acs == 'yes'){
//     alert('yes, griffin voulenteers for acs');
// } else if (acs == 'no'){
//     alert('no, griffin voulenteers for acs');
// // } else {
// //     prompt('please answer the question');
// }
// var acs = prompt('does griffin voulenteer for acs?');
// console.log(acs);
// var acs = acs.toLowerCase();
// console.log(acs);
// while ( acs !== "yes" && acs !== "no" ) {
//   acs = prompt('yes or no');
// }
//   if (acs === 'yes') {
//   alert('correct!');
//   userScore++;
// } else if (acs === 'no') {
//   alert('incorrect!');
// }
// console.log(acs);

// var tech = prompt('is griffin is interested in tech?');
// // console.log(water);
// var tech = tech.toUpperCase();
// // console.log(water);
// if (tech == 'yes'){
//     alert('yes, ' + name + ' griffin is interested in tech');
// } else if (tech == 'no'){
//     alert('no, ' + name + ' griffin is interested in tech');
// // } else {
// //     prompt('please answer the question' + name );
// }
// var tech = prompt('is griffin interested in tech?');
// console.log(tech);
// var tech = tech.toLowerCase();
// console.log(tech);
// while ( tech !== "yes" && tech !== "no" ) {
//   tech = prompt('yes or no');
// }
//   if (tech === 'yes') {
//   alert('correct!');
//   userScore++;
// } else if (tech === 'no') {
//   alert('incorrect!');
// }
// console.log(tech);

// question 6 guess number
// var movieNumber = prompt('how many movies are on griffins movie list?');
// console.log(movieNumber);
// var movieNumber = Number(movieNumber); 
// console.log(isNaN(movieNumber));
// var correct = 10;
// var tries;

// for (var tries = 1; tries <= 4; tries++){
//     console.log(tries);
//     movieNumber = Number(movieNumber);
//     if (movieNumber === correct){
//       alert('correct!');
//       console.log(movieNumber);
//      break;
//     } else if (movieNumber > correct){
//         // prompt('your number is too high, guess again');
//         movieNumber= prompt('your number is too high, guess again');
//     } else if (movieNumber < correct){
//         movieNumber = prompt('your number is too low, guess again');
//     } else if (movieNumber === correct){
//         movieNuber = alert('correct!');
//         userScore++;
    // } else if (movieNumber !== correct);{
    //     prompt('incorrect.');
    // } else {
    //     prompt('invalid imput');
//     }
// }
// console.log(movieNumber);

//question 7 multiple correct answers
// var color = prompt('what is one of the primary colors?');
// var color = color.toLowerCase;
// var correct = ['red', 'yellow', 'blue'];
// var attempts = 6;

//nested loop using label
// loop1: for (attempts = 0; attempts < 6; attempts++);{
//   var color = prompt('what is one of the primary colors?');
//   loop2: for(var correctIndex = 0; correctIndex < correct.length; correctIndex++){
//     color = color.toLowerCase();
//     if (color === correct[correctIndex]) {
//       console.log(color);
//       alert('correct!');
//       break loop1;
    // } else if (color !== correct) {
    //     alert('incorrect!');
    // } else { 
    //   alert('incorrect!');
    //   // color = prompt('guess again');
//     } 
//   }
//   if(attempts < 6) alert('incorrect.');
// }
// document.write('the three primary colors are: red, yellow, and blue.');

// alert('thanks for playing, ' + name + 'your final game score is ' + userScore);

//old question 
// var answer1 = prompt('do i like to drive?');
// var answer = 'yes';
// answer1 = answer1.toLowerCase
// if(answer1 === correct){
//   alert('correct!');
// } else {
//   alert('wrong.');
// }

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

    if (answercorrectly == false) alert('sorry try again.');
  }
}

askMultiplequestion(
  'what are the primary colors?',
  ['red', 'yellow', 'blue',], 
  6 
); 


alert('thanks for playing ' + name + ' your total score is ' + userScore + ' good job!')

// askQuestion('question one');
// askQuestion('question two');
// askMultipleQuestion(
//   'what is color of rainbow',
//   ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'],
//   4
// );

// } else if (colors[i][0] === 'y'){
    //     console.log('thats yellow which starts with y');
    

// while(movieNumber != correct){
//     alert('incorrect')

// } if(movieNuber === correct){
//     alert('correct')
// }

// let i = 0 
// while(i < 4){
//     prompt('how many movies are on griffins list?');
//     i++;
// } if(movieNumber)

// // switch (correct){
// //     case 0:
// //     case 1:
// //     case 2:
// //     case 3:
// //     case 4:
// //     case 5:
// //     case 6:
// //     case 7:
// //     case 8:
// //     case 9:
// //         document.write('your number is too low');
// //         break;
// //     case correct:
