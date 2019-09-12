import { getData } from './apiCalls';

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
                    json: () => Promise.resolve(data)
                })
            })
        })

        it('should call fetch with correct user url', () => {
            const expected = 'https://motorcycle-ride.herokuapp.com/graphql?query={user(id:1){id,username,firstName,lastName,avatar,about,backgroundImage,friends,{id,username,avatar,milesRiddenTogether}bikes{make,model,year,imageUrl}rides{id,title,description,distance,rideCategory,duration,date,imageLink,mapLink}}}'
            getData(expected);

            expect(window.fetch).toHaveBeenCalledWith(expected)
        });

        it('should call fetch with correct rides url', () => {
            const expected = 'https://motorcycle-ride.herokuapp.com/graphql?query={allRides{id,title,description,distance,rideCategory,duration,date,imageLink,mapLink}}'
            getData(expected);

            expect(window.fetch).toHaveBeenCalledWith(expected)
        });

        it('should return a response with profile data if status is okay', async () => {
            const url = 'https://motorcycle-ride.herokuapp.com/graphql?query={user(id:1){id,username,firstName,lastName,avatar,about,backgroundImage,friends,{id,username,avatar,milesRiddenTogether}bikes{make,model,year,imageUrl}rides{id,title,description,distance,rideCategory,duration,date,imageLink,mapLink}}}'
            const result = await getData(url);

            expect(result).toEqual(data)
        });

        it('it should return a response with ride data if status is okay', async () => {
            window.fetch = jest.fn().mockImplementationOnce(() => {
                return Promise.resolve({
                    ok: true,
                    json: () => Promise.resolve(rides)
                })
            })

            const url = 'https://motorcycle-ride.herokuapp.com/graphql?query={allRides{id,title,description,distance,rideCategory,duration,date,imageLink,mapLink}}'

            const result = await getData(url);
            expect(result).toEqual(rides)
        })
    })
})