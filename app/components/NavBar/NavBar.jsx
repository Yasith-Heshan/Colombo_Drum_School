'use client';
import {Avatar, Button, DarkThemeToggle, Dropdown, Navbar, Spinner} from 'flowbite-react';
import {CREATE_BLOG, HOME_ROUTE, VIEW_BLOGS} from "@/app/utils/routes";
import {useAuth} from "@/app/context/authContext";
import {PERMISSION_LEVEL} from "@/app/utils/constants";
import NavbarLink from "@/app/components/NavBar/NavbarLink";

const routeDetails = [
    {
        name: 'Home',
        route: HOME_ROUTE,
        permission: PERMISSION_LEVEL.All
    },
    {
        name: 'Create Blog',
        route: CREATE_BLOG,
        permission: PERMISSION_LEVEL.Admin

    },
    {
        name: 'Blogs',
        route: VIEW_BLOGS,
        permission: PERMISSION_LEVEL.All
    }
]

export default function NavBar() {

    const {loggedUser, handleSignIn, handleSignOut, loading} = useAuth();


    return (
        <Navbar fluid rounded>
            <Navbar.Brand href={HOME_ROUTE}>
                <img src="/logo.jpg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo"/>
                <span className="hidden sm:block self-center whitespace-nowrap text-xl font-semibold dark:text-white">Colombo Drum School</span>
                <span className="block sm:hidden self-center whitespace-nowrap text-xl font-semibold dark:text-white">CDS</span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <DarkThemeToggle className={'mr-3'}/>
                {loading ? (
                    <div className={'flex justify-center items-center'}>
                        <Spinner color={'pink'}/>
                    </div>
                ) : (
                    <>
                        {!loggedUser && (<Button className={'text-white'} color={'bg_pink'} onClick={async () => {
                            await handleSignIn();
                        }}>SignIN</Button>)}
                        {loggedUser && (<Dropdown
                            className={'mr-3 sm:mr-0'}
                            arrowIcon={false}
                            inline
                            label={
                                <Avatar alt="settings"
                                        img={loggedUser.photoURL}
                                        rounded/>
                            }
                        >
                            <Dropdown.Header>
                                <span className="block text-sm">{loggedUser.displayName}</span>
                                <span className="block truncate text-sm font-medium">{loggedUser.email}</span>
                            </Dropdown.Header>
                            <Dropdown.Item>Dashboard</Dropdown.Item>
                            <Dropdown.Item>Settings</Dropdown.Item>
                            <Dropdown.Divider/>
                            <Dropdown.Item onClick={async () => {
                                await handleSignOut()
                            }}>Sign out</Dropdown.Item>
                        </Dropdown>)}
                    </>
                )}

                <Navbar.Toggle/>
            </div>
            <Navbar.Collapse>

                {
                    routeDetails.map(
                        (item,index)=> {
                            if(item.permission===PERMISSION_LEVEL.Admin){
                                if(loggedUser && loggedUser.email===process.env.NEXT_PUBLIC_ADMIN_EMAIL){
                                    return(
                                        <NavbarLink key={index} link={item.route}>
                                            {item.name}
                                        </NavbarLink>
                                    );
                                }
                            }else{
                                return(
                                    <NavbarLink key={index} link={item.route}>
                                        {item.name}
                                    </NavbarLink>
                                );
                            }

                        }
                    )

                }


            </Navbar.Collapse>
        </Navbar>
    );
}
