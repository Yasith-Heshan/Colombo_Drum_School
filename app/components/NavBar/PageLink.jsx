import Link from "next/link";
import {useEffect, useState} from "react";

const PageLink = ({pages, title, index,pathname}) =>{
    const [background, setBackground] = useState('')
    useEffect(()=>{
        if(pathname===pages[title]){
            setBackground('bg-red-400 text-white')
        }

    },[pages, pathname, title])
   return (
       <li key={index}><Link className={`${background}`} href={pages[title]}>{title}</Link></li>
   )
}

export default PageLink;