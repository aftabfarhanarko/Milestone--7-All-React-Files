
const getTheLocalStores = () => {
    const storages = localStorage.getItem("cart");
    if(storages){
        const convard = JSON.parse(storages);
        return convard;
    }
    return [];
}

const setLs = (cart) => {
    const convards = JSON.stringify(cart);
    localStorage.setItem("cart", convards);
}

const removed = (id) =>{
    const get = getTheLocalStores();
    const filters = get.filter(element => element !== id.id);
    setLs(filters);
}

const setTheLSItems = (id) =>{
    const getCointner = getTheLocalStores();
    const newStores = [...getCointner,id];
    setLs(newStores);
}

export {getTheLocalStores as getLocalSt,
       setTheLSItems as setLocalSt,
       removed
}