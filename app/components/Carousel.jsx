import {Carousel} from "flowbite-react";
import Image  from "next/image";

const CustomCarousel = () => {
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
        <div className="h-[80vh] bg-gray-200 dark:bg-gray-700"><Carousel>

                {
                    imageList.map(
                        (image)=>(
                            <Image
                                key={image.id}
                                src={image.path}
                                alt={image.path}
                                width={1000}
                                height={500}
                                className="w-full h-full object-contain"
                            />
                        )
                    )

                }
            </Carousel>
        </div>


    );
}

export default CustomCarousel;