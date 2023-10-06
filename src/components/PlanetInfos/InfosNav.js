import './InfosNav.scss'

const InfosNav = props => {
  const page = props.page

  const planetName = props.planetName.toLowerCase();

  const handleClick = props.handleClick;

  return <div>
    <ul className="d-flex justify-content-around">
      <li className={page==="overview" ? 'active ' + planetName : ''}>
        <button className="btn info-nav" onClick={() => handleClick("overview")}><h3>OVERVIEW</h3></button>
      </li>
      <li  className={page==="structure" ? 'active ' + planetName : ''}>
        <button className="btn info-nav" onClick={() => handleClick("structure")}><h3>STRUCTURE</h3></button>
      </li>
      <li  className={page==="geology" ? 'active ' + planetName : ''}>
        <button className="btn info-nav"  onClick={() => handleClick("geology")}><h3>SURFACE</h3></button>
      </li>
    </ul>
    <hr className="nav-hr"/>
  </div>
}

export default InfosNav;