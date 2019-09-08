import { combineReducers } from 'redux';
import { setProfileDataReducer } from './setProfileDataReducer';
import { toggleLoginReducer } from './toggleLoginReducer';
import { toggleCurrentFriendReducer } from './toggleCurrentFriendReducer';

export const rootReducer = combineReducers({
  profileData: setProfileDataReducer,
  isLoggedIn: toggleLoginReducer,
  currentFriend: toggleCurrentFriendReducer
});
