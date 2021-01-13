import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

import { listCustodys } from './graphql/queries';
import * as subscriptions from './graphql/subscriptions';

import Amplify, { API, graphqlOperation } from 'aws-amplify';

import { Paper, IconButton } from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AccountCircle from '@material-ui/icons/AccountCircle';





function App() {

const [custodies, setCustodies] = useState([]);








useEffect(() => {

  const customonUpdateCustody = /* GraphQL */ `
  subscription OnUpdateCustody {
    onUpdateCustody {
      id
      states {
        priority
      }
    }
  }
`;

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



const subscribeCustodies = async () => {
    try {
      const subscription = await API.graphql(graphqlOperation(customonUpdateCustody)).subscribe({
      next: data => { console.log (data.value.data);
      fetchCustodies();
      }
      });
      return () => subscription.unsubscribe()
    } catch (error) {
        console.log('error on subscription', error);
    }

  };
  const onPageRendered = async () => {
    fetchCustodies();
    subscribeCustodies();
};
    onPageRendered();
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
                        <div className="custodyID"><AccountCircle /> ID: {custody.id}</div>
                        
                    </div>
                    <div>
                    <div className="custodyGender">GENDER: {custody.gender ? custody.gender : 'NA'}</div>
                    </div>
                    <div>
                        <IconButton aria-label="like">
                        </IconButton>State: {custody.states.length>0 ? (custody.states[custody.states.length-1].priority) : ('NA')}
                        
                    </div>
                    <div className="custodyWeight">WEIGHT: {custody.weight ? custody.weight : 'NA'}</div>
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


