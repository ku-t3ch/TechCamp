import captureWebsite from "capture-website";

async function capture() {
  const nonGroup = [2, 3, 7, 9, 12, 13, 19, 20, 25, 26, 29, 39, 40];

  new Array(41).fill(0).forEach(async (_, i) => {
    if (nonGroup.includes(i + 1)) return;
    try {
      await captureWebsite.file(
        `http://localhost:3000/projects/h${i + 1}`,
        `./public/assets/screenshots/h${i + 1}.png`
      );
    } catch (err) {
      console.error(err);
    }
  });

  console.log("Website screen captured!");
}

capture();
