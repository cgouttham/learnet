
import React from 'react';
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';
import { Button } from '@material-ui/core';
import { useParams } from 'react-router';
import { useHistory, Link } from 'react-router-dom';


const QUERY_CONCEPTS = gql`
query AllConcepts {
  concepts {
    id
    title
    description
  }
}
`;

export function ConceptsView(props) {
  
  // Polling: provides near-real-time synchronization with your server
  // by causing a query to execute periodically at a specified interval
  const { data, loading } = useQuery(QUERY_CONCEPTS);

  // should handle loading status
  if (loading) return (<p>Loading...</p>);
  // List out all concepts
  const list = data.concepts.map(({ id, title, description }) => (
    <div key={ id }>
      <Button><Link to={`/concept/${id}`}>Concept - { id }: { title } { description }</Link></Button>
    </div>
  ));
  return (
    <div>
      <h1>Concepts List</h1>
      {list}
    </div>
  )
}