// load categories
const loadCategorySuccess = (data) => {
  return {
    type: 'CATEGORIES_LOADED_SUCCESS',
    payload: data
  };
}
const loadCategoryError = (err) => {
  return {
    type: 'CATEGORIES_LOADED_SUCCESS',
    payload: err
  };
}
const loadCategoryFromApi = (chuckService) => (dispatch) => {
  chuckService.getAllCategories()
    .then(res => {
      if (res.status === 200) dispatch(loadCategorySuccess(res.data))
    })
    .catch(err => dispatch(loadCategoryError(err)))
}



// load joke ////////////////////////////////////////////////////////////////
const loadJokeSuccess = (data) => {
  return {
    type: 'JOKE_LOADED_SUCCESS',
    payload: data
  };
}
const loadJokeError = (err) => {
  return {
    type: 'JOKE_LOADED_FAILURE',
    payload: err
  };
}


const loadJokeRandom = (chuckService) => (dispatch) => {
  chuckService.getRandomJoke()
    .then(res => {
      if (res.status === 200) dispatch(loadJokeSuccess(res.data))
    })
    .catch(err => dispatch(loadJokeError(err)))
}


const loadJokeCategName = (chuckService, categoryName) => (dispatch) => {
  chuckService.getJokeFromCateg(categoryName)
    .then(res => {
      console.log(res);
      if (res.status === 200) dispatch(loadJokeSuccess(res.data))
    })
    .catch(err => dispatch(loadJokeError(err)))
}



// load few jokes by text /////////////////////////////////////////////////////
const loadArrJokesSuccess = (data) => {
  return {
    type: 'ARR_JOKES_LOADED_SUCCESS',
    payload: data
  };
}
const loadArrJokesError = (err) => {
  return {
    type: 'ARR_JOKES_LOADED_FAILURE',
    payload: err
  };
}

const loadJokeTextInput = (chuckService, jokeText) => (dispatch) => {
  chuckService.getJokeByText(jokeText)
    .then(res => {
      console.log(res);
      if (res.status === 200) dispatch(loadArrJokesSuccess(res.data.result))
    })
    .catch(err => dispatch(loadArrJokesError(err)))
}


// handle favorite joke
const addToFavorite = (id) => {
  return {
    type: 'JOKES_LIKED',
    payload: id
  };
}
const deleteFromFavorite = (id) => {
  return {
    type: 'JOKES_UNLIKED',
    payload: id
  };
}

export {
  loadCategoryFromApi,
  loadJokeRandom,
  loadJokeCategName,
  loadJokeTextInput,
  addToFavorite,
  deleteFromFavorite
}
