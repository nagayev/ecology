import React from 'react';
import PropTypes from 'prop-types';
import {Panel, /*PanelHeader, HeaderButton, platform, IOS */ } from '@vkontakte/vkui';
import Arrow from './Arrow';
import Facts from './Facts';
import Fix from './Fix';
import connect from '@vkontakte/vkui-connect';
import { Map, Marker, MarkerLayout } from 'yandex-map-react';
import './Map.css';
import './QuestPage.css';
import plastic from '../img/bgplastic.png';

function getUserCoords(){
    console.log('[DEBUG] Implement getUserCoords method ');
    var coords=[53.12,45.00];
    connect.subscribe(e=>{
        if(e.detail.type==="VKWebAppGeodataResult"){
            console.log(`Got user coords: ${Object.keys(e)}`);
            coords[0]=e.lat;
            coords[1]=e.long;
        }
    })
    connect.send('VKWebAppGetGeodata',{});

    return coords;
}
const QuestPage = props =>{
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
        fetch(url,opts).then(data=>data.json()).then(data=>onFetched(data));
        }
        const [markers,setMarkers]=React.useState([]);
        //console.log(markers);
        return (
            <Panel id={props.id}>
                <Arrow go={props.go} />
                <div id="content">
                    <img id="img" src={plastic} alt="Failed to load background"></img>
                    <p id="header_main">Чем вреден пластик?</p>
                    <Facts />
                    <br />
                    <Fix header="Как перерабатывать пластик? " 
                    text="Чтобы переработать пластик нужноотнести его в один из специальных пунктов приема." />
                    <br />
                    <Map id="map" onAPIAvailable={callback} center={getUserCoords()} zoom={13}>
                    {markers.map(marker => <Marker key={marker.id} lat={marker.lat} lon={marker.lon} />)}
                    </Map>
                </div>
            </Panel>
        );
}
QuestPage.propTypes={
    //type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};
export default QuestPage