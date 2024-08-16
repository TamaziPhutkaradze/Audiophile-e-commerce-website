import { motion, useCycle } from "framer-motion";
import HeadPhonesImg from "../assets/menu/headphones.svg";
import speakersImg from "../assets/menu/speakers.svg";
import earphonesImg from "../assets/menu/earphones.svg";
import CartImg from "../assets/cart/CartIcon.svg";
import Cart from "./Cart";
import { useState } from "react";
export default function Header() {
  const [mobileNav, toggleMobileNav] = useCycle(false, true);
  const [cartIsOpen, setCartIsOpen] = useState(false);
  console.log(cartIsOpen);
  return (
    <>
      <div className="bg-black h-[90px] w-full flex items-center justify-between pr-6 border-b border-[#979797] border-opacity-[0.2]">
        <nav className=" sticky top-0 inset-x-0">
          <div className="container mx-auto  flex items-center">
            <div>
              <motion.button
                onClick={() => toggleMobileNav()}
                animate={mobileNav ? "open" : "closed"}
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
          {mobileNav && (
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
                    <p>HEADPHONES</p>
                    <p>
                      Shop <span className="text-red-500">&#62;</span>
                    </p>
                  </div>
                </div>
                <div className="bg-[#F1F1F1] rounded-lg w-full flex-col   flex items-center justify-center ">
                  <img
                    src={speakersImg}
                    alt=""
                    className="relative bottom-[52px]"
                  />
                  <div className="flex flex-col gap-[17px] pb-3 text-center">
                    <p>SPEAKERS</p>
                    <p>
                      Shop <span className="text-red-500">&#62;</span>
                    </p>
                  </div>
                </div>{" "}
                <div className="bg-[#F1F1F1] rounded-lg  flex-col   w-full  flex items-center justify-center ">
                  <img
                    src={earphonesImg}
                    alt=""
                    className="relative bottom-[52px]"
                  />
                  <div className="flex flex-col gap-[17px] pb-3 text-center">
                    <p>EARPHONES</p>
                    <p>
                      Shop <span className="text-red-500">&#62;</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </nav>
        <h1 className="text-[25px] font-extrabold text-white">audiophile</h1>
        <img src={CartImg} onClick={() => setCartIsOpen(!cartIsOpen)} />
      </div>
      <div className="m-auto flex  justify-center">
        {cartIsOpen === true ? <Cart /> : ""}
      </div>
    </>
  );
}
