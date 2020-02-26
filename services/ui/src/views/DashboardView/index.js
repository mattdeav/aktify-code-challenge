import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import React from 'react';
import {Link} from 'react-router-dom';

const FETCH_FLASK_MESSAGE = gql`
    query FetchFlaskMessage {
        message @rest(type: "String", path: "/")
    }
`;

const DashboardView = () => {
    const {loading, error, data} = useQuery(FETCH_FLASK_MESSAGE);

    if (loading) {
        return <span>Loading...</span>;
    }

    if (error) {
        return <span>An error occurred. We could not fetch the Flask API message at <code>/</code></span>;
    }

    return (
        <>
            <h1>Dashboard View</h1>
            <p>A short message from your Flask API: "{data?.message}"</p>

            <ul>
                <li><Link to="/campaigns">Campaign List</Link></li>
            </ul>
        </>
    );
}

export default DashboardView;
