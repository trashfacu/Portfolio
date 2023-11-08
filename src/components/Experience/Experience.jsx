import React, { useState, useEffect } from "react";
import "./Experience.css";

function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  const experienceData = [
    {
      companyName: "Octavo Piso",
      jobTitle: "Backend developer",
      year: "April 2023 - Present",
      tasks: [
        "API Integration",
        "Application Maintenance",
        "Unit testing",
        "Technical documentation",
        "Feature development",
        "Data security",
      ],
    },
    {
      companyName: "EDSI Trend Argentina",
      jobTitle: "Cyber Security Consultant",
      year: "November 2021 - March 2023",
      tasks: [
        "Patch analysis and management. Treatment of Incidents",
        "Evaluation and monitoring of advanced methodologies.",
        "Malware analysis.",
        "Vulnerability scanning.",
        "Technical support in suite administration of Trend • Micro products for customers external [Proxy, Anti-Spam, Anti-Virus,XDRDetection]",
      ],
    },
    // Aca agregá mas experiencias papá
  ];

  function handleTabClick(index) {
    setActiveTab(index);
  }

  useEffect(() => {
    const description = document.querySelector(".Description");
    description.classList.remove("ActiveDescription");
    setTimeout(() => {
      description.classList.add("ActiveDescription");
    }, 10);
  }, [activeTab]);

  return (
    <section id="id-experience">
      <div className="ExperienceContainer">
        <p className="SectionName">
          <span style={{ color: "#b85b30" }}>/</span> Experience
        </p>
        <div className="TabWrapper">
          <div className="TabPanelContainer">
            <ul className="TabList">
              {experienceData.map((entry, index) => (
                <li
                  key={index}
                  className={`Tab ${activeTab === index ? "ActiveTab" : ""}`}
                  onClick={() => setActiveTab(index)}
                >
                  {entry.companyName}
                </li>
              ))}
            </ul>
            <div
              className="TabSelector"
              style={{ transform: `translateY(${activeTab * 50}px)` }}
            ></div>
          </div>
          <div className="Description">
            <p className="JobTitle">{experienceData[activeTab].jobTitle}</p>
            <p className="YearWorking">{experienceData[activeTab].year}</p>
            <ul className="WorkTasks">
              {experienceData[activeTab].tasks.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
