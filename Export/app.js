var personModule =require('./Person');

var newMessage = require('./Message');

var newAction = require('./Action');

// 1st Export File:
personModule.name('Alper');
personModule.surname('Ece');
personModule.title('Developer');

// 2nd Export File:
console.log(newMessage.simpleMessage);

// 3rd Export File:
newAction.action('Come here!');