"use client"
import {useState} from 'react';
import Link from "next/link";
import {CREATE_BLOG, HOME_ROUTE, VIEW_BLOGS} from "@/app/utils/routes";
import {usePathname} from "next/navigation";
import {shortenName} from "@/app/utils/support_functions";
import Image from "next/image";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navItems ={
        "Create Blog":CREATE_BLOG,
        "View Blog":VIEW_BLOGS
    }

    const user = {
        name: 'Pubudu Niroshan'
    }


    return (
        <header className="bg-gray-900 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
            <div className="flex items-center justify-between px-4 py-3 sm:p-0">
                <Link href={HOME_ROUTE}>
                    <div className={'btn btn-ghost flex justify-center items-center'}>
                        <Image width={30} height={30} className="rounded-full" src="/logo.jpg" alt="Workcation"/>
                        <p className={`${pathname===HOME_ROUTE?'text-white':'text-gray-400'} m-1 font-bold text-xl`}>CDS</p>
                    </div>
                </Link>
                <div className="sm:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
                    >
                        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path
                                    fillRule="evenodd"
                                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                                />
                            ) : (
                                <path
                                    fillRule="evenodd"
                                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>
            <nav className={`${isOpen ? 'block' : 'hidden'} px-2 pt-2 pb-4 sm:flex sm:p-0`}>

                {
                    Object.keys(navItems).map(
                        (navItem, index)=>(
                            <Link key={index} href={navItems[navItem]} className={`${pathname===navItems[navItem]?'bg-pink-600':''} px-2 py-1 text-white font-semibold rounded btn btn-ghost flex justify-center items-center`}>
                                {navItem}
                            </Link>
                        )
                    )
                }
                <div className="dropdown dropdown-bottom sm:dropdown-end flex justify-center items-center">
                    <div tabIndex={0} role="button" className="btn btn-ghost text-white px-2 py-1">{shortenName(user.name)}</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow text-white bg-gray-600 rounded-box w-52">
                        <li className={'hover:bg-gray-500 text-white rounded-2xl'}><Link href={'#'}>Create Student</Link></li>
                        <li className={'hover:bg-gray-500 text-white rounded-2xl'}><Link href={'#'}>Sign Out</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
