var posOrder = function (root) {
  if (root?.value === undefined) return;
  preOrder(root?.left);
  preOrder(root?.right);
  console.log(root?.value);
};
module.exports = posOrder;
