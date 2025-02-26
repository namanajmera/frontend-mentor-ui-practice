const FourCardFeatureSection = () => {
    return (
        <div className="flex flex-col font-poppins space-y-10 text-[#697077] text-[15px]">
            {/* Top Container */}
            <div className="flex flex-col items-center justify-center space-y-3">
                <h1 className="text-2xl">Reliable, efficient delivery</h1>
                <span className="text-2xl font-bold text-[#4c4e61]">
                    Powered by Technology
                </span>
                <p className="text-xl text-center md:w-[50rem]">
                    Our Artificial Intelligence powered tools use millions of project data
                    points to ensure that your project is successful
                </p>
            </div>

            {/* Card Container */}
            <div className="flex flex-col space-y-10 lg:flex-row lg:space-x-10 lg:space-y-0 lg:justify-center lg:items-center">
                <div className="bg-white rounded-lg space-y-5 p-5 border-t-4 border-t-[#45d3d3] w-full h-56 lg:w-96">
                    <div>
                        <span className="text-xl font-bold">Supervisor</span>
                        <p>Monitors activity to identify project roadblocks</p>
                    </div>
                    <img
                        src="/four-card-feature-section/icon-supervisor.svg"
                        alt=""
                        className="float-right"
                    />
                </div>
                <div className="flex flex-col justify-center items-center space-y-10">
                    <div className="bg-white rounded-lg space-y-5 p-5 border-t-4 border-t-[#ea5353] w-full h-56 lg:w-96">
                        <div>
                            <span className="text-xl font-bold">Team Builder</span>
                            <p>
                                Scans our talent network to create the optimal team for your
                                project
                            </p>
                        </div>
                        <img
                            src="/four-card-feature-section/icon-team-builder.svg"
                            alt=""
                            className="float-right"
                        />
                    </div>
                    <div className="bg-white rounded-lg space-y-5 p-5 border-t-4 border-t-[#fcaf4a] w-full h-56 lg:w-96">
                        <div>
                            <span className="text-xl font-bold">Karma</span>
                            <p>Regularly evaluates our talent to ensure quality</p>
                        </div>
                        <img
                            src="/four-card-feature-section/icon-karma.svg"
                            alt=""
                            className="float-right"
                        />
                    </div>
                </div>
                <div className="bg-white rounded-lg space-y-5 p-5 border-t-4 border-t-[#549ef2] w-full h-56 lg:w-96">
                    <div>
                        <span className="text-xl font-bold">Calculator</span>
                        <p>
                            Uses data to analyze previous projects and provide insights for
                            your project
                        </p>
                    </div>
                    <img
                        src="/four-card-feature-section/icon-calculator.svg"
                        alt=""
                        className="float-right"
                    />
                </div>
            </div>
        </div>
    );
};

export default FourCardFeatureSection;
