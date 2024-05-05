import React from "react";
import { Botton } from './Botton';
import { useState } from 'react';

import '../stylesheet/CounterClick.css';

export function CounterClick() {
  const [numClick, setNumClick] = useState(0);
  const handleClick = () => {
    setNumClick(numClick + 1);
  }

  const restartClick = () => {
    setNumClick(0);
  }
    
  return (
      <div className="main-counter">
        <h1>Counter Click</h1>
          <div className='counter'>
            {numClick}
          </div>
          <Botton
            text="Click"
            eventclick={handleClick}
            color="green"/>
          <Botton
            text="Restart"
            eventclick={restartClick}
            color='#F632FF'/>
      </div>
    );
}