'use client'
import {
    Avatar,
    DarkThemeToggle,
    Dropdown,
    DropdownDivider,
    DropdownHeader,
    DropdownItem,
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarLink,
    NavbarToggle
} from 'flowbite-react';
import {CREATE_BLOG, HOME_ROUTE, VIEW_BLOGS} from "@/app/utils/routes";
import Image from "next/image";
import { usePathname } from 'next/navigation'

const routeDetails = [
    {
        name: 'Home',
        route: HOME_ROUTE,
    },
    {
        name: 'Create Blog',
        route: CREATE_BLOG,
    },
    {
        name: 'Blogs',
        route: VIEW_BLOGS,
    }
]

export default function NavBar() {


    const pathname = usePathname();

    return (
        <Navbar fluid rounded>
            <NavbarBrand href={HOME_ROUTE}>
                <Image width={24} height={36} src="/logo.jpg" className="mr-3 w-6 h-6 sm:h-9 sm:w-9"
                       alt="Flowbite React Logo"/>
                <span className="hidden sm:block self-center whitespace-nowrap text-xl font-semibold dark:text-white">Colombo Drum School</span>
                <span
                    className="block sm:hidden self-center whitespace-nowrap text-xl font-semibold dark:text-white">CDS</span>
            </NavbarBrand>
            <div className="flex md:order-2">
                <DarkThemeToggle className={'mr-3'}/>
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar alt="User settings"
                                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded/>
                    }
                >
                    <DropdownHeader>
                        <span className="block text-sm">Bonnie Green</span>
                        <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                    </DropdownHeader>
                    <DropdownItem>Settings</DropdownItem>
                    <DropdownDivider/>
                    <DropdownItem>Sign out</DropdownItem>
                </Dropdown>
                <NavbarToggle/>
            </div>
            <NavbarCollapse>

                {
                    routeDetails.map(
                        (item,index)=>(
                            <NavbarLink key={index} href={item.route} active={pathname===item.route}>
                                {item.name}
                            </NavbarLink>
                    )
                    )
                }
            </NavbarCollapse>
        </Navbar>
    );
}
