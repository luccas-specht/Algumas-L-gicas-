const posOrder = require('./posOrder');
const TreeDefinition = require('./treeDefinition');

test('Should return each node in pos Order', () => {
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

  posOrder(a);
});
