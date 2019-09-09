export const toggleCurrentRideReducer = (state = null, action) => {
  switch (action.type) {
    case 'TOOGLE_CURRENT_RIDE':
      return action.num;
    default:
      return state;
  }
};
