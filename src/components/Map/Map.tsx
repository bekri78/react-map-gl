import React, { useState, useRef, useEffect } from "react";
import MapGL, { Layer, Source, Marker } from "react-map-gl";
import { useSelector } from "react-redux";
import { getAllArrondissement, getAllLieuDeTournage } from "./MapSlice";



export default function Map() {
    const mapRef: any = useRef(null);
    const arrondissement = useSelector(getAllArrondissement)// recuperation de redux
    const lieuDeTournage = useSelector(getAllLieuDeTournage)// recuperation de redux
    console.log(lieuDeTournage)
    const [viewport, setViewport] = useState({
        width: "90%",
        height: "80vh",
        latitude: 48.8609041,
        longitude: 2.3437745,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        zoom: 11,
        bearing: 0,
        pitch: 50, // degré
        transitionDuration: 500,
    });
    const onClick = (event: any) => {
        if (event.features[0].properties.cluster) {
            const feature = event.features[0];
            const clusterId = feature.properties.cluster_id;
            const mapboxSource = mapRef.current.getMap().getSource("earthquakes");
            mapboxSource.getClusterExpansionZoom(
                clusterId,
                (err: Error, zoom: number) => {
                    if (err) {
                        console.log(err);
                    }
                    if (
                        feature.geometry.coordinates[0] &&
                        feature.geometry.coordinates[1]
                    ) {
                        setViewport({
                            ...viewport,

                            longitude: feature.geometry.coordinates[0],
                            latitude: feature.geometry.coordinates[1],
                            zoom,
                            transitionDuration: 500,
                        });
                    }
                }
            );
        }
    };

    return (
        <div data-testid="map" className="mapboxgl-map flex justify-center items-center w-full shadow-2xl">

            < MapGL
                className="shadow-2xl"
                mapStyle={"mapbox://styles/mapbox/dark-v10"}
                mapboxApiAccessToken={process.env.REACT_APP_TOKEN_MAP_BOX}
                {...viewport}
                onViewportChange={setViewport}
                onClick={onClick}
                ref={mapRef}
            >
                <Source
                    id="polylineLayer"
                    type="geojson"
                    data={arrondissement}
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


                <Source
                    id="earthquakes"
                    type="geojson"
                    data={lieuDeTournage}
                    cluster={true}
                    clusterMaxZoom={14}
                    clusterRadius={50}
                >
                    <Layer
                        id="clusters"
                        type="circle"
                        source="earthquakes"
                        filter={["has", "point_count"]}
                        paint={{
                            "circle-color": [
                                "step",
                                ["get", "point_count"],
                                "#51bbd6",
                                100,
                                "#f1f075",
                                750,
                                "#f28cb1",
                            ],
                            "circle-radius": [
                                "step",
                                ["get", "point_count"],
                                20,
                                100,
                                30,
                                750,
                                40,
                            ],
                        }}
                    />
                    <Layer
                        id="cluster-count"
                        type="symbol"
                        source="earthquakes"
                        filter={["has", "point_count"]}
                        layout={{
                            "text-field": "{point_count_abbreviated}",
                            "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
                            "text-size": 12,
                        }}
                        paint={{}}
                    />
                    <Layer
                        id="unclustered-point"
                        type="circle"
                        source="earthquakes"
                        filter={["!", ["has", "point_count"]]}
                        paint={{
                            "circle-color": "#11b4da",
                            "circle-radius": 4,
                            "circle-stroke-width": 1,
                            "circle-stroke-color": "#fff",
                        }}
                    />
                </Source>


            </MapGL>


        </div >
    );
}
