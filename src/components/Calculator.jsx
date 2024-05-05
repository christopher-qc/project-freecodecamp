import React from 'react';
import '../stylesheet/Calculator.css';
import { useState } from 'react';
import { Botton } from './Botton';
import { evaluate } from 'mathjs';

export function Calculator() {
    const [screenNumOne, setscreenNumOne] = useState('0');
    const [screenNumTwo, setscreenNumTwo] = useState('0');
    const [calculatorSign, setCalculatorSign] = useState('');

    const handleClick = (buttonValue) => {
        if (buttonValue === 'C') {
            setscreenNumOne('0');
            return;
        }
        if (screenNumOne === '0') {
            setscreenNumOne(buttonValue);
        } else {
            setscreenNumOne(screenNumOne + buttonValue);
        }
    }

    const handleSign = (sign) => {
        setCalculatorSign(sign)
        setscreenNumTwo(screenNumOne)
        setscreenNumOne('0')
    }

    const handleResult = () => {
        if(screenNumTwo === '0') {setscreenNumOne('0'); return}
        const expresion = Number(screenNumTwo) + calculatorSign + Number(screenNumOne);
        setscreenNumOne(evaluate(expresion))
        setCalculatorSign('')
        setscreenNumTwo('0')
    }

    return (
        <div className="calculator">
            <p>Calculator</p>
            <div className="content-calculator">
                <div className='screen'>
                    {screenNumOne}
                </div>
                <div className='row'>
                    <Botton text="C" isBtnCalculator color="#a2a2a2" eventclick={() => handleClick('C')}/>
                    <Botton text="." isBtnCalculator color="#a2a2a2" eventclick={() => handleClick('.')}/>
                    <Botton text="/" isBtnCalculator color="#a2a2a2" eventclick={() => handleSign('/')}/>
                    <Botton text="x" isBtnCalculator color="#ff9500" eventclick={() => handleSign('*')}/>
                </div>
                <div className='row'>
                    <Botton text="7" isBtnCalculator eventclick={() => handleClick('7')}/>
                    <Botton text="8" isBtnCalculator eventclick={() => handleClick('8')}/>
                    <Botton text="9" isBtnCalculator eventclick={() => handleClick('9')}/>
                    <Botton text="+" isBtnCalculator color="#ff9500" eventclick={() => handleSign('+')}/>
                </div>
                <div className='row'>
                    <Botton text="4" isBtnCalculator eventclick={() => handleClick('4')}/>
                    <Botton text="5" isBtnCalculator eventclick={() => handleClick('5')}/>
                    <Botton text="6" isBtnCalculator eventclick={() => handleClick('6')}/>
                    <Botton text="-" isBtnCalculator color="#ff9500" eventclick={() => handleSign('-')}/>
                </div>
                <div className='row'>
                    <Botton text="1" isBtnCalculator eventclick={() => handleClick('1')}/>
                    <Botton text="2" isBtnCalculator eventclick={() => handleClick('2')}/>
                    <Botton text="3" isBtnCalculator eventclick={() => handleClick('3')}/>
                    <Botton text="0" isBtnCalculator color="#ff9500" eventclick={() => handleClick('0')}/>
                </div>
                <div className='row'>
                    <Botton
                        text="="
                        isBtnCalculator
                        eventclick={handleResult}
                    />
                </div>
            </div>
        </div>
    )
}