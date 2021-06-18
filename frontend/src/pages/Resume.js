import React, {useEffect, useState} from 'react';
import { API_HOST } from '../Constants';

function Resume() {
  const [resume, setResume] = useState({});

  useEffect(() => {
    fetch(`${API_HOST}/resume`)
    .then(res => res.json())
    .then(data => setResume(data))
  }, []);


  let work = resume.work ?
  resume.work.map((workItem, index) => {
    return(
      <li key={index}>
        <h3>{workItem.company}</h3>
        <a href={workItem.website}>{workItem.website}</a>
        <h4>{workItem.startDate} - {workItem.endDate}</h4>
        <p>{workItem.summary}</p>
      </li>
  )}) : '';

  let education = resume.education ?
  resume.education.map((eduItem, index) => {
    return(
      <li key={index}>
        <h3>{eduItem.institution}</h3>
        <p>{eduItem.level} {eduItem.degreeTitle} {eduItem.startDate} - {eduItem.endDate} </p>
      </li>
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