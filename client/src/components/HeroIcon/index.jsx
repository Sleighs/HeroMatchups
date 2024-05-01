import './style.css';

const HeroIcon = (props) => {
  const {
    src, 
    name, 
    handleClick
  } = props
  
  return(
    <img className="hero-profile__hero-thumbnail" 
      onClick={handleClick}
      src={src} 
      alt={name} 
      title={name}
      //key={props?.index || null}
    />
  )
}

export default HeroIcon;