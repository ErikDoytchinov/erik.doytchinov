import React, { useState } from "react";
import Portfolio from "./portfolio/Portfolio";
import Footage from "./footage/Footage";
import "./App.css";

// 1. Define our Page type
type Page = "portfolio" | "footage";

// 2. Create an array for dynamic nav items
const navItems = [
    {
        id: "portfolio" as Page,
        label: "Portfolio",
        icon: "/portfolio-icon.svg",
    },
    {
        id: "footage" as Page,
        label: "Drone Footage",
        icon: "/video-camera-icon.svg",
    },
];

// 3. Map each Page to its component
const pagesMap: Record<Page, React.ReactNode> = {
    portfolio: <Portfolio />,
    footage: <Footage />,
};

// Navigation Button Component
const NavButton = ({
    onClick,
    label,
    icon,
    active,
}: {
    onClick: () => void;
    label: string;
    icon: string;
    active: boolean;
}) => (
    <button
        onClick={onClick}
        className={`w-full flex items-center px-4 py-2 my-2 rounded-md text-lg transition-colors
      ${
          active
              ? "bg-blue-600 text-white"
              : "hover:bg-blue-100 text-gray-700 hover:text-blue-600"
      }`}
    >
        <img src={icon} alt={`${label} icon`} className="w-6 h-6 mr-3" />
        {label}
    </button>
);

const App = () => {
    // 4. Manage which page is active
    const [currentPage, setCurrentPage] = useState<Page>("portfolio");

    return (
        // Let the container be flexible in height; make it a row layout on md+ screens
        <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 text-gray-900">
            {/* Sidebar */}
            <aside className="flex flex-col w-full md:w-64 bg-white shadow-lg px-6 py-8 md:h-screen md:sticky md:top-0">
                {/* Profile Section */}
                <div className="text-center">
                    <img
                        src="https://media.licdn.com/dms/image/v2/D4E03AQGKkYD_g2UwYw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1705500073136?e=1740614400&v=beta&t=7NysDc8FUbs8_Jj-UsuhrrYPECGgc8kpq-q7Mo6Jnz4"
                        alt="Profile"
                        className="rounded-full w-32 h-32 mx-auto mb-4 shadow-md"
                    />
                    <h1 className="text-2xl font-bold mb-2">Erik Doytchinov</h1>
                    <p className="text-gray-500 text-sm">
                        Junior Software Engineer
                    </p>
                </div>

                <hr className="my-6 border-gray-200" />

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

                <hr className="my-6 border-gray-200" />

                {/* Social Links */}
                <div className="flex justify-evenly">
                    <a
                        href="https://www.instagram.com/erik_doytchinov/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800"
                    >
                        <img
                            src="/instagram-icon.svg"
                            alt="Instagram"
                            className="w-6 h-6"
                        />
                    </a>
                    <a
                        href="https://github.com/erikdoytchinov"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900"
                    >
                        <img
                            src="/github-icon.svg"
                            alt="GitHub"
                            className="w-6 h-6"
                        />
                    </a>
                    <a
                        href="mailto:erik.doytchinov@gmail.com"
                        className="text-gray-600 hover:text-gray-900"
                    >
                        <img
                            src="/mail-icon.svg"
                            alt="Email"
                            className="w-6 h-6"
                        />
                    </a>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 overflow-y-auto">
                {/* 5. Render the active page dynamically */}
                {pagesMap[currentPage]}
            </main>
        </div>
    );
};

export default App;
