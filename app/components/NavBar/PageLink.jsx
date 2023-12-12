import Link from "next/link";
import {useEffect, useState} from "react";

const PageLink = ({pages, title,pathname}) =>{
    const [background, setBackground] = useState('')
    useEffect(()=>{
        if(pathname===pages[title]){
            setBackground('bg-red-400 text-white')
        }

    },[pages, pathname, title])
   return (
       <Link className={`${background}`} href={pages[title]}>{title}</Link>
   )
}

export default PageLink;