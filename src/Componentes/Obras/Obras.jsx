import React from "react";
import './Obras.css'
import BotaoInteragir from "../botaointeragir/BotaoInteragir";

export default function Obras({ nome, texto, image }) {
    return (

        <div className="container">
            <div className='Obras'>
                <div className='headerObras'>
                    <img src={image}></img>
                </div>
                <div className='description'>
                    <h1>{nome}</h1>
                    <h1>{texto}</h1>s
                </div>
                
                <div className='cartButton'>
                    <BotaoInteragir></BotaoInteragir>
                </div>
                
            </div>
        </div>

    );
}