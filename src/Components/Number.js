import React from "react";
import AnimatedNumber from "react-animated-number";

export default function Number({ n }) {
  return (
    <div>
      <AnimatedNumber
        component="text"
        value={n}
        style={{
          transition: "0.8s ease-out",
          fontSize: 40,
          transitionProperty: "background-color, color, opacity"
        }}
        frameStyle={perc => (perc === 100 ? {} : { opacity: 0.25 })}
        duration={500}
        formatValue={n => n}
      />
    </div>
  );
}
