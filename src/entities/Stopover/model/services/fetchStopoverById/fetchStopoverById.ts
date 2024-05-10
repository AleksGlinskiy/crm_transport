import { createAsyncThunk } from '@reduxjs/toolkit';
import { Stopover } from '../../types/stopover';
import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema';

export const fetchStopoverById = createAsyncThunk<
    Stopover,
    string,
    ThunkConfig<string>
>('stopover/fetchStopoverById', async (stopoverId, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI;
    try {
        const response = await extra.api.get<Stopover>(
            `stopover/${stopoverId}`,
        );

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
        return rejectWithValue('error');
    }
});
