import React from 'react';
import PropTypes from 'prop-types';
import './Fix.css';
const Fix = props => (
    <div id="div_fix">
        <div id="header_fix">{props.header}</div>
        <div id="content_fix">{props.text}</div>
    </div>
);
Fix.propTypes={
    header:PropTypes.string.isRequired,
    text:PropTypes.string.isRequired
};
export default Fix;