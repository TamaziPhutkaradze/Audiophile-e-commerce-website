import HeadPhonesImg from "../assets/menu/headphones.svg";
import speakersImg from "../assets/menu/speakers.svg";
import earphonesImg from "../assets/menu/earphones.svg";
import bigSpeakersImg from "../assets/home/mobile/image-speaker-zx9.png";
import secondSpeaker from "../assets/home/mobile/image-speaker-zx7.jpg";
import earphones from "../assets/home/mobile/image-earphones-yx1.jpg";

export default function Home() {
  return (
    <>
      <main className="relative z-[-1]">
        <div className="bg-[url(./assets/home/mobile/image-header.jpg)] bg-cover bg-center  h-[600px]"></div>

        <div className="absolute inset-0 flex top-[168px] justify-center">
          <div className="pl-6 pr-6 z-10 flex flex-col gap-4 text-center w-[328px] h-[300px]">
            <p className="text-[14px] tracking-[8px] text-[#6F6F6F]">
              NEW PRODUCT
            </p>
            <p className="text-white leading-[40px] tracking-[1.5px] whitespace-pre-wrap text-fontSizeClamp	">
              XX99 Mark II HeadphoneS
            </p>
            <p className="text-[15px] font-thin  text-[#6F6F6F]">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <button className="mt-[8px] bg-[#D87D4A] w-[168px] h-[48px] m-auto text-center text-white font-bold">
              SEE PRODUCT{" "}
            </button>
          </div>
        </div>
        <div className="pt-[80px] pl-[24px] pr-[24px]  pb-[35px] flex flex-col gap-[68px] overflow-y-auto z-20 ">
          <div className="bg-[#F1F1F1] rounded-lg w-full flex flex-col items-center justify-center">
            <img
              src={HeadPhonesImg}
              alt=""
              className="relative bottom-[52px]"
            />
            <div className="flex flex-col gap-[17px] pb-3 text-center">
              <p>HEADPHONES</p>
              <p>
                Shop <span className="text-red-500">&#62;</span>
              </p>
            </div>
          </div>
          <div className="bg-[#F1F1F1] rounded-lg w-full flex-col   flex items-center justify-center ">
            <img src={speakersImg} alt="" className="relative bottom-[52px]" />
            <div className="flex flex-col gap-[17px] pb-3 text-center">
              <p>SPEAKERS</p>
              <p>
                Shop <span className="text-red-500">&#62;</span>
              </p>
            </div>
          </div>{" "}
          <div className="bg-[#F1F1F1] rounded-lg  flex-col   w-full  flex items-center justify-center ">
            <img src={earphonesImg} alt="" className="relative bottom-[52px]" />
            <div className="flex flex-col gap-[17px] pb-3 text-center">
              <p>EARPHONES</p>
              <p>
                Shop <span className="text-red-500">&#62;</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 pl-6 pr-6">
          <div className=" bg-[#D87D4A] rounded-md relative text-center flex flex-col items-center pb-[55px]">
            <div className="w-[320px] h-[320px] border-2 border-[#D8D8D8] rounded-full bg-transparent opacity-[0.3]">
              <div className="w-[279px] h-[279px] border-2 border-[#D8D8D8] rounded-full bg-transparent"></div>{" "}
            </div>
            <img
              src={bigSpeakersImg}
              className="absolute w-[172px] h-[207px] top-[45px]"
              alt=""
            />
            <div className="flex flex-col pt-[32px] gap-6 pl-6  pr-6">
              <h1 className="text-white font-bold text-[36px] leading-[1.2]">
                ZX9 <br /> SPEAKER
              </h1>
              <p className="text-[15px] leading-[25px] text-white font-light">
                {" "}
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <button className="bg-black w-[160px] h-[48px] text-center text-white m-auto">
                SEE PRODUCT
              </button>
            </div>
          </div>
          <div className="relative w-full pb-8 ">
            <div className=" justify-between flex">
              <div className="absolute top-[101px] left-6 flex flex-col gap-8">
                <h1 className="font-bold text-[28px] tracking-[2px] ">
                  ZX7 SPEAKER
                </h1>
                <button className="w-[160px] h-[48px] border-2 border-[#000000] text-[13px] font-bold">
                  SEE PRODUCT
                </button>
              </div>
              <img
                src={secondSpeaker}
                className="min-h-[320px] w-full max-h-[400px] rounded-md "
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col gap-6 rounded-md pb-[120px]">
            <img src={earphones} className="rounded-md" alt="" />
            <div className="bg-[#F1F1F1] rounded-lg w-full flex-col flex  gap-8 pt-[41px] pb-[41px] pl-6">
              <h1 className="text-[28px] font-bold">YX1 EARPHONES</h1>
              <button className="w-[160px] h-[48px] border-2 border-[#000000] font-bold text-[13px] tracking-[1px]">
                SEE PRODUCT
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
