const assert = require('assert');

Object.freeze(assert);
const sumOfOther = require('./src/sumOfOther');

describe('Return an array of sums of other values', () => {
  it('1', () => {
    const arrayTest = sumOfOther([0, 5, 10]);
    assert.deepEqual(arrayTest, [15, 10, 5]);
  });

  it('2', () => {
    const arrayTest = sumOfOther([1234, 54345, 4455, 6236, 11]);
    assert.deepEqual(arrayTest, [65047, 11936, 61826, 60045, 66270]);
  });

  it('3', () => {
    const arrayTest = sumOfOther([10, 10, 10, 10, 10]);
    assert.deepEqual(arrayTest, [40, 40, 40, 40, 40]);
  });

  it('4', () => {
    const arrayTest = sumOfOther([1]);
    assert.deepEqual(arrayTest, [0]);
  });

  it('5', () => {
    const arrayTest = sumOfOther([0, 0, 0, 6666]);
    assert.deepEqual(arrayTest, [6666, 6666, 6666, 0]);
  });
});
