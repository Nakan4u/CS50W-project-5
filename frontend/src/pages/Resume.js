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

  let work = resume.work ?
  resume.work.map((item, index) => {
    const props = {
      "key" : index,
      "title" : item.company,
      "subtitle" : item.position,
      "link" : item.website,
      "time" : `${item.startDate} - ${item.endDate}`,
      "content" : item.summary,
    }
    return (
      <Card {...props}/>
  )}) : '';


  let education = resume.education ?
  resume.education.map((item, index) => {
    return(
      <Card key={index}
        title={item.institution}
        subtitle={`${item.level} ${item.degreeTitle}`}
        time={`${item.startDate} - ${item.endDate}`}
      />
  )}) : '';

  return(
    <main>
      <h1>{resume.firstName} {resume.lastName}</h1>
      <h2>{resume.label}</h2>
      <p>{resume.summary}</p>
      <div className="grid-wrapper">
        <section>
          { work ? <h2>Work</h2> : "" }
          <ul style={{"padding":"0px"}}>{ work }</ul>
        </section>
        
        <section>
          { education ? <h2>Education</h2> : "" }
          <ul style={{"padding":"0px"}}>{education}</ul>
        </section>
      </div>
    </main>
  );
}

export default Resume;