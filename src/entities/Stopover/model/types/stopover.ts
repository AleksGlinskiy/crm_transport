import { StopoverDetailSlice } from '@/entities/Stopover/model/slice/StopoverDetailSlice';

export interface Stopover {
    id: number;
    name: string;
    coordinates: string;
}

export interface StopoverDetails {
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

export interface StopoverDetailsScheme {
    isLoading: boolean;
    data?: Stopover;
    errors?: string;
}
