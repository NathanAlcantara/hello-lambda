module.exports.helloFellows = async (event) => {
  var name = "GAIA"

  if (event.queryStringParameters && event.queryStringParameters.name) {
    name = event.queryStringParameters.name;
  }

  return {
    statusCode: '200',
    body: `Hello my fellows, i'm ${name}`
  };
};
