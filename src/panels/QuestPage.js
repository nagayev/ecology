import React from 'react';
import PropTypes from 'prop-types';
import {Panel, /*PanelHeader, HeaderButton, platform, IOS */ } from '@vkontakte/vkui';
import Arrow from './Arrow';
import Facts from './Facts';
import Fix from './Fix';
//import Map from './Map2';
import { Map, Marker, MarkerLayout } from 'yandex-map-react';
import './Map.css';
import './QuestPage.css';
import plastic from '../img/bgplastic.png';

const QuestPage = props => (
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
            <Map id="map" onAPIAvailable={function () { console.log('Map api loaded'); }} center={props.center} zoom={props.zoom}>
                <Marker lat={55.12} lon={45.00} />
            </Map>
        </div>
    </Panel>
);
QuestPage.propTypes={
    //type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};
export default QuestPage