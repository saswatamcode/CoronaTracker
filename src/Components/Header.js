import React from "react";
import Country from "./Country";
import Stats from "./Stats";
import Virus from "../virus.svg";
import CovidMap from "./Map";

export default function Header() {
  return (
    <div>
      <div className="heading">
        Coronavirus <img src={Virus} className="logo" alt="corona" />
      </div>
      <div className="sub">
        Global Cases<span>🌎</span>
      </div>
      <Stats url={`https://covid19.mathdro.id/api/`} />
      <br />
      <CovidMap />
      <br />
      <div className="sub">Select a country</div>
      <Country />
      <div className="spacing"></div>
    </div>
  );
}
