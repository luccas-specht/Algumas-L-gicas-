var preOrder = function (root) {
  if (root?.value === undefined) return;
  console.log(root?.value);
  preOrder(root?.left);
  preOrder(root?.right);
};

module.exports = preOrder;

/**
 only print in preOrder   
 * var preOrder = function (root) {
    if (root?.value === undefined) return;
    console.log(root?.value);
    preOrder(root?.left);
    preOrder(root?.right);
  }; 
 */
