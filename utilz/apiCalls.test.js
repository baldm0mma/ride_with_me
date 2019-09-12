import { getData } from './apiCalls';
import { userProfle, allRides } from './urlz';

describe('apiCalls', () => {
    describe('getData', () => {
        let data;
        let rides;

        beforeEach(() => {
            data = {name: 'Slosher', upcomingRides: 3, friends: [{id: 1, name: 'Alabama Woorley'}, {id: 2, name: 'Black Mamba'}]};
            rides = [{name: 'Golden Ticket'}, {name: 'Mountain Loop'}];

            window.fetch = jest.fn().mockImplementation(() => {
                return Promise.resolve({
                    ok: true,
                    json: () => Promise.resolve()
                })
            })
        })

        it('should call fetch with correct url', () => {
            const expected = 'https://motorcycle-ride.herokuapp.com/graphql?query={user(id:1){id,username,firstName,lastName,avatar,about,backgroundImage,friends,{id,username,avatar,milesRiddenTogether}bikes{make,model,year,imageUrl}rides{id,title,description,distance,rideCategory,duration,date,imageLink,mapLink}}}'
            getData(expected);

            expect(window.fetch).toHaveBeenCalledWith(expected)
        });

        it('should call fetch with correct url', () => {
            const expected = 'https://motorcycle-ride.herokuapp.com/graphql?query={allRides{id,title,description,distance,rideCategory,duration,date,imageLink,mapLink}}'
            getData(expected);

            expect(window.fetch).toHaveBeenCalledWith(expected)
        })

    })
})