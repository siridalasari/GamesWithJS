function VerticallyMiddleAlignment (message, column = 127) {
  
console.clear();
let calculation = column - message.length;
let leftPad = Math.floor(calculation/2);
console.log(message.padStart(leftPad + message.length));

}