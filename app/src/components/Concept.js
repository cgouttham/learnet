import React from 'react';
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';
import { Button } from '@material-ui/core';



const QUERY_CONCEPTS = gql`
query AllConcepts {
  concepts {
    id
    title
    description
  }
}
`;

const QUERY_CONCEPT = gql`
  query ConceptWithResources($id: Int!) {
    concept (id: $id) {
      id
      resourceSet {
        id
        title
        description
      }
    }
  }
  `;


export function ConceptsView(props) {
  
  // Polling: provides near-real-time synchronization with your server
  // by causing a query to execute periodically at a specified interval
  const { data, loading } = useQuery(QUERY_CONCEPTS);
  
  // should handle loading status
  if (loading) return (<p>Loading...</p>);
  console.log(data)
  // List out all concepts
  const list = data.concepts.map(({ id, title, description }) => (
    <div key={ id }>
      <Button onClick={ () => props.setConcept(id) }>Concept - { id }: { title } { description }</Button>
    </div>
  ));
  return (
    <div>
      <h1>Concepts List</h1>
      {list}
    </div>
    

  )
}

export function ConceptView(props) {
  // Polling: provides near-real-time synchronization with your server
  // by causing a query to execute periodically at a specified interval
  //const { data, loading } = useQuery(QUERY_CONCEPT, { pollInterval: 500 });
  // should handle loading status
  //if (loading) return (<p>Loading...</p>);
  const { data, loading } = useQuery(QUERY_CONCEPT, { variables: {id: props.concept}});
  if (loading) return (<p>Loading...</p>);
  console.log("DATA: ", data)

  const resourceList = data.concept.resourceSet.map(({ id, title, description }) => (
    <div key={ id }>
      <p>Resource - { id }: Title: { title } Description: { description }</p>
    </div>
  ));
  return (
    <div>
      <p>Martin is a cool concept, number { props.concept } to be exact.</p>
      { resourceList }
      <Button onClick={ () => props.setConcept(null) }> Back to the concept list!</Button>
    </div>
  )
}