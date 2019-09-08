import React from 'react';
import styled from 'styled-components';

const ThumbProfile = ({name, id}) => {
    return (
        <>
            {/* <Avatar source={require(`../assets/00${id}-helmet.png`)}/> */}
            <Name>{name}</Name>
        </>
    )
}

const Avatar = styled.Image`
    background-color: 'black';
    padding: 30;
    position: 'relative';
    top: 50;
    right: 30;
    left: 0;
    bottom: 0;
    align-items: 'center';
    height: 60px;
    width: 60px;
    border-radius: 50%;
`

const Name = styled.Text`
    font-size: 18px;
`


export default ThumbProfile;