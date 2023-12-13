"use client"
import Editor from "@/app/components/Editor";
import {useEffect, useState} from "react";
import {saveBlog} from "@/app/utils/firebase_functions";
import NavBar from "@/app/components/NavBar/NavBar";
import Footer from "@/app/components/Footer";

const CreateBlog = () => {
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('')
    const [image, setImage] = useState(null);
    const [showFile, setShowFile] = useState('hidden');
    const [showLabel, setShowLabel] = useState('');

    useEffect(
        () => {
            if (image) {
                setShowFile('');
                setShowLabel('hidden');
            } else {
                setShowFile('hidden');
                setShowLabel('');
            }
        }, [image]
    )

    const handleSubmit = async () => {
        await saveBlog({
            title,
            content,
            image
        })
    }


    return (
        <>
            <NavBar/>
                <div className={'m-10 p-10 bg-gray-800 rounded shadow-lg shadow-gray-400'}>
                    <div className="sm:flex sm:justify-between sm:items-center">
                        <input className={'input input-bordered w-full sm:max-w-xs m-1 placeholder:text-center'}
                               placeholder={'Title'} value={title}
                               onChange={(event) => {
                                   setTitle(event.target.value);
                               }}/>
                        <input id={'file-input'} title={'Choose Thumbnail'} placeholder={'Upload Thumbnail'}
                               className={`${showFile} file-input file-input-bordered w-full sm:max-w-xs m-1`}
                               type='file' onChange={(event) => {
                            setImage(event.target.files[0])
                        }}/>
                        <label id={'file-input-label'}
                               className={`${showLabel} input flex justify-center items-center input-bordered text-center text-1.5xl  w-full sm:max-w-xs m-1`}
                               htmlFor={'file-input'}>Select Thumbnail</label>
                    </div>

                    <Editor content={content} setContent={setContent}/>
                    <div className={'flex justify-end items-center pt-5'}>
                        <button className={'btn btn-primary'} onClick={handleSubmit}>Publish</button>
                    </div>

                </div>
            <Footer/>
        </>

    )
        ;
}

export default CreateBlog;