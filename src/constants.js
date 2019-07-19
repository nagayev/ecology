const consts = {};
consts.PACKET_TYPE = "packet";
consts.LAMP_TYPE = "lamp";
consts.getTask=(type,count)=>{
    if(type===consts.PACKET_TYPE) return `Утилизировать ${count} пластиковых пакета `;
    else if(type===consts.LAMP_TYPE) return `Отправить на переработку ${count} лампочку `;
    return 'Произошел троллинг'; //haahh
};
export default consts;