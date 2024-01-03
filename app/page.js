import Carousel from "@/app/components/Carousel";
import TeacherCard from "@/app/components/TeacherCard";
import Link from "next/link";
import {VIEW_BLOGS} from "@/app/utils/routes";

export default function Home() {
    const content = 'Are you ready to embark on a musical journey that will not only teach you the art of drumming but also ignite a passion for rhythm within you? Look no further! At Colombo Drum School, we are committed to providing a dynamic and engaging drumming experience for students of all ages and skill levels.'
    return (
        <div>
            {/* Hero Section */}
            <section className="bg-blue-500 text-white text-center py-16">
                <h1 className="text-4xl font-bold mb-4">Colombo Drum School</h1>
                <p className="mb-8 font-sevillana text-2xl">
                    {content}
                </p>
                <Link className="bg-white text-blue-500 px-6 py-3 rounded-full font-semibold hover:bg-blue-200 focus:outline-none focus:shadow-outline-blue" href={VIEW_BLOGS}>
                    Get Started
                </Link>
            </section>
            <div className={'sm:grid sm:grid-cols-2'}>
                <section className="my-16">
                    {/* Use your existing Carousel component here */}
                    <Carousel />
                </section>

                {/* Teacher Details */}
                <section className="my-16">
                    <h2 className="text-3xl font-semibold mb-8 text-center">Meet Your Instructor</h2>
                    <div className="flex justify-center">
                        <TeacherCard name={'Pubudu Niroshan'} imagepath={'/carousel/profile_image.jpg'} />
                    </div>
                </section>
            </div>
            {/* Image Carousel */}

        </div>
    );
}
