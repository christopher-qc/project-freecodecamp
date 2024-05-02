import React from "react";
import '../stylesheet/Botton.css';

export function Botton({text, isBtnClick, eventclick}) {
    return (
        <button 
            className={isBtnClick ? "btn-click" : "btn-restart"}
            onClick={eventclick}>
                {text}
        </button>
    );
}