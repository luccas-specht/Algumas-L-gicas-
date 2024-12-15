const MyQueue = require('./implementQueue');

test('Should implement a queue in js using functional programming', () => {
  const obj = new MyQueue();

  expect(obj.empty()).toBe(true);

  obj.push(1);
  expect(obj.empty()).toBe(false);
  expect(obj.peek()).toBe(1);

  obj.push(2);
  expect(obj.peek()).toBe(1);

  expect(obj.pop()).toBe(1);
  expect(obj.peek()).toBe(2);

  expect(obj.pop()).toBe(2);
  expect(obj.empty()).toBe(true);

  expect(obj.pop()).toBe(null);

  expect(obj.peek()).toBe(null);
});
