import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { Stopover } from '../../types/stopover';
import { getStopoverDetailsForm } from '../../selectors/stopoverDetail';

export const createStopoverData = createAsyncThunk<
    Stopover,
    void,
    ThunkConfig<string>
>('stopover/createStopoverData', async (_, thunkAPI) => {
    const { rejectWithValue, extra, getState } = thunkAPI;

    const formData = getStopoverDetailsForm(getState());

    try {
        const response = await extra.api.post<Stopover>(`stopover`, formData);

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
