import { combineReducers } from 'redux';
import { setProfileDataReducer } from './setProfileDataReducer';
import { setRideDataReducer } from './setRideDataReducer';
import { toggleLoginReducer } from './toggleLoginReducer';
import { toggleLoadingReducer } from './toggleLoadingReducer';
import { toggleCurrentFriendReducer } from './toggleCurrentFriendReducer';
import { toggleCurrentRideReducer } from './toggleCurrentRideReducer';
import { toggleRideAttendanceReducer } from './toggleRideAttendanceReducer';
import { errorReducer } from './errorReducer';

export const rootReducer = combineReducers({
  profileData: setProfileDataReducer,
  rideData: setRideDataReducer,
  isLoggedIn: toggleLoginReducer,
  isLoading: toggleLoadingReducer,
  currentFriend: toggleCurrentFriendReducer,
  currentRide: toggleCurrentRideReducer,
  rideAttendance: toggleRideAttendanceReducer,
  error: errorReducer
});
