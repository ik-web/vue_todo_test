export const getNewItemId = (data) => {
  const totalDataItems = data.length;
  const initialItemId = 1;

  if (totalDataItems) {
    return data[totalDataItems - 1].id + 1;
  }
  
  return initialItemId;
};

export const deleteItem = (itemId, data) => {
  return data.filter(item => item.id !== itemId);
}

export const findItem = (itemId, data) => {
  return data.find(item => item.id === itemId);
};

export const getDiplyDataCopy = (data) => {
  return JSON.parse(JSON.stringify(data));
};
