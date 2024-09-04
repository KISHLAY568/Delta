import "./Product.css";
function Product({ title, price, features }) {
  // const list = features.map((feature) => <li>{feature}</li>);
  return (
    <div className="Product">
      <h3>{title}</h3>
      <h5>price : {price}</h5>
      {price > 30000 && <p>Discount of 5%</p>}
      {/* <p>
        {features.map((feature) => (
          <li>{feature}</li>
        ))}
      </p> */}
      {/* <p>{list}</p> */}
    </div>
  );
}
export default Product;
