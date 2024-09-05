import Product2 from "./Product2";
function ProductTab() {
  let styles = {
    display: "flex",
    flextWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={styles}>
      <Product2 title="Logitech MX Master" idx={0} />
      <Product2 title="Apple Pencil (2nd Gen)" idx={1} />
      <Product2 title="Zebronics Zeb-transformer" idx={2} />
      <Product2 title="Petronics Toad 23" idx={3} />
    </div>
  );
}

export default ProductTab;
