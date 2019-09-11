export const toggleCurrentRideReducer = (state = null, action) => {
  switch (action.type) {
    case 'TOGGLE_CURRENT_RIDE':
      return action.num;
    default:
      return state;
  }
};
