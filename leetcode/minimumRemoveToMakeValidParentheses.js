// Run: O(N) Space: O(N)
var minimumRemoveToMakeValidParentheses = function (s) {
  const stack = [];
  // set melhor que array. Inserção e Busca: O(1). Enquanto num array usaria O(N)
  const toRemove = new Set();
  let result = '';
  const result2 = [];

  // Primeiro passo para identificar os índices a serem removidos
  [...s].forEach((element, index) => {
    if (element === '(') {
      stack.push(index);
    } else if (element === ')') {
      if (stack.length > 0) {
        stack.pop();
      } else {
        toRemove.add(index);
      }
    }
  });

  // Adicionar os índices restantes de '(' ao conjunto de índices a serem removidos
  while (stack.length > 0) {
    toRemove.add(stack.pop());
  }

  // Construir a string resultante
  // concatenar string em JS pode gear uma complexidade em R: O(N^2)
  // já fazer um join tem complxidade O(N) para concatenar um array de string e gerar uma string
  /**
  * 
  *  [...s].forEach((element, index) => {
    if (!toRemove.has(index)) {
      result += element;
    }
  });

  
  return result;
  * 
  */

  for (let i = 0; i < s.length; i++) {
    if (!toRemove.has(i)) {
      result2.push(s[i]);
    }
  }
  return result2.join('');
};

/**
 * )
 * (
 * )
 */

module.exports = minimumRemoveToMakeValidParentheses;
