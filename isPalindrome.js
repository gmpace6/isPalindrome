// function isPalindrome(word) {
//     return word === word.split('').reverse().join('')
// }
const isPalindrome = (word) => word === word.split('').reverse().join('')

console.log(isPalindrome('racecar'))
console.log(isPalindrome('hello'))
console.log(isPalindrome('Racecar'))
console.log(isPalindrome('deified'))