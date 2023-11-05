export interface Attraction {
    name: string;
    description: string;
    currentCapacity: number;
    maxCapacity: number;
    averageWaitTime: string;
    location: [number, number];
    type: string;
}
