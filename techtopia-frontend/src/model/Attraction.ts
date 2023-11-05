export interface Attraction {
    id: number;
    title: string;
    description: string;
    currentCapacity: number;
    maxCapacity: number;
    averageWaitTime: number;
    location: [number, number];
    type: string;
}
