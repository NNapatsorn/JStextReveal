const contents = document.querySelectorAll(".content");

document.addEventListener("scroll", showText);

function showText() {
  contents.forEach((section) => {
    const imgEl = section.querySelector("img");
    const textEl = section.querySelector(".text");
    const scrollPos = window.pageYOffset;
    //img height + height are of block content / 50
    // 500 +100 /2 = 502 => show text content
    const textPos = imgEl.offsetTop + imgEl.offsetHeight / 50;
    if (scrollPos > textPos) {
      // show content
      textEl.classList.add("show-reveal");
    } else {
      textEl.classList.remove("show-reveal");
    }
  });
}
