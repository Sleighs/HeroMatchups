
const HeroIcon = (props) => {
  const {
    src, 
    name, 
    handleClick,
    type
  } = props
  
  return(
    <img className="hero-profile__hero-thumbnail" 
      onClick={handleClick}
      src={src} 
      alt={name} 
      title={name}
      style={{cursor: type === "upcoming" ? "default" : "pointer"}}
    />
  )
}

export default HeroIcon;