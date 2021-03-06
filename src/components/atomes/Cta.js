import React from 'react'

import "./cta.css"
export default function Cta(props) {
    return (
        <button
            className="cta"
            onClick={props.onClick}
        >
            {props.text}
        </button>
    )
}
