const str = "reverse this string";

const reverseString = (str) => {
  let finalstr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    finalstr += str[i];
  }
  return finalstr;
};

console.log(reverseString(str));
