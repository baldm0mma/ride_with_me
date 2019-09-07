export const fetchUsers = async () => {
    const response = await fetch(`https://motorcycle-ride.herokuapp.com/graphql?query={allUsers{id,firstName,lastName,username,email,phone}}`)
    const friendData = await response.json()
    return friendData;
};