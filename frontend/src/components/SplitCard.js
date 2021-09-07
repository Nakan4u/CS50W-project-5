import React from 'react';
import './styles/SplitCardStyles.css';

function SplitCard(props) {
  return(
    <section className={ props.reverse 
                          ? "split-card-grid-container rtl"
                          : "split-card-grid-container"
                        }>
        <div>
          <h2>{props.title.toUpperCase()}</h2>
          <p className="subtitle">{props.subtitle}</p>
          <p>{props.body}</p>
          <a href={props.website}>{props.website_slug}</a>
        </div>
        <div>
          <img className="split-card-img" src={props.image_url} alt={"image representing " + props.title}></img>
        </div>
    </section>
  )
}

export default SplitCard;