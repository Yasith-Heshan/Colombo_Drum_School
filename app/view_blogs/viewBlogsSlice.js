"use client"
import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    loading: false,
    blogs: [],
    errors: ''
}
export const viewBlogsSlice = createSlice(
    {
        name: "blogsData",
        initialState,
        reducers: {
            startAddNew: (state, action) => {
                state.blogs.loading = true;
            },
            addNewSuccess: (state, action) => {
                state.loading = false;
                state.blogs.push(action.payload);
            },
            addNewFailed: (state, action) => {
                state.loading = false;
                state.error = action.payload;
            },
            startGettingBLogsList: (state, action) => {
                state.loading = true;
            },
            getBlogListSuccess: (state, action) => {
                state.blogs = action.payload
                state.loading = false;
            },
            getBlogListFailed: (state, action) => {
                state.loading = false;
                state.error = action.payload;
            }
        }
    }
);

export const {
    startAddNew,
    addNewSuccess,
    addNewFailed,
    startGettingBLogsList,
    getBlogListSuccess,
    getBlogListFailed
} = viewBlogsSlice.actions;

export default viewBlogsSlice.reducer;