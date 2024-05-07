import {
    ActionReducerMapBuilder,
    PayloadAction,
    createSlice,
} from '@reduxjs/toolkit';
import { Stopover, StopoverDetailsScheme } from '../types/stopover';
import { fetchStopoverById } from '../services/fetchStopoverById/fetchStopoverById';
import { updateStopoverData } from '../services/updateStopoverData/updateStopoverData';

const initialState: StopoverDetailsScheme = {
    data: undefined,
    errors: undefined,
    isLoading: false,
    readonly: true,
    form: undefined,
    formIsLoading: false,
};

export const StopoverDetailSlice = createSlice({
    name: 'stopoverDetails',
    initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        cancelEdit: (state) => {
            state.readonly = true;
            state.form = state.data;
        },
        updateStopoverData: (state, action: PayloadAction<Stopover>) => {
            state.form = {
                ...state.form,
                ...action.payload,
            };
        },
    },
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
            state.form = action.payload;
        });
        builder.addCase(fetchStopoverById.rejected, (state, action) => {
            state.errors = action.payload;
            state.isLoading = false;
        });
        builder.addCase(updateStopoverData.pending, (state, action) => {
            state.readonly = true;
            state.formIsLoading = true;
        });
        builder.addCase(updateStopoverData.fulfilled, (state, action) => {
            state.data = action.payload;
            state.form = action.payload;
            state.formIsLoading = false;
        });
    },
});

export const {
    actions: stopoverDetailActions,
    reducer: stopoverDetailReducer,
} = StopoverDetailSlice;
