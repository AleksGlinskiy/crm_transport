import { createAsyncThunk } from '@reduxjs/toolkit';
import { Stopover } from '../../types/stopover';
import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema';

export const fetchDataStopover = createAsyncThunk<
    Stopover[],
    void,
    ThunkConfig<string>
>('stopover/fetchDataStopover', async (_, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI;
    try {
        const response = await extra.api.get<Stopover[]>('stopover');

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
