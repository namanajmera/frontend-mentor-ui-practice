"use client";

import { useMobileView } from "@/mixins/useMobileView";
const ProductPreviewCard = () => {
    const isMobile = useMobileView();
    return (
        <div className="flex flex-col md:flex-row text-[#6c7289] bg-white rounded-lg text-[14px] font-montserrat md:w-[900px] md:mx-auto md:h-[600px]">
            <img
                src={
                    isMobile
                        ? "/product-preview-card/image-product-mobile.jpg"
                        : "/product-preview-card/image-product-desktop.jpg"
                }
                alt=""
                className="rounded-t-lg h-auto md:rounded-r-none md:rounded-l-xl md:w-1/2"
            />
            {/* Bottom */}
            <div className="space-y-4 p-8 md:space-y-12 md:flex md:flex-col md:justify-between">
                <span className="uppercase tracking-[0.5rem]">Perfume</span>
                <h1 className="font-extrabold text-4xl text-[#1c232b] font-fraunces">
                    Gabrielle Essence Eau De Parfum
                </h1>
                <p className="text-base">
                    A floral, solar and voluptuous interpretation composed by Olivier
                    Polge, Perfumer-Creator for the House of CHANEL.
                </p>
                <div className="flex space-x-4 items-center">
                    <span className="text-3xl font-extrabold text-[#3c8067] font-fraunces">
                        $149.99
                    </span>
                    <span className="text-base line-through">$169.99</span>
                </div>
                <button className="bg-[#3c8067] text-white py-3 rounded-lg flex items-center justify-center space-x-2 w-full h-14 hover:bg-[#1b4133]">
                    <img src="/product-preview-card/icon-cart.svg" alt="" />
                    <span className="text-base font-semibold">Add to Cart</span>
                </button>
            </div>
        </div>
    );
};

export default ProductPreviewCard;
