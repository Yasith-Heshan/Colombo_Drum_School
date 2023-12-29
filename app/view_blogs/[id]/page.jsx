"use client"
import {useState} from "react";
import {useBlogs} from "@/app/context/blogContext";
import parse from 'html-react-parser';
import './styles.css'

const BlogDetials = ({params}) => {
    const {blogs} = useBlogs();
    const [loading, setLoading] = useState(false);
    const [blog, setBlog] = useState()
    const id = params.id;

    const transformH1 = (node) => {
        if (node.name === 'h1') {
            // Modify the className of the h1 tag
            node.attribs = {
                ...node.attribs,
                className: 'h1',
            };
        }

        if (node.name === 'h2') {
            // Modify the className of the h1 tag
            node.attribs = {
                ...node.attribs,
                className: 'h2',
            };
        }

        if (node.name === 'h3') {
            // Modify the className of the h1 tag
            node.attribs = {
                ...node.attribs,
                className: 'h3',
            };
        }

        if (node.name === 'ol') {
            // Modify the className of the h1 tag
            node.attribs = {
                ...node.attribs,
                className: 'ol',
            };
        }

        if (node.name === 'ul') {
            // Modify the className of the h1 tag
            node.attribs = {
                ...node.attribs,
                className: 'ul',
            };
        }

        if (node.name === 'a') {
            // Modify the className of the h1 tag
            node.attribs = {
                ...node.attribs,
                className: 'a',
            };
        }

        if (node.name === 'pre') {
            // Modify the className of the h1 tag
            node.attribs = {
                ...node.attribs,
                className: 'pre',
            };
        }

        if (node.name === 'code') {
            // Modify the className of the h1 tag
            node.attribs = {
                ...node.attribs,
                className: 'code',
            };
        }

        if (node.name === 'blockquote') {
            // Modify the className of the h1 tag
            node.attribs = {
                ...node.attribs,
                className: 'blockquote',
            };
        }






        return node;
    };
    const parsedHtml = parse(blogs[id].blog, {replace: transformH1});


    return (
        <div className={'bg-white text-black flex justify-center items-center'}>
            <style jsx>{`
              h1 {
                font-size: 2.25rem; /* Equivalent to text-4xl */
                font-weight: 800; /* Equivalent to font-extrabold */
              }

              h2 {
                font-size: 1.875rem; /* Equivalent to text-3xl */
                font-weight: 700; /* Equivalent to font-bold */
              }

              h3 {
                font-size: 1.25rem; /* Equivalent to text-xl */
                font-weight: 600; /* Equivalent to font-semibold */
              }

              ol {
                list-style-type: decimal; /* Equivalent to list-decimal */
                list-style-position: inside; /* Equivalent to list-inside */
                padding-left: 1.25rem; /* Equivalent to pl-5 */
              }

              ul {
                list-style-type: disc; /* Equivalent to list-disc */
                list-style-position: inside; /* Equivalent to list-inside */
                padding-left: 1.25rem; /* Equivalent to pl-5 */
              }

              a {
                color: #3b82f6; /* Equivalent to text-blue-500 */
                text-decoration: none;
              }

              a:hover {
                text-decoration: underline; /* Equivalent to hover:underline */
              }

              pre {
                background-color: #edf2f7; /* Equivalent to bg-gray-200 */
                color: #2d3748; /* Equivalent to text-gray-800 */
                padding: 1rem; /* Equivalent to p-4 */
                border-radius: 0.375rem; /* Equivalent to rounded-md */
                overflow-x: auto;
              }

              code {
                font-family: 'Menlo', 'Monaco', 'Courier New', monospace; /* Equivalent to font-mono */
              }

              blockquote {
                border-left: 0.25rem solid #718096; /* Equivalent to border-l-4 and border-gray-500 */
                padding-left: 1rem; /* Equivalent to pl-4 */
                font-style: italic;
              }

            `}
            </style>

            <div className={'mb-40'}>{parsedHtml}</div>


        </div>
    );
}

export default BlogDetials;

