import { all, fork } from 'redux-saga/effects';
import blogSagas from "@/app/view_blogs/viewBlogsSaga";

export default function* rootSaga (){
    yield all(
        [
            fork(blogSagas),
        ]
    );
}