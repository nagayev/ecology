import React from 'react';
import PropTypes from 'prop-types';
import './Arrow.css';
import arrow from '../img/arrow.png';

const Arrow = props => (
    //if(props.go===undefined) props.go=function(){return 1;}
    <p onClick={props.go} data-to="planet" id="arrow"><img src={arrow} height="20" width="32" alt="&#x3C;-"/></p>
);

Arrow.propTypes={
    go:PropTypes.func.isRequired
};
export default Arrow;