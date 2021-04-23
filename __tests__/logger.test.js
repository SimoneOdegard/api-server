const loggerMiddleware = require('../src/middleware/logger.js');

// Tested middleware needs to either be exported from the server or a separate module
describe('logger middleware', () => {

  let consoleSpy;
  let req = {};
  let res = {};
  let next = jest.fn(); // spy on next method

  // beforeEach tells us that we want our test to be independent.
  beforeEach(() => {
    // Attach to the console (take it over)
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  // consoleSpy will check to see if it's being fired
  afterEach(() => {
    // Put the console back
    consoleSpy.mockRestore();
  });

  // our tests
  it('properly logs some output', () => {
    loggerMiddleware(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('properly moves to the next middleware', () => {
    loggerMiddleware(req, res, next);
    // toHaveBeenCalled() is not enough, we need to make sure it was called with no args
    expect(next).toHaveBeenCalledWith();
  });

});