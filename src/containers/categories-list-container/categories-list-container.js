import React, { useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loadCategoryFromApi } from '../../actions';

import CategoriesList from '../../components/form/categories-list';
import { ChuckServiceContext } from '../../components/chuck-service-context';

const CategoriesListContainer = ({ handleTerm }) => {

  const chuckService = useContext(ChuckServiceContext);
  const dispatch = useDispatch();

  // in this effect i write categories data from api to global store
  useEffect(() => {
    dispatch(loadCategoryFromApi(chuckService))
  }, [chuckService])

  // now i get categories data from global store and use it in component
  const categList = useSelector(state => state.categList)

  return (
    <CategoriesList list={categList} handleTerm={handleTerm}/>
  );
}
export default CategoriesListContainer;
