import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { Stopover } from '../../types/stopover';
import { getStopoverDetailsForm } from '../../selectors/stopoverDetail';

export const updateStopoverData = createAsyncThunk<
    Stopover,
    string,
    ThunkConfig<string>
>('stopover/updateStopoverData', async (_, thunkAPI) => {
    const { rejectWithValue, extra, getState } = thunkAPI;

    const formData = getStopoverDetailsForm(getState());

    try {
        const response = await extra.api.put<Stopover>(
            `stopover/${formData?.id}`,
            formData,
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
