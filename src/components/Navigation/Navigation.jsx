import React, {useEffect} from 'react';
import './Navigation.css'

function Navigation() {

    useEffect(() => {
        const GITHUB_ICON = document.getElementById('id-githubIcon');
        const LINKEDIN_ICON = document.getElementById('id-linkedinIcon');
    
        if (GITHUB_ICON) {
          GITHUB_ICON.addEventListener('click', function () {
            window.open('https://github.com/trashfacu');
          });
        }
    
        if (LINKEDIN_ICON) {
          LINKEDIN_ICON.addEventListener('click', function () {
            window.open('https://www.linkedin.com/in/facundo-mazziotti-27b713223/');
          });
        }
    
        return () => {
          if (GITHUB_ICON) {
            GITHUB_ICON.removeEventListener('click', () => {
              window.open('https://github.com/trashfacu');
            });
          }
    
          if (LINKEDIN_ICON) {
            LINKEDIN_ICON.removeEventListener('click', () => {
              window.open('https://www.linkedin.com/in/facundo-mazziotti-27b713223/');
            });
          }
        };
      }, []);

  return (
    <section id="id-navigation">
      <div className="NavigationContainer">
        <a className="SectionsName" href="#id-header">/home</a>
        <a className="SectionsName" href="#id-aboutMe">/about</a>
        <a className="SectionsName" href="#id-experience">/experience</a>
        <a className="SectionsName" href="#id-projects">/projects</a>
        <div className="ContactInfo">
          <a href="#id-mailIcon"><img src={'./public/contact_mail 1.svg'} alt="email icon" id="id-mailIcon" /></a>
          <a href="#id-githubIcon"><img src={'./public/github.svg'} alt="github icon" id="id-githubIcon" /></a>
          <a href="#id-linkedinIcon"><img src={'./public/linkedin.svg'} alt="linkedin icon" id="id-linkedinIcon" /></a>
        </div>
      </div>
    </section>
  );
}

export default Navigation;