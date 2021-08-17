import React from 'react'
import './css/Card.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';

function Card(props) {
    return (
        <div class="card">
            <h2>{props.title}</h2>
            <img src={props.photo} alt="" id="photo"/>
            <div class="icon">
            <a href={props.glink} target="_blank"><GitHubIcon style={{ fontSize: 38 }}/></a>
            <a href={props.hlink} target="_blank"><LinkIcon style={{ fontSize: 38}}/></a>
            </div>
            <p>{props.desc}</p>
        </div>
    )
}

export default Card
