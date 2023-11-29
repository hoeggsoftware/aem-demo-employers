/* import AEMHeadless from "@adobe/aem-headless-client-js";

const aemUser = process.env.REACT_APP_AEM_USER;
const aemPass = process.env.REACT_APP_AEM_PASS;

export const aemHeadlessClient = new AEMHeadless({
  serviceURL: "https://publish-p124452-e1227370.adobeaemcloud.com/",
  endpoint: "graphql/execute.json/aem-demo-employers/job-seeker-benefits",

});

const getPersistedQueries = async () => {
  aemHeadlessClient
    .listPersistedQueries()
    .then((data) => console.log(data))
    .catch((e) => console.error(e.toJSON()));
};

export default getPersistedQueries;
 */