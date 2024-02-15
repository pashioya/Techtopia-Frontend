import axios from "axios";
import { Attraction } from "../model/Attraction";

const BASE_URL = "http://localhost:8092";
axios.defaults.baseURL = BASE_URL;
const ATTRACTION_URL = `${BASE_URL}/attractions`;

export async function getAttractions(): Promise<Attraction[]> {
    try {
        const response = await axios.get(ATTRACTION_URL);
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
