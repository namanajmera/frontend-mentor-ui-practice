const FourCardFeatureSection = () => {
    return (
        <div className="flex flex-col space-y-10 text-white text-[13px] font-barlowSemiCondensed md:flex-row md:space-x-10 md:space-y-0">
            <div className="flex flex-col space-y-10">
                <div className="flex flex-col space-y-10 md:flex-row md:space-x-10 md:space-y-0">
                    <div className="bg-purple-800 p-12 rounded-xl flex flex-col space-y-6 md:bg-[url('/testimonials-grid-section-main/bg-pattern-quotation.svg')] md:bg-no-repeat md:bg-[93%_0]">
                        <div className="flex space-x-6">
                            <img
                                src="/testimonials-grid-section-main/image-daniel.jpg"
                                alt=""
                                className="rounded-full"
                            />
                            <div className="flex flex-col justify-evenly">
                                <span>Daniel Clifford</span>
                                <span>Verified Graduate</span>
                            </div>
                        </div>

                        <p className="text-2xl">
                            I received a job offer mid-course, and the subjects I learned were
                            current, if not more so, in the company I joined. I honestly feel
                            I got every penny’s worth.
                        </p>
                        <p className="text-base text-[#e7eaee]">
                            " I was an EMT for many years before I joined the bootcamp. I’ve
                            been looking to make a transition and have heard some people who
                            had an amazing experience here. I signed up for the free intro
                            course and found it incredibly fun! I enrolled shortly thereafter.
                            The next 12 weeks was the best - and most grueling - time of my
                            life. Since completing the course, I’ve successfully switched
                            careers, working as a Software Engineer at a VR startup."
                        </p>
                    </div>

                    <div className="bg-[#48556a] p-12 rounded-xl flex flex-col space-y-6">
                        <div className="flex space-x-6">
                            <img
                                src="/testimonials-grid-section-main/image-jonathan.jpg"
                                alt=""
                                className="rounded-full"
                            />
                            <div className="flex flex-col justify-evenly">
                                <span>Jonathan Walters</span>
                                <span>Verified Graduate</span>
                            </div>
                        </div>

                        <p className="text-2xl">
                            The team was very supportive and kept me motivated{" "}
                        </p>
                        <p className="text-base text-[#e7eaee]">
                            " I started as a total newbie with virtually no coding skills. I
                            now work as a mobile engineer for a big company. This was one of
                            the best investments I’ve made in myself."
                        </p>
                    </div>
                </div>

                <div className="flex flex-col space-y-10 md:flex-row md:space-x-10 md:space-y-0">
                    <div className="bg-[#ffffff] p-12 rounded-xl flex flex-col space-y-6 text-[#48556a]">
                        <div className="flex space-x-6">
                            <img
                                src="/testimonials-grid-section-main/image-jeanette.jpg"
                                alt=""
                                className="rounded-full"
                            />
                            <div className="flex flex-col justify-evenly">
                                <span>Jeanette Harmon</span>
                                <span>Verified Graduate</span>
                            </div>
                        </div>

                        <p className="text-2xl">
                            An overall wonderful and rewarding experience{" "}
                        </p>
                        <p className="text-base text-[#48556a]">
                            " Thank you for the wonderful experience! I now have a job I
                            really enjoy, and make a good living while doing something I
                            love."
                        </p>
                    </div>

                    <div className="bg-[#19212e] p-12 rounded-xl flex flex-col space-y-6">
                        <div className="flex space-x-6">
                            <img
                                src="/testimonials-grid-section-main/image-patrick.jpg"
                                alt=""
                                className="rounded-full"
                            />
                            <div className="flex flex-col justify-evenly">
                                <span>Patrick Abrams</span>
                                <span>Verified Graduate</span>
                            </div>
                        </div>

                        <p className="text-2xl">
                            Awesome teaching support from TAs who did the bootcamp themselves.
                            Getting guidance from them and learning from their experiences was
                            easy.
                        </p>
                        <p className="text-base text-[#e7eaee]">
                            " The staff seem genuinely concerned about my progress which I
                            find really refreshing. The program gave me the confidence
                            necessary to be able to go out in the world and present myself as
                            a capable junior developer. The standard is above the rest. You
                            will get the personal attention you need from an incredible
                            community of smart and amazing people."
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-[#ffffff] p-12 rounded-xl flex flex-col space-y-6 text-[#48556a] basis-[min-content] md:min-w-[300px]">
                <div className="flex space-x-6">
                    <img
                        src="/testimonials-grid-section-main/image-kira.jpg"
                        alt=""
                        className="rounded-full"
                    />
                    <div className="flex flex-col justify-evenly">
                        <span>Kira Whittle</span>
                        <span>Verified Graduate</span>
                    </div>
                </div>

                <p className="text-2xl">
                    Such a life-changing experience. Highly recommended!{" "}
                </p>
                <p className="text-base">
                    " Before joining the bootcamp, I’ve never written a line of code. I
                    needed some structure from professionals who can help me learn
                    programming step by step. I was encouraged to enroll by a former
                    student of theirs who can only say wonderful things about the program.
                    The entire curriculum and staff did not disappoint. They were very
                    hands-on and I never had to wait long for assistance. The agile team
                    project, in particular, was outstanding. It took my learning to the
                    next level in a way that no tutorial could ever have. In fact, I’ve
                    often referred to it during interviews as an example of my developent
                    experience. It certainly helped me land a job as a full-stack
                    developer after receiving multiple offers. 100% recommend!"
                </p>
            </div>
        </div>
    );
};

export default FourCardFeatureSection;
