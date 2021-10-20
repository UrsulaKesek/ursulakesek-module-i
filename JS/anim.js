window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
});

let sil = null;
let animate;

function init() {
  sil = document.getElementById("silpic");
  sil.style.visibility = "visible";
  sil.style.position = "relative";
  sil.style.left = "0px";
  sil.style.top = "0px";
  sil.style.width = "250px";
  sil.style.height = "376px";

  sil1a = document.getElementById("sil1a");
  sil1a.style.visibility = "hidden";
  sil1a.style.position = "absolute";
  sil1a.style.left = "114px";
  sil1a.style.top = "0px";
  sil1a.style.width = "250px";
  sil1a.style.height = "376px";

  sil1b = document.getElementById("sil1b");
  sil1b.style.visibility = "hidden";
  sil1b.style.position = "absolute";
  sil1b.style.left = "114px";
  sil1b.style.top = "0px";
  sil1b.style.width = "250px";
  sil1b.style.height = "376px";

  sil1c = document.getElementById("sil1c");
  sil1c.style.visibility = "hidden";
  sil1c.style.position = "absolute";
  sil1c.style.left = "114px";
  sil1c.style.top = "0px";
  sil1c.style.width = "250px";
  sil1c.style.height = "376px";

  sil1d = document.getElementById("sil1d");
  sil1d.style.visibility = "hidden";
  sil1d.style.position = "absolute";
  sil1d.style.left = "114px";
  sil1d.style.top = "0px";
  sil1d.style.width = "250px";
  sil1d.style.height = "376px";

  sil1e = document.getElementById("sil1e");
  sil1e.style.visibility = "hidden";
  sil1e.style.position = "absolute";
  sil1e.style.left = "114px";
  sil1e.style.top = "0px";
  sil1e.style.width = "250px";
  sil1e.style.height = "376px";

  silor = document.getElementById("silor");
  silor.style.visibility = "hidden";
  silor.style.position = "absolute";
  silor.style.left = "114px";
  silor.style.top = "0px";
  silor.style.width = "250px";
  silor.style.height = "376px";
}
function animateImage() {
  /*sil.style.left = parseInt(sil.style.left) + 10 + "px";*/
  /*sil.style.top = parseInt(sil.style.top) - 30 + "px";*/
  /*sil1c.style.visibility = "visible";*/
  sil1a.style.visibility = "visible";
  sil.style.visibility = "visible";
  sil.style.left = `${parseInt(sil.style.left) + 800}px`;
  sil.style.top = `${parseInt(sil.style.top) - 120}px`;

  /*sil.style.width = parseInt(sil.style.width) + 25 + "px";*/
  /*sil.style.height = parseInt(sil.style.height) - 25 + "px";*/
  animate = setTimeout(() => {
    animateImage;
  }, 1500);
  if ((sil.style.left = `${parseInt(sil.style.left) + 600}px`));
  {
    setTimeout(() => {
      stopAnimation;
    }, 1500);
  }
}

function replaceImage() {
  sil1b.style.visibility = "visible";
  sil1a.style.visibility = "visible";
  sil1a.style.left = `${parseInt(sil1a.style.left) + 420}px`;
  sil1a.style.top = `${parseInt(sil1a.style.top) - 120}px`;
  /*animate = setTimeout([replaceImage , stopAnimation], 500);*/
  animate = setTimeout(() => {
    replaceImage;
  }, 1500);
  if ((sil1a.style.left = `${parseInt(sil1a.style.left) + 0}px`));
  {
    setTimeout(() => {
      stopAnimation;
    }, 1500);
  }
}

function replaceImageb() {
  sil1c.style.visibility = "visible";
  sil1b.style.visibility = "visible";
  sil1b.style.left = `${parseInt(sil1b.style.left) + 750}px`;
  sil1b.style.top = `${parseInt(sil1b.style.top) - 120}px`;

  animate = setTimeout(() => {
    replaceImage;
  }, 1500);
  if ((sil1b.style.left = `${parseInt(sil1b.style.left) + 0}px`));
  {
    setTimeout(() => {
      stopAnimation;
    }, 1500);
  }
}
function replaceImagec() {
  sil1d.style.visibility = "visible";
  sil1c.style.visibility = "visible";
  sil1c.style.left = `${parseInt(sil1c.style.left) + 300}px`;
  sil1c.style.top = `${parseInt(sil1c.style.top) + 270}px`;

  animate = setTimeout(() => {
    replaceImage;
  }, 1500);
  if ((sil1c.style.left = `${parseInt(sil1c.style.left) + 0}px`));
  {
    setTimeout(() => {
      stopAnimation;
    }, 1500);
  }
}
function replaceImaged() {
  sil1e.style.visibility = "visible";
  sil1d.style.visibility = "visible";
  sil1d.style.left = `${parseInt(sil1d.style.left) + 630}px`;
  sil1d.style.top = `${parseInt(sil1d.style.top) + 270}px`;

  animate = setTimeout(() => {
    replaceImage;
  }, 1500);
  if ((sil1d.style.left = `${parseInt(sil1d.style.left) + 0}px`));
  {
    setTimeout(() => {
      stopAnimation;
    }, 1500);
  }
}
function replaceImagee() {
  silor.style.visibility = "visible";
  sil1e.style.visibility = "visible";
  sil1e.style.left = `${parseInt(sil1e.style.left) + 960}px`;
  sil1e.style.top = `${parseInt(sil1e.style.top) + 270}px`;

  animate = setTimeout(() => {
    replaceImage;
  }, 1500);
  if ((sil1e.style.left = `${parseInt(sil1e.style.left) + 0}px`));
  {
    setTimeout(() => {
      stopAnimation;
    }, 1500);
  }
}

function stopAnimation() {
  clearTimeout(animate, 1000);
  const newLocalLeft = (sil.style.left = "1400px");
  const newLocalTop = (sil.style.top = "-120px");
}

window.onload = init;
