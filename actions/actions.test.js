import * as actions from '../actions/index'

describe('actions', () => {
    it('should have a type of SET_PROFILE_DATA', () => {
        const profileData = { name: 'Jev', upcomingRides: 3}

        const expectedAction = {
            type: 'SET_PROFILE_DATA',
            profileData
        }

        const result = actions.setProfileData(profileData)

        expect(result).toEqual(expectedAction)
    });

    it('should have a type of SET_RIDE_DATA', () => {
        const rideData = {}

        const expectedAction = {
            type: 'SET_RIDE_DATA',
            rideData
        }

        const result = actions.setRideData(rideData)

        expect(result).toEqual(expectedAction)
    });

    it('should have a type of TOGGLE_LOGIN', () => {
        const bool = !bool;

        const expectedAction = {
            type: 'TOGGLE_LOGIN',
            bool
        }

        const result = actions.toggleLogin(bool)
        expect(result).toEqual(expectedAction)
    });

    it('should have a type of TOGGLE_CURRENT_FRIEND', () => {
        const num = 3;

        const expectedAction = {
            type: 'TOGGLE_CURRENT_FRIEND',
            num
        }

        const result = actions.toggleCurrentFriend(num)
        expect(result).toEqual(expectedAction)
    });

    it('should have a type of TOGGLE_CURRENT_RIDE', () => {
        const num = 4;

        const expectedAction = {
            type: 'TOGGLE_CURRENT_RIDE',
            num
        }

        const result = actions.toggleCurrentRide(num)
        expect(result).toEqual(expectedAction)
    });

    it('should have a type of TOGGLE_LOADING', () => {
        const bool = !bool;

        const expectedAction = {
            type: 'TOGGLE_LOADING',
            bool
        };

        const result = actions.toggleLoading(bool);
        expect(result).toEqual(expectedAction);

    });

    it('should have a type of TOGGLE_RIDE_ATTENDANCE', () => {
        const bool = !bool;

        const expectedAction = {
            type: 'TOGGLE_RIDE_ATTENDANCE',
            bool
        };

        const result = actions.toggleRideAttendance(bool)
        expect(result).toEqual(expectedAction)
    });

    it('should have a type of HAS_ERRORED', () => {
        const error = 'Error fetching data';

        const expectedAction = {
            type: 'HAS_ERRORED',
            error
        }

        const result = actions.hasErrored(error)
        expect(result).toEqual(expectedAction)
    })
})