const storage = {
    getNumber:()=>getNumberFromLocalStorage('batteryNumber',2),
    getOpacity:()=>getNumberFromLocalStorage('planetOpacity',1.0)
};
function getNumberFromLocalStorage(value:string,defaultValue:number):number{
    const ret = localStorage.getItem(value);
    if(!ret){
        localStorage.setItem(value,defaultValue.toString());
        return defaultValue;
    }
    return +ret; //parse string to number
}
export default storage;