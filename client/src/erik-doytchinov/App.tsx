import "./App.css";
import Portfolio from "./portfolio/Portfolio.tsx";
import Blog from "./blog/Blog.tsx";
import Food from "./food/Food.tsx";
import Footage from "./footage/Footage.tsx";
import { useEffect, useState } from "react";

type Page = "portfolio" | "blog" | "food" | "footage";

function App() {
    const [currentPage, setCurrentPage] = useState<Page>("portfolio");

    const handlePageChange = (page: Page) => {
        if (currentPage === page) setCurrentPage("portfolio");
        else setCurrentPage(page);
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

    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const handleMouseMove = (event: any) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <>
            <div
                className="cursor-glow"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                }}
            ></div>
            <div className="h-screen flex flex-col md:flex-row no-scrollbar overflow-y-scroll">
                <aside className="md:w-64 w-full p-4 md:h-full md:fixed md:left-0 md:top-0 text-erik.doytchinov-500 bg-erik.doytchinov-200">
                    <img
                        src="https://media.licdn.com/dms/image/v2/D4E03AQGKkYD_g2UwYw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1705500073136?e=1731542400&v=beta&t=AHrr8TH-MsZyKdUGJ6UlYv_-LM_wnrgDmmcLQ6m-iw0"
                        alt="Picture of the me"
                        className="rounded-full md:w-auto  hidden md:block"
                    />
                    <h1
                        onClick={() => handlePageChange("portfolio")}
                        className="text-center text-2xl pt-2 pb-5"
                    >
                        Erik Doytchinov
                    </h1>
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
