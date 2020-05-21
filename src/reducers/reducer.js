const addLikedJoke = (state, action) => {
  const id = action.payload;
  const idx = state.jokesList.findIndex(item => item.id == id);
  const joke = state.jokesList[idx];
  console.log(joke);
  return [
    ...state.jokesFavoriteList,
    joke
  ]
}
const deleteLikedJoke = (state, action) => {
  const id = action.payload;
  const idx = state.jokesFavoriteList.findIndex(item => item.id == id)
  const joke = state.jokesFavoriteList[idx];
  const list = state.jokesFavoriteList;
  const newList = [
    ...list.slice(0, idx),
    ...list.slice(idx + 1)
  ]
  console.log(newList);
  return newList;
}

const reducer = (state, action) => {
  console.log(action.type);
  if (state === undefined){
    return {
      categList: [],
      jokesList: [],
      jokesFavoriteList: []
    };
  }
  switch (action.type) {
    case 'CATEGORIES_LOADED_SUCCESS':
      return {
        ...state,
        categList: action.payload
      };
    case 'JOKE_LOADED_SUCCESS':
      return {
        ...state,
        jokesList: [action.payload]
      };
    case 'ARR_JOKES_LOADED_SUCCESS':
      return {
        ...state,
        jokesList: action.payload
      };
    case 'JOKES_LIKED':
      return {
        ...state,
        jokesFavoriteList: addLikedJoke(state, action)
      };
    case 'JOKES_UNLIKED':
      return {
        ...state,
        jokesFavoriteList: deleteLikedJoke(state, action)
      };
    default:
      return state;
  }
}
export default reducer;
