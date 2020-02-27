import { ApolloProvider } from '@apollo/client';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { RestLink } from 'apollo-link-rest';
import camelCase from 'lodash/camelCase';
import snakeCase from 'lodash/snakeCase';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const client = new ApolloClient({
    link: new RestLink({
        // Convert field names to camel case for queries
        fieldNameNormalizer: camelCase,
        // Convert field back to snake case for mutations
        fieldNameDenormalizer: snakeCase,
        uri: process.env.REACT_APP_API_URL,
    }),
    cache: new InMemoryCache(),
});

const theme = createMuiTheme({
    drawerWidth: 280,
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
            <App/>
        </ThemeProvider>
    </ApolloProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
