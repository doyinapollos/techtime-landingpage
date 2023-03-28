/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable linebreak-style */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import world from './world-110m.json';

function WorldMap() {
  const [data, setData] = useState([]);

  useEffect(() => {
    d3.tsv('./data.tsv').then((dat) => {
      setData(dat);
    });
  }, []);

  return (
    <div className="world-map">
      <ComposableMap projectionConfig={{ scale: 200 }}>
        <Geographies geography={world}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const d = data.find((s) => s.ISO3 === geo.properties.ISO_A3);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={d ? d.COLOR : '#F5F4F6'}
                  stroke="#E2E8F0"
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}

export default WorldMap;
