
import React from 'react';
import { useQuery } from 'react-apollo';
import { Button } from '@material-ui/core';
import { QUERY_CONCEPTS } from '../utils/gql_queries';
import { Link } from 'react-router-dom';


export function ConceptsView() {
  
  const { data, loading } = useQuery(QUERY_CONCEPTS);

  // loading status until concepts load.
  if (loading) return (<p>Loading...</p>);
  
  // List out all concepts
  const concept_list = data.concepts.map(({ id, title, description }) => (
    <div key={ id }>
      <Button><Link to={`/concept/${id}`}>Concept - { id }: { title } { description }</Link></Button>
    </div>
  ));


  return (
    <div>
      <h1>Concepts List</h1>
      {concept_list}
    </div>
  )
}