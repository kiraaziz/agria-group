const LoadingPage = () => {

    return (
        <div className="w-screen h-[100svh] flex items-center justify-center">
            <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 rounded-full animate-pulse dark:bg-lime-400"></div>
                <div className="w-4 h-4 rounded-full animate-pulse dark:bg-lime-400"></div>
                <div className="w-4 h-4 rounded-full animate-pulse dark:bg-lime-400"></div>
            </div>
        </div>
    )
}

export default LoadingPage