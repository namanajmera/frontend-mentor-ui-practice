import Image from "next/image";

const BlogPreviewCard = () => {
    return (
        <div className="flex justify-center items-center h-screen text-[#111111]">
            <div className="bg-white p-[24] rounded-2xl w-[384] h-[522] space-y-10 shadow-[8px_8px_0_0_#000] border border-gray-950">
                <Image
                    src={"/blog-images/illustration-article.svg"}
                    alt="Test"
                    height={200}
                    width={336}
                    className="rounded-xl"
                />
                <div className="w-[336] h-[194] space-y-5">
                    {/* <div className="w-[82] h-[29] bg-[#F4D04E] rounded-xm px-2"> */}
                        <span className="inline-block bg-[#F4D04E] text-sm font-extrabold leading-[150%] px-2 py-1 rounded-sm text-gray-950">Learning</span>
                    {/* </div> */}
                    <p className="font-semibold text-sm leading-[150%] text-gray-950">Published 21 Dec 2023</p>
                    <h1 className="font-extrabold text-2xl leading-[150%] text-gray-950">HTML & CSS foundations</h1>
                    <span className="font-medium text-base leading-[150%] text-gray-500">
                        These languages are the backbone of every website, defining
                        structure, content, and presentation.
                    </span>
                    <div className="flex justify-start items-center space-x-3">
                        <Image src="/blog-images/image-avatar.webp" alt="User Pic" width={32} height={32} />
                        <span className="font-extrabold text-[0.88rem] leading-[150%] text-gray-950">Greg Hooper</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPreviewCard;
