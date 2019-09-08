import { combineReducers } from 'redux';
import { setProfileDataReducer } from './setProfileDataReducer';
import { setRideDataReducer } from './setRideDataReducer';
import { toggleLoginReducer } from './toggleLoginReducer';
import { toggleCurrentFriendReducer } from './toggleCurrentFriendReducer';
import { toggleCurrentRideReducer } from './toggleCurrentRideReducer';

export const rootReducer = combineReducers({
  profileData: setProfileDataReducer,
  rideData: setRideDataReducer,
  isLoggedIn: toggleLoginReducer,
  currentFriend: toggleCurrentFriendReducer,
  currentRide: toggleCurrentRideReducer
});
