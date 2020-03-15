import React from "react";
import useStats from "./useStats";
import Number from "./Number";
import Grid from "@material-ui/core/Grid";

export default function Stats({ url }) {
  const { stats, loading, error } = useStats(url);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div>
      {stats.confirmed === undefined &&
        stats.deaths === undefined &&
        stats.recovered === undefined && (
          <div className="sub">Data doesn't exist</div>
        )}
      {stats.confirmed !== undefined &&
        stats.deaths !== undefined &&
        stats.recovered !== undefined && (
          <Grid container spacing={3}>
            <Grid item xs>
              <div className="cblock">
                <h3>Confirmed:</h3>
                <div className="con">
                  <Number n={stats.confirmed.value} />
                </div>
              </div>
            </Grid>
            <Grid item xs>
              <div className="block">
                <h3>Deaths:</h3>
                <div className="dea">
                  <Number n={stats.deaths.value} />
                </div>
              </div>
            </Grid>
            <Grid item xs>
              <div className="reblock">
                <h3>Recovered:</h3>
                <div className="rec">
                  <Number n={stats.recovered.value} />
                </div>
              </div>
            </Grid>
          </Grid>
        )}
    </div>
  );
}
