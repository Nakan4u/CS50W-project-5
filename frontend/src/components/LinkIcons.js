import React from 'react';

import './styles/LinkIconsStyles.css';

import github_icon from '../images/icons/github_icon.svg';
import linkedin_icon from '../images/icons/linkedin_icon.svg';
import twitter_icon from '../images/icons/twitter_icon.svg';
import youtube_icon from '../images/icons/youtube_icon.svg';

const icons = {
  'GitHub' : github_icon,
  'LinkedIn' : linkedin_icon,
  'Twitter' : twitter_icon,
  'YouTube' : youtube_icon,
};

function LinkIcons(props) {
  return(
    <ul className="icon-list-component">
      {
        Object.keys(props.websites).map((website, index) => {
          if (icons[website]) {
            return(
              <a href={props.websites[website]} target="_blank" rel="noreferrer">
                <li>
                  <img src={icons[website]} alt={website}></img>
                  <span className="xl-only">{website}</span>
                </li>
              </a>
            )
          }
        })
      }
    </ul>
  );
}

export default LinkIcons;