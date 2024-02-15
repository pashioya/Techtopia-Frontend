import axios from "axios";
import { Attraction } from "../model/Attraction";
import { RefreshmentStand } from "../model/RefreshmentStand";
import { PointOfInterest } from "../model/PointOfInterest";
import { InteractiveMapObject } from "../model/InteractiveMapObject";

const BASE_URL = "http://localhost:8092";

axios.defaults.baseURL = BASE_URL;

const INTERACTIVE_MAP_URL = `${BASE_URL}/interactiveMap`;

export async function getInteractiveMap(): Promise<InteractiveMapObject> {
    try {
        const response = await axios.get(INTERACTIVE_MAP_URL);
        const Attraction = (response.data.attractions ?? []).map(
            (attractionData: {
                title: string;
                description: string;
                currentCapacity: number;
                maxCapacity: number;
                averageWaitTime: number;
                location: { x: number; y: number };
            }) => ({
                title: attractionData.title,
                description: attractionData.description,
                currentCapacity: attractionData.currentCapacity,
                maxCapacity: attractionData.maxCapacity,
                averageWaitTime: attractionData.averageWaitTime,
                x: attractionData.location.x,
                y: attractionData.location.y,
                type: "ATTRACTION",
            })
        ) as Attraction[];

        const RefreshmentStand = (response.data.refreshmentStands ?? []).map(
            (refreshmentData: {
                name: string;
                description: string;
                status: string;
                location: { x: number; y: number };
            }) => ({
                name: refreshmentData.name,
                description: refreshmentData.description,
                status: refreshmentData.status,
                x: refreshmentData.location.x,
                y: refreshmentData.location.y,
                type: "REFRESHMENT_STAND",
            })
        ) as RefreshmentStand[];

        const PointOfInterest = (response.data.pointsOfInterest ?? []).map(
            (pointOfInterestData: {
                name: string;
                description: string;
                location: { x: number; y: number };
            }) => ({
                name: pointOfInterestData.name,
                description: pointOfInterestData.description,
                x: pointOfInterestData.location.x,
                y: pointOfInterestData.location.y,
                type: "POINT_OF_INTEREST",
            })
        ) as PointOfInterest[];

        return {
            Attraction,
            RefreshmentStand,
            PointOfInterest,
        };
    } catch (error) {
        return {
            Attraction: [],
            RefreshmentStand: [],
            PointOfInterest: [],
        };
    }
}
