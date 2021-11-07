import React from "react";
import './HomeHeader.css'

export default function HomeHeader() {
    return (
        <div id='homeHeaderCont' >
            {/* <img src='./header.jpg' style={{ width: '100%' }} /> */}
            <img id='headerImage' src='./example.png' style={{ width: '100%' }} />
        </div>
    )
}