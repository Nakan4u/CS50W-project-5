import React, {useEffect, useState} from 'react';
import { API_HOST } from '../Constants';
import Card from '../components/Card';

function Resume() {
  const [resume, setResume] = useState({});

  useEffect(() => {
    fetch(`${API_HOST}/resume`)
    .then(res => res.json())
    .then(data => setResume(data))
  }, []);

  let work = resume.work ?
  resume.work.map((item, index) => {
    return (
      <Card key={index}
        title={item.company}
        link={item.website}
        subtitle={item.position}
        time={`${item.startDate} - ${item.endDate}`}
        content={item.summary}
      />
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
    <div>
      <h1>{resume.firstName} {resume.lastName}</h1>
      <h2>{resume.label}</h2>
      <p>{resume.summary}</p>
      <h2>Work</h2>
      <ul>{work}</ul>

      <h2>Education</h2>
      <ul>{education}</ul>
    </div>
  );
}

export default Resume;