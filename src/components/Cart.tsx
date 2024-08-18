export default function Cart() {
  const cartObj = JSON.parse(localStorage.getItem("cart"));
  const productIcon = cartObj[0].othersObj.find((item) => item.image)
  console.log(productIcon, 'iamge ')
  const objLength = cartObj.length;
  console.log(objLength );
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
          <div className="flex flex-col gap-6">
            {cartObj.map((item:any, index: number ) => (
              <div key={index} className="flex gap-4">
              <img src={item.othersObj[0].image}/>
              <h1>{item.othersObj[0].name}</h1> 

              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
