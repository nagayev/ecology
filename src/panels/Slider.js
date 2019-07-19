import React from 'react';
//import PropTypes from 'prop-types';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import soil from '../img/bgsoil.png';
import water from '../img/bgwater.jpg';
import atmos from '../img/bgatmos.png';

const Slider = props => {
    return (
        <AwesomeSlider>
            <div><img src={soil} /></div>
            <div><img src={water} /></div>
            <div><img src={atmos} /></div> 
        </AwesomeSlider>
    );
};
export default Slider;