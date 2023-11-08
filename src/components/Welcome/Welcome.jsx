import React from 'react';
import './Welcome.css';

function Welcome() {
  return (
    <section id="id-welcome" className="welcome-container">
      <div className="HiText">
        <h1 className="Welcome">Hi, Facundo here!</h1>
        <p className="WelcomesubText">a Backend developer</p>
        <p className="WhoAmI">
          I'm a software developer based in Buenos Aires, Argentina. I have
          great interest in full-stack development, operating system, systems
          architecture, and everything in between.
        </p>
      </div>
    </section>
  );
}

export default Welcome;
