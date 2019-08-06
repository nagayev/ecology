import React, {useState} from 'react';
import PropTypes from 'prop-types';
import battery from '../img/battery.png';

/*
const ThingBlock = props => {
    //var thingPath = `../img/${props.type}.png`;
    const containerStyle = {
        display:'flex'
    };
    const plusStyle = {
        'fontFamily':'Monserrat',
        'fontSize':'24px'
    };
    const thingStyle = {
        'width':'40px',
        'height':'40px'
    };
    var addThing = () => {
        console.log('ping');
        thingArray.push(<img style={thingStyle} src={battery} />);
        //console.log(this);
        //debugger;
    }
    var thingArray = new Array(props.number).fill(<img style={thingStyle} src={battery} />);
    return (
        <div style={containerStyle}>
            {thingArray}
            <p style={plusStyle} onClick={()=>addThing.call(this)}>+</p> 
        </div>
    );
}; */
class ThingBlock extends React.Component{
    constructor(props){
        super(props);
        this.state={
            number:props.number
        };
    }
    render(){
        const containerStyle = {
            display:'flex'
        };
        const plusStyle = {
            'fontFamily':'Monserrat',
            'fontSize':'24px'
        };
        const thingStyle = {
            'textAlign':'center',
            'width':'40px',
            'height':'40px'
        };
        var addThing = () => {
            this.state.number++;
            this.forceUpdate();
        }
        const thingArray = new Array(this.state.number).fill(<img style={thingStyle} src={battery} />);
        return (
            <div style={containerStyle}>
                {thingArray}
                <p style={plusStyle} onClick={addThing}>+</p> 
            </div>
        );
    }
}
ThingBlock.propTypes={
    number:PropTypes.number.isRequired,
    type:PropTypes.string.isRequired
};
export default ThingBlock;