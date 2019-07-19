import React from 'react';
import PropTypes from 'prop-types';
import {Panel, /*PanelHeader, HeaderButton, platform, IOS */ } from '@vkontakte/vkui';
import Arrow from './Arrow';
import Facts from './Facts';
import Fix from './Fix';
//import Map from './Map';
//import consts from '../constants';
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
            {/*<Map center={[4,3]} />*/}
        </div>
    </Panel>
);
QuestPage.propTypes={
    //type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};
export default QuestPage