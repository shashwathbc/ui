import React from "react";
import "./style.css";

const Experiance = () => {
  const experienceData = [
    {
      designation: "Software Engineer - Frontend department",
      type: "Full Time  May 2023 - present",
      companyName: "Taazaa",
      aboutOne: [
        "Led development of reusable components for enhanced project consistency.",
        "Significantly reduced project build size from 35 MB to 6 MB for improved efficiency.",
        "Developed dynamic dashboard with drag-and-drop, interactive charts using ApexCharts.",
        "Achieved full WCAG 2.1 Level AA compliance, increasing accessibility by 30%.",
        "Actively engaged in code refactor and optimization efforts."
      ],
      img: "https://dev-v2.fusionsw.com/static/media/logo.6b45a073.svg",
    },
    {
      designation: "Associate Software Engineer - Frontend department",
      type: "Full Time  Jul 2022 - April 2023",
      companyName: "Taazaa",
      aboutOne: [
        "Collaborated with backend devs to troubleshoot frontend bugs, ensuring smooth user experience.",
        "Translated Figma designs into React components with API integration and Redux implementation.",
        "Migrated 40% of legacy class components to functional ones, boosting scalability and cutting maintenance.",
        "Independently managed UI design to API integration, ensuring timely feature delivery."
      ],
      img: "https://dev-v2.fusionsw.com/static/media/logo.6b45a073.svg",
    },
  ];

  return (
    <div className="exp__Container">
      
      <h1 className="heading">
        Experience <span>2+ Years</span>
      </h1>
      
      <br />
      
      <div className="separator" style={{width : '100%'}}></div>

      {experienceData?.map((item) => (
<>
<div className="exp__Section">
          <div className="first__Section">
            <img src={item.img} alt="" className="img__Section" />
          </div>

          <div className="mid__SubSection">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width:'100%'
              }}
            >
              <h3>
                {item?.designation} | {item?.companyName} 
              </h3>
              <h3>{item?.type}</h3>
            </div>

            <div className="ul-w">
            <ul>
              {item.aboutOne.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            </div>
          </div>
        </div>

<div className="separator" style={{width : '100%'}}></div>
</>
      ))}
    </div>
  );
};

export default Experiance;
