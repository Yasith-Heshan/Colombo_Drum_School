"use client"
import {useEffect, useState} from "react";
import Blog from "@/app/components/Blog";
import Link from "next/link";
import {VIEW_BLOGS} from "@/app/utils/routes";
import {retrieveBlogs} from "@/app/utils/firebase_functions";
import {toast} from "sonner";
import {useBlogs} from "@/app/context/blogContext";
import {Spinner} from "flowbite-react";

const ViewBlogs = () => {
    const [loading, setLoading] = useState(false);
    const {blogs, setBlogs} = useBlogs();
    const [isClient, setIsClient] = useState(false);



    useEffect(() => {
        setLoading(true);
        retrieveBlogs()
            .then(
                (blogs) => {
                    console.log(blogs);
                    setBlogs([...blogs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))]);
                }
            ).catch(
            (e) => {
                console.error(e);
                toast.error('Blogs fetching failed');
            }
        ).finally(
            () => {
                setIsClient(true);
                setLoading(false);
            }
        )
    }, []);


    return (
        <>
            {
                loading && (
                    <div className={'h-[70vh] flex justify-center items-center m-10'}>
                        <Spinner size={'xl'}/>
                    </div>
                )
            }
            {
                !loading && isClient  && blogs && (
                    <div className={'flex justify-center items-center mt-3'}>
                        <div className="mb-32 sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
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