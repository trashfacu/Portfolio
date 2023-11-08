import React from 'react';
import './AboutMe.css';

function AboutMe() {
  return (
    <section id="id-aboutMe" className="AboutMeContainer">
      <p className="SectionName">
        <span style={{ color: '#6ca3e1' }}>/</span> About Me
      </p>
      <p className="Introduction">
        I am currently studying software development at{' '}
        <a
          href="https://www.digitalhouse.com/ar/productos/programacion/certified-tech-developer"
          target="_blank"
          className="Link"
        >
          Digital House
        </a>
        . I also did 2 years of Systems Engineering at Universidad Tecnologica Nacional.
      </p>
      <p className="IntroductionList">
        Here are some technologies I have been working with:
      </p>
      <ul className="SkillList">
        <li>Java</li>
        <li>Spring + Spring boot</li>
        <li>Relational Databases / mySQL</li>
        <li>Docker / Container</li>
        <li>Bash/Powershell Scripting</li>
        <li>AWS</li>
        <li>Javascript ES6+</li>
        <li>HTML & CSS</li>
      </ul>
      <p className="OutroIntro">
        Outside of work, I'm interested in music and films, also I play
        guitar and love to build computers.
      </p>
    </section>
  );
}

export default AboutMe;
