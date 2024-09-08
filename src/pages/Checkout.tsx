import { useState } from "react";
interface cartTypes {
    img: {
        mobile: string;
        desktop: string;
        tablet: string;
    };
    othersObj: Array<{
        slug: string;
        name: string;
        image: {
            mobile: string;
            desktop: string;
            tablet: string;
        };
    }>;
    price: number;
    productName: string;
    total: number;
}
export default function Checkout() {
    const [cartObj, _setCartObj] = useState<cartTypes[]>(
        JSON.parse(localStorage.getItem("cart") || "[]")
    );
    const totalCost = cartObj.map((item: cartTypes) => {
        return item.total * item.price;
    });
    let number = 0;

    function total() {
        number = 0;
        for (let i = 0; i < totalCost.length; i++) {
            number += totalCost[i];
        }
        return number;
    }
    console.log(cartObj)


    return (
        <div className=''>
            <div className='pt-4 pl-6'><p className='font-medium text-[15px] leading-[25px] text-[#979797]'>Go Back</p></div>
            <div className='mt-6 ml-6 mr-6 pl-6 pt-6 pr-6 flex flex-col gap-8'>
                <h1 className='font-bold text-[28px] tracking-[1px]'>CHECKOUT</h1>
                <div>
                    <span className='text-[#D87D4A] font-bold text-[13px] leading-6'>BILLING DETAILS</span>
                    <div className='flex flex-col gap-6 pt-4'>
                        <form action="" className='flex flex-col gap-[9px] '>
                            <p>Name</p>
                            <input type="text" placeholder='Alexei Ward' className='w-[full] h-[56px] border-2 border-[#CFCFCF] rounded-lg' />

                        </form>
                        <form action="" className='flex flex-col gap-[9px] '>
                            <p>Email Address</p>
                            <input type="text" placeholder='alexei@mail.com' className='w-[full] h-[56px] border-2 border-[#CFCFCF] rounded-lg' />

                        </form>
                        <form action="" className='flex flex-col gap-[9px] '>
                            <p>Phone Number</p>
                            <input type="text" placeholder='+1 202-555-0136' className='w-[full] h-[56px] border-2 border-[#CFCFCF] rounded-lg' />

                        </form>
                    </div>
                </div>
                <div>
                    <span className='text-[#D87D4A] font-bold text-[13px] leading-6'>shipping info</span>
                    <div className='flex flex-col gap-6 pt-4'>
                        <form action="" className='flex flex-col gap-[9px] '>
                            <p>Your Address</p>
                            <input type="text" placeholder='1137 Williams Avenue' className='w-[full] h-[56px] border-2 border-[#CFCFCF] rounded-lg' />

                        </form>
                        <form action="" className='flex flex-col gap-[9px] '>
                            <p>ZIP Code</p>
                            <input type="text" placeholder='10001' className='w-[full] h-[56px] border-2 border-[#CFCFCF] rounded-lg' />

                        </form>
                        <form action="" className='flex flex-col gap-[9px] '>
                            <p>City</p>
                            <input type="text" placeholder='New York' className='w-[full] h-[56px] border-2 border-[#CFCFCF] rounded-lg' />

                        </form>
                        <form action="" className='flex flex-col gap-[9px] '>
                            <p>Country</p>
                            <input type="text" placeholder='United States' className='w-[full] h-[56px] border-2 border-[#CFCFCF] rounded-lg' />

                        </form>
                    </div>
                </div>
                <div className="flex flex-col">
                    <span className='text-[#D87D4A] font-bold text-[13px] leading-6'>payment details</span>
                    <div className="flex flex-col gap-6 pt-4">
                        <form action="" className="flex border-2 border-[#CFCFCF] rounded-lg w-[full] h-[56px] items-center pl-4 gap-4">
                            <input type="checkbox" className="appearance-none h-6 w-6 border-2 border-gray-300 rounded-full checked:bg-orange-500 checked:border-transparent focus:outline-none transition duration-200" />
                            <p>e-Money</p>
                        </form>
                        <form action="" className="flex border-2 border-[#CFCFCF] rounded-lg w-[full] h-[56px] items-center pl-4 gap-4">
                            <input type="checkbox" className="appearance-none h-6 w-6 border-2 border-gray-300 rounded-full checked:bg-orange-500 checked:border-transparent focus:outline-none transition duration-200" />

                            <p>Cash on Delivery</p>
                        </form>
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <form action="" className='flex flex-col gap-[9px] '>
                        <p>e-Money Number</p>
                        <input type="text" placeholder='238521993' className='w-[full] h-[56px] border-2 border-[#CFCFCF] rounded-lg' />

                    </form>
                    <form action="" className='flex flex-col gap-[9px] '>
                        <p>e-Money PIN</p>
                        <input type="text" placeholder='6891' className='w-[full] h-[56px] border-2 border-[#CFCFCF] rounded-lg' />

                    </form>
                </div>
            </div>
            <div className="mt-[95px] pl-6 pr-6">
                <h1 className="pl-6">SUMMARY</h1>
                <div className="pl-6 pt-[31px] pr-6 flex flex-col gap-6 ">{cartObj.map((item: cartTypes, index: number) => (
                    <div key={index} className="flex gap-4 items-center">
                        <img
                            className="w-[64px] h-[64px] rounded-md"
                            src={item.img.mobile}
                        />
                        <div className="justify-between flex w-full">
                            <div className="flex flex-col">
                                <h1 className="whitespace-nowrap font-bold leading-[25px] text-[15px]">
                                    {item.othersObj[0].slug}
                                </h1>
                                <p className="font-bold leading-[25px] text-[14px] text-[#979797]">{`${item.price}$`}</p>
                            </div>
                            <span className="font-bold text-[#979797]">x{item.total}</span>
                        </div>
                    </div>
                ))}</div>
                <div className="flex flex-col gap-2 pt-8 pl-6 pr-6">
                    <div className="flex justify-between"><p className=" font-medium text-[#979797] text-[15px] leading-6">TOTAL</p> <span className="font-bold text-[18px]">$ {total()}</span></div>
                    <div className="flex justify-between"><p className=" font-medium text-[#979797] text-[15px] leading-6">SHIPPING</p> <span className="font-bold text-[18px]">$ 50</span></div>
                    <div className="flex justify-between"><p className=" font-medium text-[#979797] text-[15px] leading-6">VAT (INCLUDED)</p> <span className="font-bold text-[18px]">$ 1,079</span></div>
                    <div className="flex justify-between pt-4"><p className=" font-medium text-[#979797] text-[15px] leading-6">GRAND TOTAL</p> <span className="font-bold text-[#D87D4A] text-[18px]">$ {total() + 50}</span></div>
                    <button className="bg-[#D87D4A] w-full h-12 text-center text-white font-bold text-[13px] tracking-[1px] mt-6">CONTINUE & PAY</button>
                </div>

            </div>
        </div>
    )
} 