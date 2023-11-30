import React from "react"

/* Create the component so that it will call all of the APIs and cache the information locally and update as needed. This will improve the load time as well. Even though there isn't much content and this is just a demo site lol. */

const fetchMeIfYouCan = [
    job-seeker-benefits,
    carousel-images,
]

const Fetched = () => {

    const fetchUrl = "https://author-p124452-e1227370.adobeaemcloud.com/graphql/execute.json/aem-demo-employers/"

    fetchMeIfYouCan.map((dest) => {
        return fetchUrl + dest
    })

}