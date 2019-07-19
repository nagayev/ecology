import React from 'react';
import PropTypes from 'prop-types';
import './Title.css';
const Title = props => (
    <div id="header_earth">
        {props.text}
    </div>
);
Title.propTypes = {
    //id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default Title;