import {Inter} from 'next/font/google'
import './globals.css'
import NavBar from "@/app/components/NavBar/NavBar";
import CustomToast from "@/app/components/CustomToast";
import {BlogContext} from "@/app/context/blogContext";
import {Flowbite, ThemeModeScript} from 'flowbite-react';
import CustomFooter from "@/app/components/Footer";
import {customTheme} from "@/app/utils/theme";
import {AuthContextProvider} from "@/app/context/authContext";
import {classNames} from "@/app/utils/support_functions";


const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Colombo Drum School',
    description: 'Discover the rhythm of Colombo Drum School, your premier destination for drumming education in Colombo, Sri Lanka. Learn drumming from experienced instructors, explore diverse percussion styles, and unleash your musical potential. Join our vibrant drumming community and embark on a rhythmic journey at Colombo Drum School.',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <head>
            <ThemeModeScript/>
            <meta charSet='UTF-8'/>
            <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Sevillana&display=swap" rel="stylesheet"/>
            <title>Colombo Drum School</title>
        </head>
        <body className={classNames(inter.className,'bg-gray-200 dark:bg-gray-700')}>
        <AuthContextProvider>
            <BlogContext>
                <Flowbite theme={{theme: customTheme}}>
                    <div >
                        <NavBar/>
                        <div className={'pb-10'}>
                            {children}

                        </div>
                        <CustomToast/>
                        <CustomFooter/>
                    </div>
                </Flowbite>
            </BlogContext>
        </AuthContextProvider>
        </body>
        </html>
    )
}
