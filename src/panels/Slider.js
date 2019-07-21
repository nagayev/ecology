import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import getText from './getText';
import 'react-awesome-slider/dist/styles.css'
import './Slider.css';
import soil from '../img/bgsoil.png';
import water from '../img/bgwater.jpg';
import atmos from '../img/bgatmos.png'; 


function updateDom(){
    console.log('updateDOM', window.current);
    document.getElementsByClassName('text')[0].innerHTML=getText(window.current)[0];
    document.getElementsByClassName('text')[1].innerHTML=getText(window.current)[1];
}
function changeCurrent(cur){
    window.current=cur;
}
class Slider extends React.Component{
    render(){
        return (
            <AwesomeSlider organicArrows={false}>
                <div data-src={soil}><p className="header_main">Почва</p></div>
                <div data-src={water}><p className="header_main">Вода</p></div>
                <div data-src={atmos}><p className="header_main">Атмосфера</p></div> 
            </AwesomeSlider>
        );
    }
    componentDidMount(){
        var buttons = document.querySelectorAll('.aws-sld__bullets button');
        var arr = ['soil','water','atmos'];
        for(let i=0;i<buttons.length;i++) buttons[i].addEventListener('click',()=>{
            changeCurrent(arr[i]);
            updateDom();
        });
        //buttons
        /*
        var left_arrow = document.querySelector('.aws-sld__controls__arrow-left');
        var right_arrow = document.querySelector('.aws-sld__controls__arrow-right');
        left_arrow.addEventListener('click',()=>{changeCurrent(arr[arr.indexOf(window.current)-1])});
        right_arrow.addEventListener('click',()=>{changeCurrent(arr[arr.indexOf(window.current)+1])}); */
    } 
}
/*
const Slider = props => {
    return (
        <AwesomeSlider>
            <div data-src={soil} onLoad={()=>changeCurrent('soil')}><p className="header_main">Почва</p></div>
            <div data-src={water} onLoad={()=>changeCurrent('water')}><p className="header_main">Вода</p></div>
            <div data-src={atmos} onLoad={()=>changeCurrent('atmos')}><p className="header_main">Атмосфера</p></div> 
        </AwesomeSlider>
    );
}; */
export default Slider;