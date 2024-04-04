export interface Stopover {
    id: number;
    name: string;
    coordinates: string;
}

export interface StopoverScheme {
    isLoading: boolean;
    stopover: Stopover[];
    errors: [];
}
