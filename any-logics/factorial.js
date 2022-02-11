const calcFactorial = (currentFactorial) => {
  /* Remember: !0 = 1, 1! =1 */

  if (currentFactorial === 0 || currentFactorial === 1) return 1;

  return currentFactorial * calcFactorial(currentFactorial - 1);
};

const result = calcFactorial(88);
console.log(result);
