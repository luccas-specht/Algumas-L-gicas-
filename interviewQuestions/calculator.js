class Calculator {
  static execute(input) {
    const operations = {
      sum: (arr) => arr.reduce((acc, el) => acc + el, 0),

      multiplication: (arr) => arr.reduce((acc, el) => acc * el, 1),

      division: (arr) => arr.slice(1).reduce((acc, el) => acc / el, arr[0]),

      exponentiation: (arr) =>
        arr.splice(1).reduce((acc, el) => (acc **= el), arr[0]),
    };

    if (operations[input.operation])
      return operations[input.operation](input.values);

    return 0.0;
  }
}

module.exports = Calculator;

const calculator2 = () => {
  const operations = {
    sum: (arr) => arr.reduce((acc, el) => acc + el, 0),

    multiplication: (arr) => arr.reduce((acc, el) => acc * el, 1),

    division: (arr) => arr.slice(1).reduce((acc, el) => acc / el, arr[0]),

    exponentiation: (arr) =>
      arr.splice(1).reduce((acc, el) => (acc **= el), arr[0]),
  };

  if (operations[input.operation])
    return operations[input.operation](input.values);

  return 0.0;
};
