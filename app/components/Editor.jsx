"use client"
import React from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles



const QuillEditor = dynamic(() => import('react-quill'), {ssr: false});

export default function Editor({content, setContent}) {


    const quillModules = {
        toolbar: [
            [{header: [1, 2, 3, false]}],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{list: 'ordered'}, {list: 'bullet'}],
            ['link', 'image'],
            [{align: []}],
            [{color: []}],
            ['code-block'],
            ['clean'],
        ],

    };


    const quillFormats = [
        'header',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'link',
        'image',
        'align',
        'color',
        'code-block',
    ];


    const handleEditorChange = (newContent) => {
        setContent(newContent);
    };


    return (
            <QuillEditor
                value={content}
                onChange={handleEditorChange}
                modules={quillModules}
                formats={quillFormats}
                className={'w-full min-h-[40vh] bg-white text-black my-5'}
            />
    );
}