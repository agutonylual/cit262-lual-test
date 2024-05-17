const { greeting } = require('./helloworld');
test('should print "Hello Lual"', () => {
  expect(greeting).toBe('Hello Lual');
});