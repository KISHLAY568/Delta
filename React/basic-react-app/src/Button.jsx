function printHello() {
  console.log("HELLO!");
}

function handleMouseOver() {
  console.log("Bye!");
}
function handleDblClick() {
  console.log("Dbl click");
}

export default function Button() {
  return (
    <div>
      <button onClick={printHello}>click me!</button>
      <p onMouseOver={handleMouseOver}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ullam sed
        distinctio maiores, nulla, rem deleniti doloribus porro nostrum tenetur
        ducimus dolores rerum quidem architecto, harum quo sit autem blanditiis.
      </p>
      <button onDoubleClick={handleDblClick}>Double click Me</button>
    </div>
  );
}
