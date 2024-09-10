function printHello() {
  console.log("HELLO!");
}

export default function Button() {
  return (
    <div>
      <button onClick={printHello}>click me!</button>
    </div>
  );
}
