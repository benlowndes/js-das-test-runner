"use strict";

const runner = require('../runner');

runner.describe('some examples', () => {
  
  runner.it('can pass', () => {
    runner.expect(1 + 1).equals(2);
  }),

  runner.it('can fail', () => {
    runner.expect(1 + 1).equals(3);
  }),

  runner.it('can pass after failing', () => {
    runner.expect(1 + 1).equals(2);
  })

})

