function calculateTimeBetweenTwoStringDates(date1: string) {
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
        <div className="flex-1 md:overflow-y-auto p-4 md:mt-0 md:ml-64 text-white bg-neutral-900">
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
                <li className="list-item pt-1 pl-3 mb-3">
                    <div className="inline text-xs">
                        <p className="text-base">Software Engineer Intern</p>
                        <p className="text-sm">
                            <a
                                href="https://www.zivver.com/"
                                className="text-slate-400"
                            >
                                Zivver&nbsp;
                            </a>
                            · Internship
                        </p>
                        <p className="text-xs">
                            Mar 2024 - Present ·
                            {calculateTimeBetweenTwoStringDates("2024-03-01")}
                        </p>
                        <ul className="pl-4 pt-1">
                            <li>
                                <p>
                                    • Led the performance optimization of key
                                    software systems, focusing on enhancing both
                                    frontend and backend functionalities to
                                    boost overall efficiency.
                                </p>
                            </li>
                            <li>
                                <p>
                                    • Directed the design and implementation of
                                    user interface improvements, significantly
                                    elevating user experience across software
                                    platforms.
                                </p>
                            </li>
                            <li>
                                <p>
                                    • Engineered and implemented scripts and
                                    tools for real-time performance evaluation
                                    of critical operational rules in production
                                    environments.
                                </p>
                            </li>
                            <li>
                                <p>
                                    • Developed an internal analytical tool to
                                    monitor and analyze trigger events based on
                                    input data, enhancing strategic operational
                                    insights.
                                </p>
                            </li>
                            <li>
                                <p>
                                    • Collaborated with cross-functional team
                                    members to ensure seamless integration of
                                    performance improvements into existing
                                    systems.
                                </p>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="list-item pt-1 pl-3 mb-3">
                    <div className="inline text-xs">
                        <p className="text-base">Service Associate</p>
                        <p className="text-sm">
                            <a
                                href="https://sugo.nl/"
                                className="text-slate-400"
                            >
                                SUGO Pizza al Taglio&nbsp;
                            </a>
                            · Part-time
                        </p>
                        <p className="text-xs">
                            Jan 2023 - Present ·
                            {calculateTimeBetweenTwoStringDates("2023-01-01")}
                        </p>
                        <ul className="pl-4 pt-1">
                            <li>
                                <p>
                                    • Expertly prepared and cooked a wide range
                                    of Italian-style pizzas to perfection,
                                    ensuring consistency in taste and
                                    presentation.
                                </p>
                            </li>
                            <li>
                                <p>
                                    • Maintained a clean and organized kitchen,
                                    adhering to food safety and hygiene
                                    standards. Demonstrated proficiency in
                                    working with pizza ovens and other kitchen
                                    equipment.
                                </p>
                            </li>
                            <li>
                                <p>
                                    • Coordinated and supervised fellow staff
                                    members during shifts, ensuring smooth
                                    restaurant operations.
                                </p>
                            </li>
                            <li>
                                <p>
                                    • Fostered a collaborative and positive work
                                    environment, promoting teamwork and staff
                                    morale
                                </p>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="list-item pt-1 pl-3 mb-3">
                    <div className="inline text-xs">
                        <p className="text-base">Software Engineer Intern</p>
                        <p className="text-sm">
                            <a
                                href="https://www.dvbcontrol.com/"
                                className="text-slate-400"
                            >
                                DVBControl&nbsp;
                            </a>
                            · Internship
                        </p>
                        <p className="text-xs">Aug 2023 - Oct 2023 · 3 mos</p>
                        <ul className="pl-4 pt-1">
                            <li>
                                <p>
                                    •Collaborated with the development team to
                                    create a web portal for DVB Control&apos;s
                                    broadcasting monitoring tool.
                                </p>
                            </li>
                            <li>
                                <p>
                                    •Utilized the Angular framework to design
                                    and implement user-friendly web
                                    applications.
                                </p>
                            </li>
                            <li>
                                <p>
                                    •Assisted in the analysis of databases to
                                    enhance data storage and retrieval
                                    efficiency.
                                </p>
                            </li>
                            <li>
                                <p>
                                    •Assisted in implementing security measures
                                    to safeguard sensitive data and protect
                                    against potential vulnerabilities.
                                </p>
                            </li>
                            <li>
                                <p>
                                    •Assisted in resolving technical challenges,
                                    ensuring the project met performance and
                                    security standards.
                                </p>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="list-item pt-1 pl-3">
                    <div className="inline text-xs">
                        <p className="text-base">Customer Service Assistant</p>
                        <p className="text-sm">
                            <a
                                href="https://jackastors.com/"
                                className="text-slate-400"
                            >
                                Jack Astor&apos;s Bar and Grill&nbsp;
                            </a>
                            · Part-time
                        </p>
                        <p className="text-xs">Feb 2022 - Sep 2022 · 8 mos</p>
                        <ul className="pl-4 pt-1">
                            <li>
                                <p>
                                    • Skilled in delivering outstanding service
                                    by greeting and serving customers.
                                </p>
                            </li>
                            <li>
                                <p>
                                    • Strong customer service attitude,
                                    self-reliant, dependable, able to
                                    prioritize, and multitask.
                                </p>
                            </li>
                            <li>
                                <p>
                                    • Experience working as a leader and able to
                                    work well with others to accomplish a goal.
                                </p>
                            </li>
                            <li>
                                <p>
                                    • Experienced with handling of high volume
                                    of customers.
                                </p>
                            </li>
                        </ul>
                    </div>
                </li>
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
