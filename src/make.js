module.exports = function make(...args) {
  const savedArgs = args;
  return function inside(...nextArgs) {
    if (typeof nextArgs[0] !== 'function') {
      savedArgs.push(...nextArgs);
      return inside;
    }
    return savedArgs.reduce((acc, value) => nextArgs[0](acc, value));
  };
};
