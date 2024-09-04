import Product from "./product";
function ProductTab() {
  let options = ["hi-tech", "durable", "fast"];
  return (
    <>
      <Product title="phone" price={30000} features={options} />
      {/* <Product title="laptop" price={50000} />
      <Product title="pen" price={1} /> */}
    </>
  );
}

export default ProductTab;
