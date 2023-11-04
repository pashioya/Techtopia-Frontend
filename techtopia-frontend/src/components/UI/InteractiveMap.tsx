import { useState } from 'react';
import {
    ComposableMap,
    ZoomableGroup,
    Marker
} from 'react-simple-maps';
import customMapImage from '../../assets/amusementParkMap.png';

const MapChart = () => {
    const [center, setCenter] = useState<[number, number]>([0, 0]);
    const handlePan = (event: { coordinates: any; }) => {
        const { coordinates } = event;
        setCenter(coordinates);
    };

    return (
        <div>
            <ComposableMap projection="geoMercator">
                <ZoomableGroup center={center} onMoveEnd={handlePan}>
                    <image href={customMapImage} width="100%" height="100%" />
                    <Marker coordinates={[0, 0]}>
                        <circle r={3} fill="#FF5533" />
                    </Marker>
                    <Marker coordinates={[100, 4]}>
                        <circle r={3} fill="#FF5533" />
                    </Marker>
                </ZoomableGroup>
            </ComposableMap>
        </div>
    );
};

export default MapChart;
