// MyAEMComponent.js

import React, { useState, useEffect } from 'react';
import AEMHeadless from '@adobe/aem-headless-client-js';
import config from '@/aem-headless';

const MyAEMComponent = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const aemHeadlessClient = new AEMHeadless(config);

        const fetchData = async () => {
            try {
                const queryString = 'Your_Query_String_Here';
                const result = await aemHeadlessClient.runQuery(queryString);
                setData(result);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            {/* Render your data here */}
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default MyAEMComponent;
