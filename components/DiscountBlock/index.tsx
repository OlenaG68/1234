import React from "react";
import Image from "next/image";
import "./discount.scss";
const DiscountBlock = () => {
    return (
        <div className="discount-block">
            <div className=" discount-block__image ">
                <div className="text-2xl text-white font-extrabold sm:text-4xl">
                    50%
                </div>
                <div className="text-xl text-white font-medium sm:text-2xl">
                    OFF
                </div>
            </div>
            <div className="discount-block__text-block ">
                <div className=" font-semibold leading-5 text-[15px] sm:text-[17px] ">
                    Up to 50% Off Selected Items in the End of Season Sale |
                    adidas Discount
                </div>
                <div className=" text-sm mt-2 text-mute ">120 used today</div>
            </div>

            <div className="discount-block__time-terms-block">
                <div className="wrapper ">
                    <div className=" text-sm mt-2 text-mute">Ends 22-01-24</div>
                    <div className=" text-sm mt-2 text-mute">View terms</div>
                </div>
            </div>
            <div className="discount-block__btn-block  ">
                <div className="wrapper">
                    <div className="save-btn ">save</div>
                    <div className="hidden sm:block border-4 p-2 border-primary-blue">
                        <Image
                            src="/icons/save-icon.svg"
                            width={25}
                            height={25}
                            alt="save"
                        />
                    </div>
                    <button className="bg-primary-blue font-bold uppercase text-white min-h-10 leading-10 rounded-sm w-full ml-3">
                        View discount
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DiscountBlock;
