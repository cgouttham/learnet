import React from 'react';
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';
import { Button, Typography, Divider  } from '@material-ui/core';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
const QUERY_CONCEPT = gql`
  query ConceptData($id: Int!) {
    concept (id: $id) {
      id
      # Resources associated with concept.
      resourceSet {
        id
        title
        description
      }
      # Prerequisite for Concept
      endConcept {
          startConcept {
            id
            title
          }
      }
      # Postrequisite for Concept
      startConcept {
          endConcept {
            id
            title
          }
      }
    }
  }

  `;

export function ConceptView(props) {
  // Polling: provides near-real-time synchronization with your server
  // by causing a query to execute periodically at a specified interval
  //const { data, loading } = useQuery(QUERY_CONCEPT, { pollInterval: 500 });
  // should handle loading status
  //if (loading) return (<p>Loading...</p>);
  const params = useParams();
  const history = useHistory();
  const { data, loading } = useQuery(QUERY_CONCEPT, { variables: {id: params.conceptID}});
  if (loading) return (<p>Loading...</p>);
  
  const resourceList = data.concept.resourceSet.map(({ id, title, description }) => (
    <div key={ id }>
      <p>Resource - { id }: Title: { title } Description: { description }</p>
    </div>
  ));
  
  const prereqList = data.concept.endConcept.map(({ startConcept }) => (
    <div key={ startConcept.id }>
      <Button><Link to={`/concept/${startConcept.id}`}>Prereq resource - { startConcept.id }: Title: { startConcept.title } Description: { startConcept.description }</Link></Button>
    </div>
  ));

  const postreqList = data.concept.startConcept.map(({ endConcept }) => (
    <div key={ endConcept.id }>
      <Button><Link to={`/concept/${endConcept.id}`}>Postreq resource - { endConcept.id }: Title: { endConcept.title } Description: { endConcept.description }</Link></Button>
    </div>
  ));

  return (
    <div>
      <Typography variant="h5" gutterBottom>General Concept Info</Typography>
      <p>Martin is a cool concept, number { props.concept } to be exact.</p>
      <Divider light />
      <Typography variant="h5" gutterBottom>Resources</Typography>
      { resourceList }
      <Divider light />
      <Typography variant="h5" gutterBottom>Prereqs for this concept</Typography>
      { prereqList }
      <Divider light />
      <Typography variant="h5" gutterBottom>Postreqs for this concept</Typography>
      { postreqList }
      <Divider light />
      <Button onClick={() => history.goBack()}>Go Back</Button>
    </div>
  )
}