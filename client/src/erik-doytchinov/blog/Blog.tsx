// import React, { useEffect, useState } from "react";
// import ReactMarkdown from "react-markdown";
// import axios from "axios";
import InProgress from "../inprogress/InProgress";

function Blog() {
    // const [markdownContent, setMarkdownContent] = useState("");

    // useEffect(() => {
    //     axios
    //         .get("/blogs/test.md")
    //         .then((response) => {
    //             setMarkdownContent(response.data);
    //         })
    //         .catch((error) => {
    //             console.error("Error fetching the markdown content:", error);
    //         });
    // }, []);

    return (
        <div className="flex-1 md:overflow-y-auto p-4 md:mt-0 md:ml-64 text-erik.doytchinov-500 bg-erik.doytchinov-100">
            {/* <ReactMarkdown>{markdownContent}</ReactMarkdown> */}
            <InProgress />
        </div>
    );
}

export default Blog;
