const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        '/.netlify',
        createProxyMiddleware({
            target: 'http://localhost:9000',
            changeOrigin: true,
            pathRewrite: { '^/.netlify/functions/': '/' }
        })
    );
};