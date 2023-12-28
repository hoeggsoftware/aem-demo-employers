// import AEMHeadless from "@adobe/aem-headless-client-js";

// const {
//     REACT_APP_HOST_URI,
//     REACT_APP_GRAPHQL_ENDPOINT,
//     REACT_APP_USE_PROXY,
//     REACT_APP_AUTH_METHOD,
//     REACT_APP_DEV_TOKEN,
//     REACT_APP_BASIC_AUTH_USER,
//     REACT_APP_BASIC_AUTH_PASS,
//   } = process.env;

//   const serviceURL = REACT_APP_USE_PROXY === "true" ? "/" : REACT_APP_HOST_URI;

//   const setAuthorization = () => {
//     if (REACT_APP_AUTH_METHOD === "basic") {
//         return [REACT_APP_BASIC_AUTH_USER, REACT_APP_BASIC_AUTH_PASS];
//       } else if (REACT_APP_AUTH_METHOD === "dev-token") {
//         return REACT_APP_DEV_TOKEN;
//       } else {
//         // no authentication set
//         return;
//       }
//   };

//   const aemHeadlessClient = new AEMHeadless ({
//     serviceURL: serviceURL,
//     endpoint: REACT_APP_GRAPHQL_ENDPOINT,
//     auth: setAuthorization(),
//   });

//   export default aemHeadlessClient;
