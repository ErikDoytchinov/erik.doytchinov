import React, { useState, useEffect } from "react";
import Portfolio from "./portfolio/Portfolio";
import Blog from "./blog/Blog";
import Footage from "./footage/Footage";
import { ReactComponent as PortfolioIcon } from "/src/assets/portfolio-icon.svg";
import { ReactComponent as VideoCameraIcon } from "/src/assets/video-camera-icon.svg";
import { ReactComponent as NotebookIcon } from "/src/assets/notebook-icon.svg";
import { ReactComponent as InstagramIcon } from "/src/assets/instagram-icon.svg";
import { ReactComponent as GitHubIcon } from "/src/assets/github-icon.svg";
import { ReactComponent as MailIcon } from "/src/assets/mail-icon.svg";
import "./App.css";

type Page = "portfolio" | "blog" | "footage";

const navItems = [
    {
        id: "portfolio" as Page,
        label: "Portfolio",
        icon: PortfolioIcon,
    },
    {
        id: "blog" as Page,
        label: "Blog",
        icon: NotebookIcon,
    },
    {
        id: "footage" as Page,
        label: "Drone Footage",
        icon: VideoCameraIcon,
    },
];

const pagesMap: Record<Page, React.ReactNode> = {
    portfolio: <Portfolio />,
    blog: <Blog />,
    footage: <Footage />,
};

type NavButtonProps = {
    onClick: () => void;
    label: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    active: boolean;
};

const NavButton = ({ onClick, label, icon: Icon, active }: NavButtonProps) => (
    <button
        onClick={onClick}
        className={`w-full flex items-center px-4 py-2 my-2 rounded-md text-lg transition-colors
        ${
            active
                ? "bg-blue-600 text-white"
                : "hover:bg-blue-100 text-gray-700 hover:text-blue-600 dark:hover:bg-gray-800 dark:text-gray-50 dark:hover:text-blue-300"
        }
      `}
    >
        <Icon className="w-6 h-6 mr-3 fill-current" />
        {label}
    </button>
);

const App = () => {
    const [currentPage, setCurrentPage] = useState<Page>("portfolio");
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const storedDarkMode = localStorage.getItem("darkMode");
        if (storedDarkMode) {
            setDarkMode(JSON.parse(storedDarkMode));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("darkMode", JSON.stringify(darkMode));
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={darkMode ? "dark" : ""}>
            <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300 no-overscroll">
                {/* Sidebar */}
                <aside className="flex flex-col w-full md:w-64 bg-white dark:bg-gray-800 shadow-lg px-6 py-8 md:h-screen md:sticky md:top-0 transition-colors duration-300">
                    {/* Profile Section */}
                    <div className="text-center">
                        <img
                            src="https://avatars.githubusercontent.com/u/83290221?s=400&u=94a0f170f79273172b1b67e17aba39ce7483da60&v=4"
                            alt="Profile"
                            className="rounded-full w-32 h-32 mx-auto mb-4 shadow-md"
                        />
                        <h1 className="text-2xl font-bold mb-2">
                            Erik Doytchinov
                        </h1>
                        <p className="text-gray-500 text-sm dark:text-gray-300">
                            Junior Software Engineer
                        </p>
                    </div>

                    <hr className="my-6 border-gray-200 dark:border-gray-700" />

                    {/* Navigation Section */}
                    <nav className="flex-grow">
                        {navItems.map((item) => (
                            <NavButton
                                key={item.id}
                                onClick={() => setCurrentPage(item.id)}
                                label={item.label}
                                icon={item.icon}
                                active={currentPage === item.id}
                            />
                        ))}
                    </nav>

                    <hr className="my-6 border-gray-200 dark:border-gray-700" />

                    {/* Dark Mode Toggle */}
                    <div className="flex justify-center mb-6">
                        <p className="text-gray-500 dark:text-gray-300">
                            Dark Mode
                        </p>
                        <div className="mx-4" />
                        <button
                            onClick={toggleDarkMode}
                            className="relative inline-flex items-center h-6 w-11 rounded-full
                                       bg-gray-300 dark:bg-gray-600 transition-colors duration-300
                                       focus:outline-none"
                        >
                            <span
                                className={`inline-block h-4 w-4 bg-white dark:bg-gray-200 rounded-full transform
                                           transition-transform duration-300 
                                           ${
                                               darkMode
                                                   ? "translate-x-5"
                                                   : "translate-x-1"
                                           }`}
                            />
                        </button>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-evenly">
                        <a
                            href="https://www.instagram.com/erik_doytchinov/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                        >
                            <InstagramIcon className="w-6 h-6" />
                        </a>
                        <a
                            href="https://github.com/erikdoytchinov"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                        >
                            <GitHubIcon className="w-6 h-6" />
                        </a>
                        <a
                            href="mailto:erik.doytchinov@gmail.com"
                            className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                        >
                            <MailIcon className="w-6 h-6" />
                        </a>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 p-8 no-overscroll">
                    {pagesMap[currentPage]}
                </main>
            </div>
        </div>
    );
};

export default App;
