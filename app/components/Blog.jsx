import Image from 'next/image'
const Blog = ({data})=>{
    const title = data.title;
    const thumbnail = data.thumbnail;
    const date = data.createdAt;
    console.log(data);
    return (
        <div className={'h-[30vh] rounded shadow-lg shadow-gray-500 m-5 pb-2'}>
            <div className={'h-3/4 w-full border rounded-t relative'}>
                <Image
                    src = {thumbnail}
                    fill={true}
                    sizes={"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
                    alt={title}
                    priority={true}
                />
            </div>
            <p className={'text-3xl font-bold text-center m-1'}>{title}</p>
            <p className={'text-center text-gray-500'}>{date}</p>
        </div>
    );
}

export default Blog