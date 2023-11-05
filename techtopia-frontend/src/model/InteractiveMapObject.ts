import { RefreshmentStand } from "./RefreshmentStand";
import { Attraction } from "./Attraction";
import { PointOfInterest } from "./PointOfInterest";
import { MapObject } from "../config/Types";
export interface InteractiveMapObject {
    Attraction: Attraction[];
    RefreshmentStand: RefreshmentStand[];
    PointOfInterest: PointOfInterest[] | null;
}

export function mapInteractiveMapToMapObject(
    interactiveMap: InteractiveMapObject | null
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
                x: attraction.x,
                y: attraction.y,
                type: "Attraction",
            });
        });
    }

    if (interactiveMap.RefreshmentStand !== null) {
        // Map refreshment stands to MapObjects
        interactiveMap.RefreshmentStand.forEach((refreshmentStand) => {
            mapObjects.push({
                x: refreshmentStand.x,
                y: refreshmentStand.y,
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
            x: pointOfInterest.x,
            y: pointOfInterest.y,
            type: "Point of Interest",
        });
    });

    return mapObjects;
}
