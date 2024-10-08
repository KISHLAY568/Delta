import "./Product.css";
import Price from "./Price";
function Product2({ title, idx }) {
  let oldPrices = ["12,495", "11,900", "1,599", "1,999"];
  let newPrices = ["9,999", "9,999", "1,299", "1,499"];
  let desccription = [
    ["8,000 DPI", "5 Programmable buttons"],
    ["intiutive surface", "designed for ipad pro"],
    ["designed for ipad pro", "intiutive surface"],
    ["wireless", "optical orientation"],
  ];
  return (
    <div className="Product">
      <h1>{title}</h1>
      <p>{desccription[idx][0]}</p>
      <p>{desccription[idx][1]}</p>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
    </div>
  );
}
export default Product2;
