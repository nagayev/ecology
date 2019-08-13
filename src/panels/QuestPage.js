import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Panel} from '@vkontakte/vkui';
import Arrow from './Arrow';
import Facts from './Facts';
import Fix from './Fix';
import ThingBlock from './ThingBlock';
import connect from 'vkui-connect-promise';
import { Map, Marker, /*MarkerLayout */ } from 'yandex-map-react';
import getFacts from './getFacts';
import './Map.css';
import './QuestPage.css';
import plastic from '../img/bgplastic.png';

function getNumber(){
    const number = localStorage.getItem('batteryNumber');
    if(!number){
        //first run, batteryNumber is null
        localStorage.setItem('batteryNumber',2); //for future usage
        return 2;
    }
    return +number;
}
function handleError(err){
    console.error(err);
    debugger;
}
function getUserCoords(){
    //console.log('[DEBUG] Implement getUserCoords method ');
    var coords=[53.12,45.00];
    function callback(data){
        if(data.detail.type==="VKWebAppGeodataResult"){
            console.log(`Got user coords: ${Object.keys(data)}`);
            coords[0]=data.lat;
            coords[1]=data.long;
        }
    }
    connect.send('VKWebAppGetGeodata',{}).then(data=>callback(data)).catch((err)=>handleError(err));
    return coords;
}
const QuestPage = props =>{
    const postText =  "Новое экологическое приложение recycle супер!\nПодключайся и ты: https://vk.com/recycle_e";
    function share(){
        var opts = {
            method:"wall.post",request_id:"magicString",
            params:{message:postText}
        };
        console.log('share was called!');
        connect.send("VKWebAppCallAPIMethod",opts).then(data=>console.log('Successful wall.post!')).catch(err=>handleError(err));
    }
    function callback(){
        var onFetched = data => {
            var places = Object.values(data);
            for(let i=0;i<places.length;i++){
                places[i].lon=parseFloat(places[i].lng);
                places[i].lat=parseFloat(places[i].lat);
            }
            setMarkers(places);
        };
        var url = 'https://nagaevmt49.000webhostapp.com/recycle/server.php';
        var opts = {method:'GET'}
        fetch(url,opts).then(data=>data.json()).then(data=>onFetched(data)).catch(err=>handleError(err));
        }
        const [markers,setMarkers]=useState([]);
        return (
            <Panel id={props.id}>
                <Arrow go={props.go} />
                <div id="content">
                    <div>
                        <img id="img" src={plastic} alt="Failed to load background"></img>
                        <p id="header_main">{getFacts(props.type).header}</p>
                        <div id="share" onClick={share} /*style={{transform: 'matrix(-1, 0, 0, 1, 0, 0)'}} */>поделиться</div>
                    </div>
                    <Facts type={props.type} />
                    <br />
                    <Fix header="Как перерабатывать пластик? " 
                    text="Чтобы переработать пластик нужно отнести его в один из специальных пунктов приема." />
                    <br />
                    <ThingBlock type="battery" number={getNumber()} />
                    <Map id="map" onAPIAvailable={callback} center={getUserCoords()} zoom={13}>
                    {markers.map(marker => <Marker key={marker.id} lat={marker.lat} lon={marker.lon} />)}
                    </Map>
                </div>
            </Panel>
        );
}

QuestPage.propTypes={
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired //soil, atmos or water
};

export default QuestPage;