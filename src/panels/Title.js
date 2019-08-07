import React from 'react';
import PropTypes from 'prop-types';

const Title = props => {
    const titleStyle = {
        paddingTop: '15px',
        textAlign:'center',
        fontWeight: 500,
        lineHeight: '29px',
        color:'white'
    }
    return (
        <div style={titleStyle}>
            {props.text}
        </div>
    );
};

Title.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Title;