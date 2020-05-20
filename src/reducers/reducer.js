const reducer = (state, action) => {
  if (state === undefined){
    return {
      categList: [],
      jokesList: []
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
    default:
      return state;
  }
}
export default reducer;
