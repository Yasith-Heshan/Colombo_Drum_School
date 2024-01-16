'use client';
import {Avatar, Button, DarkThemeToggle, Dropdown, Navbar, Spinner} from 'flowbite-react';
import {CREATE_BLOG, HOME_ROUTE, VIEW_BLOGS} from "@/app/utils/routes";
import {usePathname} from 'next/navigation'
import {useAuth} from "@/app/context/authContext";

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

    const {user, handleSignIn, handleSignOut, loading} = useAuth();



    const pathname = usePathname();

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
                        {!user && (<Button className={'text-white'} color={'bg_pink'} onClick={async () => {
                            await handleSignIn();
                        }}>SignIN</Button>)}
                        {user && (<Dropdown
                            arrowIcon={false}
                            inline
                            label={
                                <Avatar alt="settings"
                                        img={user.photoURL}
                                        rounded/>
                            }
                        >
                            <Dropdown.Header>
                                <span className="block text-sm">{user.displayName}</span>
                                <span className="block truncate text-sm font-medium">{user.email}</span>
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
                        (item,index)=>(
                            <Navbar.Link key={index} href={item.route} active={pathname===item.route}>
                                {item.name}
                            </Navbar.Link>
                        )
                    )

                }


            </Navbar.Collapse>
        </Navbar>
    );
}
