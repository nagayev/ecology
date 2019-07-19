import React from 'react';
import PropTypes from 'prop-types';

const Slider = props => (
    <div>
        {props.type}
    </div>
);
Slider.propTypes={
    type:PropTypes.string.isRequired,
    current:PropTypes.string.isRequired
};
export default Slider;