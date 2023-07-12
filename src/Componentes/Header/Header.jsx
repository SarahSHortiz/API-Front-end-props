import React from "react";
import './Header.css'


export default function Header() {
    return (
        <div className="header">
            <div className="item">
                <p>Home</p>
            </div>
            <div className="item">
                <p>Galeria</p>
            </div>
            <div className="item">
                <p>Contatos</p>
            </div>
        </div>
        
    );
}