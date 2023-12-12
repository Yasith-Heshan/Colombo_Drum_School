"use client"
import Link from "next/link";

import {useEffect, useState} from "react";
import {usePathname} from "next/navigation";
import PageLink from "@/app/components/NavBar/PageLink";
import Image from "next/image";

const NavBar = ({children}) => {
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
        <>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle"/>
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar bg-base-500">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     className="inline-block w-6 h-6 stroke-current">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </label>
                        </div>
                        <div className="flex-1">
                            <div className={'btn btn-ghost'}>
                                <Image className={'rounded-full'} src={'/logo.jpg'} alt={'logo'} width={30}
                                       height={30}/>
                                <Link href={'/'} className={`${homePageColor}  text-xl`}>CDS</Link>
                            </div>
                        </div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal">
                                {
                                    Object.keys(pages).map(
                                        (title, index) => (
                                            <li key={index}>
                                                <PageLink pages={pages} title={title} pathname={pathname}/>
                                            </li>

                                        )
                                    )
                                }
                            </ul>
                            <div className="-ml-2 dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost rounded-btn">Pubudu N.</div>
                                <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                                    <li><a>Create Student</a></li>
                                    <li><a>Sign Out</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {children}
                </div>
                <div className="drawer-side sm:hidden">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200">
                        {
                            Object.keys(pages).map(
                                (title, index) => (
                                    <li key={index}>
                                        <PageLink pages={pages} title={title} index={index}
                                                  pathname={pathname}/>
                                    </li>

                                )
                            )
                        }
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost rounded-btn">Pubudu N.</div>
                            <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                                <li><a>Create Student</a></li>
                                <li><a>Sign Out</a></li>
                            </ul>
                        </div>
                    </ul>

                </div>
            </div>
        </>
    );
}


export default NavBar;