'use strict'

var name = prompt('what is your name?');
alert('hello, ' + name + ' welcome to my page.');


var tree = prompt('is a tree a plant?');
console.log(tree);
var tree = tree.toUpperCase();
// console.log(tree);
// .tolowercase(tree);
// console.log(tree);
if (tree == 'yes'){
    alert('yes, a tree is a plant');
} else if (tree == 'no') {
    alert('no, a tree is a plant');
} else {
    tree = prompt('please answer the question');
}

var dog = prompt('is a dog an animal?');
// console.log(dog);
var dog = dog.toUpperCase();
// console.log(dog);
if (dog == 'yes'){
    alert('yes, a dog is an animal');
} else if (dog == 'no'){
    alert('no, a dog is an animal');
} else {
    prompt('please answer the question');
}


var sport = prompt('is hockey a sport?');
// console.log(sport);
var sport = sport.toUpperCase();
// console.log(sport);
if (sport == 'yes'){
    alert('yes, hockey is a sport');
}else if (sport == 'no'){
    alert('no, a hockey is a sport');
} else {
    prompt('please answer the question');
}

var sun = prompt('is the sun hot?');
// console.log(sun);
var sun = sun.toUpperCase
// console.log(sun);
if (sun == 'yes'){
    alert('yes, the sun is hot');
} else if (sun == 'no'){
    alert('no, the sun is hot');
} else {
    prompt('please answer the question');
}

var water = prompt('is boiling water hot?');
// console.log(water);
var water = water.toUpperCase();
// console.log(water);
if (water == 'yes'){
    alert('yes, ' + name + ' boiling water is hot');
} else if (water == 'no'){
    alert('no, ' + name + 'boiling water is hot');
} else {
    prompt('please answer the question' + name );
}
