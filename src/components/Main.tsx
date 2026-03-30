import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import img from "../assets/images/img.png";

function Main() {

  return (
      <div className="container" id="about">
      <div className="about-section">
        <div className="image-wrapper">
            <img src={img} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/ilham1997" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/muhamad-ilham-sutrisna/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>M.Ilham Sutrisna</h1>
          <p>Full Stack Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/ilham1997" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/muhamad-ilham-sutrisna/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;