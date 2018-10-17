module.exports.get = function(event, context, callback) {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello from Serverless',
    }),
  };
  callback(null, response);
};
