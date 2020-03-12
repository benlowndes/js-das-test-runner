const GREEN = "\x1b[32m"
const RED = "\x1b[31m"
const RESET = '\x1b[0m'


function describe(description, callback) {
  console.log(description);
  callback();
}

function it(description, callback) {
  try {
    process.stdout.write(' - ' + description + ' ');
    callback();  
    console.log(GREEN + '(ok)' + RESET);
  } catch (e) {
     console.log(RED + '(fail)' + RESET);
     console.log(e);
  }
  
}

function expect(val1) {
  let comparitor = new ComparisonAssertion(val1);
  return comparitor;
}

class ComparisonAssertion {
  constructor(actual) {
    this.actual = actual;
  }

  equals(inspect) {
    if (inspect !== this.actual) {
      throw new AssertionError(`Expected ${inspect} but got ${this.actual}`)
    }
  }
} 

class AssertionError extends Error {

}

exports.describe = describe;
exports.it = it;
exports.expect = expect;