const wrapAsync = fn => async (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(err => next(err));
};

module.exports = wrapAsync;
