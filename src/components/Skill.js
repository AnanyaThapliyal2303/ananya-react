import React from 'react'
import './css/Skill.css'
import List from './List'
import React_img from './img/React_img.png'
import Js from './img/Js.png'
import Python from './img/Python.png'
import Java from './img/Java.png'
import Cpp from './img/Cpp.png'
import Azure from './img/Azure.png'
import Nodejs from './img/Nodejs.png'
import Php from './img/Php.png'

function Skill() {
    return (
        <div>
            <div className="skill-area">
                <h1>Skills</h1>
                <div className="skill-grid">
                <List lan_logo={React_img} lan_name="React"/>
                <List lan_logo={Js} lan_name="JavaScript"/>
                <List lan_logo={Java} lan_name="Java"/>
                <List lan_logo={Cpp} lan_name="C++"/>
                <List lan_logo={Python} lan_name="Python"/>
                <List lan_logo={Azure} lan_name="Azure"/>
                <List lan_logo={Nodejs} lan_name="Node"/>
                <List lan_logo={Php} lan_name="PHP"/>
                </div>
            </div>
        </div>
    )
}


export default Skill
