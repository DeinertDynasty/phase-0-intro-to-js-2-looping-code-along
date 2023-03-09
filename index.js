// Code your solutions in this file
function writeCards(namesArray, eventName) {
  let messagesArray = [];

  for (let i = 0; i < namesArray.length; i++) {
    let message = `Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`;
    messagesArray.push(message);
  }

  return messagesArray;
}

let names = ["Alice", "Bob", "Charlie"];
let event = "birthday";

let messages = writeCards(names, event);
console.log(messages);

function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }
  