import { createSlice } from '@reduxjs/toolkit';
import { StopoverScheme } from '@/entities/Stopover';

const initialState: StopoverScheme = {
    isLoading: false,
    stopover: [],
    errors: [],
};

const stopoverPageSlices = createSlice({
    name: 'stopoverPageSlices',
    initialState,
    reducers: {
        setSearch: (state, action) => {},
    },
});

export const { actions: stopoverPageActions, reducer: stopoverPageReducer } =
    stopoverPageSlices;
