import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addToFavorite, deleteFromFavorite } from '../../actions';

import LikeIcon from '../../components/like-icon';

const LikeIconContainer = ({ id }) => {
  const [ isFavorite, setIsFavorite ] = useState(false);
  const dispatch = useDispatch();
  const jokesFavoriteList = useSelector(state => state.jokesFavoriteList)

  const handleLikeClick = () => {
    isFavorite ? dispatch(deleteFromFavorite(id)) : dispatch(addToFavorite(id))
  }

  useEffect(() => {
    // see if this joke is favourite
    const idx = jokesFavoriteList.findIndex(item => item.id == id)
    if(idx >= 0){
      setIsFavorite(true)
    } else {
      setIsFavorite(false)
    }
  }, [id, jokesFavoriteList])

  return (
    <LikeIcon isFavorite={isFavorite} handleLikeClick={handleLikeClick}/>
  );
}
export default LikeIconContainer;
