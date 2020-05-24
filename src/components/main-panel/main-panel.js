import React from 'react';

import MainHeader from '../main-header';
import Form from '../form';
import ListItemsContainer from '../../containers/list-items-container';

import './main-panel.scss';

const MainPanel = (props) => {

  return (
    <div className="main-panel">
      <div className="container">
        <MainHeader/>
        <h1>Hey!</h1>
        <h2>Let's try to find a joke for you:</h2>
        <div className="container-form">
          <Form/>
        </div>
        <ListItemsContainer/>
      </div>
    </div>
  );
}

export default MainPanel;
