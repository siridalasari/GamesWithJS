function textAnimation(text) {
  for (let index = 1; index <= text.length; index++) {
    console.log(styles("emptyLine", 10  ));
    console.log(styles("space", 26) + styles("dashLine", 50));
    console.log(styles("space", 25) + styles("straightLine", 1) + (text.slice(0, index).padStart(30)).padEnd(50) + styles("straightLine", 1));
    console.log(styles("space", 26) + styles("dashLine", 50));
    console.log(styles("emptyLine", 18));
    delayTime();
  }
}