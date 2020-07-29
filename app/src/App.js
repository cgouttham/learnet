import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { LearnApp } from './LearnAppView'


const client = new ApolloClient({
    uri: 'http://localhost:8000/graphql/',
});

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <LearnApp/>
    </div>
  </ApolloProvider>

);

export default App;