"use client"
import { useState } from "react";

const BlogPreviewCard = () => {
    const [isShare, setIsShare] = useState(false);
    const handleShareData = () => {
        setIsShare(!isShare);
    }
    return (
        <div className="flex justify-center items-center p-14 text-[13px] text-[#6d7f97] font-manrope md:m-auto md:p-40">
            <div className="relative flex flex-col rounded-lg shadow-lg w-full bg-white md:flex-row md:w-[40rem] md:justify-between">
                <img
                    src="/article-preview-component-master/drawers.jpg"
                    alt=""
                    className="w-full rounded-t-lg md:w-1/4 md:rounded-r-none"
                />
                <div className="flex flex-col justify-center items-center space-y-5 p-5">
                    <h1 className="text-xl text-[#48556a] font-semibold">
                        Shift the overall look and feel by adding these wonderful touches to
                        furniture in your home
                    </h1>
                    <p className="text-sm">
                        Ever been in a room and felt like something was missing? Perhaps it
                        felt slightly bare and uninviting. I’ve got some simple tips to help
                        you make any room feel complete.
                    </p>
                    <div className="relative flex justify-between items-center w-full px-4">
                        <div className="flex items-center space-x-3">
                            <img
                                className="rounded-full w-10 h-10"
                                src="/article-preview-component-master/avatar-michelle.jpg"
                                alt=""
                            />
                            <div className="flex flex-col justify-evenly">
                                <h2 className="text-base text-[#48556a] font-semibold">
                                    Michelle Appleton
                                </h2>
                                <p>28 Jun 2020</p>
                            </div>
                        </div>
                        <div className="absolute right-2 -bottom-1 z-10 flex justify-center items-center space-x-2 bg-[#ecf2f8] rounded-full w-8 h-8 hover:cursor-pointer" onClick={handleShareData}>
                            <img
                                src="/article-preview-component-master/icon-share.svg"
                                alt=""
                                className="w-1/2 h-1/2"
                            />
                        </div>
                    </div>
                </div>
                {isShare && <div className="opacity-0 md:opacity-100 absolute left-[94%] top-[12rem] -translate-x-1/2 after:content-[''] after:absolute after:border-8 after:border-transparent after:border-b-[#48556a] rotate-180"></div>}
                {isShare && <div className="absolute bottom-0 flex space-x-12 bg-[#48556a] w-full h-16 items-center rounded-b-lg transition-all duration-300 p-8 md:w-72 md:top-28 md:-right-24 md:justify-around md:rounded-lg">
                    <span className="tracking-[0.5rem]">SHARE</span>
                    <div className="flex space-x-2">
                        <img
                            src="/article-preview-component-master/icon-facebook.svg"
                            alt=""
                        />
                        <img
                            src="/article-preview-component-master/icon-twitter.svg"
                            alt=""
                        />
                        <img
                            src="/article-preview-component-master/icon-pinterest.svg"
                            alt=""
                        />
                    </div>
                </div>}
            </div>
        </div>
    );
};

export default BlogPreviewCard;
