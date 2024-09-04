import "./Product.css";
function Product({ title, price, features }) {
  // const list = features.map((feature) => <li>{feature}</li>);
  let isDiscount = price > 3000;
  let styles = { backgroundColor: isDiscount ? "pink" : "" };
  return (
    <div className="Product" style={styles}>
      <h3>{title}</h3>
      <h5>price : {price}</h5>
      {isDiscount && <p>Discount of 5%</p>}
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
