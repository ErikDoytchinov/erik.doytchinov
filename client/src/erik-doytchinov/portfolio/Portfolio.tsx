const experiences = [
    {
        title: "Junior Software Engineer",
        company: "Zivver",
        type: "Full-time",
        dates: "Sept 2024 - Present",
        description: [
            "Architected and developed a Python-based synchronization solution, CloudSync, integrating Exchange Online into Zivver using the SCIM protocol.",
            "Enabled a scalable, cost-effective approach to user identity synchronization for up to 10,000 Zivver clients.",
            "Refined backend services, improving test coverage by 5% and enhancing platform stability and reliability.",
            "Onboarded and mentored 3 interns, fostering cross-skill development within the team.",
        ],
    },
    {
        title: "Software Engineer Intern",
        company: "Zivver",
        type: "Internship",
        dates: "Mar 2024 - Sept 2024",
        description: [
            "Enhanced end-to-end test coverage for critical business rules in a Scala-based codebase.",
            "Identified and resolved issues in various Python-based microservices, improving system stability and performance.",
            "Implemented new auditing and logging features in Scala backend services.",
            "Refined deployment processes using Ansible-based scripts, improving consistency across environments.",
        ],
    },
    {
        title: "Software Engineer Intern",
        company: "DVBControl",
        type: "Internship",
        dates: "Aug 2023 - Oct 2023",
        description: [
            "Designed and implemented a web portal for DVB Control's broadcasting monitoring tool using Angular.",
            "Collaborated on enhancing database storage and retrieval efficiency.",
            "Implemented security measures to safeguard sensitive data.",
        ],
    },
];

const projects = [
    {
        title: "Soluna",
        description:
            "A web-based weather application built with Angular and Node.js. Features include a 5-day forecast, current weather, and a search bar powered by OpenWeatherMap API.",
        link: "https://github.com/ErikDoytchinov/Soluna",
    },
    {
        title: "Downtube",
        description:
            "A Python server that allows users to download YouTube videos, leveraging the youtube-dl library.",
        link: "https://github.com/ErikDoytchinov/Downtube",
    },
    {
        title: "FlavorCraft",
        description:
            "A Minecraft modpack that adds new foods and recipes, built with the Forge modding framework. Currently in development.",
        link: "https://github.com/ErikDoytchinov/flavor-craft",
    },
];

const Portfolio = () => (
    <>
        {/* Outer container with responsive padding */}
        <div className="max-w-4xl mx-auto sm:p-8">
            {/* About Me Section */}
            <section className="mb-8 sm:mb-12">
                <h1 className="text-2xl sm:text-4xl font-bold mb-4">
                    About Me
                </h1>
                <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    I’m pursuing my Bachelor’s in Computer Science at VU
                    Amsterdam. Passionate about software engineering and big
                    data, I strive to build scalable, efficient solutions. This
                    portfolio highlights my professional experiences, academic
                    projects, and personal endeavors in the tech world.
                </p>
            </section>

            {/* Experiences Section */}
            <section className="mb-8 sm:mb-12">
                <h2 className="text-xl sm:text-3xl font-semibold mb-4 sm:mb-6">
                    Experiences
                </h2>
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="mb-4 sm:mb-6 p-4 sm:p-6 bg-white dark:bg-gray-800 shadow rounded-md"
                    >
                        <h3 className="text-lg sm:text-2xl font-bold">
                            {exp.title}
                        </h3>
                        <p className="text-gray-500 dark:text-gray-300 text-sm">
                            {exp.company} · {exp.type} · {exp.dates}
                        </p>
                        <ul className="list-disc list-inside mt-2 sm:mt-4 text-gray-700 dark:text-gray-200">
                            {exp.description.map((desc, i) => (
                                <li
                                    key={i}
                                    className="mb-2 text-sm sm:text-base"
                                >
                                    {desc}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>

            {/* Projects Section */}
            <section>
                <h2 className="text-xl sm:text-3xl font-semibold mb-4 sm:mb-6">
                    Projects
                </h2>
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="mb-4 sm:mb-6 p-4 sm:p-6 bg-white dark:bg-gray-800 shadow rounded-md"
                    >
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg sm:text-2xl font-bold text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            {project.title}
                        </a>
                        <p className="mt-2 text-sm sm:text-base text-gray-700 dark:text-gray-200">
                            {project.description}
                        </p>
                    </div>
                ))}
            </section>
        </div>
    </>
);

export default Portfolio;
