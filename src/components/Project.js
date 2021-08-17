import React from 'react'
import Card from './Card'
import Card2 from './Card2'
import './css/Project.css'
import Fotosayer from './img/Fotosayer.png'
import Vidcall from './img/Vidcall.png'
import Petavista from './img/Petavista.png'
import Myteams from './img/Myteams.png'

function Project() {
    return (
        <div>
            <h1>Projects</h1>
            <div class="container-box">
            <Card title="FotoSayer" photo={Fotosayer} glink="https://github.com/AnanyaThapliyal2303/FotoSayer" hlink="https://insta-clone-react-c585d.web.app/" desc=" A photo-sharing web application using React.js for the frontend and Firebase for the backend with authentication."/>
            <Card title="My Teams" photo={Myteams} glink="https://github.com/AnanyaThapliyal2303/My-Teams" hlink="https://my-teams-172e9.web.app/" desc="A group video calling web application along with live chat developed as a project under Microsoft Engage Program 2021."/>
            <Card2 title="Petavista Aquaculture" photo={Petavista} hlink="https://petavistaaquaculture.in/" desc="A webapp to visualize sensor data. It aids fishermen to understand optimum conditions for fish farming."/>
            </div>
        </div>
    )
}

export default Project
