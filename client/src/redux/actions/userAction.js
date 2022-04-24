import { CLEAR_ERRORS, DELETE_USER_FAIL, DELETE_USER_REQUEST, DELETE_USER_SUCCESS, GET_USERS_FAIL, GET_USERS_REQUEST, GET_USERS_SUCCESS, NOTIFICATION_FAIL, NOTIFICATION_SUCCESS } from '../constants/constants';

//! LOAD USERS
export const loadUsers = () => async dispatch => {
  try {
    dispatch({ type: GET_USERS_REQUEST });

    const data = await fetch(`http://localhost:8080/data`).then(res => res.json());
    console.log(data);

    dispatch({ type: GET_USERS_SUCCESS, payload: data });
    dispatch({ type: NOTIFICATION_SUCCESS, payload: 'Users loaded successfully' });
  } catch (error) {
    dispatch({ type: GET_USERS_FAIL, payload: error.response });
    dispatch({ type: NOTIFICATION_FAIL, payload: 'Users could not be loaded' });
  }
};

//! DELETE USER
export const deleteUser = email => async dispatch => {
  try {
    dispatch({ type: DELETE_USER_REQUEST });

    dispatch({ type: DELETE_USER_SUCCESS, payload: email });
    dispatch({ type: NOTIFICATION_SUCCESS, payload: `${email} deleted successfully` });
  } catch (error) {
    dispatch({ type: DELETE_USER_FAIL, payload: error.response });
    dispatch({ type: NOTIFICATION_SUCCESS, payload: `${email} could not be deleted` });
  }
};

//! CLEAR ERRORS
export const clearErrors = () => async dispatch => {
  dispatch({ type: CLEAR_ERRORS });
};
