import * as constants from '../constants/actions'

export const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  switch(action.type){
    case constants.LOGIN_ERROR:
      return {
        ...state,
        authError: action.err.message
      }

    case constants.LOGIN_SUCCESS:
      return {
        ...state,
        authError: null
      }

    case constants.SIGNOUT_SUCCESS:
      return state;

    case constants.SIGNUP_SUCCESS:
      return {
        ...state,
        authError: null
      }

    case constants.SIGNUP_ERROR:
      return {
        ...state,
        authError: action.err.message
      }

    default:
      return state
  }
};

export default authReducer;