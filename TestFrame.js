var assert = require('assert')

module.exports = function (_testCases, _testfuns) {
    // describe different functions
    for (const name in _testfuns) {
    let _fun = _testfuns[name]
    describe(`Run ${name}`, function () {
      // many test cases
      _testCases.forEach(test => {
        let input = test.input
        let output = test.output
        it(`input: ${JSON.stringify(input)}
    -> output: ${JSON.stringify(output)}`, function (done) {
            // test function with multiple arguments
            let ret = _fun.length > 1 ? _fun(...input) : _fun(input)
            assert.deepEqual(ret, output);
            done();
          });
      })
    });
  }
}