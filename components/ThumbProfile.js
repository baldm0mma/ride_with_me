import React from 'react';

const ThumbProfile = () => {
    return (
        <Avatar source={require('../assets')}/>
    )
}

const Avatar = styled.Image`
    background-color: 'black',
    padding: 30,
    position: 'relative',
    top: 50,
    right: 30,
    left: 0,
    bottom: 0,
    align-items: 'center',
    height: 60,
    width: 60,
    border-radius: 50%
`


export default ThumbProfile;