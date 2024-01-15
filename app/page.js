import TeacherCard from "@/app/components/TeacherCard";
import Link from "next/link";
import {VIEW_BLOGS} from "@/app/utils/routes";
import CustomCarousel from "@/app/components/Carousel";

export default function Home() {
    const content = 'Are you ready to embark on a musical journey that will not only teach you the art of drumming but also ignite a passion for rhythm within you? Look no further! At Colombo Drum School, we are committed to providing a dynamic and engaging drumming experience for students of all ages and skill levels.'
    return (
        <div className={'sm:px-20'}>
            <section className="px-5 sm:px-0 bg-light text-gray-600 dark:bg-gray-700 dark:text-white text-center py-16">
                <h1 className="text-4xl font-bold mb-4">Colombo Drum School</h1>
                <p className="mb-8 font-sevillana text-2xl">
                    {content}
                </p>
                <Link
                    className="bg-white text-blue-500 px-6 py-3 rounded-full font-semibold hover:bg-blue-200 focus:outline-none focus:shadow-outline-blue"
                    href={VIEW_BLOGS}>
                    Get Started
                </Link>
            </section>
            <div className={''}>
                <section className="">
                    <CustomCarousel/>
                </section>

                {/* Teacher Details */}
                <section className="my-16">
                    <h2 className="text-3xl font-semibold mb-8 text-center dark:text-gray-300">Meet Your Instructor</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3">
                        <div className={'h-[60vh] lg:item-1 lg:col-span-2'}>
                            <iframe className={'w-full h-full'}
                                    src="https://www.youtube.com/embed/C83WzmJKp7Y?si=uS17MfeBxdol23DU"
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen></iframe>
                        </div>
                        <div className={'flex justify-center mt-5 lg:mt-0 lg:justify-end items-center lg:col-span-1'}>
                            <TeacherCard name={'Pubudu Niroshan'} imagepath={'/carousel/profile_image.jpg'}/>
                        </div>
                    </div>
                </section>
            </div>
            {/* Image Carousel */}

        </div>
    );
}
