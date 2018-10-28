const assert = require('assert');

Object.freeze(assert);
const sumOfOther = require('./src/sumOfOther');
const make = require('./src/make');

function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

describe('Should return array of sums of other values then current', () => {
  it('sumOfOther 1', () => {
    const arrayTest = sumOfOther([0, 5, 10]);
    assert.deepEqual(arrayTest, [15, 10, 5]);
  });

  it('sumOfOther 2', () => {
    const arrayTest = sumOfOther([1234, 54345, 4455, 6236, 11]);
    assert.deepEqual(arrayTest, [65047, 11936, 61826, 60045, 66270]);
  });

  it('sumOfOther 3', () => {
    const arrayTest = sumOfOther([10, 10, 10, 10, 10]);
    assert.deepEqual(arrayTest, [40, 40, 40, 40, 40]);
  });

  it('sumOfOther 4', () => {
    const arrayTest = sumOfOther([1]);
    assert.deepEqual(arrayTest, [0]);
  });

  it('sumOfOther 5', () => {
    const arrayTest = sumOfOther([0, 0, 0, 6666]);
    assert.deepEqual(arrayTest, [6666, 6666, 6666, 0]);
  });
});

describe('make', () => {
  it('make 1 (sum)', () => {
    const result = make(1)(2, 3, 4)(5)(sum);
    assert.deepEqual(result, 15);
  });

  it('make 2 (substitution)', () => {
    const result = make(15)(5)(1)(sub);
    assert.deepEqual(result, 9);
  });
});