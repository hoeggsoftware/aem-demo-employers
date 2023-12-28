// const { SERVICE_TOKEN, DEV_TOKEN, BASIC } = require('./proxy/authMethods');

// const proxy = (() => {
//     switch (process.env.REACT_APP_AUTH_METHOD) {
//       case SERVICE_TOKEN:
//         // Use Service token exchange for Cloud Env PROD
//         return require('./proxy/setupProxy.auth.service-token');
//       case DEV_TOKEN:
//         // Use Dev token for local development with Cloud Env
//         return require('./proxy/setupProxy.auth.dev-token');
//       case BASIC:
//         // Use user/pass for local development with Local Author Env
//         return require('./proxy/setupProxy.auth.basic');
//       default:
//         // Auth not needed for local development with Local Publisher Env
//         return require('./proxy/setupProxy.auth.none');
//     }
// })();

// module.exports = proxy;
