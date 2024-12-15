var inOrder = function (root) {
  if (root?.value === undefined) return;
  preOrder(root?.left);
  console.log(root?.value);
  preOrder(root?.right);
};
module.exports = inOrder;
