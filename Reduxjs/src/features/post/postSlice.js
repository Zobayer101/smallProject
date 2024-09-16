import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import getPost from "./post";


const initailState = {
    post: [],
    isLoding: false,
    isError: false,
    error:'',
}
export const fetchPost = createAsyncThunk('post/fetchPost', async () => {
    const post = await getPost();
    return post;
});
const postSlice = createSlice({
    name: "post",
    initialState: initailState,
    extraReducers: (builder) => {
        builder.addCase(fetchPost.pending, (state) => {
            state.isLoding = false;
            state.isLoding = true;
        });
        builder.addCase(fetchPost.rejected, (state,action) => {
            state.isError = false;
            state.isError = true;
            state.error = action.error?.message;
        })
        builder.addCase(fetchPost.fulfilled, (state, action) => {
            state.isLoding = false;
            state.post = action.payload;
        })
    }
});


export default postSlice.reducer;
