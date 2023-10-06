import {Link, useLoaderData} from "react-router-dom";
import {useState} from "react";

import planetsInfos from '../../data.json';
import icon from "../../assets/icon-chevron.svg"
import './PlanetInfos.scss'
import InfosNav from "./InfosNav";

const PlanetInfos = () => {
  console.log(window.innerWidth);

  const planetInfos = useLoaderData();

  const [page, setPage] = useState("overview");

  const imagePath = require(`../../assets/planet-${planetInfos.name.toLowerCase()}.svg`);
  const overview = planetInfos[`${page}`].content;
  const link = planetInfos[`${page}`].source;

  const handleClick = (newPage) => {
    setPage(newPage);
  }

  return<>
    <InfosNav page={page} planetName={planetInfos.name} handleClick={handleClick}/>
    <div className="text-center mx-3">
      <img className="w-50" src={imagePath} alt={planetInfos.name}/>
      <h1>{planetInfos.name.toUpperCase()}</h1>
      <p>{overview}</p>
      <p>Source:
        <Link to={link} className="p-1" style={{color: "grey"}}>Wikipedia</Link>
        <span>
          <img className="h-50 d-md-none" src={ icon } alt="Link icon"/>
        </span></p>
    </div>
  </>
};

export default PlanetInfos;

export const loader = ({params}) => {
  const planetInfos = planetsInfos.filter(planet => planet["name"].toLowerCase() === params.planetName );

  return planetInfos[0];
}