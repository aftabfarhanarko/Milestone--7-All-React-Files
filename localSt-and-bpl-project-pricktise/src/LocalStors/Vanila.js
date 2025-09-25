

const getLS = () => {
    const items = localStorage.getItem('cart');
    if(items){
        const convart = JSON.parse(items);
        return convart;
    }
    return [];
}

const setLocalSt =(res) => {
  const cons = JSON.stringify(res);
  localStorage.setItem('cart', cons);
}

const setLStor = (id) => {
  const get = getLS();
  const newAddes = [...get, id];
  setLocalSt(newAddes);
}


export{getLS, setLStor}