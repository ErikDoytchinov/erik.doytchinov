type MediaItem = {
    type: "photo" | "video";
    src: string;
    date?: string;
    alt?: string;
    aspectRatio?: string;
};

const mediaItemsRow1: MediaItem[] = [
    {
        type: "video",
        src: "https://s3.eu-north-1.amazonaws.com/erik.doytchinov/footage/DJI_0115.mp4",
        date: "2024-05-30",
    },
    {
        type: "photo",
        src: "https://s3.eu-north-1.amazonaws.com/erik.doytchinov/footage/DJI_0065.jpeg",
        alt: "Photo 1 description",
        date: "2024-05-09",
    },
    {
        type: "video",
        src: "https://s3.eu-north-1.amazonaws.com/erik.doytchinov/footage/DJI_0007.mov",
        date: "2024-04-21",
        aspectRatio: "16:9",
    },
];

const mediaItemsRow2: MediaItem[] = [
    {
        type: "photo",
        src: "https://s3.eu-north-1.amazonaws.com/erik.doytchinov/footage/DJI_0119.jpeg",
        alt: "Photo 2 description",
        date: "2024-05-30",
    },
    {
        type: "video",
        src: "https://s3.eu-north-1.amazonaws.com/erik.doytchinov/footage/DJI_1022.mp4",
        date: "2024-05-02",
    },
    {
        type: "photo",
        src: "https://s3.eu-north-1.amazonaws.com/erik.doytchinov/footage/DJI_1023.jpeg",
        alt: "Photo 2 description",
        date: "2024-05-02",
    },
];

function MediaItemComponent({ type, src, alt, date, aspectRatio }: MediaItem) {
    const commonClasses =
        "border border-slate-500 rounded-md shadow-sm shadow-white";
    if (type === "photo") {
        return (
            <div className="relative inline-block">
                <img
                    src={src}
                    alt={alt}
                    className={`w-full ${commonClasses}`}
                />
                <div className="absolute top-3 right-3 bg-white text-gray-800 text-sm font-semibold px-3 py-1 rounded-full shadow-md">
                    {date}
                </div>
            </div>
        );
    } else if (type === "video") {
        return (
            <div className="relative inline-block">
                <div
                    className={`${
                        aspectRatio === "16:9"
                            ? "aspect-w-16 aspect-h-9"
                            : "aspect-w-9 aspect-h-16"
                    } ${commonClasses}`}
                >
                    <video
                        controls
                        preload="metadata"
                        className="w-full h-full rounded-md"
                    >
                        <source src={`${src}#t=0.001`} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="absolute top-3 right-3 bg-white text-gray-800 text-sm font-semibold px-3 py-1 rounded-full shadow-md">
                    {date}
                </div>
            </div>
        );
    } else {
        return null;
    }
}

function Footage() {
    return (
        <div className="flex-1 md:overflow-y-auto p-4 md:mt-0 md:ml-64 no-scrollbar text-erik.doytchinov-500 bg-erik.doytchinov-100">
            <h1 className="text-2xl ml-6 pt-3 ">Drone Footage</h1>
            <p className="top-10 ml-6 pt-5 left-3  bdg-gradient-to-tr:bg-slate-300 text-sm">
                Here are some photos and videos I took with my DJI Mini 3 around
                Hilversum and Muidenport. Enjoy!
            </p>
            <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <div className="grid md:grid-cols-2 gap-5">
                <div className="grid gap-5">
                    {mediaItemsRow1.map((item, index) => (
                        <MediaItemComponent key={index} {...item} />
                    ))}
                </div>
                <div className="grid gap-5">
                    {mediaItemsRow2.map((item, index) => (
                        <MediaItemComponent key={index} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Footage;
