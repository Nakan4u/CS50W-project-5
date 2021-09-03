import React, {useState} from 'react';
import './styles/CardStyles.css'

function Card(props) {
  // if card is not an accordion, it should always be expanded
  const [isExpanded, setIsExpanded] = useState(!props.isAccordion);
  

  return (
    <li className="card">
      <div className="card-grid-container">
        <div className="card-grid-column">
          <h3 className="card-header">
            {props.titleLink
              ? <a href={props.titleLink}>{props.title}</a>
              : <>{props.title}</>
            }            
          </h3>
          <p className="subtitle">{props.subtitle}</p>
          <p className="timestamp">{props.time}</p>
        </div>
        {props.isAccordion &&
          <div className="card-grid-column-btn"> 
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