import Nav from "react-bootstrap/Nav";

import icon from '../assets/icon-chevron.svg';
import './NavItem.scss'
import {NavLink} from "react-router-dom";

const NavItem = (props) => {
  const classes = "nav-link " + props.planetName.toLowerCase();

  return <NavLink
    to={ props.planetName.toLowerCase() }
    className={({isActive}) => isActive ? classes + ' active' : classes}>
    <div className="row">
      <div className="col d-flex">
        <span className={"dot d-md-none " + props.planetName.toLowerCase()}></span>
        <p className="mb-0 ms-3">{ props.planetName.toUpperCase() } </p>
      </div>
      <div className="col d-flex justify-content-end">
        <img className="h-50 d-md-none" src={ icon }/>
      </div>
    </div>
    <hr className="d-md-none"/>
  </NavLink>;
};

export default NavItem;