import React from 'react';
import PropTypes from 'prop-types';
import {Panel, /*PanelHeader, HeaderButton, platform, IOS */ } from '@vkontakte/vkui';
import Title from './Title';
import TaskHeader from './TaskHeader';
import Task from './Task';
import planet0 from '../img/planet0.png';
import planet1 from '../img/planet1.png';
import consts from '../constants';
import './Planet.css';

const Planet = props => (
	<Panel id={props.id}>
        <div id="content">
        <Title text="recycle." />
        <div id="div_earth" onClick={props.go} data-to="problem">
            <img src={planet0} id="img_earth0" alt=""/>
            <img src={planet1} id="img_earth1" alt="Failed to load planet 1"/>
        </div>
        <TaskHeader text="Ваши задания" />
        <Task go={props.go} type={consts.PACKET_TYPE} count="2" />
        <Task go={props.go} type={consts.LAMP_TYPE} count="1" />
        <Task go={props.go} type={consts.PACKET_TYPE} count="5" />
        </div>
		
    </Panel>
);

Planet.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Planet;
