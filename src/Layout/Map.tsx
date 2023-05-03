import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  
} from 'react-simple-maps';
import { GeoJsonGeometryTypes } from 'geojson';
import { geoNaturalEarth1, GeoPath,GeoProjection } from 'd3-geo';

interface WorldMapProps {
    geographies:any[],
    projection:string,
    path:string
}

const WorldMap: React.FC<WorldMapProps> = ({}) => {
  const geoUrl =
    'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

  const projection: GeoProjection = geoNaturalEarth1();
  const path: GeoPath<GeoJsonGeometryTypes> = React.useMemo(
    () => geoNaturalEarth1().path(),
    []
  );

  return (
    <ComposableMap projection={projection}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo: { rsmKey: React.Key | null | undefined; }) => (
            <Geography key={geo.rsmKey} geography={geo} path={path} />
          ))
        }
      </Geographies>
    </ComposableMap>
  );
};

export default WorldMap;