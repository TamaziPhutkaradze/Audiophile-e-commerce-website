import { Link } from "react-router-dom";
import data from "../../public/data.json";
import { useState } from "react";
export default function Product() {
  const productName = localStorage.getItem("product name");
  const filteredData = data.filter((item) => {
    return item.name === productName;
  });
  const [count, setCount] = useState(0);

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const CartFunc = () => {
    if (count > 0) {
      const productIndex = cart.findIndex(
        (item) => item.productName === productName
      );

      const productImg = filteredData.find((item) => item.image)?.image;

      if (productIndex >= 0) {
        cart[productIndex].total = count;
      } else {
        const chosenProduct = {
          productName: productName,
          total: count,
          img: productImg,
        };
        cart.push(chosenProduct);
      }

      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      const productIndex = cart.findIndex(
        (item) => item.productName === productName
      );

      if (productIndex >= 0) {
        cart.splice(productIndex, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
      }
    }
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
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
