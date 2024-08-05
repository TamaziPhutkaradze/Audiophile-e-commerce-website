import data from "../../public/data.json";
export default function Product() {
  console.log(data);
  const productName = localStorage.getItem("product name");
  console.log(productName);
  const filteredData = data.filter((item) => {
    return item.name === productName;
  });
  console.log(filteredData);
  return <div>Product</div>;
}
