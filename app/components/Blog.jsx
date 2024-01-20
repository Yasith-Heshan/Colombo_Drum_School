"use client"
import Image from 'next/image'
import {Card} from "flowbite-react";

const Blog = ({data}) => {
    const title = data.title;
    const thumbnail = data.thumbnail;
    const date = data.createdAt;
    const studentOnly = data.studentOnly;

    return (
        <Card
            className="max-w-sm"
            renderImage={() => <Image width={500} height={500} src={thumbnail} className={'h-[200px] w-[300px]'} alt={title} />}
        >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {title}
            </h5>
            <h6 className={'text-gray-600 font-bold dark:text-gray-300'}>
                {studentOnly?'Student Only':'Public'}
            </h6>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                {date}
            </p>
        </Card>

    );
}

export default Blog