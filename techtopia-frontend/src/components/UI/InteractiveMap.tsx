import { useState } from "react";
import { ComposableMap, ZoomableGroup, Marker } from "react-simple-maps";
import customMapImage from "../../assets/amusementParkMap.png";

const examplePointOfInterestMarkers = {
    pointOfInterest1: {
        x: 14,
        y: 20,
        name: "Point of Interest 1",
        type: "ATTRACTION",
    },
    pointOfInterest2: {
        x: 42,
        y: 12,
        name: "Point of Interest 2",
        type: "REFRESHMENT_STAND",
    },
    pointOfInterest3: {
        x: 0,
        y: 0,
        name: "point Of Interest3",
        type: "POINT_OF_INTEREST",
    },
    pointOfInterest4: {
        x: 24,
        y: 30,
        name: "Point of Interest 1",
        type: "ATTRACTION",
    },
    pointOfInterest5: {
        x: 92,
        y: 11,
        name: "Point of Interest 2",
        type: "REFRESHMENT_STAND",
    },
    pointOfInterest6: {
        x: 12,
        y: 41,
        name: "point Of Interest3",
        type: "POINT_OF_INTEREST",
    },
};

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

const MapChart = () => {
    const [center, setCenter] = useState<[number, number]>([0, 0]);
    const handlePan = (event: { coordinates: [number, number] }) => {
        const { coordinates } = event;
        setCenter(coordinates);
    };

    return (
        <div>
            <ComposableMap projection="geoMercator">
                <ZoomableGroup center={center} onMoveEnd={handlePan}>
                    <image href={customMapImage} width="100%" height="100%" />
                    {Object.entries(examplePointOfInterestMarkers).map(
                        ([key, value]) => (
                            <Marker key={key} coordinates={[value.x, value.y]}>
                                <circle
                                    r={3}
                                    fill={colorSelection(value.type)}
                                />
                            </Marker>
                        )
                    )}
                </ZoomableGroup>
            </ComposableMap>
        </div>
    );
};

export default MapChart;
