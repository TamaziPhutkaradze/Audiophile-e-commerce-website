import { motion } from "framer-motion";
import HeadPhonesImg from "../assets/menu/headphones.svg";
import speakersImg from "../assets/menu/speakers.svg";
import earphonesImg from "../assets/menu/earphones.svg";
import CartImg from "../assets/cart/CartIcon.svg";
import Cart from "./Cart";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header(props: {
  mobileNav: boolean
  toggleMobileNav: any
  cartIsOpen: boolean
  setCartIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}) {
  useEffect(() => {
    if (props.mobileNav || props.cartIsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [props.mobileNav, props.cartIsOpen]);


  return (
    <>
      <div className="bg-black h-[90px] w-full flex items-center justify-between pr-6 border-b border-[#979797] border-opacity-[0.2]">
        <nav className=" sticky top-0 inset-x-0">
          <div className="container mx-auto  flex items-center">
            <div>
              <motion.button
                onClick={() => props.toggleMobileNav()}
                animate={props.mobileNav ? "open" : "closed"}
                className="flex flex-col space-y-1 pl-6 "
              >
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 5 },
                  }}
                  className="w-5 h-px bg-white block"
                ></motion.span>
                <motion.span
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                  }}
                  className="w-5 h-px bg-white block"
                ></motion.span>
                <motion.span
                  variants={{
                    closed: { rotate: 0 },
                    open: { rotate: -45, y: -5 },
                  }}
                  className="w-5 h-px bg-white block"
                ></motion.span>
              </motion.button>
            </div>
          </div>
          {props.mobileNav && (
            <motion.div
              variants={{
                open: {
                  x: "0%",
                },
                closed: {
                  x: "-100%",
                },
              }}
              initial="closed"
              animate="open"
              className="fixed bg-[#FFFFFF] top-[90px] w-full"
            >
              <div className="pt-[80px] pl-[24px] pr-[24px] h-[500px] pb-[35px] flex flex-col gap-[68px] overflow-y-auto z-20 ">
                <div className="bg-[#F1F1F1] rounded-lg w-full flex flex-col items-center justify-center">
                  <img
                    src={HeadPhonesImg}
                    alt=""
                    className="relative bottom-[52px]"
                  />
                  <div className="flex flex-col gap-[17px] pb-3 text-center">
                    <p className="text-[15px] font-bold">HEADPHONES</p>
                    <Link to="/Device"><p className="text-[13px] font-bold text-[#979797]" onClick={() =>
                      localStorage.setItem("device name", "headphones")
                    }>
                      SHOP <span className="text-red-500">&#62;</span>
                    </p> </Link>
                  </div>
                </div>
                <div className="bg-[#F1F1F1] rounded-lg w-full flex-col   flex items-center justify-center ">
                  <img
                    src={speakersImg}
                    alt=""
                    className="relative bottom-[52px]"
                  />
                  <div className="flex flex-col gap-[17px] pb-3 text-center">
                    <p className="text-[15px] font-bold">SPEAKERS</p>
                    <Link to="/Device"><p className="text-[13px] font-bold text-[#979797]" onClick={() =>
                      localStorage.setItem("device name", "speakers")
                    }>
                      SHOP <span className="text-red-500">&#62;</span>
                    </p> </Link>
                  </div>
                </div>{" "}
                <div className="bg-[#F1F1F1] rounded-lg  flex-col   w-full  flex items-center justify-center ">
                  <img
                    src={earphonesImg}
                    alt=""
                    className="relative bottom-[52px]"
                  />
                  <div className="flex flex-col gap-[17px] pb-3 text-center">
                    <p className="text-[15px] font-bold">EARPHONES</p>
                    <Link to="/Device"><p className="text-[13px] font-bold text-[#979797] " onClick={() =>
                      localStorage.setItem("device name", "earphones")
                    }>
                      SHOP <span className="text-red-500">&#62;</span>
                    </p> </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </nav>
        <h1 className="text-[25px] font-extrabold text-white">audiophile</h1>
        <img src={CartImg} onClick={() => props.setCartIsOpen(!props.cartIsOpen)} />
      </div>
      <div className="m-auto flex  justify-center">
        {props.cartIsOpen === true && props.mobileNav === false ? <Cart /> : ""}
      </div>
    </>
  );
}
