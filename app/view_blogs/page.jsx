"use client"
import {useEffect} from "react";
import Blog from "@/app/components/Blog";
import {useDispatch, useSelector} from 'react-redux'
import {startGettingBLogsList} from "@/app/view_blogs/viewBlogsSlice";
import Link from "next/link";
import {VIEW_BLOGS} from "@/app/utils/routes";

const ViewBlogs = () => {
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(startGettingBLogsList());
    }, []);

    const {blogs, loading} = useSelector((state) => state.viewBlogData);

    return (
        <>
            {
                loading && (
                    <div className={'flex justify-center items-center m-10'}>
                        <span className="loading loading-spinner loading-lg text-pink-600"></span>
                    </div>
                )
            }
            {
                blogs && (
                    <div className="mb-32 sm:grid sm:grid-cols-2 lg:grid-cols-3">
                        {
                            blogs.map((data, index) => {
                                    return (
                                        <Link key={index} href={`${VIEW_BLOGS}/${index}`}>
                                            <Blog data={data}/>
                                        </Link>
                                    )
                                }
                            )
                        }
                    </div>
                )
            }
        </>
    );

}

export default ViewBlogs