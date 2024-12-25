import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";

type BlogPostMeta = {
    file: string; // name of the .md file in /public/blogs/
    title: string; // displayed title
    image: string; // path to a thumbnail or cover image in /public/images
    excerpt: string; // short description/teaser
};

// Example posts metadata
const blogPosts: BlogPostMeta[] = [
    {
        title: "Exploring Amsterdam",
        image: "https://smilingway.cz/wp-content/uploads/2023/10/Amsterdam-za-1-den.jpeg",
        excerpt:
            "Take a look at the beautiful canals, bicycles, and local culture. This quick post shares highlights from a weekend trip.",
        file: "test.md",
    },
    {
        title: "JavaScript Fundamentals",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7yi-jEiqu-qV1P13ngxvo2G1v4vHVYCWHSUu12Qp91D3bTw71LWrf2iQLuuL7Wzwd99M&usqp=CAU",
        excerpt:
            "A deep dive into the basics: closures, prototypes, hoisting, and more. Perfect for beginners and experts alike.",
        file: "js_blog.md",
    },
    {
        title: "Life as a Developer",
        image: "https://i.insider.com/60144316a7c0c4001991dde6?width=800&format=jpeg&auto=webp",
        excerpt:
            "Ever wondered about a typical day in a developer’s life? This post walks through the daily routine, challenges, and triumphs.",
        file: "test.md",
    },
    {
        title: "Dutch Food Favorites",
        image: "https://miro.medium.com/v2/resize:fit:1400/0*p04eEFFxsCEF9gtn",
        excerpt:
            "Stroopwafels, bitterballen, and more. A quick guide to some of the must-try Dutch delicacies!",
        file: "test.md",
    },
];

const Blog: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<string | null>(null);
    const [content, setContent] = useState("");

    // Fetch the .md file content when a file is selected
    useEffect(() => {
        if (selectedFile) {
            fetch(`/blogs/${selectedFile}`)
                .then((res) => res.text())
                .then((text) => setContent(text))
                .catch((error) => {
                    console.error("Error fetching markdown file:", error);
                });
        }
    }, [selectedFile]);

    // If no file is selected, show the list of blog posts
    if (!selectedFile) {
        return (
            <div className="max-w-4xl mx-auto p-4 sm:p-8">
                <h1 className="text-2xl sm:text-4xl font-bold mb-6">Blog</h1>

                <div className="text-gray-700 dark:text-gray-300 mb-4">
                    Select an article to read:
                </div>

                <div className="max-h-[calc(100vh-200px)]pr-2">
                    {blogPosts.map((post) => (
                        <div
                            key={post.file}
                            className="mb-4 p-4 bg-white dark:bg-gray-800 rounded-md shadow hover:shadow-md transition-shadow 
                                   flex flex-col sm:flex-row"
                        >
                            {/* Thumbnail Image */}
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full sm:w-24 h-auto object-cover rounded mb-2 sm:mr-4"
                            />

                            {/* Text Content */}
                            <div className="flex flex-col justify-center">
                                <h2 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">
                                    {post.title}
                                </h2>

                                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-1">
                                    {post.excerpt}
                                </p>

                                <button
                                    onClick={() => setSelectedFile(post.file)}
                                    className="text-blue-600 dark:text-blue-400 hover:underline mt-2 self-start"
                                >
                                    Read More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    // Otherwise, render the selected post
    return (
        <div className="max-w-4xl mx-auto p-4 sm:p-8">
            <button
                onClick={() => {
                    setSelectedFile(null);
                    setContent("");
                }}
                className="mb-4 text-blue-600 dark:text-blue-400 hover:underline"
            >
                &larr; Back to Articles
            </button>

            <div className="prose dark:prose-invert max-w-full overflow-x-auto">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeHighlight]}
                >
                    {content}
                </ReactMarkdown>
            </div>
        </div>
    );
};

export default Blog;
