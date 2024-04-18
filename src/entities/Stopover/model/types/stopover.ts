export interface Stopover {
    id: number;
    name: string;
    coordinates: string;
}

export interface StopoverScheme {
    isLoading: boolean;
    data: Stopover[];
    errors: string;
    _inited: boolean;
}
