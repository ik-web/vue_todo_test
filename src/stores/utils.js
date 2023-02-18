export const getNewItemId = (data) => {
  const totalDataItems = data.length;
  const initialItemId = 1;

  if (totalDataItems) {
    return data[totalDataItems - 1].id + 1;
  }
  
  return initialItemId;
};
