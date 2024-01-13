const Carousel = () => {
    const imageList = [
        {
           id:1,
           path:'/carousel/image_01.jpg',
        },{
           id:2,
           path:'/carousel/image_02.jpg',
        },{
           id:3,
           path:'/carousel/image_03.jpg',
        },
    ]
    return (
        <div className={'p-10 bg-gray-600'}>
            <div className={'flex justify-center items-center'}>
            <div className="h-[65vh] carousel rounded-box">
                {
                    imageList.map(
                        (image)=>(
                            <div key={image.id} id={`slide_${image.id}`} className="carousel-item w-full">
                                <img src={image.path} className="w-full h-full object-contain" alt={image.path} />
                            </div>
                        )
                    )
                }
            </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                {
                    imageList.map(
                        (image)=>(
                            <a key={image.id} href={`#slide_${image.id}`} className="btn btn-xs">{image.id}</a>
                        )
                    )
                }
            </div>

        </div>

    );
}

export default Carousel;