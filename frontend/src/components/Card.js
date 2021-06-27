import React, {useState} from 'react';
import './styles/CardStyles.css'

function Card(props) {
  // if card is not an accordion, it should always be expanded
  const [isExpanded, setIsExpanded] = useState(!props.isAccordion);
  

  return (
    <li>
      <h3>
        {props.titleLink
          ? <a href={props.titleLink}>{props.title}</a>
          : <>{props.title}</>
        }
        
        {props.isAccordion && 
          <span>
            <button className={isExpanded && "button-selected"}
              onClick={() => setIsExpanded(!isExpanded)}>
                Expand
              </button>
          </span>
        }
      </h3>
      
      <p className="subtitle">{props.subtitle}</p>
      <span className="timestamp">{props.time}</span>
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