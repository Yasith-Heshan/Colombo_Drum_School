import Image from 'next/image'
const Blog = ({data})=>{
    const title = data.title;
    const thumbnail = data.thumbnail;
    const timestamp = data.createdAt.toDate();
    const time = timestamp.toLocaleTimeString();
    const date = timestamp.toLocaleDateString();
    return (
        <div className={'h-[30vh] rounded shadow-lg shadow-gray-500 m-5 pb-2'}>
            <div className={'h-3/4 w-full border rounded-t relative'}>
                <Image
                    src = {thumbnail}
                    fill={true}
                    objectFit='cover'
                    alt={title}
                />
            </div>
            <p className={'text-3xl font-bold text-center m-1'}>{title}</p>
            <p className={'text-center text-gray-500'}>{date} {time}</p>
        </div>
    );
}

export default Blog