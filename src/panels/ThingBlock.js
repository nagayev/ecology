import React from 'react';
import PropTypes from 'prop-types';
import battery from '../img/battery.png';

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
            this.setState({number:this.state.number+1});
            const updateStorage = (key,value)=>{localStorage.setItem(key,+localStorage.getItem(key)+value)};
            updateStorage('batteryNumber',1);
            updateStorage('planetOpacity',-0.1);
            this.forceUpdate();
        }
        const thingArray = new Array(this.state.number).fill(<img style={thingStyle} src={battery} alt="" />);
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