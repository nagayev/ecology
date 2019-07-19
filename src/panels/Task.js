import React from 'react';
import PropTypes from 'prop-types';
import consts from '../constants';
import './Task.css';

const Task = props => (
    <button className="progress" onClick={props.go} data-to="quest">
    {consts.getTask(props.type,props.count)}
    <div className="line"></div>
    <span className="bold">0/{props.count}</span>
    </button> //this should be button
);
Task.propTypes = {
    go: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    count: PropTypes.string.isRequired,
};

export default Task;