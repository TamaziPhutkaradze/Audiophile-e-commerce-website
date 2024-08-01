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
      <div className="pb-[120px] pt-[64px] pl-6 pr-6">
        {filteredData.map((e) => (
          <div key={e.id} className="">
            <img src={e.categoryImage.mobile} alt="" />
          </div>
        ))}
      </div>
    </>
  );
}
