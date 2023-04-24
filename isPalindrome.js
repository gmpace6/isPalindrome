// function isPalindrome(word) {
//     return word === word.split('').reverse().join('')
// }

// const isPalindrome = (word) => word === word.split('').reverse().join('')

// const isPalindrome = (word) => word === word.toLowerCase().split('').reverse().join('')

// const isPalindrome = (word) => word.toLowerCase().replace(' ','') === word.toLowerCase().replace(' ','').split('').reverse().join('')

const isPalindrome = (word) => word.toLowerCase().replaceAll(' ','') === word.toLowerCase().replaceAll(' ','').split('').reverse().join('')

console.log(isPalindrome('Race car'))
console.log(isPalindrome('So Many Dynamos'))
console.log(isPalindrome('Racecar'))
console.log(isPalindrome('deified'))