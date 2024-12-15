var calPoints = function (operations) {
  const points = [];

  const operation = {
    '+': () => {
      const summed = points[points.length - 1] + points[points.length - 2];
      points.push(summed);
    },
    D: () => {
      const doubledIt = 2 * points[points.length - 1];
      points.push(doubledIt);
    },
    C: () => points.pop(),
    ['toNumber']: (number) => points.push(~~number),
  };

  operations.forEach((element) => {
    // using ~~ would convert non-numbers in 0. for example: ~~D = 0, ~~+, ~~C = 0
    if (!isNaN(element)) {
      operation['toNumber'](element);
    } else {
      operation[element]();
    }
  });

  return points.reduce((acc, curr) => {
    return (acc += curr);
  }, 0);
};

module.exports = calPoints;
