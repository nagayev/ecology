import React from 'react';
import FactHeader from './FactHeader';
import Fact from './Fact';

const Facts = props => (
    <div>
        <FactHeader text="5%" />
        <Fact text="пластика идет на переработку" />
        <FactHeader text="80%" />
        <Fact text="мусора в Мировом океане – это не переработанный пластик" />
        <FactHeader text="100 00" />
        <Fact text="морских живых существ ежегодно погибает от пластика" />
        <FactHeader text="~ 10%" />
        <Fact text="пляжного покрытия – это пластик" />
    </div>
);
export default Facts;