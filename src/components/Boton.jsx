import React from "react";

export function Boton({text, isBtnClick}) {
    return (
        <button className={isBtnClick ? "btn-click" : "btn-restart"}>
            {text}
        </button>
    );
}