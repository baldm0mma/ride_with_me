import { combineReducers } from 'redux';
import { setProfileDataReducer } from './setProfileDataReducer';
import { setRideDataReducer } from './setRideDataReducer';
import { toggleLoginReducer } from './toggleLoginReducer';
import { toggleLoadingReducer } from './toggleLoadingReducer';
import { toggleCurrentFriendReducer } from './toggleCurrentFriendReducer';
import { toggleCurrentRideReducer } from './toggleCurrentRideReducer';

export const rootReducer = combineReducers({
  profileData: setProfileDataReducer,
  rideData: setRideDataReducer,
  isLoggedIn: toggleLoginReducer,
  isLoading: toggleLoadingReducer,
  currentFriend: toggleCurrentFriendReducer,
  currentRide: toggleCurrentRideReducer
});
