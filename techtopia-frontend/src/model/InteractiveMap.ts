import { RefreshmentStand } from "./RefreshmentStand";
import { Attraction } from "./Attraction";
import { PointOfInterest } from "./PointOfInterest";
import { MapObject } from "../config/Types";
export interface InteractiveMap {
    Attraction: Attraction[];
    RefreshmentStand: RefreshmentStand[];
    PointOfInterest: PointOfInterest[] | null;
}

export function mapInteractiveMapToMapObject(
    interactiveMap: InteractiveMap | null
): MapObject[] {
    const mapObjects: MapObject[] = [];

    if (interactiveMap === null) {
        console.log("interactiveMap is null");
        return mapObjects;
    }

    console.log(interactiveMap);

    if (interactiveMap.Attraction !== null) {
        // Map attractions to MapObjects
        interactiveMap.Attraction.forEach((attraction) => {
            mapObjects.push({
                x: attraction.location[0], // Assuming the location property is an array [x, y]
                y: attraction.location[1],
                type: "Attraction",
            });
        });
    }

    if (interactiveMap.RefreshmentStand !== null) {
        // Map refreshment stands to MapObjects
        interactiveMap.RefreshmentStand.forEach((refreshmentStand) => {
            mapObjects.push({
                x: refreshmentStand.location[0],
                y: refreshmentStand.location[1],
                type: "Refreshment Stand",
            });
        });
    }

    // Map points of interest to MapObjects
    if (interactiveMap.PointOfInterest === null) {
        // Handle the case where interactiveMap.PointOfInterest is null
        return mapObjects;
    }

    interactiveMap.PointOfInterest.forEach((pointOfInterest) => {
        mapObjects.push({
            x: pointOfInterest.location[0],
            y: pointOfInterest.location[1],
            type: "Point of Interest",
        });
    });

    return mapObjects;
}
