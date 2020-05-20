import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import ListItems from '../../components/list-items';

const ListItemsContainer = (props) => {

  const jokesList = useSelector(state => state.jokesList)

  return (
    <ListItems list={jokesList}/>
  );
}
export default ListItemsContainer;
