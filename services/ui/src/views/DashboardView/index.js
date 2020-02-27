import {useQuery} from '@apollo/client';
import Typography from '@material-ui/core/Typography';
import gql from 'graphql-tag';
import React from 'react';
import Title from '../../components/Title';
import {useViewTitle} from '../../contexts/ViewContext';

const FETCH_FLASK_MESSAGE = gql`
    query FetchFlaskMessage {
        message @rest(type: "String", path: "/")
    }
`;

const DashboardView = () => {
    useViewTitle('Dashboard');
    const {loading, error, data} = useQuery(FETCH_FLASK_MESSAGE);

    if (loading) {
        return <span>Loading...</span>;
    }

    if (error) {
        return <span>An error occurred. We could not fetch the Flask API message at <code>/</code></span>;
    }

    return (
        <>
            <Title>Dashboard View</Title>
            <Typography component="p" variant="body1">A short message from your Flask API: "{data?.message}"</Typography>
        </>
    );
};

export default DashboardView;
