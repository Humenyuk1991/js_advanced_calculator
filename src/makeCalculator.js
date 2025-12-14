'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    operate(callback, number) {
      this.result = callback(this.result, number);
      return this;
    },
    add(a, b) {
      return a + b;
    },
    subtrect(a, b) {
      return a - b;
    },
    multyply(a, b) {
      return a * b;
    },
    divide(a, b) {
      return b === 0 ? a : a / b;
    },
    reset() {
      this.result = 0;
      return this;
    }
  };
}

module.exports = makeCalculator;
