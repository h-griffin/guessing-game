'use strict'

var name = prompt('what is your name?');
alert('hello, ' + name + ' welcome to my page.');
console.log(name);
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
var griffin = prompt('Welcome, ' + name + '! is the authors name griffin?');
console.log(griffin);
var griffin = griffin.toLowerCase();
console.log(griffin);
while ( griffin !== "yes" && griffin !== "no" ) {
  griffin = prompt('yes or no');
}
  if (griffin === 'yes') {
  alert('correct!');
} else if (griffin === 'no') {
  alert('incorrect!');
}
console.log(griffin);

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
console.log(cpc);
var cpc = cpc.toLowerCase();
console.log(cpc);
while ( cpc !== "yes" && cpc !== "no" ) {
  cpc = prompt('yes or no');
}
  if (cpc === 'yes') {
  alert('correct!');
} else if (cpc === 'no') {
  alert('incorrect!');
}
console.log(cpc);

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
console.log(job);
var job = job.toLowerCase();
console.log(job);
while ( job !== "yes" && job !== "no" ) {
  job = prompt('yes or a no');
}
  if (job === 'yes') {
  alert('correct!');
} else if (job === 'no') {
  alert('incorrect!')
}
console.log(job);

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
var acs = prompt('does griffin voulenteer for acs?');
console.log(acs);
var acs = acs.toLowerCase();
console.log(acs);
while ( acs !== "yes" && acs !== "no" ) {
  acs = prompt('yes or no');
}
  if (acs === 'yes') {
  alert('correct!');
} else if (acs === 'no') {
  alert('incorrect!');
}
console.log(acs);

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
console.log(tech);
var tech = tech.toLowerCase();
console.log(tech);
while ( tech !== "yes" && tech !== "no" ) {
  tech = prompt('yes or no');
}
  if (tech === 'yes') {
  alert('correct!');
} else if (tech === 'no') {
  alert('incorrect!');
}
console.log(tech);

var movieNumber = prompt('how many movies are on griffins movie list?');
console.log(movieNumber);
var movieNumber = Number(movieNumber);
console.log(isNaN(movieNumber));
var correct = 10;
for (var i = 0; i <4; i++){
    if (movieNumber === correct) break;
    if (movieNumber > correct){
        prompt('your number is too high, guess again');
    } else if (movieNumber < correct){
        prompt('your number is too low, guess again');
    } else if (movieNuber === correct){
        alert('correct!');
    // } else if (movieNumber !== correct);{
    //     prompt('incorrect.');
    // } else {
    //     prompt('invalid imput');
    }
}
console.log(movieNumber);

var color = prompt('what is one of the primary colors?');
var correct = ['red', 'yellow', 'blue'];

for (var i = 0; i < color.length; i++);
    // if (color === correct) break;
    if (color !== correct) {
        console.log('incorrect!');
    // } else if (colors[i][0] === 'y'){
    //     console.log('thats yellow which starts with y');
    }

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

