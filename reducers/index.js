import { combineReducers } from 'redux';
import { setProfileDataReducer } from './setProfileDataReducer';
import { toggleLoginReducer } from './toggleLoginReducer';

export const rootReducer = combineReducers({
  profileData: setProfileDataReducer,
  isLoggedIn: toggleLoginReducer
});
