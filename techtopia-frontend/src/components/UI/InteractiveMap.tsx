import { useState } from "react";
import { ComposableMap, ZoomableGroup, Marker } from "react-simple-maps";
import customMapImage from "../../assets/amusementParkMap.png";
import { FC } from "react";
import { MapObject } from "../../config/Types.ts";
function colorSelection(type: string) {
    switch (type) {
        case "ATTRACTION":
            return "#FF5533";
        case "REFRESHMENT_STAND":
            return "#FFC433";
        case "POINT_OF_INTEREST":
            return "#33FF55";
        default:
            return "#FF5533";
    }
}

// Define the type for the component's props
interface MapChartProps {
    mapObjects: MapObject[]; // An array of MapObject
}

const MapChart: FC<MapChartProps> = ({ mapObjects }) => {
    const [center, setCenter] = useState<[number, number]>([0, 0]);
    const handlePan = (event: { coordinates: [number, number] }) => {
        const { coordinates } = event;
        setCenter(coordinates);
    };

    return (
        <div
            style={{
                border: "2px solid #D3D3D3",
                borderRadius: "10px",
                padding: "10px",
                backgroundColor: "#f0f0f0",
            }}
        >
            <ComposableMap projection="geoMercator">
                <ZoomableGroup center={center} onMoveEnd={handlePan}>
                    <image href={customMapImage} width="100%" height="100%" />
                    {mapObjects.map((mapObject, index) => (
                        <Marker
                            key={index}
                            coordinates={[mapObject.x, mapObject.y]}
                        >
                            <circle
                                r={3}
                                fill={colorSelection(mapObject.type)}
                            />
                        </Marker>
                    ))}
                </ZoomableGroup>
            </ComposableMap>
        </div>
    );
};

export default MapChart;
