import React, { useState, useRef, useEffect } from "react";
import MapGL, { Layer, Source, Marker } from "react-map-gl";
import { useSelector } from "react-redux";

export default function Map() {
    const posts = useSelector((state: any) => state.postReducer)

    // enlever le any 
    const [arrondissementJson, setArrondisementJson] = useState<string | any>(false)
    const [viewport, setViewport] = useState({
        width: String("80%"),
        height: String("80vh"),
        latitude: Number(48.8609041),
        longitude: Number(2.3437745),
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        zoom: Number(11),
        bearing: Number(0),
        pitch: Number(50), // degré
        transitionDuration: Number(500),
    });

    return (
        <div data-testid="map" className="mapboxgl-map flex justify-center items-center w-full shadow-2xl">



            < MapGL
                className="shadow-2xl"
                mapStyle={"mapbox://styles/mapbox/dark-v10"}
                mapboxApiAccessToken={process.env.REACT_APP_TOKEN_MAP_BOX}
                {...viewport}
                onViewportChange={setViewport}

            >
                <Source
                    id="polylineLayer"
                    type="geojson"
                    data={posts}
                >
                    <Layer
                        id="lineLayer"
                        type="line"
                        source="my-data"
                        layout={{
                            "line-join": "round",
                            "line-cap": "round",
                        }}
                        paint={{
                            "line-color": "rgba(3, 170, 238, 0.5)",
                            "line-width": 3,
                        }}
                    />
                </Source>
            </MapGL>


        </div >
    );
}
