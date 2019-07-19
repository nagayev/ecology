import React from 'react';
import PropTypes from 'prop-types';
import './TaskHeader.css';
const TaskHeader = props => (
    <p id="header_tasks">{props.text}</p>
);
TaskHeader.propTypes = {
    text:PropTypes.string.isRequired
};
export default TaskHeader;