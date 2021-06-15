import React from 'react'
import Navbar from './Navbar'
import Project from './Project'
import Skill from './Skill'
import './css/Main.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Resume from './resume/Resume.pdf';
import EmailIcon from '@material-ui/icons/Email';

function Main() {
    return (
        <div>
        <div className="background">
            <Navbar/>
            <img src="https://media-exp1.licdn.com/dms/image/C4E03AQG4m027Mshicw/profile-displayphoto-shrink_800_800/0/1598885729833?e=1629331200&v=beta&t=rVEGIH39Vmhgz5BJpYC2aFnaUytwkKmssNdxweTiD68" alt="" id="mobile_image"></img>
            <div class="row">
                <div class="column">
                    <div class="para">
                    <h3 class="info">
                        Hi! I am Ananya Thapliyal, currently pursuing B.Tech in Information Technology at Manipal Institute of Technology.
                        I like Swimming and Travelling. Sometimes, I code to build stuff.</h3>😊
                    </div>
                </div>
                <div class="column">
                <img src="https://media-exp1.licdn.com/dms/image/C4E03AQG4m027Mshicw/profile-displayphoto-shrink_800_800/0/1598885729833?e=1629331200&v=beta&t=rVEGIH39Vmhgz5BJpYC2aFnaUytwkKmssNdxweTiD68" alt="" id="image"></img>
                </div>
            </div>
            
            <ul>
                <div className="icons">
                <center>
                <a href="https://github.com/AnanyaThapliyal2303"><GitHubIcon style={{ fontSize: 48 }}/></a>
                <a href="https://www.linkedin.com/in/ananya-thapliyal"><LinkedInIcon style={{ fontSize: 48 }}/></a>
                <a href="mailto:ananyathapliyal2303@gmail.com?subject = Subject&body = Message"><EmailIcon style={{ fontSize: 48 }}/></a>
                </center>
                </div>
                <a href={Resume} target="_blank">
                <div className="btn-1d">
                Resume
                </div>
                </a>
        </ul>
        </div>
        <div id="Project">
            <Project/>
        </div>
        <div id="Skill">
            <Skill/>
        </div>
        </div>
    )
}

export default Main
