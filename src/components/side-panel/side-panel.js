import React from 'react';

import ListFavoriteItemsContainer from '../../containers/list-favorite-items-container';

import './side-panel.scss';

const SidePanel = () => {
  return (
    <div className="side-panel">
      <div className="container">
        <p className="favourite">Favourite</p>
        <ListFavoriteItemsContainer/>
      </div>
    </div>
  );
}
export default SidePanel;
