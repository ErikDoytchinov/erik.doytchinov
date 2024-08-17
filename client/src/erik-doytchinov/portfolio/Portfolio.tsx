/* eslint-disable @typescript-eslint/no-explicit-any */
import experience from "./experience.json";

function calculateTimeDifference(date1: string) {
    const date: Date = new Date(date1);
    const dateNow: Date = new Date();
    const diffTime = Math.abs(dateNow.getTime() - date.getTime());
    const diffMos = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
    if (diffMos > 12) {
        return (
            " " +
            Math.floor(diffMos / 12) +
            " yrs" +
            " " +
            (diffMos % 12) +
            " mos"
        );
    }
    return " " + diffMos + " mos";
}

function Portfolio() {
    return (
        <div className="flex-1 md:overflow-y-auto p-4 md:mt-0 md:ml-64 no-scrollbar text-erik.doytchinov-500 bg-erik.doytchinov-100">
            <h1 className="text-2xl ml-6 pt-3 ">About Me</h1>
            <p className="top-10 ml-6 pt-5 left-3  bdg-gradient-to-tr:bg-slate-300 text-sm">
                Currently pursuing my Bachelor&apos;s in Computer Science (
                <a
                    href="https://vu.nl/en/education/bachelor/computer-science"
                    className="text-slate-400"
                >
                    VU Amsterdam
                </a>
                ). I&apos;m interested in everything tech related, with a focus
                on software engineering and big data. Here I include all project
                I&apos;ve tinkered with throughout the years, and others.
                I&apos;m always looking for new opportunities to learn and grow
                as a software engineer.
            </p>
            <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <h1 className="text-2xl ml-6 pt-1 left-3 ">Experiences</h1>
            <p className="ml-6 pt-5 left-3  bg-gradient-to-tr:bg-slate-300">
                [
                <a href="/resume.pdf" className="text-slate-400">
                    CV
                </a>
                ] / [
                <a
                    href="https://www.linkedin.com/in/erik-doytchinov-6a8ba8251/"
                    className="text-slate-400"
                >
                    LinkedIn
                </a>
                ]
            </p>
            <ul className=" list-inside ml-3 pt-2">
                {experience.map((exp: any) => (
                    <li
                        key="1"
                        className="flex md:flex-row flex-col p-3 mb-3 bg-erik.doytchinov-200 rounded-md"
                    >
                        <div className="inline text-xs md:w-40">
                            <p>
                                {exp.startDate} - {exp.endDate}
                                <br className="hidden md:block" />
                                <span className="md:hidden"> | </span>
                                {exp.endDate !== "Present"
                                    ? exp.totalTime
                                    : calculateTimeDifference(exp.startDate)}
                            </p>
                        </div>
                        <div className="inline">
                            <p className="text-base">{exp.title}</p>
                            <p className="text-sm">
                                <a href={exp.link} className="text-slate-400">
                                    {exp.company}
                                </a>
                                · {exp.type}
                            </p>
                            <ul className="pl-4 pt-1 text-xs">
                                {exp.description.map((desc: any) => (
                                    <li key="">
                                        <p>• {desc}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                ))}
            </ul>
            <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <h1 className="text-2xl ml-6 pt-1 left-3 ">Projects</h1>
            <p className="ml-6 pt-5 left-3  bg-gradient-to-tr:bg-slate-300 text-sm">
                Some projects I&apos;ve worked on throughout the years listed
                bellow.
            </p>
            <ul className=" list-inside ml-3 pt-2">
                <li className="list-item pt-1 pl-3">
                    <a
                        href="https://github.com/ErikDoytchinov/Soluna"
                        className="text-slate-400"
                    >
                        Soluna
                    </a>
                    <p>
                        - Web based weather application built with Angular
                        framework and ran on a NodeJs servers. Utilizes the
                        OpenWeatherMap API to fetch weather data. Features
                        include: 5-day forecast, current weather, and a search
                        bar.
                    </p>
                </li>
                <li className="list-item pt-1 pl-3"></li>
            </ul>
            <ul className=" list-inside ml-3 pt-2">
                <li className="list-item pt-1 pl-3">
                    <a
                        href="https://github.com/ErikDoytchinov/flavor-craft"
                        className="text-slate-400"
                    >
                        FlavorCraft
                    </a>
                    <p>
                        - A minecraft modpack that adds a variety of new foods
                        and recipes to the game. Built with the forge modding
                        framework. Currently in development.
                    </p>
                </li>
                <li className="list-item pt-1 pl-3"></li>
            </ul>
        </div>
    );
}

export default Portfolio;
