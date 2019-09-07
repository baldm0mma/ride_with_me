import { combineReducers } from 'redux';
import { setProfileDataReducer } from './setProfileDataReducer';
import { usersReducer } from './usersReducer';

export const rootReducer = combineReducers({
  profileData: setProfileDataReducer,
  users: usersReducer
});
