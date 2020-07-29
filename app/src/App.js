import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { LearnApp } from './LearnAppView'
import { RoutesLearnApp } from './RoutesLearnApp'


const client = new ApolloClient({
    uri: 'http://localhost:8000/graphql/',
});

const App = () => (
  <ApolloProvider client={client}>
    {/* <div>
      <LearnApp/>
    </div> */}
    <div>
      <RoutesLearnApp/>
    </div>
  </ApolloProvider>

);

export default App;