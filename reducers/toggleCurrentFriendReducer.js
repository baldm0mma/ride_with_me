export const toggleCurrentFriendReducer = (state = null, action) => {
  switch (action.type) {
    case 'TOGGLE_CURRENT_FRIEND':
      return action.num;
    default:
      return state;
  }
};
