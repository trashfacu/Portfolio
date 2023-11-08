import React from "react";

function ExternalLinks({ githubLink, openLink }) {
  return (
    <div className="external-links">
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        <img
          src={"./public/github.svg"}
          alt="github icon"
          className="GithubIcon"
        />
      </a>
      {/* {openLink && (
        <a href={openLink} target="_blank" rel="noopener noreferrer">
          <img
            src={"/src/assets/external-link.svg"}
            alt="external link icon"
            className="ExternalLinkIcon"
          />
        </a>
      )} */}
    </div>
  );
}

export default ExternalLinks;
