'use strict'

var name = prompt('what is your name?');
alert('hello, ' + name + ' welcome to my page.');


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
var griffin = prompt('Welcome to my page, ' + name + '! is the authors name griffin?');
var griffin = griffin.toLowerCase();
while ( griffin !== "yes" && griffin !== "no" ) {
  griffin = prompt('Please answer with a yes or a no');
}
  if (griffin === 'yes') {
  alert('That is correct!');
} else if (griffin === 'no') {
  alert('You are wrong!');
}

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
var cpc = prompt('did griffin go to cedar park?');
var cpc = cpc.toLowerCase();
while ( cpc !== "yes" && cpc !== "no" ) {
  cpc = prompt( 'yes or no');
}
  if (cpc === 'yes') {
  alert('That is correct!');
} else if (cpc === 'no') {
  alert('You are wrong!');
}

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
var job = prompt('is griffin a dogsitter?');
var job = job.toLowerCase();
while ( job !== "yes" && job !== "no" ) {
  job = prompt('yes or a no');
}
  if (job === 'yes') {
  alert('That is correct!');
} else if (job === 'no') {
  alert('You are wrong!')
}

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
var acs = prompt('does griffin voulenteer for acs?')
var acs = acs.toLowerCase();
while ( acs !== "yes" && acs !== "no" ) {
  acs = prompt( 'yes or no');
}
  if (acs === 'yes') {
  alert('That is correct!');
} else if (acs === 'no') {
  alert('You are wrong!');
}

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
var tech = prompt('is griffin interested in tech?');
var tech = tech.toLowerCase();
while ( tech !== "yes" && tech !== "no" ) {
  tech = prompt( 'yes or no');
}
  if (tech === 'yes') {
  alert('That is correct!');
} else if (tech === 'no') {
  alert('You are wrong!');
}

var movieNumber = prompt('how many movies are on griffins movie list?');
console.log(movieNumber);
var movieNumber = Number(movieNumber);
console.log(isNaN(movieNumber));
var correct = 10;


for (var i = 0; i <4; i++){
    if (movieNumber == correct) break;
    if (movieNumber > correct){
        prompt('you number is too high');
        
    } else if (movieNumber < correct){
        prompt('your number is too low');
        
    } else if (movieNuber == correct){
        alert('you are correct!');
        
    } else {
        prompt('invalid imput');
        
    }
}

var color = ['red', 'yellow', 'blue'];


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
// // }

