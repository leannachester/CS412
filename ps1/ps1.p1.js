// Write a function that takes a string as its input and returns a new string that contains all of the
// letters in the original string, but in reverse alphabetical order. Ignore punctuation and numbers.
// Test your function using the string ‘supercalifragilisticexpialidocious’.

const revAlphabet = (str) => {
    return str.split('').sort().reverse().join('');

}
console.log(
    `${revAlphabet('supercalifragilisticexpialidocious')}`
)

console.log(
    `${revAlphabet('pepperoni')}`
)

module.exports= {revAlphabet};
