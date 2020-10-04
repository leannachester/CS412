const {revAlphabet} = require('./ps1.p1');
const {findOperator, executeFunction} = require('./ps1.p2');
const {decoratorFunc, expressionOne, expressionTwo} = require('./ps1p3');
const {describe, it} = require('mocha');
const {expect} = require('chai');

//tests for problem 1

//test one; works
describe('Test one for problem one', () =>
    it('should return xuutsssrrppoollliiiiiiigfeedcccaaa when passed supercalifragilisticexpialidocious ', () => {
        let test1 = revAlphabet('supercalifragilisticexpialidocious');
        expect(test1).to.be.equal('xuutsssrrppoollliiiiiiigfeedcccaaa')
    })
)

//test two; works
describe('Test two for problem one', () =>
    it('should return rppponiee when passed pepperoni ', () => {
        let test2 = revAlphabet('pepperoni');
        expect(test2).to.be.equal('rppponiee')
    })
)

//tests for problem 2
//‘4+2’
// ‘5*7’
// ‘6-1’
// ‘9/2’
// ‘2^8’ (where ^ is exponentiation)

describe('Testing problem 2 (1)', () =>
    it('should return (left, right) => left + right when passed 4+2', () => {
        let p2add = findOperator('4+2');
        expect(p2add).to.equal((left, right) => left + right)
    }))

describe('Testing problem 2 (2)', () =>
    it('should return (left, right) => left * right when passed 5*7', () => {
        let p2multiplication = findOperator('5*7');
        expect(p2multiplication()).to.be.a('function')
    }))

describe('Testing problem 2 (3)', () =>
    it('should return (left, right) => left - right when passes 6-1', () => {
        let p2sub = findOperator('6-1');
        expect(p2sub).to.be.equal((left, right) => left - right)
    }))

describe('Testing problem 2 (4)', () =>
    it('should return (left, right) => left + right when passes 9/2', () => {
        let p2add = findOperator('9/2');
        expect(p2add).to.be.equal((left, right) => left / right)
    }))

describe('Testing problem 2 (5)', () =>
    it('should return (left, right) => left + right when passes 2^8', () => {
        let p2add = findOperator('2^8');
        expect(p2add).to.be.equal((left, right) => left ^ right)
    }))

//tests for problem 3
//test one; works
describe('Testing problem 3 expression 1', () =>
    it('should return [super,califragilisti,cexpialido,cious]', () => {
        let exp1 = decoratorFunc('supercalifragilisticexpialidocious',
            (str) => str.replace(/c/g,'1c').split('1') );
        expect(exp1).to.eql(['super','califragilisti','cexpialido','cious'])
    }))


//test two
describe('Testing problem 3 expression 2', () =>
    it('should return an object', () => {
        let exp2 = decoratorFunc(
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
            });
        expect(exp2).to.eql(console.table(expressionTwo))

    } ))










