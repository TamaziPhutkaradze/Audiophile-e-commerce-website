import { Link } from "react-router-dom";
import data from "../../public/data.json";
interface DevicesProps {
  value: string;
}
export default function Devices(props: DevicesProps) {
  console.log(props.value, "from device");
  const name = localStorage.getItem("device name");
  console.log(name, "local");
  const filteredData = data.filter((item) => {
    return item.category === name;
  });
  console.log(filteredData, "filtered data");
  return (
    <>
      <div className="bg-[#000000] pt-8 pb-8 flex justify-center">
        <h1 className="text-white">
          {name === "headphones"
            ? "HEADPHONES"
            : name === "earphones"
            ? "EARPHONES"
            : name === "speakers"
            ? "SPEAKERS"
            : ""}
        </h1>
      </div>
      <div className="pb-[120px] pt-[64px] pl-6 pr-6 flex flex-col justify-center items-center gap-[120px]">
        {filteredData.map((item) => (
          <div key={item.id} className="">
            <img src={item.categoryImage.mobile} alt="" />
            <div className="flex justify-center pt-8 flex-col items-center gap-6">
              {item.new == true && (
                <p className="text-[#D87D4A] text-[14px] tracking-[10px]">
                  {" "}
                  {item.new == true ? "NEW PRODUCT" : ""}
                </p>
              )}
              <h1 className="text-[#000000] text-[28px] font-bold text-center">
                {item.name}
              </h1>
              <p className="font-medium text-[15px] leading-[25px] text-center text-[#B3B3B3]">
                {item.description}
              </p>
              <Link to={'/product'}>
                <button
                  className="mt-[8px] bg-[#D87D4A] w-[168px] h-[48px] m-auto text-center text-[13px] text-white font-bold"
                  onClick={() =>
                    localStorage.setItem("product name", `${item.name}`)
                  }
                >
                  SEE PRODUCT
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
