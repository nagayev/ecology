import React, {useState} from 'react';
import AwesomeSlider from 'react-awesome-slider';
import getText from './getText';
import 'react-awesome-slider/dist/styles.css';
//import PropTypes from 'prop-types';
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
const Slider = props =>{
    var callback=(event)=>{
        //анимация началась. Значит, изменился selected (номер слайда)
        //задача в том, чтобы получить selected
        //console.log(event);
        var array = ['soil','water','atmos'];
        setValue(event.nextIndex);
        changeCurrent(array[event.nextIndex]);
        updateDom();
    }
    const [selected,setValue] = useState(0);
    return (
        <AwesomeSlider selected={selected} onTransitionStart={callback}>
            <div data-src={soil}><p className="header_main">Почва</p></div>
            <div data-src={water}><p className="header_main">Вода</p></div>
            <div data-src={atmos}><p className="header_main">Атмосфера</p></div> 
        </AwesomeSlider>
    );
}

export default Slider;