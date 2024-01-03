import React from 'react';

const TeacherCard = ({imagepath,name}) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
            <img
                src={imagepath}
                alt="Teacher Image"
                className="w-full h-32 object-cover mb-4 rounded-md"
            />
            <h2 className="text-2xl font-semibold mb-2">{name}</h2>
            <p className="text-gray-600 text-sm mb-4">Professional Drum Instructor</p>
            <div className="flex items-center mb-2">
                <svg
                    className="w-4 h-4 text-gray-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
                <p className="text-gray-700">10+ years of experience</p>
            </div>
            <div className="flex items-center mb-2">
                <svg
                    className="w-4 h-4 text-gray-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
                <p className="text-gray-700">Expert in various drumming styles</p>
            </div>
            <div className="flex items-center mb-2">
                <svg
                    className="w-4 h-4 text-gray-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
                <p className="text-gray-700">Passionate about teaching and inspiring students</p>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                Contact {name}
            </button>
        </div>
    );
};

export default TeacherCard;
