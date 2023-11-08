import React, { useState, useEffect } from "react";
import "./Experience.css";

function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  const experienceData = [
    {
      jobTitle: "EDSI Trend Argentina",
      year: "MAR 2021 - MAR 2022",
      tasks: [
        "I provided support to large companies such as banks, social welfare, etc. In relation to Trend Micro products (Antivirus, Antispam, Proxies etc.) and assist in the implementation and troubleshooting of Trend Micro products.",
        "I wrote scripts to automate tasks and make large-scale changes more quickly and concisely.",
        "I helped in the creation and deployment of new servers such as Active Directory, web servers among others, as well as migrating old servers to new, more performing ones.",
      ],
    },
    {
      jobTitle: "Octavo Piso",
      year: "MAR 2021 - MAR 2022",
      tasks: [
        "KJJ",
        "I helped in the creation and deployment of new servers such as Active Directory, web servers among others, as well as migrating old servers to new, more performing ones.",
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
                  {entry.jobTitle}
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
