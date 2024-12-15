/**
 * only ts
 * interface Calculator {
 *    execute(arr)
 * }
 *
 */

class CalculatorFactory {
  constructor(operation) {
    if (operation === 'sum') return new CalculatorSum();
    if (operation === 'multiplication') return new CalculatorMultiplication();
    if (operation === 'division') return new CalculatorDivision();
    if (operation === 'exponentiation') return new CalculatorExponentiation();
  }
}

class CalculatorSum extends CalculatorFactory {
  execute(arr) {
    return arr.reduce((acc, el) => acc + el, 0);
  }
}

class CalculatorMultiplication extends CalculatorFactory {
  execute(arr) {
    return arr.reduce((acc, el) => acc * el, 1);
  }
}

class CalculatorDivision extends CalculatorFactory {
  execute(arr) {
    return arr.slice(1).reduce((acc, el) => acc / el, arr[0]);
  }
}

class CalculatorExponentiation extends CalculatorFactory {
  execute(arr) {
    return arr.splice(1).reduce((acc, el) => (acc **= el), arr[0]);
  }
}

module.exports = CalculatorFactory;
module.exports = CalculatorSum;
module.exports = CalculatorMultiplication;
module.exports = CalculatorDivision;
module.exports = CalculatorExponentiation;
