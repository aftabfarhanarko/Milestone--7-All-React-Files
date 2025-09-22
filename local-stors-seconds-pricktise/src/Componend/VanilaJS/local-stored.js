
const getTheLocalStorages = () => {
    const theItem = localStorage.getItem("card");
    if(theItem){
        const convard = JSON.parse(theItem);
        return convard;
    }
    return [];
};


const setvalues = (content) =>{
    const converds = JSON.stringify(content);
    localStorage.setItem("card", converds);
}

const setyTheLocalStores = (id) => {
    const findGetitems = getTheLocalStorages();
    const newArrayCreat = [...findGetitems, id];
    setvalues(newArrayCreat);

}

const removedsAddLisets = (id) => {
    const getSystems = getTheLocalStorages();
    const allFilters = getSystems.filter(ones => 
        ones !== id);
    setvalues(allFilters);
}
export{
    getTheLocalStorages as getLocalStor ,
    setyTheLocalStores as setLocalStor,
    removedsAddLisets
}