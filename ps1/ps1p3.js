
// problem 3


const decoratorFunc = (str, dec) => dec(str);

//expression one that returns an array containing fragments of the input string broken on character 'c'
const expressionOne = decoratorFunc(
    'supercalifragilisticexpialidocious',
    (str) => str.replace(/c/g,'1c').split('1')
);

console.log(`expression 1: ${expressionOne} `);



// expression two that returns an object that contains the original string, modified string,
//total number of A's in modified string, and the overall length of the modified string
//const expressionTwo = decoratorFunc (inputString, decorator) => decorator(inputString)
const expressionTwo = decoratorFunc(
    'supercalifragilisticexpialidocious',
    str => {
        let modString = str.replace(/a/g, 'A');
        let numReplaced = modString.match(/A/g).length;
        let obj = {
            originalString: str,
            modifiedString: modString,
            numberReplaced: numReplaced,
            length: modString.length
        }
        return obj;
    }
    )


console.table(expressionTwo);

module.exports= {decoratorFunc, expressionOne, expressionTwo};