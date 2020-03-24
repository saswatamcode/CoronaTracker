import React, { useState } from "react";
import useStats from "./useStats";
import Stats from "./Stats";

export default function Country() {
  const [selectedCountry, setSelectedCountry] = useState("IND");
  const { stats: countries, loading, error } = useStats(
    "https://covid19.mathdro.id/api/countries"
  );
  const handleCountryChange = event => {
    setSelectedCountry(event.target.value);
  };
  if (loading) return <p>Loading...</p>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div>
      <div className="selector">
        <form>
          <select
            className="customselect"
            value={selectedCountry}
            onChange={handleCountryChange}
          >
            <option value="">Select Country</option>
            {/*Object.entries(countries.countries).map(([country, code]) => (
              <option
                selected={selectedCountry === countries.iso3[code]}
                key={code}
                value={countries.iso3[code]}
              >
                {country}
              </option>
            ))*/
            countries.countries.map((country) => (
              <option
              selected = {selectedCountry === country.iso3}
              key = {country.iso3}
              value = {country.iso3}
              >
                {country.name}
              </option>
            ))
            }
          </select>
        </form>
      </div>
      <br />
      {selectedCountry !== undefined && (
        <Stats
          url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
        />
      )}
    </div>
  );
}
