import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form'
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
    const {
        register,
        handleSubmit,
        formState: { errors }, } = useForm()
    const navigate = useNavigate();
    console.log(onsubmit)
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

    const goBack = () => {
        navigate(-1);
    };
    const onSubmit = async (data: any) => {
        console.log(data)
    }

    return (
        <div className=''>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className='pt-4 pl-6' onClick={goBack}><p className='font-medium text-[15px] leading-[25px] text-[#979797]'>Go Back</p></div>
                <div className='mt-6 ml-6 mr-6 pl-6 pt-6 pr-6 flex flex-col gap-8'>
                    <h1 className='font-bold text-[28px] tracking-[1px]'>CHECKOUT</h1>
                    <div>
                        <span className='text-[#D87D4A] font-bold text-[13px] leading-6'>BILLING DETAILS</span>
                        <form className='flex flex-col gap-6 pt-4' >
                            <label className='flex flex-col gap-[9px] '>
                                <p>Name</p>
                                <input type="text" placeholder='Alexei Ward' className={`w-[full] h-[56px] border-2 border-[#CFCFCF] rounded-lg ${errors.name ? 'border-red-500' : 'border-[#CFCFCF]'}`}{...register('name', { required: "can't be empty" })} name="name" />
                                {errors.name && <p className="text-red-500">{errors.name.message as string}</p>}
                            </label>
                            <label className='flex flex-col gap-[9px] '>
                                <p>Email Address</p>
                                <input type="text" placeholder='alexei@mail.com' className={`w-[full] h-[56px] border-2 border-[#CFCFCF] rounded-lg ${errors.email ? 'border-red-500' : 'border-[#CFCFCF]'}`}{...register('email', {
                                    required: "can't be empty", pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message: "Invalid email format"
                                    }
                                })} name="email" />
                                {errors.email && <p className="text-red-500">{errors.email.message as string}</p>}

                            </label>
                            <label className='flex flex-col gap-[9px] '>
                                <p>Phone Number</p>
                                <input type="number" placeholder='+1 202-555-0136' className={`w-[full] h-[56px] border-2 border-[#CFCFCF] rounded-lg ${errors.number ? 'border-red-500' : 'border-[#CFCFCF]'}`} {...register('number', { required: "can't be empty" })} name="number" />
                                {errors.number && <p className="text-red-500">{errors.number.message as string}</p>}

                            </label>
                        </form>
                    </div>
                    <div>
                        <span className='text-[#D87D4A] font-bold text-[13px] leading-6'>shipping info</span>
                        <div className='flex flex-col gap-6 pt-4'>
                            <label className='flex flex-col gap-[9px] '>
                                <p>Your Address</p>
                                <input type="text" placeholder='1137 Williams Avenue' className={`w-[full] h-[56px] border-2 border-[#CFCFCF] rounded-lg ${errors.address ? 'border-red-500' : 'border-[#CFCFCF]'}`}{...register('address', { required: "cant't be empty" })} name="address" />
                                {errors.address && <p className="text-red-500">{errors.address.message as string}</p>}

                            </label>
                            <label className='flex flex-col gap-[9px] '>
                                <p>ZIP Code</p>
                                <input
                                    type="number"
                                    placeholder="10001"
                                    className={`w-full h-[56px] border-2 ${errors.zip ? 'border-red-500' : 'border-[#CFCFCF]'} rounded-lg`}
                                    {...register('zip', {
                                        required: "ZIP Code is required",
                                        pattern: {
                                            value: /^[0-9]{5}(?:-[0-9]{4})?$/,
                                            message: "Invalid ZIP Code format"
                                        }
                                    })}
                                    name="zip"
                                />

                                {errors.zip && <p className="text-red-500">{errors.zip.message as string}</p>}

                            </label>
                            <label className='flex flex-col gap-[9px] '>
                                <p>City</p>
                                <input type="text" placeholder='New York' className={`w-[full] h-[56px] border-2 border-[#CFCFCF] rounded-lg ${errors.city ? 'border-red-500' : 'border-[#CFCFCF]'} rounded-lg`}
                                    {...register("city", { required: "can't be empty" })} name="city" />
                                {errors.city && <p className="text-red-500">{errors.city.message as string}</p>}

                            </label>
                            <label className='flex flex-col gap-[9px] '>
                                <p>Country</p>
                                <input type="text" placeholder='United States' className={`w-[full] h-[56px] border-2 border-[#CFCFCF] rounded-lg ${errors.country ? 'border-red-500' : 'border-[#CFCFCF]'} rounded-lg`}{...register("country", { required: "can't be empty" })} name="country" />
                                {errors.country && <p className="text-red-500">{errors.country.message as string}</p>}

                            </label>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className='text-[#D87D4A] font-bold text-[13px] leading-6'>payment details</span>
                        <div className="flex flex-col gap-6 pt-4">
                            <label className="flex border-2 border-[#CFCFCF] rounded-lg w-[full] h-[56px] items-center pl-4 gap-4">
                                <input type="checkbox" className="appearance-none h-6 w-6 border-2 border-gray-300 rounded-full checked:bg-orange-500 checked:border-transparent focus:outline-none transition duration-200" />
                                <p>e-Money</p>
                            </label>
                            <label className="flex border-2 border-[#CFCFCF] rounded-lg w-[full] h-[56px] items-center pl-4 gap-4">
                                <input type="checkbox" className="appearance-none h-6 w-6 border-2 border-gray-300 rounded-full checked:bg-orange-500 checked:border-transparent focus:outline-none transition duration-200" />

                                <p>Cash on Delivery</p>
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <label className='flex flex-col gap-[9px] '>
                            <p>e-Money Number</p>
                            <input type="number" placeholder='238521993' className={`w-[full] h-[56px] border-2 border-[#CFCFCF] rounded-lg ${errors.moneyNum ? 'border-red-500' : 'border-[#CFCFCF]'}`}{...register("moneyNum", { required: "can't be empty" })} />
                            {errors.moneyNum && <p className="text-red-500">{errors.moneyNum.message as string}</p>}

                        </label>
                        <label className='flex flex-col gap-[9px] '>
                            <p>e-Money PIN</p>
                            <input type="text" placeholder='6891' className={`w-[full] h-[56px] border-2 border-[#CFCFCF] rounded-lg ${errors.moneyPin ? 'border-red-500' : 'border-[#CFCFCF]'}`} {...register("moneyPin", { required: "can't be empty" })} />
                            {errors.moneyPin && <p className="text-red-500">{errors.moneyPin.message as string}</p>}

                        </label>
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
                        <button className="bg-[#D87D4A] w-full h-12 text-center text-white font-bold text-[13px] tracking-[1px] mt-6" type="submit">CONTINUE & PAY</button>
                    </div>

                </div>
            </form>
        </div>
    )
} 
