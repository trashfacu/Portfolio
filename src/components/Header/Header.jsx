import React from 'react';
import './Header.css';

function Header() {
    return (
        <header id='id-header'>
        <div className='Name'>
            <span style={{color: '#4caee5'}}>/</span> FMZZTT
        </div>
        <div className="Linkedin">
        <a href="https://www.linkedin.com/in/facundo-mazziotti-27b713223/" target="_blank">
          <img src={'./public/linkedin-header.svg'} alt="logo linkedin" />
        </a>
        <h1>FacuMazziotti</h1>
      </div>
        </header>
    );
}

export default Header;