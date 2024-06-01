import "./App.css";
import Portfolio from "./portfolio/Portfolio.tsx";
import Blog from "./blog/Blog.tsx";
import Food from "./food/Food.tsx";
import Footage from "./footage/Footage.tsx";
import { useState } from "react";

type Page = "portfolio" | "blog" | "food" | "footage";

function App() {
    const [currentPage, setCurrentPage] = useState<Page>("portfolio");

    const handlePageChange = (page: Page) => {
        setCurrentPage(page);
    };

    const renderContent = () => {
        switch (currentPage) {
            case "portfolio":
                return <Portfolio />;
            case "blog":
                return <Blog />;
            case "food":
                return <Food />;
            case "footage":
                return <Footage />;
            default:
                return <Portfolio />;
        }
    };

    return (
        <>
            <div className="h-screen flex flex-col md:flex-row overflow-y-scroll">
                <aside className="md:w-64 w-full p-4 md:h-full md:fixed md:left-0 md:top-0 text-erik.doytchinov-500 bg-erik.doytchinov-200">
                    <h1
                        onClick={() => handlePageChange("portfolio")}
                        className="md:text-left text-2xl pt-2 pb-5 text-center"
                    >
                        Erik Doytchinov
                    </h1>
                    <img
                        src="https://media.licdn.com/dms/image/D4E03AQGKkYD_g2UwYw/profile-displayphoto-shrink_400_400/0/1705500073136?e=1720051200&v=beta&t=bqr2OTW8NiezDIWYPRp_FMxSIIAedCMSHipHJq-qC9M"
                        alt="Picture of the author"
                        className="rounded-md md:w-auto  hidden md:block"
                    />
                    <div className="flex justify-evenly md:mt-7">
                        <a
                            href="https://www.instagram.com/erik_doytchinov/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="/instagram-icon.svg"
                                alt="instagram"
                                className="w-6 h-6 md:w-8 md:h-8 mx-2 brightness-0 invert"
                            />
                        </a>
                        <a
                            href="https://www.github.com/erikdoytchinov"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="/github-icon.svg"
                                alt="github"
                                className="w-6 h-6 md:w-8 md:h-8 mx-2 brightness-0 invert"
                            />
                        </a>
                        <a
                            href="mailto:erik.doytchinov@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="/mail-icon.svg"
                                alt="linkedin"
                                className="w-6 h-6 md:w-8 md:h-8 mx-2 brightness-0 invert"
                            />
                        </a>
                    </div>
                    <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    <div className="flex md:flex-col md:justify-right justify-between">
                        <button
                            onClick={() => handlePageChange("blog")}
                            className={`md:py-2 md:my-1 text-sm flex justify-center md:justify-normal items-center rounded-lg hover:bg-slate-700 w-full ${
                                currentPage === "blog" ? "bg-slate-700" : ""
                            }`}
                        >
                            <img
                                src="/notebook-icon.svg"
                                alt="blog"
                                className="w-8 h-8 mx-2 brightness-0 invert"
                            />
                            Blog
                        </button>
                        <button
                            onClick={() => handlePageChange("food")}
                            className={`md:py-2 md:my-1 text-sm flex justify-center md:justify-normal items-center rounded-lg hover:bg-slate-700 w-full ${
                                currentPage === "food" ? "bg-slate-700" : ""
                            }`}
                        >
                            <img
                                src="/hamburger-icon.svg"
                                alt="burger"
                                className="w-8 h-8 mx-2 brightness-0 invert"
                            />
                            Food
                        </button>
                        <button
                            onClick={() => handlePageChange("footage")}
                            className={`md:py-2 md:my-1 text-sm flex justify-center md:justify-normal items-center rounded-lg hover:bg-slate-700 w-full ${
                                currentPage === "footage" ? "bg-slate-700" : ""
                            }`}
                        >
                            <img
                                src="/video-camera-icon.svg"
                                alt="camera"
                                className="w-8 h-8 mx-2 brightness-0 invert"
                            />
                            Footage
                        </button>
                    </div>
                </aside>
                {renderContent()}
            </div>
        </>
    );
}

export default App;
