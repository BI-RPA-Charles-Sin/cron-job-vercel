module.exports = (req, res) => {
  res.send({
    status: 200,
    message: `Hello world!! ${new Date().now()}`,
  });
};
