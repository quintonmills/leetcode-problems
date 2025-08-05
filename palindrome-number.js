// Given an integer x, return true if x is a palindrome, and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

function isPalindrome(number) {
  number = number.toString();
  for (let i = 0; i < number.length; i++) {
    for (let j = number.length - 1 - i; j >= 0; j--) {
      if (number[i] != number[j]) {
        return false;
      }
      break;
    }
  }
  return true;
}

console.log(isPalindrome(212)); //prints true
