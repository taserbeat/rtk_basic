import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'https://jsonplaceholder.typicode.com/users';

export const fetchAsynkGet = createAsyncThunk('fetch/get', async () => {
    const response = await axios.get(apiUrl);
    return response.data;
});

const fetchSlice = createSlice({
    name: 'fetch',
    initialState: { users: [] },
    reducers: {},
    // createAsynkThunkを使用する場合は、extraReducersに登録する
    extraReducers: (builder) => {
        builder.addCase(fetchAsynkGet.fulfilled, (state, action) => {
            return {
                ...state,
                users: action.payload  // axios.get()のresponse.dataがaction.payloadとなる
            }
        })
    },
});

export const selectUsers = (state) => state.fetch.users;
export default fetchSlice.reducer;