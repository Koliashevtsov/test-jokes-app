import React from 'react';
import { useSelector } from 'react-redux';

import ListItems from '../../components/list-items';

const ListFavoriteItemsContainer = () => {
  const list = useSelector(state => state.jokesFavoriteList)
  return (
      <ListItems list={list} view="small"/>
  );
}
export default ListFavoriteItemsContainer;
