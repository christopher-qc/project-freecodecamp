import React from "react";
import '../stylesheet/Botton.css';

export function Botton({text, eventclick, isBtnCalculator, color, height}) {

    const styleBtn = {
        backgroundColor: color,
        height: height,
    };

    return (
        <button
            style={styleBtn}
            className={isBtnCalculator ? "btn-calculator" : "btn-click"}
            onClick={eventclick}>
                {text}
        </button>
    );
}