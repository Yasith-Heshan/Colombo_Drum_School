"use client"
const BlogDetials = () => {
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

            `}</style>
            <div>
                <h1>Heading 01</h1><p><br/></p><h2>Heading 02</h2><p><br/></p><h3>Heading 03</h3><p><br/></p>
                <p>This <strong>Bold
                    Text</strong></p><p><br/></p><p>This is <u>underlined</u> text</p><p><br/></p><p>This
                is <em>Italic </em>Text
            </p><p><br/></p><p>This <s>strikethrough</s> text</p><p><br/></p>
                <blockquote>This is Quate</blockquote>
                <p><br/></p><p>This is numbered list:</p>
                <ol>
                    <li>one</li>
                    <li>two</li>
                    <li>three</li>
                </ol>
                <p><br/></p><p>This is unordered list:</p>
                <ul>
                    <li>one</li>
                    <li>two</li>
                    <li>three</li>
                </ul>
                <p><br/></p><p>This is link:</p><p><a href="https://colombo-drum-school.vercel.app/view_blogs"
                                                      rel="noopener noreferrer"
                                                      target="_blank">https://colombo-drum-school.vercel.app/view_blogs</a>
            </p><p><br/></p><p>This is <span style={{color: 'rgb(230, 0, 0)'}}>red</span> text</p><p><br/></p><p>This is
                code:</p>
                <pre className="ql-syntax" spellCheck="false">&lt;html&gt;&lt;/html&gt;
            </pre>
                <p><br/></p>
            </div>


        </div>
    );
}

export default BlogDetials;

