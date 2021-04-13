import React from 'react'
import Card from './Card'
import './css/Project.css'
import Fotosayer from './img/Fotosayer.png'
import Vidcall from './img/Vidcall.png'

function Project() {
    return (
        <div>
            <h1>Projects</h1>
            <div class="container-box">
            <Card title="FotoSayer" photo={Fotosayer} glink="https://github.com/AnanyaThapliyal2303/FotoSayer" hlink="https://insta-clone-react-c585d.web.app/" desc=" A photo-sharing web application using React.js for the frontend and Firebase for the backend with authentication."/>
            <Card title="VidCall" photo={Vidcall} glink="https://github.com/AnanyaThapliyal2303/VidCall" hlink="https://arcane-cliffs-50617.herokuapp.com/4253a2b6-91e5-4d76-93cb-69dc7c234f34" desc="Video calling app made using Node.js and Socket.io"/>
            </div>
        </div>
    )
}

export default Project
