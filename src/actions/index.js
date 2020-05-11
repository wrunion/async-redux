import jsonPlaceholder from '../apis/jsonPlaceholder';

/* TO DISPATCH A FUNCTION W/THUNK: MANUALLY CALL DISPATCH!! */
export const fetchPosts = () => {
  /* Make the API call using async await */
  return async (dispatch) => {
    const response = await jsonPlaceholder.get('./posts');
    /* This returns an *object*, which is okay since we're using thunk, but we need to manuually call dispatch here. */
    dispatch({ type: 'FETCH_POSTS', payload: response.data});  
  }
};