
export default function Checkout() {
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
                            <input type="text" placeholder='Alexei Ward' className='w-[280px] h-[56px] border-2 border-[#CFCFCF] rounded-lg' />

                        </form>
                        <form action="" className='flex flex-col gap-[9px] '>
                            <p>Email Address</p>
                            <input type="text" placeholder='alexei@mail.com' className='w-[280px] h-[56px] border-2 border-[#CFCFCF] rounded-lg' />

                        </form>
                        <form action="" className='flex flex-col gap-[9px] '>
                            <p>Phone Number</p>
                            <input type="text" placeholder='+1 202-555-0136' className='w-[280px] h-[56px] border-2 border-[#CFCFCF] rounded-lg' />

                        </form>
                    </div>
                </div>
                <div>
                    <span className='text-[#D87D4A] font-bold text-[13px] leading-6'>shipping info</span>
                    <div className='flex flex-col gap-6 pt-4'>
                        <form action="" className='flex flex-col gap-[9px] '>
                            <p>Your Address</p>
                            <input type="text" placeholder='1137 Williams Avenue' className='w-[280px] h-[56px] border-2 border-[#CFCFCF] rounded-lg' />

                        </form>
                        <form action="" className='flex flex-col gap-[9px] '>
                            <p>ZIP Code</p>
                            <input type="text" placeholder='10001' className='w-[280px] h-[56px] border-2 border-[#CFCFCF] rounded-lg' />

                        </form>
                        <form action="" className='flex flex-col gap-[9px] '>
                            <p>City</p>
                            <input type="text" placeholder='New York' className='w-[280px] h-[56px] border-2 border-[#CFCFCF] rounded-lg' />

                        </form>
                        <form action="" className='flex flex-col gap-[9px] '>
                            <p>Country</p>
                            <input type="text" placeholder='United States' className='w-[280px] h-[56px] border-2 border-[#CFCFCF] rounded-lg' />

                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
} 
