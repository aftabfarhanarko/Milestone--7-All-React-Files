const getTheLStores = () => {
  const storesValue = localStorage.getItem("cart");
  if (storesValue) {
    const convared = JSON.parse(storesValue);
    return convared;
  }
  return [];
};

const setLS = (items) => {
  const conveardsJSON = JSON.stringify(items);
  localStorage.setItem("cart", conveardsJSON);
};

const comopnendPassLS = (id) => {
  const find = getTheLStores();
  const newStores = [...find, id];
  setLS(newStores);
};

const removedIteminAddCard = (deletId) =>{
  const getLSItem = getTheLStores();
  const remininges = getLSItem.filter(storId => storId !== deletId);
  setLS(remininges);
}

export { getTheLStores as findLSValue, comopnendPassLS as setLocalStore,removedIteminAddCard };
