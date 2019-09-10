export const toggleCurrentRideReducer = (state = 0, action) => {
  switch (action.type) {
    case 'TOGGLE_CURRENT_RIDE':
      return action.num;
    default:
      return state;
  }
};
