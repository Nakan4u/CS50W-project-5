import React from 'react';
import './styles/CardStyles.css'

function Card(props) {
  return (
    <li>
      {props.link 
        ? <h3>
            <a href={props.link}> {props.title} </a>
          </h3>
        : <h3>{props.title}</h3>
      }
      <p className="subtitle">{props.subtitle}</p>
      <p className="timestamp">{props.time}</p>
      <p>{props.content}</p>
    </li>
  );
}

export default Card;