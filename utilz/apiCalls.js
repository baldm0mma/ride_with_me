export const getData = async url => {
  const result = await fetch(url);
  const parsed = await result.json();
  return parsed;
};
