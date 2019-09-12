export const errorReducer = (state = '', action) => {
    switch(action.type) {
        case 'HAS_ERRORED':
            return action.bool

        default:
            return state;
    }
}