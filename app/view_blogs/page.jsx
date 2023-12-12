"use client"
import {retrieveBlog} from "@/app/utils/firebase_functions";
import {useEffect, useState} from "react";
import Blog from "@/app/components/Blog";
import NavBar from "@/app/components/NavBar/NavBar";
import Footer from "@/app/components/Footer";

const ViewBlogs = () => {

    const [blogList, setBlogList] = useState([])

    useEffect(() => {
        return async () => {
            const data = await retrieveBlog();
            console.log('from view page', data);
            setBlogList([...blogList, ...data]);
        };
    }, []);

    console.log(blogList);

    return (
        <>
            <NavBar>
                {
                    blogList[0] && (
                        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3">
                            {
                                blogList.map((data, index) => {
                                        return <Blog key={index} data={data}/>
                                    }
                                )
                            }
                        </div>
                    )
                }
            </NavBar>
            <Footer/>
        </>
    );

}

export default ViewBlogs