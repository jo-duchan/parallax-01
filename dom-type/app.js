let imageArr;
let scrollTop;
let totalNum;
let percent;
let totalH;
let screenH;

function init() {
  imageArr = document.querySelectorAll(".layout");
  // console.log(imageArr);
  totalNum = imageArr.length;

  onResize();

  window.addEventListener("scroll", onScroll);
  window.addEventListener("resize", onResize);
}

function onScroll() {
  scrollTop = this.scrollY;
  percent = Math.min(Math.max((scrollTop / (totalH - screenH)) * 100, 0), 100);
  console.log(totalH, screenH, percent);
  for (let i = 0; i < totalNum; i++) {
    imageArr[i].style.transform = `perspective(400px) translate3d(0, 0, ${
      scrollTop / (5 * (totalNum - i))
    }px)`;
  }
}

function onResize() {
  totalH = document.body.offsetHeight;
  screenH = window.outerHeight;
  // console.log(totalH, screenH, percent);
}

window.onload = () => {
  init();
};
