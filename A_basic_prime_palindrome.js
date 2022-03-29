const string = "lend";
let palindromeChecker =(string) => string.split('').reverse().join('') === string;
console.log(palindromeChecker(string));