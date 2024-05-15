import "./App.css";
import Portfolio from "../portfolio/Portfolio.tsx";

function App() {
    return (
        <>
            <div>
                <aside className="fixed top-0 left-0 z-40 w-2/12 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-slate-800">
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
                <Portfolio />,
            </div>
        </>
    );
}

export default App;
