const preOrder = require('./preOrder');
const TreeDefinition = require('./treeDefinition');

test('Should return each node in preOrder', () => {
  // left side
  const bRight = new TreeDefinition(2);
  const bLeft = new TreeDefinition(1);
  const aLeft = new TreeDefinition('B', bLeft, bRight);
  // right side
  const cRight = new TreeDefinition(4);
  const cLeft = new TreeDefinition(3);
  const aRight = new TreeDefinition('C', cLeft, cRight);
  const a = new TreeDefinition('A', aLeft, aRight);

  /*  tree built
      (A)
     /   \
   (B)    (C)
   / \    / \
 (1) (2) (3) (4)
*/

  const result = preOrder(a);

  expect(result).toBe('AB12C34');
});
