"use client"
import {retrieveBlog} from "@/app/utils/firebase_functions";
import {useEffect, useState} from "react";
import Blog from "@/app/components/Blog";

const ViewBlogs = ()=>{

    const [blogList, setBlogList] = useState([])

    useEffect(() => {
        return async () => {
            const data = await retrieveBlog();
            setBlogList([...blogList,...data]);
        };
    }, []);

    console.log(blogList[0]);

    return (
        <>{
            blogList[0] && (
                <div className="grid grid-cols-3">
                    {
                        blogList.map((data,index)=> {
                                return <Blog key={index} data={data}/>
                            }
                        )
                    }
                </div>
            )
        }

        </>
      // <div className={'grid grid-cols-3'}>
      //     {
      //         blogList.map((data,index)=> {
      //                 return <Blog key={index} data={data}/>
      //             }
      //         )
      //     }
      // </div>
    );

}

export default ViewBlogs