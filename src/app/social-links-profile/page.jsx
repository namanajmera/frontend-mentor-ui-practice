const SocialLinksProfile = () => {
    const socialLinks = [
        "Github",
        "Frontend Mentor",
        "LinkedIn",
        "Twitter",
        "Instagram",
    ];
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex justify-center items-center flex-col bg-[#1F1F1F] p-4 rounded-2xl w-[350px] h-[525px] space-y-6">
                {/* Upper Section */}
                <section className="flex flex-col items-center space-y-2">
                    <img
                        src="/socialLinks/naman.jpeg"
                        alt=""
                        className="w-24 h-24 rounded-full"
                    />
                    <h2 className="text-xl text-white">Naman Ajmera</h2>
                    <span className="text-sm text-[#A8C62E] font-semibold">
                        Mumbai, India
                    </span>
                    <span className="text-sm">
                        "Front-end developer and avid reader."
                    </span>
                </section>
                {/* Bottom Section */}
                <section>
                    <ul>
                        {socialLinks.map((link) => (
                            <li
                                className="flex justify-center flex-col items-center mb-3"
                                key={link}
                            >
                                <button className="bg-[#333333] w-[300px] h-[40px] rounded-md hover:text-[#2D2D2D] hover:bg-[#A8C62E]">
                                    <span className="text-sm font-semibold">{link}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default SocialLinksProfile;
