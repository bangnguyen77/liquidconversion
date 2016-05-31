var inLiters = function (number1, converter) {
  return number1 / converter;
}

var converter = 0.26417;
var number1 = parseInt(prompt("Type in the gallon"));

alert(inLiters(number1, converter));
