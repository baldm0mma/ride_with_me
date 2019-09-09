import 'react-native'
import React from 'react';
import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';
import { FriendIcon, mapStateToProps, mapDispatchToProps } from '../components/FriendIcon'

// it('renders correctly, test using Jest', () => {
//     renderer.create(<FriendIcon />);
//   });

describe('FriendIcon', () => {
    let wrapper;
    let instance;
    let props;

    beforeEach(() => {
        props = {
            friend: {
                id: 1, 
                name: 'Taylor',
                userName: 'TayTay'
            },
            toggleCurrentFriend: jest.fn()
        }
        wrapper = shallow(<FriendIcon {...props}/>);
        instance = wrapper.instance();
    })
    it.skip('should match the snapshot', () => {
        expect(wrapper.toMatchSnapshot())
    })

    it('should ')
})