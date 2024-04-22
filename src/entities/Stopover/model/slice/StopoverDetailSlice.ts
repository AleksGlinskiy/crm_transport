import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { StopoverDetailsScheme, StopoverScheme } from '../types/stopover';
import { fetchStopoverById } from '@/entities/Stopover/model/services/fetchStopoverById/fetchStopoverById';

const initialState: StopoverDetailsScheme = {
    data: undefined,
    errors: undefined,
    isLoading: false,
};

export const StopoverDetailSlice = createSlice({
    name: 'stopoverDetails',
    initialState,
    reducers: {},
    extraReducers: (
        builder: ActionReducerMapBuilder<StopoverDetailsScheme>,
    ) => {
        builder.addCase(fetchStopoverById.pending, (state, action) => {
            state.isLoading = true;
            state.errors = undefined;
        });
        builder.addCase(fetchStopoverById.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchStopoverById.rejected, (state, action) => {
            state.errors = action.payload;
            state.isLoading = false;
        });
    },
});

export const {
    actions: stopoverDetailActions,
    reducer: stopoverDetailReducer,
} = StopoverDetailSlice;
