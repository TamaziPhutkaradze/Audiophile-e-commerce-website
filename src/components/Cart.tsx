export default function Cart() {
  const cartObj = JSON.parse(localStorage.getItem("cart"));
  const objLength = cartObj && cartObj.length;
  console.log(objLength, "length");
  return (
    <>
      <div className="h-[488px] w-[327px] absolute right-[25px] m-auto bg-[#FFFFFF] rounded-lg">
        <div className="pt-8 pl-[28px] pr-[29px]">
          <div className="flex justify-between">
            <p className="text-black font-bold text-[18px] tracking-[1.29]">
              Cart (<span>{objLength}</span>)
            </p>
            <button className="text-[#979797]">Remove all</button>
          </div>
          <div className="flex flex-col gap-6 pt-[31px]">
            {objLength > 0
              ? cartObj.map((item: any, index: number) => (
                  <div key={index} className="flex gap-4 items-center">
                    <img
                      className="w-[64px] h-[64px] rounded-md"
                      src={item.img.mobile}
                    />
                    <div className="justify-between flex w-full">
                    <div className="flex flex-col">
                      <h1 className="whitespace-nowrap font-bold leading-[25px] text-[15px]">{item.othersObj[0].name}</h1>
                      <p className="font-bold leading-[25px] text-[14px] text-[#979797]">{`${item.price}$`}</p>
                    </div>
                    <div className="w-[96px] h-[32px] bg-[#F1F1F1] pt-[15px] pb-[15px] pr-[15px] pl-[15px] justify-between items-center flex ">
                      <button className="text-[#979797]">-</button>
                      <span className="font-bold">{item.total}</span>
                      <button
                        className="text-[#979797]"
                        onClick={() => item.total + 1}
                      >
                        +
                      </button>
                    </div>
                    </div>
                  </div>
                ))
              : ""}
          </div>
        </div>
      </div>
    </>
  );
}
