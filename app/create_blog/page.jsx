"use client"
import Editor from "@/app/components/Editor";
import {useEffect, useState} from "react";
import {saveBlog} from "@/app/utils/firebase_functions";
import {FileInput, TextInput} from 'flowbite-react';

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
            <div className={'m-10 p-10 bg-gray-200 dark:bg-gray-700 rounded shadow-lg shadow-gray-400'}>
                <div className="sm:flex sm:justify-between sm:items-center">
                    <TextInput
                        placeholder={'Title'} value={title}
                        onChange={(event) => {
                            setTitle(event.target.value);
                        }}/>
                    <div>
                        <FileInput id={'file-input'} title={'Choose Thumbnail'}  helperText={'Upload Thumbnail'}
                                   onChange={(event) => {
                                       setImage(event.target.files[0])
                                   }}/>
                    </div>

                </div>

                <Editor content={content} setContent={setContent}/>
                <div className={'flex justify-end items-center pt-5'}>
                    <button className={'btn btn-primary'} onClick={handleSubmit}>Publish</button>
                </div>

            </div>
        </>

    )
        ;
}

export default CreateBlog;