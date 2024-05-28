import "./App.css";
import Portfolio from "../portfolio/Portfolio.tsx";

function App() {
    return (
        <>
            <div className="h-screen flex flex-col md:flex-row overflow-y-scroll">
                <aside className="md:w-64 w-full p-4 md:h-full md:fixed md:left-0 md:top-0 bg-slate-800">
                    <h1 className="md:text-left text-2xl pt-2 pb-5 text-white text-center">
                        Erik Doytchinov
                    </h1>
                    <img
                        src="https://media.licdn.com/dms/image/D4E03AQGKkYD_g2UwYw/profile-displayphoto-shrink_400_400/0/1705500073136?e=1720051200&v=beta&t=bqr2OTW8NiezDIWYPRp_FMxSIIAedCMSHipHJq-qC9M"
                        alt="Picture of the author"
                        className="rounded-md md:w-auto  hidden md:block"
                    />
                    <div className="flex justify-evenly mt-7">
                        <a
                            href="https://www.instagram.com/erik_doytchinov/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="https://cdn0.iconfinder.com/data/icons/phosphor-regular-vol-3/256/instagram-logo-512.png"
                                alt="instagram"
                                className="w-8 h-8 mx-2 brightness-0 invert"
                            />
                        </a>
                        <a
                            href="https://www.github.com/erikdoytchinov"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="https://cdn4.iconfinder.com/data/icons/social-media-and-logos-12/32/Logo_Github-512.png"
                                alt="github"
                                className="w-8 h-8 mx-2 brightness-0 invert"
                            />
                        </a>
                        <a
                            href="mailto:erik.doytchinov@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="https://cdn3.iconfinder.com/data/icons/essential-pack-2/48/8-Email-512.png"
                                alt="linkedin"
                                className="w-8 h-8 mx-2 brightness-0 invert"
                            />
                        </a>
                    </div>
                    <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    <div className="flex md:flex-col md:justify-right justify-between text-white">
                        <a
                            href=""
                            target="_blank"
                            className="py-2 my-2 text-sm flex justify-center md:justify-normal items-center rounded-lg hover:bg-slate-700 w-full"
                        >
                            <img
                                src="https://cdn0.iconfinder.com/data/icons/phosphor-regular-vol-3/256/notebook-1024.png"
                                alt="blog"
                                className="w-8 h-8 mx-2 brightness-0 invert"
                            />
                            Blog
                        </a>
                        <a
                            href=""
                            target="_blank"
                            className="py-2 my-2 text-sm flex justify-center md:justify-normal items-center rounded-lg hover:bg-slate-700 w-full"
                        >
                            <img
                                src="https://cdn0.iconfinder.com/data/icons/phosphor-regular-vol-3/256/hamburger-512.png"
                                alt="burger"
                                className="w-8 h-8 mx-2 brightness-0 invert"
                            />
                            Food
                        </a>
                        <a
                            href=""
                            target="_blank"
                            className="py-2 my-2 text-sm flex justify-center md:justify-normal items-center rounded-lg hover:bg-slate-700 w-full"
                        >
                            <img
                                src="https://cdn0.iconfinder.com/data/icons/phosphor-regular-vol-5/256/video-camera-512.png"
                                alt="camera"
                                className="w-8 h-8 mx-2 brightness-0 invert"
                            />
                            Footage
                        </a>
                    </div>
                </aside>
                <Portfolio />
            </div>
        </>
    );
}

export default App;
