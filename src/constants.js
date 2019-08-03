const consts = {};
consts.PLASTIC = "plastic";
consts.LAMPS = "lamps";
consts.BATTERY="battery";

consts.getTask=(type,count)=>{
    switch(type){
        case consts.PLASTIC:
            return `Утилизировать ${count} пластиковых пакета `;
        case consts.LAMPS:
            return `Отправить на переработку ${count} лампочку `;
        case consts.BATTERY:
            return `ОО Батарейка)` //FIXME:
        default:
            return 'Произошел троллинг'; //haahh
    }
};
export default consts;