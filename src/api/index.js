import { aemHeadlessClient } from "@/aem-headless";


export const GetContent = async(queryString) => {
    aemHeadlessClient.runQuery(queryString)
    .then(data => console.log(data))
    .catch(e => console.error(e.toJSON()))
}