const palindromes = function (input) {
//prepare input, remove space and punctation...
input = input.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
input = input.split(' ').join('');
// splice, split reverse join...
firstHalf = input.substring(0,Math.floor(input.length/2));
lastHalf = input.substring(Math.ceil(input.length/2, input.length-1)).split('').reverse().join('');
console.log(firstHalf + ',' + lastHalf);
return (firstHalf.toUpperCase() == lastHalf.toUpperCase());
};

// Do not edit below this line
module.exports = palindromes;
