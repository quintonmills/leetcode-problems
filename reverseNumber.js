// Given a signed 32-bit integer x, return x with its digits reversed.
//  If reversing x causes the value to go outside the signed 32-bit integer
// range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21

var n = 123;

function reverseNumber(n) {
  var newNumb = n.toString();
  for (let i = newNumb.length; i >= 0; i--) {
    console.log(newNumb[i]);
  }
  //   console.log(newNumb);
}

console.log(reverseNumber(n));
