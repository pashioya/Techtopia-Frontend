import axios from "axios";
import { Attraction } from "../model/Attraction";
import { RefreshmentStand } from "../model/RefreshmentStand";
import { PointOfInterest } from "../model/PointOfInterest";
import { InteractiveMapObject } from "../model/InteractiveMapObject";

// import express from "express";
// import cors from "cors";
// const app = express();

// app.use(cors({ origin: "http://localhost:5173" }));
// const PORT = 8092;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

const BASE_URL = "http://localhost:8092";

axios.defaults.baseURL = BASE_URL;

const ATTRACTION_URL = `${BASE_URL}/attractions`;
const REFRESHMENT_URL = `${BASE_URL}/refreshments`;
const POINT_OF_INTEREST_URL = `${BASE_URL}/pointOfInterests`;
const INTERACTIVE_MAP_URL = `${BASE_URL}/interactiveMap`;

export async function getAttractions(): Promise<Attraction[]> {
    try {
        const response = await axios.get(ATTRACTION_URL);
        console.log(response.data);

        return response.data.map(
            (attractionData: {
                name: string;
                description: string;
                currentCapacity: number;
                maxCapacity: number;
                averageWaitTime: string;
                location: { x: number; y: number };
            }) => ({
                name: attractionData.name,
                description: attractionData.description,
                currentCapacity: attractionData.currentCapacity,
                maxCapacity: attractionData.maxCapacity,
                averageWaitTime: attractionData.averageWaitTime,
                x: attractionData.location.x,
                y: attractionData.location.y,
                type: "ATTRACTION",
            })
        ) as Attraction[];
    } catch (error) {
        console.error("Error fetching attractions:", error);
        return [];
    }
}

export async function getRefreshmentStands(): Promise<RefreshmentStand[]> {
    try {
        const response = await axios.get(REFRESHMENT_URL);

        console.log("Get refreshmentsStands");
        console.log(response.data);
        return response.data.map(
            (refreshmentData: {
                name: string;
                description: string;
                status: string;
                location: { x: number; y: number };
            }) => ({
                name: refreshmentData.name,
                description: refreshmentData.description,
                status: refreshmentData.status,
                location: refreshmentData.location,
                type: "REFRESHMENT_STAND",
            })
        ) as RefreshmentStand[];
    } catch (error) {
        console.error("Error fetching refreshments:", error);
        return [];
    }
}

export async function getPointOfInterests(): Promise<PointOfInterest[]> {
    try {
        const response = await axios.get(POINT_OF_INTEREST_URL);
        return response.data.map(
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
    } catch (error) {
        console.error("Error fetching point of interests:", error);
        return [];
    }
}
export async function getInteractiveMap(): Promise<InteractiveMapObject> {
    try {
        const response = await axios.get(INTERACTIVE_MAP_URL);

        console.log("Get interactive map");
        const Attraction = (response.data.attraction ?? []).map(
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
            })
        ) as Attraction[];

        console.log("Gorren Attractiocns");
        console.log(Attraction);

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
            })
        ) as RefreshmentStand[];

        console.log("Gotten Refreshment Stands");
        console.log(RefreshmentStand);

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
            })
        ) as PointOfInterest[];

        console.log("Gotten POints of interst");
        console.log(PointOfInterest);

        return {
            Attraction,
            RefreshmentStand,
            PointOfInterest,
        };
    } catch (error) {
        console.error("Error fetching interactive map:", error);
        return {
            Attraction: [],
            RefreshmentStand: [],
            PointOfInterest: [],
        };
    }
}
