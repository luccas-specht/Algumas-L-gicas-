const sortStringIncludesArray = require('./sortStringIncludesArray');

describe('Should receive a String which is an array of objects and return a string with the array sorted', function () {
  /*
    For the same mark, they should be sorted in alphabetical order  
  */
  test.each([
    {
      input:
        '[{name: Bob, mark: 76}, {name: Natalie, mark: 90}, {name: Cris, mark: 80}]',
      output:
        '[{name: Natalie, mark: 90}, {name: Cris, mark: 80}, {name: Bob, mark: 76}]',
    },
    {
      input:
        '[{name: Bob, mark: 76}, {name: Jhon, mark: 80}, {name: Alice, mark: 90}]',
      output:
        '[{name: Alice, mark: 90}, {name: Jhon, mark: 80}, {name: Bob, mark: 76}]',
    },
    {
      input:
        '[{name: Alice, mark: 90}, {name: Bob, mark: 76}, {name: Jhon, mark: 80}, {name: Bob, mark: 85}]',
      output:
        '[{name: Alice, mark: 90}, {name: Bob, mark: 85}, {name: Jhon, mark: 80}, {name: Bob, mark: 76}]',
    },
  ])('Should return a string in array correctly', function (test) {
    const result = sortStringIncludesArray(test.input);
    expect(result).toStrictEqual(test.output);
  });
});
