'use client';
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Polygon, GeoJSON } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import { CRS } from 'leaflet';
import zones from '../../public/json/zones';
import regions from '../../public/json/regions';

interface Feature {
    properties: {
        full_name: string;
        name: string;
    };
}

interface Zone {
  Regions: string[];
  Name: string;
  Color: string;
}

function Map() {
    const [geoJson, setGeoJson] = useState(null);
    const [regionsMap, setRegionsMap] = useState(true);
    const [zonesMap, setZonesMap] = useState(false);

    const handleRegionsMap = (feature: Feature, layer: any, mapObject: any) => {
        let status = false;
        Object.values(mapObject).forEach((value) => {
          const zone = value as Zone;
          if (zone.Regions.includes(feature.properties.full_name)) {
            layer.bindPopup(`${feature.properties.name} - ${zone.Name}`);
            layer.setStyle({
              fillColor: zone.Color,
              fillOpacity: 0.3
            });
            status = true;
          }
        });

        if (!status) {
            layer.bindPopup(feature.properties.full_name);
        }
    };

    const handleClickRegions = () => {
        setZonesMap(false);
        setRegionsMap(true);
    };

    const handleClickZones = () => {
        setRegionsMap(false);
        setZonesMap(true);
    };

    useEffect(() => {
        const attributionElement = document.getElementsByClassName('leaflet-control-attribution')[0] as HTMLElement;
        const leafletContainer = document.getElementsByClassName('leaflet-container')[0] as HTMLElement;
        leafletContainer.style.background = 'transparent';
        attributionElement.style.display = 'none';
        fetch("/json/russia_geojson_wgs84.geojson")
            .then((res) => res.json())
            .then((geoJson) => setGeoJson(geoJson));
    }, []);

    return (
        <>
            <div className='flex items-center justify-center space-x-2 mb-5'>
                <button
                    onClick={handleClickRegions}
                    disabled={regionsMap}
                    className="text-gray-400 text-2xl rounded-full outline-none focus:outline-none focus-visible:ring focus-visible:ring-gray-100 focus:ring-opacity-20 disabled:text-lime-400">
                    Регионы
                </button>
                <button
                    onClick={handleClickZones}
                    disabled={zonesMap}
                    className="text-gray-400 text-2xl rounded-full outline-none focus:outline-none focus-visible:ring focus-visible:ring-gray-100 focus:ring-opacity-20 disabled:text-lime-400">
                    Зоны
                </button>
            </div>
            <div className='relative w-full h-[500px] overflow-hidden lg:h-[700px]'>
                <MapContainer
                    maxBounds={[[10, 0], [85, 180]]}
                    center={[55.45, 50.25]}
                    zoom={4}
                    crs={CRS.EPSG3395}
                    minZoom={3}
                    scrollWheelZoom={false}
                    className='w-full h-full'>
                    {geoJson && (
                        <GeoJSON
                            key={JSON.stringify(geoJson)}
                            data={geoJson!}
                            onEachFeature={(feature, layer) => handleRegionsMap(feature, layer, regions)}
                        />
                    )}
                </MapContainer>
            </div>
        </>
    );
}

export default Map;