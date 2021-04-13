import React from 'react'
import './css/List.css'

function List(props) {
    return (
        <div class="logo">
            <img src={props.lan_logo} alt="" id="lan_logo"/>
            <div class="icon">
            <h5>{props.lan_name}</h5>
            </div>
        </div>
    )
}

export default List
