export default function Cart() {
  const cartObj = JSON.parse(localStorage.getItem("cart"));
  console.log(cartObj);
  const objLength = cartObj.length;
  console.log(objLength);
  return (
    <>
      <div className="h-[488px] w-[327px] absolute right-[25px] m-auto bg-[#FFFFFF] rounded-lg">
        <div className="pt-8 pl-[28px] pr-[29px]">
          <div className="flex justify-between">
            <p className="text-black font-bold text-[18px] tracking-[1.29]">
              Cart (<span>{objLength}</span>)
            </p>
            <button>Remove all</button>
          </div>
          <div>
            {cartObj.map((item: any) => (
              <></>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
