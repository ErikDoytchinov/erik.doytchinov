type MediaItem = {
    type: "photo" | "video";
    src: string;
    alt?: string;
};

const mediaItems: MediaItem[] = [
    {
        type: "photo",
        src: "src/assets/DJI_0098.JPG",
        alt: "Photo 1 description",
    },
    {
        type: "photo",
        src: "src/assets/DJI_0119.JPG",
        alt: "Photo 2 description",
    },
    { type: "video", src: "src/assets/DJI_01111.MP4" },
    { type: "video", src: "src/assets/DJI_0114.MP4" },
];

function MediaItemComponent({ type, src, alt }: MediaItem) {
    const commonClasses =
        "border border-slate-500 rounded-md shadow-sm shadow-white";
    if (type === "photo") {
        return (
            <img src={src} alt={alt} className={`w-full ${commonClasses}`} />
        );
    } else if (type === "video") {
        return (
            <div className={`aspect-w-9 aspect-h-16 ${commonClasses}`}>
                <video controls className="w-full h-full rounded-md">
                    <source src={src} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        );
    } else {
        return null;
    }
}

function Footage() {
    return (
        <div className="flex-1 md:overflow-y-auto p-4 md:mt-0 md:ml-64 text-white bg-neutral-900">
            <h1 className="text-2xl ml-6 pt-3 ">Drone Footage</h1>
            <p className="top-10 ml-6 pt-5 left-3  bdg-gradient-to-tr:bg-slate-300 text-sm">
                Here are some photos and videos I took with my DJI Mini 3 around
                Hilversum and Muidenport. Enjoy!
            </p>
            <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <div className="grid md:grid-cols-2 gap-5">
                {mediaItems.map((item, index) => (
                    <MediaItemComponent key={index} {...item} />
                ))}
            </div>
        </div>
    );
}

export default Footage;
