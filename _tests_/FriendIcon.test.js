import 'react-native'
import React from 'react';
import { shallow } from 'enzyme';
import { FriendIcon, mapStateToProps, mapDispatchToProps } from '../components/FriendIcon'

describe('FriendIcon', () => {
    let wrapper;
    let instance;
    let props;

    beforeEach(() => {
        props = {
            profileData: {name: 'Jev', upComingRides: 5, friend: {
                id: 1, 
                name: 'Taylor',
                userName: 'TayTay'
            }},
            toggleCurrentFriend: jest.fn()
        }
    wrapper = shallow(<FriendIcon {...props}/>);
        instance = wrapper.instance();
    })
    it('should match the snapshot', () => {
        expect(wrapper.toMatchSnapshot())
    })
})