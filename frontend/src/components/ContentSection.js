import React, {useState} from 'react';

import './styles/ContentSectionStyles.css';
import Card from './Card';
import arrow_icon from '../images/icons/up_arrow_icon.svg';

function ContentSection(props) {

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="content-section">
      <div className="header">
        <h2 onClick={() => setIsExpanded(!isExpanded)}>{props.title.toUpperCase()}</h2>
        <img src={arrow_icon}
          alt="expand section button"
          className={isExpanded ? "toggle-btn toggle-btn-down" : "toggle-btn toggle-btn-right"}
          onClick={() => setIsExpanded(!isExpanded)}
        />
      </div>
      { isExpanded ?
        <div className="content-section-body">
          {props.items.map((item, index) => {
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
        </div>
        : <></>
      }
    </section>
  );
}

export default ContentSection;