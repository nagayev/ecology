import React from 'react';
import PropTypes from 'prop-types';
import {Panel} from '@vkontakte/vkui';
import Title from './Title';
import TaskHeader from './TaskHeader';
import Task from './Task';
import storage from './storage';
import planet0 from '../img/planet0.png';
import planet1 from '../img/planet1.png';
//import consts from '../constants';
import './Planet.css';

const Planet = props => {
    const planet0Style = {
        backgroundImage: `url(bg.png) !important`,
        maxWidth: '90vw'
    }
    const planet1Style = {
        maxWidth: '90vw',
        position:'absolute',
        opacity:storage.getOpacity()
    }
    return (
        <Panel id={props.id}>
            <div id="content">
                <Title text="recycle." />
                <div id="div_earth" onClick={props.go} data-to="problem">
                    <img src={planet0} alt="" style={planet0Style} />
                    <img src={planet1} alt="" style={planet1Style} />
                </div>
                <TaskHeader text="Ваши задания" />
                <Task go={props.go} type="plastic" count="2" />
                <Task go={props.go} type="lamps" count="1" />
                <Task go={props.go} type="plastic" count="5" />
            </div>
        </Panel>
    );
}

Planet.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Planet;
