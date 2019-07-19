import React from 'react';
import PropTypes from 'prop-types';
import './FactHeader.css';

const FactHeader = props => (
    <div className="fact">{props.text}</div>
);
FactHeader.propTypes={
    text:PropTypes.string.isRequired
};
export default FactHeader;