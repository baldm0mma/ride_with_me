

// const url = 'https://motorcycle-ride.herokuapp.com/graphql?query={allUsers{username}}';

export const getUsers = async url => {
  const result = await fetch(url);
  const parsed = await result.json();
  console.log('parsed', parsed)
  return parsed;
};
