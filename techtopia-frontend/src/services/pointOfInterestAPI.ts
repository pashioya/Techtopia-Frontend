import axios from "axios";
import { PointOfInterest } from "../model/PointOfInterest";

const BASE_URL = "http://localhost:8092";

axios.defaults.baseURL = BASE_URL;
const POINT_OF_INTEREST_URL = `${BASE_URL}/pointOfInterests`;







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
