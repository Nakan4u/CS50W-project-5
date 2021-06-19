import React from 'react';
import CardStyles from './styles/CardStyles'

function Card(props) {
  return (
    <li style={CardStyles.li}>
      {props.link 
        ? <h3><a style={CardStyles.a} href={props.link}>{props.title}</a></h3>
        : <h3>{props.title}</h3>
      }
      <p>{props.subtitle}</p>
      <p>{props.time}</p>
      <p>{props.content}</p>
    </li>
  );
}

export default Card;