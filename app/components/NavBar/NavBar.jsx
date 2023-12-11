"use client"
import Link from "next/link";

import {useEffect, useState} from "react";
import {usePathname} from "next/navigation";
import PageLink from "@/app/components/NavBar/PageLink";
import Image from "next/image";

const NavBar = () => {
    const pathname = usePathname();
    const pages = {
        'Create Blog': '/create_blog',
        'View Blogs': '/view_blogs',
    }
    useEffect(() => {
        if (pathname === '/') {
            setHomePageColor('text-white')
        }

    }, [pathname])
    const [homePageColor, setHomePageColor] = useState('text-gray-400');
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <div className={'btn btn-ghost'}>
                    <Image className={'rounded-full'} src={'/logo.jpg'} alt={'logo'} width={30} height={30}/>
                    <Link href={'/'} className={`${homePageColor}  text-xl`}>CDS</Link>
                </div>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    {
                        Object.keys(pages).map(
                            (title, index) => (
                                <PageLink key={index} pages={pages} title={title} index={index} pathname={pathname}/>
                            )
                        )
                    }
                    <li>
                        <details>
                            <summary>
                                Pubudu
                            </summary>
                            <ul className="p-2 bg-base-100 rounded-t-none">
                                <li><a>Create Student User</a></li>
                                <li><a>SignOut</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    );
}


export default NavBar;