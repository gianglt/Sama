const url = "https://randomuser.me/api/?seed=1&page=3&results=10";
//const url = "http://dummy.restapiexample.com/api/v1/employees";

export const FETCH_DATA_BEGIN   = 'FETCH_DATA_BEGIN';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const fetchTheDataBegin = () => ({
  type: FETCH_DATA_BEGIN
});

export const fetchTheDataSuccess = items => ({
  type: FETCH_DATA_SUCCESS,
  payload: { items }
});

export const fetchTheDataFailure = error => ({
  type: FETCH_DATA_FAILURE,
  payload: { error }
});

export function fetchTheData() {
    return dispatch => {
      dispatch(fetchTheDataBegin());
      return fetch(url)
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(fetchTheDataSuccess(json.results));
          //console.log(json.results);
          return json.results;
        })
        .catch(error => dispatch(fetchTheDataFailure(error)));
    };
  }
  
  // Handle HTTP errors since fetch won't.
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }



