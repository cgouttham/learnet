import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';


export function HomeView() {
    return (
      <div>
        <h1>Welcome to Learnet</h1>
        <Button><Link to='/concepts/'>Find something to learn!</Link></Button>
      </div>
    )
}