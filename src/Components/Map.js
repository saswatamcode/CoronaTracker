import React, { useState, useEffect } from "react";
import { Map, CircleMarker, TileLayer, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function CovidMap() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://cors-anywhere.herokuapp.com/https://covid19.mathdro.id/api/confirmed`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((response) => {
        setData(response);
        console.log(window.CacheStorage.toString());
        console.log(response);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="map" style={{ borderRadius: "30px" }}>
        {isLoading == true && <p>Loading...</p>}
        {isLoading !== true && (
          <Map
            style={{
              height: "450px",
              width: "95%",
              margin: "10px",
              top: "30px",
            }}
            zoom={1}
            center={[-0.09, 51.505]}
            worldCopyJump
          >
            <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {data !== undefined &&
              data.map((province) => {
                if (province.lat !== null) {
                  return (
                    <CircleMarker
                      center={[province.lat, province.long]}
                      radius={5 * Math.log(province.confirmed / 1000)}
                      color="rgb(241, 85, 85)"
                    >
                      <Tooltip direction="right" offset={[-8, -2]} opacity={1}>
                        <span>
                          {province.countryRegion} {province.provinceState}
                        </span>
                        <br></br>
                        <span>Confirmed: {province.confirmed}</span>
                        <br></br>
                        <span>Recovered: {province.recovered}</span>
                        <br></br>
                        <span>Deaths: {province.deaths}</span>
                        <br></br>
                        <span>Active: {province.active}</span>
                      </Tooltip>
                    </CircleMarker>
                  );
                }
              })}
          </Map>
        )}
      </div>
    </>
  );
}
