import React from 'react';
import FactHeader from './FactHeader';
import Fact from './Fact';
import getFacts from './getFacts';

const Facts = props => {
    var headers = getFacts(props.type).headers;
    var facts = getFacts(props.type).facts;
    console.warn(`Fact's type is ${props.type}`);
    return(
        <div>
            <FactHeader text={headers[0]} />
            <Fact text={facts[0]} />
            <FactHeader text={headers[1]} />
            <Fact text= {facts[1]} />
            <FactHeader text={headers[2]} />
            <Fact text= {facts[2]} />
            <FactHeader text={headers[3]} />
            <Fact text={facts[3]} />
        </div>
    )
};
export default Facts;