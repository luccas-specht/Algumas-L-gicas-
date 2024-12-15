// Run: O(N) Space: O(N)
var evalRPN = function (tokens) {
  const stack = []; // Last-in, First-out,
  // pop = remove last element in array
  // push = add element in last position in array
  const operation = {
    '+': () => {
      const b = stack.pop();
      const a = stack.pop();

      const result = a + b;
      stack.push(result);
    },
    '-': () => {
      const b = stack.pop();
      const a = stack.pop();

      const result = a - b;
      stack.push(result);
    },
    '*': () => {
      const b = stack.pop();
      const a = stack.pop();

      const result = a * b;
      stack.push(result);
    },
    '/': () => {
      const b = stack.pop();
      const a = stack.pop();

      /**
       * Math. trunc rounds down a number to an integer towards 0 while Math.
       * floor rounds down a number to an integer towards -Infinity
       */
      const result = Math.trunc(a / b);
      stack.push(result);
    },
  };

  tokens.forEach((token) => {
    !isNaN(token) ? stack.push(~~token) : operation[token]();
  });

  return stack[0];
};

module.exports = evalRPN;
