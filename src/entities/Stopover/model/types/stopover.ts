export interface Stopover {
    id?: number;
    name?: string;
    coordinates?: string;
}

export interface StopoverScheme {
    isLoading: boolean;
    data: Stopover[];
    errors: string;
    _inited: boolean;
}

export interface StopoverDetailsScheme {
    isLoading: boolean;
    data?: Stopover;
    errors?: string;
    readonly?: boolean;
    form?: Stopover;
    formIsLoading: boolean;
}
