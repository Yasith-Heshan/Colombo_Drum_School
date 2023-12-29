import Image from 'next/image'
const Blog = ({data})=>{
    const title = data.title;
    const thumbnail = data.thumbnail;
    const date = data.createdAt;

    return (
        <div className="m-2.5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <Image className="w-full h-40 rounded-t-lg" src={thumbnail} alt={title} width={400} height={300} />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">{date}</p>
            </div>
        </div>

    );
}

export default Blog