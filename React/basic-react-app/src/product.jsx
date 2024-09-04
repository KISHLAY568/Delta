import "./Product.css";
function Product({ title, price, features }) {
  const list = features.map((feature) => <li>{feature}</li>);
  return (
    <div className="Product">
      <h3>{title}</h3>
      <h5>price : {price}</h5>
      <p>{features}</p>
    </div>
  );
}
export default Product;
