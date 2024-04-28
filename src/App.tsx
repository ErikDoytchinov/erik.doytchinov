import "./App.css";

function calculateTimeBetweenTwoStringDates(date1: string) {
    const date: Date = new Date(date1);
    const dateNow: Date = new Date();
    const diffTime = Math.abs(dateNow.getTime() - date.getTime());
    const diffMos = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
    return diffMos + " mos";
}

function App() {
    return (
        <>
            <aside
                className="fixed top-0 left-0 z-40 w-2/12 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-slate-800"
                aria-label="Sidebar"
            >
                <div className="ml-4">
                    <h1 className="text-left text-2xl pt-7 pb-5 text-white">
                        Erik Doytchinov
                    </h1>
                    <img
                        src="https://media.licdn.com/dms/image/D4E03AQGKkYD_g2UwYw/profile-displayphoto-shrink_400_400/0/1705500073136?e=1720051200&v=beta&t=bqr2OTW8NiezDIWYPRp_FMxSIIAedCMSHipHJq-qC9M"
                        width={200}
                        height={200}
                        alt="Picture of the author"
                        className="rounded-md mb-4 ml-2"
                    />
                    <div className="mt-7">
                        <a
                            href="https://github.com/ErikDoytchinov"
                            className="text-2xl text-slate-400"
                        >
                            GitHub
                        </a>
                    </div>

                    <p className="text-white text-left mt-6">CONTACT</p>
                    <p className="text-white text-left">
                        erik.doytchinov@gmail.com
                    </p>
                </div>
            </aside>
            <div className="fixed top-0 right-0 z-40 w-10/12 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-neutral-900">
                <h1 className="text-2xl ml-6 pt-7 text-white">About Me</h1>
                <p className="top-10 ml-6 pt-5 left-3 text-white bg-gradient-to-tr:bg-slate-300 text-sm">
                    Currently persuing my Bachelor&apos;s in Computer Science (
                    <a
                        href="https://vu.nl/en/education/bachelor/computer-science"
                        className="text-slate-400"
                    >
                        VU Amsterdam
                    </a>
                    ). I&apos;m interested in everything tech related, with a
                    focus on software engineering and big data. Here I include
                    all project I&apos;ve tinkered with throughout the years,
                    RaspberryPi and others. I&apos;m also into video games,
                    I&apos;m currently playing{" "}
                    <a
                        href="https://www.ea.com/games/apex-legends"
                        className="text-slate-400"
                    >
                        Apex Legends
                    </a>{" "}
                    and{" "}
                    <a
                        href="https://www.ea.com/games/battlefield/battlefield-2042"
                        className="text-slate-400"
                    >
                        Battlefield 2042
                    </a>
                    .
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
                            <p className="text-base">
                                Software Engineer Intern
                            </p>
                            <p className="text-sm">
                                <a
                                    href="https://www.dvbcontrol.com/"
                                    className="text-slate-400"
                                >
                                    DVBControl
                                </a>{" "}
                                · Internship
                            </p>
                            <p className="text-xs">
                                Aug 2023 - Oct 2023 · 3 mos
                            </p>
                            <ul className="pl-4 pt-1">
                                <li>
                                    •Collaborated with the development team to
                                    create a web portal for DVB Control&apos;s
                                    broadcasting monitoring tool.
                                </li>
                                <li>
                                    •Utilized the Angular framework to design
                                    and implement user-friendly web
                                    applications.
                                </li>
                                <li>
                                    •Assisted in the analysis of databases to
                                    enhance data storage and retrieval
                                    efficiency.
                                </li>
                                <li>
                                    •Assisted in implementing security measures
                                    to safeguard sensitive data and protect
                                    against potential vulnerabilities.
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
                                {calculateTimeBetweenTwoStringDates(
                                    "2023-01-01"
                                )}
                            </p>
                            <ul className="pl-4 pt-1">
                                <li>
                                    • Expertly prepared and cooked a wide range
                                    of Italian-style pizzas to perfection,
                                    ensuring consistency in taste and
                                    presentation.
                                </li>
                                <li>
                                    • Maintained a clean and organized kitchen,
                                    adhering to food safety and hygiene
                                    standards. Demonstrated proficiency in
                                    working with pizza ovens and other kitchen
                                    equipment.
                                </li>
                                <li>
                                    • Coordinated and supervised fellow staff
                                    members during shifts, ensuring smooth
                                    restaurant operations.
                                </li>
                                <li>
                                    • Fostered a collaborative and positive work
                                    environment, promoting teamwork and staff
                                    morale
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="list-item pt-1 pl-3">
                        <div className="inline text-xs">
                            <p className="text-base">
                                Customer Service Assistant
                            </p>
                            <p className="text-sm">
                                <a
                                    href="https://jackastors.com/"
                                    className="text-slate-400"
                                >
                                    Jack Astor&apos;s Bar and Grill
                                </a>{" "}
                                · Part-time
                            </p>
                            <p className="text-xs">
                                Feb 2022 - Sep 2022 · 8 mos
                            </p>
                            <ul className="pl-4 pt-1">
                                <li>
                                    • Skilled in delivering outstanding service
                                    by greeting and serving customers.
                                </li>
                                <li>
                                    • Strong customer service attitude,
                                    self-reliant, dependable, able to
                                    prioritize, and multitask.
                                </li>
                                <li>
                                    • Experience working as a leader and able to
                                    work well with others to accomplish a goal.
                                </li>
                                <li>
                                    • Experienced with handling of high volume
                                    of customers.
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                <h1 className="text-2xl ml-6 pt-1 left-3 text-white">
                    Projects
                </h1>
                <p className="ml-6 pt-5 left-3 text-white bg-gradient-to-tr:bg-slate-300 text-sm">
                    Some projects I&apos;ve worked on throughout the years
                    listed bellow
                </p>
                <ul className="text-white list-inside ml-3 pt-2">
                    <li className="list-item pt-1 pl-3">
                        <a
                            href="https://github.com/ErikDoytchinov/Soluna"
                            className="text-slate-400"
                        >
                            Soluna
                        </a>{" "}
                        - Web based weather application built with Angular
                        framework and ran on a NodeJs servers
                    </li>
                    <li className="list-item pt-1 pl-3"></li>
                </ul>
            </div>
        </>
    );
}

export default App;
