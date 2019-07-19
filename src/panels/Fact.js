import React from 'react';
import PropTypes from 'prop-types';
import './Fact.css';
const Fact = props => (
    <div className="fact2">{props.text}</div>
);
Fact.propTypes={
    text:PropTypes.string.isRequired
};
export default Fact;