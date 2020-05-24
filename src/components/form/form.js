import React, { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';

import { loadJokeRandom, loadJokeCategName, loadJokeTextInput } from '../../actions';

import InputRadio from '../input-radio';
import InputSubmit from '../input-submit';
import CategoriesListContainer from '../../containers/categories-list-container';
import SearchPanel from './search-panel';

import { ChuckServiceContext } from '../chuck-service-context';


const Form = (props) => {
  const dispatch = useDispatch();
  const chuckService = useContext(ChuckServiceContext);

  // state input-radio checked status
  const [ isActive, setIsActive ] = useState('Random');
  // state searching joke user input
  const [ term, setTerm ] = useState('');
  const [ categoryName, setCategoryName ] = useState(null);

  const handleNameCategory = (categoryName) => {
    console.log(categoryName);
    setCategoryName(categoryName)
  }

  const handleTermText = (e) => {
    setTerm(e.target.value)
  }



  const handleOnSubmit = (e) => {
    e.preventDefault();

    switch (isActive) {
      case "Random":
        dispatch(loadJokeRandom(chuckService))
        break;
      case "From categories":
        dispatch(loadJokeCategName(chuckService, categoryName))
        break;
      case "Search":
        dispatch(loadJokeTextInput(chuckService, term))
        break;
      default:
        return
    }

    // clear term
    setTerm('')
  }

  return (
    <form className="form" onSubmit={handleOnSubmit}>
      <InputRadio cont="Random" isActive={isActive} changeIsActive={setIsActive}/>
      <InputRadio cont="From categories" isActive={isActive} changeIsActive={setIsActive}>
        <CategoriesListContainer handleTerm={handleNameCategory}/>
      </InputRadio>
      <InputRadio cont="Search" isActive={isActive} changeIsActive={setIsActive}>
        <SearchPanel value={term} handleTerm={handleTermText}/>
      </InputRadio>
      <InputSubmit/>
    </form>
  );
}

export default Form;
