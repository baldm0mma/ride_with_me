export const toggleCurrentFriendReducer = (state = 0, action) => {
  switch (action.type) {
    case 'TOGGLE_CURRENT_FRIEND':
      return action.num;
    default:
      return state;
  }
};
