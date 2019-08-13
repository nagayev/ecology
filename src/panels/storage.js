const storage = {};
function getNumberFromLocalStorage(value,defaultValue){
    const ret = localStorage.getItem(value);
    if(!ret){
        localStorage.setItem(value,defaultValue);
        return defaultValue;
    }
    return +ret;
}
storage.getNumber=()=>{
    return getNumberFromLocalStorage('batteryNumber',2);
}
storage.getOpacity=()=>{
    return getNumberFromLocalStorage('planetOpacity',1.0);
}
export default storage;