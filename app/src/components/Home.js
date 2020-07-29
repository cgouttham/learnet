import React from 'react';
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';
import { Button } from '@material-ui/core';
import { useParams } from 'react-router';
import { useHistory, Link } from 'react-router-dom';


export function Home() {
  
    return (
      <div>
        <h1>Welcome to Learnet</h1>
        <Button><Link to='/concepts/'>Find something to learn!</Link></Button>
      </div>
    )
  }