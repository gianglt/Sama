const url = "http://dummy.restapiexample.com/api/v1/employees";

export const FETCH_PRODUCTS_BEGIN   = 's_FETCH_PRODUCTS_BEGIN';
export const FETCH_PRODUCTS_SUCCESS = 's_FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 's_FETCH_PRODUCTS_FAILURE';

export const fetchTheDataBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
});

export const fetchTheDataSuccess = items => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { items }
});

export const fetchTheDataFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error }
});

export function fetchTheData() {
    return dispatch => {
      dispatch(fetchTheDataBegin());
      return fetch(url)
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(fetchTheDataSuccess(json.data));
          //console.log(json.data);
          return json.data;
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



