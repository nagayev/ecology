import React from 'react';
import PropTypes from 'prop-types';
import {Panel, /*PanelHeader, HeaderButton, platform, IOS */ } from '@vkontakte/vkui';
import Arrow from './Arrow';
import Slider from './Slider'
import './ProblemPage.css';

const ProblemPage = props => (
    <Panel id={props.id}>
        <Arrow go={props.go} />
        <Slider type="soil" current="1"/>

        <p id="header_problem">Проблема</p> <br />
        <p className="text">
        Батарейки портят почву, из-за чего гибнет флора.
        </p> 
        <p id="header_decision">Решение</p> <br />
        <p className="text">
        Чтобы переработать батарейки нужно отправить их в один из специальных пунктов приема.
        </p>
        <button id="button_help">Помоги планете</button>
    </Panel>
);
ProblemPage.propTypes={
    id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired
};
export default ProblemPage;