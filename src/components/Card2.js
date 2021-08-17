import React from 'react'
import './css/Card.css'
import LinkIcon from '@material-ui/icons/Link';

function Card2(props) {
    return (
        <div class="card">
            <h2>{props.title}</h2>
            <img src={props.photo} alt="" id="photo"/>
            <div class="icon">
            <a href={props.hlink} target="_blank"><LinkIcon style={{ fontSize: 38}}/></a>
            </div>
            <p>{props.desc}</p>
        </div>
    )
}

export default Card2