import axios from "axios";
import { RefreshmentStand } from "../model/RefreshmentStand";


const BASE_URL = "http://localhost:8092";

axios.defaults.baseURL = BASE_URL;
const REFRESHMENT_URL = `${BASE_URL}/refreshmentStands`;


export async function getRefreshmentStands(): Promise<RefreshmentStand[]> {
    try {
        const response = await axios.get(REFRESHMENT_URL);
        console.log("Get refreshmentsStands");
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
                x: refreshmentData.location.x,
                y: refreshmentData.location.y,
                type: "REFRESHMENT_STAND",
            })
        ) as RefreshmentStand[];
    } catch (error) {
        console.error("Error fetching refreshments:", error);
        return [];
    }
}
