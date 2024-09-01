import { Link } from "react-router-dom";
import data from "../../public/data.json";
import { useState } from "react";

interface Types {
  img: {
    mobile: string;
    desktop: string;
    tablet: string;
  };
  othersObj: Array<{
    slug: string;
    name: string;
    image: {
      mobile: string;
      desktop: string;
      tablet: string;
    };
  }>;
  price: number;
  productName: string | null;
  total: number;
}
interface otherObjTypes {
  othersObj: {
    slug: string;
    name: string;
    image: {
      mobile: string;
      desktop: string;
      tablet: string;
    };
  }[];
}
interface CartItemType {
  productName: string | null;
  total: number;
  img?: { mobile: string; desktop: string; tablet: string };
  othersObj?: otherObjTypes["othersObj"];
  price?: number;
}
export default function Product() {
  const productName = localStorage.getItem("product name");
  const filteredData = data.filter((item) => {
    return productName === item.name;
  });
  const [count, setCount] = useState(0);

  let cart: Types[] = JSON.parse(localStorage.getItem("cart") || "[]");
  console.log(cart)
  const CartFunc = () => {
    if (count > 0) {
      const productIndex = cart.findIndex(
        (item: Types) => item.productName === productName
      );

      const productImg = filteredData.find((item) => item.image)?.image;
      const othersObj = filteredData.find((item) => item.others)?.others;
      const price = filteredData.find((item) => item.price)?.price;
      if (productIndex >= 0) {
        cart[productIndex].total = count;
      } else {
        const chosenProduct: CartItemType[] | any = {
          productName: productName,
          total: count,
          img: productImg,
          othersObj: othersObj,
          price: price,
        };
        cart.push(chosenProduct);
      }

      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      const productIndex = cart.findIndex(
        (item: Types) => item.productName === productName
      );

      if (productIndex >= 0) {
        cart.splice(productIndex, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
      }
    }
  };
  const ScrollToTop = () => {
    document.documentElement.scrollTop = 0

  };
  return (
    <div className="flex flex-col pt-4 pl-6 pr-6">
      <div>
        <Link to={"/device"}>
          {" "}
          <button className="font-medium leading-[25px] text-[#B3B3B3] text-[15px]">
            Go Back
          </button>
        </Link>
      </div>
      <div className="flex flex-col">
        {filteredData.map((item) => (
          <>
            <div className="flex flex-col pt-6">
              <img src={item.image.mobile} alt="product image" className="" />
              <div className="pt-8 flex flex-col gap-6">
                {item.new === true && (
                  <>
                    <p className="text-[#D87D4A] font-normal tracking-[10px] text-[14px]">
                      NEW PRODUCT
                    </p>
                  </>
                )}
                <h1 className="font-bold text-[28px] tracking-[1px] text-black leading-[1] w-[180px] h-[60px]">
                  {item.name}
                </h1>
                <p className="text-[#979797]">{item.description}</p>
                <span className="font-bold text-[18px] tracking-[1.3px]">{`$ ${item.price}`}</span>
                <div className="flex gap-4">
                  <div className="w-[120px] h-[48px] bg-[#F1F1F1] pt-[15px] pb-[15px] pr-[15px] pl-[15px] justify-between flex">
                    <button
                      onClick={() => setCount(count > 0 ? count - 1 : 0)}
                      className="text-[#979797]"
                    >
                      -
                    </button>
                    <span className="font-bold">{count}</span>
                    <button
                      onClick={() => setCount(count + 1)}
                      className="text-[#979797]"
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="bg-[#D87D4A] w-[160px] h-[48px] text-center text-white font-bold"
                    onClick={CartFunc}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
              <div className="flex flex-col pt-[88px] gap-[113px]">
                <div className="flex flex-col gap-6">
                  <h1 className="font-bold text-6 leading-[36px]">FEATURES</h1>{" "}
                  <p className=" text-[#979797] font-medium text-[15px] leading-6">
                    {item.features}
                  </p>
                </div>
                <div className="flex flex-col gap-6">
                  <h1 className="font-bold text-6 leading-[36px]">
                    IN THE BOX
                  </h1>
                  <ul className="flex flex-col gap-2">
                    {item.includes.map((item) => (
                      <li className="flex gap-6">
                        <span className="text-[#D87D4A] font-bold text-[15px] leading-6">{`${item.quantity}X`}</span>
                        <span className="text-[#979797]  font-medium text-[15px] leading-6">
                          {item.item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-5">
                  <img src={item.gallery.first.mobile} />{" "}
                  <img src={item.gallery.second.mobile} />{" "}
                  <img src={item.gallery.third.mobile} />
                </div>
              </div>
              <div className="pt-[120px] flex flex-col gap-[40px]">
                <h1 className="font-bold text-6 leading-[36px] text-center">
                  you may also like
                </h1>{" "}
                <div className="flex flex-col gap-[56px]">
                  {item.others.map((e: any) => (
                    <div className="flex flex-col gap-8 items-center">
                      <img src={e.image.mobile} />
                      <h1 className="font-bold text-6 tracking-[1.71]">{e.name}</h1>
                      <button onClick={() => {
                        localStorage.setItem("product name", `${e.ProductName}`)
                        location.reload()
                        ScrollToTop()
                      }} className="bg-[#D87D4A] w-[160px] h-[48px] text-center text-white font-bold">
                        SEE PRODUCT
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
