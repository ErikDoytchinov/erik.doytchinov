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
        src: "https://erik.doytchinov.eu/footage/DJI_1003.mp4",
        date: "2024-05-30",
    },
    {
        type: "photo",
        src: "https://erik.doytchinov.eu/footage/DJI_1002.jpeg",
        alt: "Photo 1 description",
        date: "2024-05-09",
    },
    {
        type: "photo",
        src: "https://erik.doytchinov.eu/footage/DJI_1102.jpeg",
        date: "2024-08-11",
    },
    {
        type: "video",
        src: "https://erik.doytchinov.eu/footage/DJI_1000.mov",
        date: "2024-04-21",
        aspectRatio: "16:9",
    },
    {
        type: "photo",
        src: "https://erik.doytchinov.eu/footage/DJI_1202.jpeg",
        date: "2024-09-10",
    },
    {
        type: "video",
        src: "https://erik.doytchinov.eu/footage/DJI_1200.mp4",
        date: "2024-09-10",
        aspectRatio: "16:9",
    },
];

const mediaItemsRow2: MediaItem[] = [
    {
        type: "photo",
        src: "https://erik.doytchinov.eu/footage/DJI_1001.jpeg",
        alt: "Photo 2 description",
        date: "2024-05-30",
    },
    {
        type: "video",
        src: "https://erik.doytchinov.eu/footage/DJI_1004.mp4",
        date: "2024-05-02",
    },
    {
        type: "photo",
        src: "https://erik.doytchinov.eu/footage/DJI_1005.jpeg",
        alt: "Photo 2 description",
        date: "2024-05-02",
    },
    {
        type: "photo",
        src: "https://erik.doytchinov.eu/footage/DJI_1201.jpeg",
        date: "2024-09-10",
    },
    {
        type: "photo",
        src: "https://erik.doytchinov.eu/footage/DJI_1100.jpeg",
        date: "2024-08-11",
    },
    {
        type: "photo",
        src: "https://erik.doytchinov.eu/footage/DJI_1103.jpeg",
        date: "2024-08-11",
    },
    {
        type: "video",
        src: "https://erik.doytchinov.eu/footage/DJI_1101.mp4",
        date: "2024-08-11",
        aspectRatio: "16:9",
    },
];

// If you prefer, combine both arrays into one so they all appear in a single “masonry”:
const allMediaItems = [...mediaItemsRow1, ...mediaItemsRow2];

function MediaItemComponent({ type, src, alt, date }: MediaItem) {
    const commonClasses = "w-full object-cover rounded shadow";

    if (type === "photo") {
        return (
            <div className="relative">
                <img src={src} alt={alt || ""} className={commonClasses} />
                {date && (
                    <div className="absolute top-1 right-1 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 text-xs font-semibold px-2 py-1 rounded shadow">
                        {date}
                    </div>
                )}
            </div>
        );
    } else if (type === "video") {
        return (
            <div className="relative">
                <video controls preload="metadata" className={commonClasses}>
                    <source src={`${src}#t=0.001`} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {date && (
                    <div className="absolute top-1 right-1 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 text-xs font-semibold px-2 py-1 rounded shadow">
                        {date}
                    </div>
                )}
            </div>
        );
    }
    return null;
}

function Footage() {
    return (
        <div className="max-w-4xl mx-auto sm:p-8">
            <header className="mb-8">
                <h1 className="text-4xl font-bold mb-2">Drone Footage</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                    Here are some photos and videos I took with my DJI Mini 3
                    around the Netherlands. Enjoy!
                </p>
            </header>

            <div className="columns-1 md:columns-2 gap-4 w-full max-w-5xl">
                {allMediaItems.map((item, index) => (
                    <div key={index} className="mb-4 break-inside-avoid">
                        <MediaItemComponent {...item} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Footage;
