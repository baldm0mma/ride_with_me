import { combineReducers } from 'redux';
import { setProfileDataReducer } from './setProfileDataReducer';

export const rootReducer = combineReducers({
  profileData: setProfileDataReducer
});
