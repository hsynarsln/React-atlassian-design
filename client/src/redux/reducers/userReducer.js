import { CLEAR_ERRORS, CLEAR_NOTIFICATION, DELETE_USER_FAIL, DELETE_USER_RESET, DELETE_USER_SUCCESS, GET_USERS_FAIL, GET_USERS_REQUEST, GET_USERS_SUCCESS, NOTIFICATION_FAIL, NOTIFICATION_SUCCESS } from '../constants/constants';

const initialState = {
  users: [],
  notification: {}
};

export const userReducer = (state = initialState.users, { type, payload }) => {
  switch (type) {
    case GET_USERS_REQUEST:
      return {
        loading: true
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: payload
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        users: [...state.users.filter(user => user[2] !== payload)],
        isDeleted: true
      };
    case GET_USERS_FAIL:
      return {
        loading: false,
        error: payload,
        users: null
      };

    case DELETE_USER_FAIL:
      return {
        ...state,
        error: payload,
        isDeleted: false
      };

    case DELETE_USER_RESET:
      return {
        ...state,
        isDeleted: false
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};

export const notificationReducer = (state = initialState.notification, { type, payload }) => {
  switch (type) {
    case NOTIFICATION_SUCCESS:
      return {
        message: payload,
        success: true
      };
    case NOTIFICATION_FAIL:
      return {
        message: payload,
        success: false
      };
    case CLEAR_NOTIFICATION:
      return {
        message: null,
        success: null
      };
    default:
      return state;
  }
};
