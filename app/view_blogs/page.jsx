"use client"
import {useEffect} from "react";
import Blog from "@/app/components/Blog";
import NavBar from "@/app/components/NavBar/NavBar";
import Footer from "@/app/components/Footer";
import {useDispatch, useSelector} from 'react-redux'
import {startGettingBLogsList} from "@/app/view_blogs/viewBlogsSlice";

const ViewBlogs = () => {
    const dispatch = useDispatch();


    useEffect(() => {
        console.log('useeffect')
        dispatch(startGettingBLogsList());
    }, []);

    const {blogs,loading} = useSelector((state)=>state.viewBlogData);
    console.log('from page:',blogs);

    return (
        <>
            <NavBar/>
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
                                        return <Blog key={index} data={data}/>
                                    }
                                )
                            }
                        </div>
                    )
                }
            <Footer/>
        </>
    );

}

export default ViewBlogs