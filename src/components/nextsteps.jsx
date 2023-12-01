import { useState, useEffect } from "react";





const NextSteps = (prop) => {
    const [page, setPage] = useState(prop)

    fetch('url')
    .then((res) => {
        return res.json();
    })
    .then((d) => {
        
    })

    return (
        <div>
            <h2>Next Steps</h2>

        </div>
    )

}