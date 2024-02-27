let h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("color changed!");
    }, delay);
  });
}

changeColor("red", 1000)
  .then(() => {
    console.log("red color was completed");
    return changeColor("green", 1000);
  })
  .then(() => {
    console.log("green color was completed");
    return changeColor("pink", 1000);
  })
  .then(() => {
    console.log("pink color was completed");
    return changeColor("coral", 1000);
  })
  .then(() => {
    console.log("coral color was completed");
  });



  
// changeColor("red", 1000, () => {
//   changeColor("green", 1000, () => {
//     changeColor("pink", 1000, () => {
//       changeColor("purple", 1000, () => {
//         changeColor("lightgreen", 1000);
//       });
//     });
//   });
// });
