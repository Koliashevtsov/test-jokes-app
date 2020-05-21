import React from 'react';

import Form from '../form';
import ListItemsContainer from '../../containers/list-items-container';
import ListFavoriteItemsContainer from '../../containers/list-favorite-items-container';

const MainPanel = (props) => {

  return (
    <>
      <Form/>
      <ListItemsContainer/>
      Liked:
      <ListFavoriteItemsContainer/>
    </>
  );
}

export default MainPanel;
