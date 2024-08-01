import FooterImg from "../assets/shared/mobile/image-best-gear.jpg";
import facebook from "../assets/socialSites/facebook.svg";
import twitter from "../assets/socialSites/twitter.svg";
import instagram from "../assets/socialSites/instagram.svg";
import HeadPhonesImg from "../assets/menu/headphones.svg";
import speakersImg from "../assets/menu/speakers.svg";
import earphonesImg from "../assets/menu/earphones.svg";
export default function Footer(props: { locationPath: string }) {
  return (
    <>
      {" "}
      {props.locationPath !== "/" && (
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
      )}
      <div className="pr-6 pl-6 flex flex-col gap-[40px]">
        <img src={FooterImg} className="rounded-md" />
        <div className="flex flex-col gap-8 text-center">
          {" "}
          <h1 className="font-bold text-[28px] tracking-[1px]">
            BRINGING YOU THE <span className=" text-orange-600">BEST</span>{" "}
            AUDIO GEAR
          </h1>
          <p className="font-medium text-[15px] leading-6 text-[#B3B3B3]">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
      <div className="bg-[#101010] mt-[120px] pb-[38px]">
        <div className="flex flex-col gap-[48px] items-center pt-[48px]">
          <h1 className="text-white font-extrabold text-[28px]">audiophile</h1>
          <div className="flex flex-col gap-4 items-center">
            <p className="font-bold text-[13px] tracking-[2px] leading-[25px] text-white">
              HOME
            </p>
            <p className="font-bold text-[13px] tracking-[2px] leading-[25px] text-white">
              HEADPHONES
            </p>
            <p className="font-bold text-[13px] tracking-[2px] leading-[25px] text-white">
              SPEAKERS
            </p>
            <p className="font-bold text-[13px] tracking-[2px] leading-[25px] text-white">
              EARPHONES
            </p>
          </div>
          <div className="pl-6 pr-6 text-center">
            <span className="font-medium text-[15px] leading-6 text-[#979797]">
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-[48px] mt-12 items-center">
          <p className="font-bold text-[15px] leading-6 text-[#979797]">
            Copyright 2021. All Rights Reserved
          </p>
          <div className="flex gap-4">
            <img src={facebook} />
            <img src={twitter} />
            <img src={instagram} />
          </div>
        </div>
      </div>
    </>
  );
}
