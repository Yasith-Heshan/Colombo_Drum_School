import {combineReducers} from "@reduxjs/toolkit";
import viewBlogsReducer from "@/app/view_blogs/viewBlogsSlice";

const rootReducer = combineReducers(
    {
        viewBlogData: viewBlogsReducer,
    }
);

export default rootReducer;