import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { StopoverScheme } from '@/entities/Stopover';
import { fetchDataStopover } from '@/entities/Stopover/model/services/fetchDataStopover/fetchDataStopover';

const initialState: StopoverScheme = {
    isLoading: false,
    data: [],
    errors: '',
    _inited: false,
};

const stopoverPageSlices = createSlice({
    name: 'stopover',
    initialState,
    reducers: {},
    extraReducers: (builder: ActionReducerMapBuilder<StopoverScheme>) => {
        builder
            .addCase(fetchDataStopover.pending, (state) => {
                state.isLoading = true;
                state.errors = '';
            })
            .addCase(fetchDataStopover.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
                state._inited = true;
            })
            .addCase(fetchDataStopover.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = 'error';
            });
    },
});

export const { actions: stopoverPageActions, reducer: stopoverPageReducer } =
    stopoverPageSlices;
