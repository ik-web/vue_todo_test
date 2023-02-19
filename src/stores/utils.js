export const getNewItemId = (data) => {
  const totalDataItems = data.length;
  const initialItemId = 1;

  if (totalDataItems) {
    return data[totalDataItems - 1].id + 1;
  }
  
  return initialItemId;
};

export const deleteItemFromData = (itemId, data) => {
  return data.filter(item => item.id !== itemId);
}

export const findItemInData = (itemId, data) => {
  return data.find(item => item.id === itemId);
};

export const getDeeplyDataCopy = (data) => {
  return JSON.parse(JSON.stringify(data));
};
