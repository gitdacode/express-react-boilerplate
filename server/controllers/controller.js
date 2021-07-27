exports.landing = (req, res, _next) => {
  res.status(200).json({
    status: "success",
    message: "Hello world!",
  });
};
