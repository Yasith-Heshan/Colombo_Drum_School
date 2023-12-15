"use client"
import {put, takeLatest, call} from 'redux-saga/effects'
import {retrieveBlogs, saveBlog} from "@/app/utils/firebase_functions";
import {
    addNewFailed,
    addNewSuccess, getBlogListFailed,
    getBlogListSuccess,
    startAddNew,
    startGettingBLogsList
} from "@/app/view_blogs/viewBlogsSlice";

function* addNew(action){
    const data = action.payload
    try{
        yield call(saveBlog(data));
        yield put(addNewSuccess());
    }catch (e){
        console.error(e);
        yield put(addNewFailed('Adding new blog is failed!'));
    }
}

function* getBlogs(){
    try{
        const blogs = yield call(retrieveBlogs);
        yield put(getBlogListSuccess(blogs));
    }catch (e){
        console.error(e);
        yield put(getBlogListFailed('Fetching blogs is failed!'))
    }
}

export function*  watchBlogSagas(){
    yield takeLatest(startAddNew, addNew);
    yield takeLatest(startGettingBLogsList,getBlogs);
}

const blogSagas = watchBlogSagas;

export default blogSagas;

