function InProgress() {
    return (
        <div className="flex items-center justify-center h-full bg-erik.doytchinov-300">
            <div className="text-center">
                <div className="text-5xl font-bold mb-4">🚧</div>
                <h1 className="text-4xl font-bold mb-2">Page Not Ready Yet</h1>
                <p className="text-lg text-gray-700">
                    I&apos;m working on developing this page. Please check back
                    later.
                </p>
            </div>
        </div>
    );
}

export default InProgress;
