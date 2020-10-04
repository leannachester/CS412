//Write a function that takes as its input a formatted string.
// This function should
// Determine the operator (+, *, -, ^, or /) embedded in the string
// Return a function to implement the input operator that returns the result
//Execute the returned function to evaluate and print each expression.


// determines operator in the string and returns a function to implement the input operator
const findOperator = (str) => {
  let op = str.charAt(1);
  switch(op) {
      case '+':
          return (left, right) => left + right;
          break;
      case '-':
          return (left, right) => left - right;
          break;
      case '*':
          return (left, right) => left * right;
          break;
      case '/':
          return (left, right) => left / right;
          break;
      case '^':
          return (left, right) => left ^ right;
          break;

  }
}


// executes the functions returned by findOperator
const executeFunction = findOperator('4+2')

console.log(
    `Get the operator function: ${findOperator('4+2')}`
);

console.log(
    `Execute the operator function: ${findOperator('4+2')(4, 2)}`
);

console.log(`Execute function: ${executeFunction}`);


module.exports= {findOperator, executeFunction};