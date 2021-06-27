import React, {useEffect, useState} from 'react';
import { API_HOST } from '../Constants';
import Card from '../components/Card';
import './styles/Page.css';
import './styles/Resume.css';

function Resume() {
  const [resume, setResume] = useState({});

  useEffect(() => {
    fetch(`${API_HOST}/resume`)
    .then(res => res.json())
    .then(data => setResume(data))
  }, []);

  return(
    <main>
      <h1>{resume.firstName} {resume.lastName}</h1>
      <h2>{resume.label}</h2>
      <p>{resume.summary}</p>
      <div className="grid-wrapper">
        {resume.work && resume.work.length > 0 &&
          generateSection(resume.work, "Work")
        }
        
        { resume.education && resume.education.length > 0 &&
          generateSection(resume.education, "Education")
        }

        { resume.cpd && resume.cpd.length > 0 &&
          generateSection(resume.cpd, "Professional Development")
        }
      </div>
    </main>
  );
}
export default Resume;

function generateSection(json, title) {
  return(
    <section>
      <h2>{title}</h2>
      {json.map((item, index) => {
        return (
          <Card key={index}
            isAccordion={true}
            title={item.title}
            subtitle={item.subtitle}
            time={`${item.startDate} - ${item.endDate}`}
            content={item.summary}
            points={item.bulletPoints}
            link={item.website}
          />
        )
      })}
    </section>
  )
}