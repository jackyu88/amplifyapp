import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

import { listCustodys } from './graphql/queries';
import Amplify, { API, graphqlOperation } from 'aws-amplify';

import { Paper, IconButton } from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import FavoriteIcon from '@material-ui/icons/Favorite';

function App() {

const [custodies, setCustodies] = useState([]);

const fetchCustodies = async () => {
    try {
        //const custodyData = await API.graphql(graphqlOperation(listCustodys));
        const custodyData = await API.graphql({query: listCustodys, authMode: 'API_KEY'});
        const custodyList = custodyData.data.listCustodys.items;
        console.log('custody list', custodyList);
        setCustodies(custodyList);
    } catch (error) {
        console.log('error on fetching custodies', error);
    }
};

useEffect(() => {
    fetchCustodies();
}, []);

  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>We now have Auth! </h1>

<h2>Current Custodies</h2>
<div className="custodyList">
    {custodies.map((custody, idx) => {
        return (
            <Paper variant="outlined" elevation={2} key={`custody${idx}`}>
                <div className="custodyCard">
                    
                    <div>
                        <div className="custodyID">ID: {custody.id}</div>
                        <div className="custodyGender">GENDER: {custody.gender}</div>
                    </div>
                    <div>
                        <IconButton aria-label="like">
                            <FavoriteIcon />
                        </IconButton>
                        STATUS: {custody.status}
                    </div>
                    <div className="custodyWeight">WEIGHT: {custody.weight}</div>
                </div>
            </Paper>
        );
    })}
</div>



      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);


