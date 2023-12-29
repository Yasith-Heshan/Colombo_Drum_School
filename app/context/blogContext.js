"use client"
import {createContext, useContext, useEffect, useState} from "react";
import {useLocalStorage} from "@/app/hooks/useLocalStorage";
import blog from "@/app/components/Blog";


const context = createContext({});
export const BlogContext  = ({children})=>{
    const [storedValues,setValue] = useLocalStorage('blogs',[]);
    const [blogs, setBlogs] = useState(storedValues);


    useEffect(() => {
        setValue(blogs);
    }, [blogs]);

    return (
        <context.Provider value={{blogs,setBlogs}}>
            {children}
        </context.Provider>
    );
}

export const useBlogs=()=>{
    return useContext(context);
}