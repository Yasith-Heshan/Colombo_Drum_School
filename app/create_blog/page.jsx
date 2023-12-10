"use client"
import Editor from "@/app/components/Editor";
import {useState} from "react";
import {saveBlog} from "@/app/utils/firebase_functions";

const CreateBlog = () => {
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('')
    const [image, setImage] = useState(null);

    const handleSubmit = async () => {
        await saveBlog({
            title,
            content,
            image
        })
    }


    return (
        <div className={'m-10 p-10 border border-black'}>
            <div className="flex justify-between items-center">
                <input className={'input input-bordered w-full max-w-xs m-1'} placeholder={'Title'} value={title}
                       onChange={(event) => {
                           setTitle(event.target.value);
                       }}/>
                <input placeholder={'Upload Thumbnail'} className={'file-input file-input-bordered w-full max-w-xs m-1'}
                       type='file' onChange={(event) => {
                    setImage(event.target.files[0])
                }}/>
            </div>

            <Editor content={content} setContent={setContent}/>
            <button className={'btn btn-primary'} onClick={handleSubmit}>Save</button>
            <br/>

            <br/>

        </div>
    )
        ;
}

export default CreateBlog;