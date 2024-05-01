import { useEffect, useState } from 'react';
import './style.css';

const HeroIcon = (props) => {
  const {
    src, 
    name, 
    handleClick,
    highlight
  } = props;

  const [highlightOnHover, setHighlightOnHover] = useState(highlight || false);

  useEffect(() => {
    console.log('HeroIcon', highlight, highlightOnHover);
  } , []);

  return(
    <img className={`hero-profile__hero-thumbnail hero-profile__highlight`}
      onClick={handleClick}
      src={src} 
      alt={name} 
      title={name}
      //key={props?.index || null}
    />
  )
}

export default HeroIcon;