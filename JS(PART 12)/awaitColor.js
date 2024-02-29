let h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve();
    }, delay);
  });
}

async function demo() {
  await changeColor("Turquoise", 1000);
  await changeColor("Magenta", 1000);
  await changeColor("Teal", 1000);
  await changeColor("Coral", 1000);
  await changeColor("Chartreuse", 1000);
}

demo();