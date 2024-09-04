import "./App.css";
import Title from "./Title";
import ProductTab from "./ProductTab";
import MsgBox from "./MsgBox";
function App() {
  return (
    <>
      <MsgBox username="Kishlay" textcolor="yellow" />
      <MsgBox username="Kishan" textcolor="lime" />
      <ProductTab />
    </>
  );
}

export default App;
