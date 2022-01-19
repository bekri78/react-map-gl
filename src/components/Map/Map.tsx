import React, { useState } from "react";
import MapGL from "react-map-gl";

export default function Map() {
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
        <MapGL
            mapStyle={"mapbox://styles/mapbox/dark-v10"}
            mapboxApiAccessToken="pk.eyJ1IjoiYmVrcmk5MyIsImEiOiJja3lpaDZmcnMyZDZlMnhvOG1jeTY2cHJiIn0.v2MfvUiv8Yu4-VS-R5ns3Q"
            {...viewport}
            onViewportChange={setViewport}
        >
        </MapGL>
    );
}
