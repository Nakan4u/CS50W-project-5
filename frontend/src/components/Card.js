import React from 'react';
import './styles/CardStyles.css'

function Card(props) {

  return (
    <li>
      {props.titleLink 
        ? <h3><a href={props.titleLink}> {props.title} </a></h3>
        : <h3>{props.title}</h3>
      }
      <p className="subtitle">{props.subtitle}</p>
      <p className="timestamp">{props.time}</p>
      <p>{props.content}</p>
      {props.link ? <a className="website-link" href={props.link}>Website</a> : ""}
    </li>
  );
}

export default Card;