"use client"
import {useEffect, useState} from "react";
import {toast} from "sonner";
import {useBlogs} from "@/app/context/blogContext";
import ReactHtmlParser from 'react-html-parser';
import { convertNodeToElement } from 'react-html-parser';

const BlogDetials = ({params}) => {
    const {blogs} = useBlogs();
    const [loading, setLoading] = useState(false);
    const [blog, setBlog] = useState()
    const id = params.id;

    useEffect(() => {
        if(blogs[id]){
            setBlog(blogs[id].blog);
        }
    }, [blogs,id]);



    function transform(node,index) {
        // do not render any <span> tags
        if (node.type === 'tag' && node.name === 'h1') {
            node.attribs = {
                ...node.attribs,
                class: 'font-bold text-3xl',
            };
            return convertNodeToElement(node, index, transform);
        }
    }
    const options = {
        decodeEntities: true,
        transform
    };

    const parsedHtml = ReactHtmlParser(blog, options);

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

            <div className={'mb-40'}>{ parsedHtml }</div>


        </div>
    );
}

export default BlogDetials;

