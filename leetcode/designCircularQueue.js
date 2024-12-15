/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  this.maxSize = k;
  this.queue = [];
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.isFull()) return false;

  this.queue.push(value);
  return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.isEmpty()) return false;
  this.queue.shift();
  return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  return this.isEmpty() ? -1 : this.queue[0];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  /**
   how to get last element in arrray:
   
   1 -> slice(-1) => don't mutate the vector, i'm gonna use this
   2 -> arr[arr.legth -1] second faster
   3 -> arr.pop() trade offs: faster, but it gets and removes
  */
  return this.isEmpty() ? -1 : this.queue.slice(-1)[0];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.queue.length === 0;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return this.queue.length === this.maxSize ? true : false;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

module.exports = MyCircularQueue;
