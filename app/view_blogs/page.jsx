"use client"
import {useEffect, useState} from "react";
import Blog from "@/app/components/Blog";
import Link from "next/link";
import {VIEW_BLOGS} from "@/app/utils/routes";
import {retrieveBlogs} from "@/app/utils/firebase_functions";
import {toast} from "sonner";
import {useBlogs} from "@/app/context/blogContext";

const ViewBlogs = () => {
    const [loading, setLoading] = useState(false);
    const {blogs, setBlogs} = useBlogs();



    useEffect(() => {
        localStorage.removeItem('blogs');
        setLoading(true);
        retrieveBlogs()
            .then(
                (blogs) => {
                    setBlogs([...blogs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))]);
                }
            ).catch(
            (e) => {
                console.error(e);
                toast.error('Blogs fetching failed');
            }
        ).finally(
            () => {
                setLoading(false);
            }
        )
    }, []);


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
                !loading && blogs && (
                    <div className={'flex justify-center items-center'}>
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
                    </div>
                )
            }
        </>
    );

}

export default ViewBlogs