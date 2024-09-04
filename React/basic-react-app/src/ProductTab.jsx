import Product from "./product";
function ProductTab() {
  return (
    <>
      <Product title="phone" price={(30000)} />
      <Product title="laptop" price={(50000)} />
      <Product title="pen" />
    </>
  );
}

export default ProductTab;
