export const toggleCurrentFriendReducer = (state = null, action) => {
  switch (action.type) {
    case 'TOOGLE_CURRENT_FRIEND':
      return action.num;
    default:
      return state;
  }
};
