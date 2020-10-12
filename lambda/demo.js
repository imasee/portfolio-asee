
const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
};
// legacy callback style - not encouraged anymore, but you'll still see examples doing this
exports.handler = function (event, context, callback) {
    // your server-side functionality
    console.log(context);
    callback(null, {
        statusCode: 200,
        headers,
        body: JSON.stringify({
            message: `Hello world ${Math.floor(Math.random() * 10)}`
        })
    });
};