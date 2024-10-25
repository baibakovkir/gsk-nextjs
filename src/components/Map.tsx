'use client'
import { MapContainer, TileLayer, Polygon, GeoJSON } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from 'react';
import { CRS } from 'leaflet';


function Map() {
  const [geoJson, setGeoJson] = useState(null);

  useEffect(() => {
    const attributionElement = document.getElementsByClassName('leaflet-control-attribution')[0] as HTMLElement;
    const leafletContainer = document.getElementsByClassName('leaflet-container')[0] as HTMLElement;
    leafletContainer.style.background = 'transparent';
    attributionElement.style.display = 'none';
    fetch("/json/russia_geojson_wgs84.geojson")
        .then((res) => {
          return res.json();
        })
        .then((geoJson) => {
          setGeoJson(geoJson);
        });
    },[])

  return (
    <div className='relative w-full h-[700px] overflow-hidden'>
    <MapContainer 
      maxBounds={[[10, 10], [180, 180]]}
      center={[55.45, 50,25]} 
      zoom={5}
      crs={CRS.EPSG3395}
      minZoom={3}
      scrollWheelZoom={false}
      className='w-full h-full'>
        {/* <TileLayer
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}.png"
        /> */}
        {geoJson && (
          <GeoJSON key='my-geojson' 
            data={geoJson} 
            onEachFeature={(feature, layer) => {
              if (feature.properties && feature.properties.name) {
                layer.bindPopup(feature.properties.name); // Display name in popup
              }
            }}
          />
        )}
    </MapContainer>
    </div>
  );
}

export default Map;
