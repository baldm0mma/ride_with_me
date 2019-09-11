import { setProfileDataReducer } from './setProfileDataReducer';
import { setRideDataReducer } from './setRideDataReducer';
import { toggleCurrentFriendReducer } from './toggleCurrentFriendReducer';
import { toggleCurrentRideReducer } from './toggleCurrentRideReducer';
import { toggleLoginReducer } from './toggleLoginReducer';
import { toggleLoadingReducer } from './toggleLoadingReducer';
import { toggleRideAttendanceReducer } from './toggleRideAttendanceReducer'


describe('setProfileDataReducer', () => {
    let test;

    beforeEach(() => {
        test = {
            profile: 'profile'
        }
    })
    it('should return initial state', () => {
        const expected = test;

        const result = setProfileDataReducer(undefined, test);
        expect(result).toEqual(expected)
    });

    it('should update state with SET_PROFILE_DATA', () => {
        const state = test;
        const profileData = {name: 'Jev', upcomingRides: 10}

        const action = {
            type: 'SET_PROFILE_DATA',
            profileData
        }

        const expected = {name: 'Jev', upcomingRides: 10}
        const result = setProfileDataReducer(state, action)

        expect(result).toEqual(expected)
    });
})

describe('setRideDataReducer', () => {
    let test;
    
    beforeEach(() => {
        test = {
            ride: 'ride'
        }
    })

    it('should return initial state', () => {
        const expected = test;

        const result = setRideDataReducer(undefined, test);

        expect(result).toEqual(expected)
    });
 
    it('should update state with SET_RIDE_DATA', () => {
        const state = test;
        const rideData = {location: 'Evergreen', date: '9/13/19', vibe: 'chill'}

        const action = {
            type: 'SET_RIDE_DATA',
            rideData
        };

        const expected = {location: 'Evergreen', date: '9/13/19', vibe: 'chill'}
        const result = setRideDataReducer(state, action)

        expect(result).toEqual(expected)
    });
});

describe('toggleCurrentFriendReducer', () => {
    it('should return initial state', () => {
        const state = null;
        const action = {
            type: 'TOGGLE_CURRENT_FRIEND'
        }
        const expected = undefined;
        const result = toggleCurrentFriendReducer(state, action)

        expect(result).toEqual(expected)
    });
    
    it('should update state with TOGGLE_CURRENT_FRIEND', () => {
        const state = null;
        const num = 2;

        const action = {
            type: 'TOGGLE_CURRENT_FRIEND',
            num
        }

        const expected = 2
        const result = toggleCurrentFriendReducer(state, action)

        expect(result).toEqual(expected)
    });
});

describe('toggleCurrentRideReducer', () => {
    it('should return initial state', () => {
        const state = null
        const action = {
            type: 'TOGGLE_CURRENT_RIDE'
        };
        const expected = undefined
        const result = toggleCurrentRideReducer(state, action);

        expect(result).toEqual(expected)
    });

    it('should update state with TOGGLE_CURRENT_RIDE', () => {
        const state = null;
        const num = 4;

        const action = {
            type: 'TOGGLE_CURRENT_RIDE',
            num
        }

        const expected = 4;
        const result = toggleCurrentRideReducer(state, action);

        expect(result).toEqual(expected)
    });
});

describe('toggleLoginReducer', () => {
    it('should return initial state', () => {
        const expected = false;

        const result = toggleLoginReducer(undefined, expected);

        expect(result).toEqual(expected);
    });

    it('should update state with TOGGLE_LOGIN', () => {
        const state = false;
        const bool = !state;

        const action = {
            type: 'TOGGLE_LOGIN',
            bool
        }

        const expected = true;
        const result = toggleLoginReducer(state, action);

        expect(result).toEqual(expected)
    });
});

describe('toggleLoadingReducer', () => {
    it('should return initial state', () => {
        const expected = false;

        const result = toggleLoadingReducer(undefined, expected)

        expect(result).toEqual(expected)
    });

    it('should update state with TOGGLE_LOADING', () => {
        const state = false;
        const bool = !false;

        const action = {
            type: 'TOGGLE_LOADING',
            bool
        };

        const expected = true;

        const result = toggleLoadingReducer(state, action);

        expect(result).toEqual(expected)
    });
});

describe('toggleRideAttendanceReducer', () => {
    it('should return initial state', () => {
        const expected = false;

        const result = toggleRideAttendanceReducer(undefined, expected)
        expect(result).toEqual(expected)
    });

    it('should update state with TOGGLE_RIDE_ATTENDANCE', () => {
        const state = false;
        const bool = !false;

        const action = {
            type: 'TOGGLE_RIDE_ATTENDANCE',
            bool
        }

        const expected = true;

        const result = toggleRideAttendanceReducer(state, action);

        expect(result).toEqual(expected)
    })
})