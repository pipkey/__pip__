import React from 'react'
import "./btn.css"
import cv from "../../accets/Kamenkov_Philip.pdf"

const Button =()=>{
    return (
        <div className="cv">
            <a href={cv} download>Download CV</a>
        </div>
    )
}

export default Button;