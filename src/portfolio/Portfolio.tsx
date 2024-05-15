function calculateTimeBetweenTwoStringDates(date1: string) {
    const date: Date = new Date(date1);
    const dateNow: Date = new Date();
    const diffTime = Math.abs(dateNow.getTime() - date.getTime());
    const diffMos = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
    return diffMos + " mos";
}

function Portfolio() {
    return (
        <div className="fixed top-0 right-0 bottom-0 z-40 w-10/12 sm:translate-x-0 bg-neutral-900 overflow-y-scroll">
            <h1 className="text-2xl ml-6 pt-7 text-white">About Me</h1>
            <p className="top-10 ml-6 pt-5 left-3 text-white bdg-gradient-to-tr:bg-slate-300 text-sm">
                Currently persuing my Bachelor&apos;s in Computer Science (
                <a
                    href="https://vu.nl/en/education/bachelor/computer-science"
                    className="text-slate-400"
                >
                    VU Amsterdam
                </a>
                ). I&apos;m interested in everything tech related, with a focus
                on software engineering and big data. Here I include all project
                I&apos;ve tinkered with throughout the years, RaspberryPi and
                others. I&apos;m always looking for new opportunities to learn
                and grow as a software engineer.
            </p>
            <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <h1 className="text-2xl ml-6 pt-1 left-3 text-white">
                Experiences
            </h1>
            <p className="ml-6 pt-5 left-3 text-white bg-gradient-to-tr:bg-slate-300">
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
            <ul className="text-white list-inside ml-3 pt-2">
                <li className="list-item pt-1 pl-3">
                    <div className="inline text-xs">
                        <p className="text-base">Software Engineer Intern</p>
                        <p className="text-sm">
                            <a
                                href="https://www.zivver.com/"
                                className="text-slate-400"
                            >
                                Zivver
                            </a>{" "}
                            · Internship
                        </p>
                        <p className="text-xs">
                            Mar 2024 - Present ·{" "}
                            {calculateTimeBetweenTwoStringDates("2024-03-01")}
                        </p>
                        <ul className="pl-4 pt-1">
                            <li>
                                • Led the performance optimization of key
                                software systems, focusing on enhancing both
                                frontend and backend functionalities to boost
                                overall efficiency.
                            </li>
                            <li>
                                • Directed the design and implementation of user
                                interface improvements, significantly elevating
                                user experience across software platforms.
                            </li>
                            <li>
                                • Engineered and implemented scripts and tools
                                for real-time performance evaluation of critical
                                operational rules in production environments.
                            </li>
                            <li>
                                • Developed an internal analytical tool to
                                monitor and analyze trigger events based on
                                input data, enhancing strategic operational
                                insights.
                            </li>
                            <li>
                                • Collaborated with cross-functional team
                                members to ensure seamless integration of
                                performance improvements into existing systems.
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="list-item pt-1 pl-3">
                    <div className="inline text-xs">
                        <p className="text-base">Software Engineer Intern</p>
                        <p className="text-sm">
                            <a
                                href="https://www.dvbcontrol.com/"
                                className="text-slate-400"
                            >
                                DVBControl
                            </a>{" "}
                            · Internship
                        </p>
                        <p className="text-xs">Aug 2023 - Oct 2023 · 3 mos</p>
                        <ul className="pl-4 pt-1">
                            <li>
                                •Collaborated with the development team to
                                create a web portal for DVB Control&apos;s
                                broadcasting monitoring tool.
                            </li>
                            <li>
                                •Utilized the Angular framework to design and
                                implement user-friendly web applications.
                            </li>
                            <li>
                                •Assisted in the analysis of databases to
                                enhance data storage and retrieval efficiency.
                            </li>
                            <li>
                                •Assisted in implementing security measures to
                                safeguard sensitive data and protect against
                                potential vulnerabilities.
                            </li>
                            <li>
                                •Assisted in resolving technical challenges,
                                ensuring the project met performance and
                                security standards.
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="list-item pt-1 pl-3">
                    <div className="inline text-xs">
                        <p className="text-base">Service Associate</p>
                        <p className="text-sm">
                            <a
                                href="https://sugo.nl/"
                                className="text-slate-400"
                            >
                                SUGO Pizza al Taglio
                            </a>{" "}
                            · Part-time
                        </p>
                        <p className="text-xs">
                            Jan 2023 - Present ·{" "}
                            {calculateTimeBetweenTwoStringDates("2023-01-01")}
                        </p>
                        <ul className="pl-4 pt-1">
                            <li>
                                • Expertly prepared and cooked a wide range of
                                Italian-style pizzas to perfection, ensuring
                                consistency in taste and presentation.
                            </li>
                            <li>
                                • Maintained a clean and organized kitchen,
                                adhering to food safety and hygiene standards.
                                Demonstrated proficiency in working with pizza
                                ovens and other kitchen equipment.
                            </li>
                            <li>
                                • Coordinated and supervised fellow staff
                                members during shifts, ensuring smooth
                                restaurant operations.
                            </li>
                            <li>
                                • Fostered a collaborative and positive work
                                environment, promoting teamwork and staff morale
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
                                Jack Astor&apos;s Bar and Grill
                            </a>{" "}
                            · Part-time
                        </p>
                        <p className="text-xs">Feb 2022 - Sep 2022 · 8 mos</p>
                        <ul className="pl-4 pt-1">
                            <li>
                                • Skilled in delivering outstanding service by
                                greeting and serving customers.
                            </li>
                            <li>
                                • Strong customer service attitude,
                                self-reliant, dependable, able to prioritize,
                                and multitask.
                            </li>
                            <li>
                                • Experience working as a leader and able to
                                work well with others to accomplish a goal.
                            </li>
                            <li>
                                • Experienced with handling of high volume of
                                customers.
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
            <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <h1 className="text-2xl ml-6 pt-1 left-3 text-white">Projects</h1>
            <p className="ml-6 pt-5 left-3 text-white bg-gradient-to-tr:bg-slate-300 text-sm">
                Some projects I&apos;ve worked on throughout the years listed
                bellow
            </p>
            <ul className="text-white list-inside ml-3 pt-2">
                <li className="list-item pt-1 pl-3">
                    <a
                        href="https://github.com/ErikDoytchinov/Soluna"
                        className="text-slate-400"
                    >
                        Soluna
                    </a>{" "}
                    - Web based weather application built with Angular framework
                    and ran on a NodeJs servers
                </li>
                <li className="list-item pt-1 pl-3"></li>
            </ul>
        </div>
    );
}

export default Portfolio;
