import React from 'react';
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';
import { Button } from '@material-ui/core';
import { useParams } from 'react-router';
import { useHistory, Link } from 'react-router-dom';


export function Home() {
  

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