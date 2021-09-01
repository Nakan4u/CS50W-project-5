import React, {useState} from 'react';
import './styles/CardStyles.css'

function Card(props) {
  // if card is not an accordion, it should always be expanded
  const [isExpanded, setIsExpanded] = useState(!props.isAccordion);
  

  return (
    <li className="card">
      <div className="card-grid-container">
        <div className="card-grid-column">
          <p className="card-header">
            {props.titleLink
              ? <a href={props.titleLink}>{props.title}</a>
              : <>{props.title}</>
            }
            <div className="subtitle">{props.subtitle}</div>
            
          </p>
          <span className="timestamp">{props.time}</span>
        </div>
        {props.isAccordion &&
          <div className="card-grid-column"> 
            <button className={isExpanded ? "button-selected" : undefined}
              onClick={() => setIsExpanded(!isExpanded)}>
                Expand
              </button>
          </div>
        }
      </div>
      {isExpanded &&
        <div>
          <p>{props.content}</p>
          
          {props.points && props.points.length > 0 &&
            <ul className="bulletpoint-list">
              {props.points.split("\n").map((item, index) => {
                return <li key={index}>{item}</li>
              })}
            </ul>
          }
          {props.link && <a className="website-link" href={props.link}>Website</a>}
        </div>
      }
    </li>
  );
}

export default Card;