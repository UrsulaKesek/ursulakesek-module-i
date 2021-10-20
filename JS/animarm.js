window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
});

let arm = null; //the opening image//
let animate;

function init() {
  arm = document.getElementById("armpic");
  arm.style.visibility = "visible";
  arm.style.position = "relative";
  arm.style.zIndex = "1";
  arm.style.left = "0px";
  arm.style.top = "0px";
  arm.style.width = "250px";
  arm.style.height = "376px";

  arm1a = document.getElementById("arm1a");
  arm1a.style.visibility = "hidden";
  arm1a.style.position = "absolute";
  arm.style.zIndex = "2";
  arm1a.style.left = "118px";
  arm1a.style.top = "0px";
  arm1a.style.width = "250px";
  arm1a.style.height = "376px";

  arm1b = document.getElementById("arm1b");
  arm1b.style.visibility = "hidden";
  arm1b.style.position = "absolute";
  arm.style.zIndex = "3";
  arm1b.style.left = "118px";
  arm1b.style.top = "0px";
  arm1b.style.width = "250px";
  arm1b.style.height = "376px";

  arm1c = document.getElementById("arm1c");
  arm1c.style.visibility = "hidden";
  arm1c.style.position = "absolute";
  arm.style.zIndex = "4";
  arm1c.style.left = "118px";
  arm1c.style.top = "0px";
  arm1c.style.width = "250px";
  arm1c.style.height = "376px";

  arm1d = document.getElementById("arm1d");
  arm1d.style.visibility = "hidden";
  arm1d.style.position = "absolute";
  arm.style.zIndex = "5";
  arm1d.style.left = "118px";
  arm1d.style.top = "0px";
  arm1d.style.width = "250px";
  arm1d.style.height = "376px";

  arm1e = document.getElementById("arm1e");
  arm1e.style.visibility = "hidden";
  arm1e.style.position = "absolute";
  arm.style.zIndex = "6";
  arm1e.style.left = "118px";
  arm1e.style.top = "0px";
  arm1e.style.width = "250px";
  arm1e.style.height = "376px";

  armpic3 = document.getElementById("armpic3");
  armpic3.style.visibility = "hidden";
  armpic3.style.position = "absolute";
  arm.style.zIndex = "7";
  armpic3.style.left = "118px";
  armpic3.style.top = "0px";
  armpic3.style.width = "250px";
  armpic3.style.height = "376px";
}

function animateImage() {
  /*arm.style.left = parseInt(arm.style.left) + 10 + "px";*/
  /*arm.style.top = parseInt(arm.style.top) - 30 + "px";*/
  /*arm1c.style.visibility = "visible";*/
  arm1a.style.visibility = "visible";
  arm.style.visibility = "visible";
  arm.style.left = `${parseInt(arm.style.left) + 100}px`;
  /*arm.style.left = parseInt(arm.style.left) + 25 + "px";*/
  /*arm.style.height = parseInt(arm.style.height) - 25 + "px";*/

  animate = setTimeout(animateImage, 100);
}

function replaceImagea() {
  arm1b.style.visibility = "visible";
  arm1a.style.visibility = "visible";
  arm1a.style.left = `${parseInt(arm1a.style.left) + 100}px`;
  arm1a.style.top = `${parseInt(arm1a.style.top) - 20}px`;

  animate = setTimeout(replaceImagea, 200);
}

function replaceImageb() {
  arm1c.style.visibility = "visible";
  arm1b.style.visibility = "visible";
  arm1b.style.left = `${parseInt(arm1b.style.left) + 100}px`;
  arm1b.style.top = `${parseInt(arm1b.style.top) + 20}px`;

  animate = setTimeout(replaceImageb, 200);
}
function replaceImagec() {
  arm1d.style.visibility = "visible";
  arm1c.style.visibility = "visible";
  arm1c.style.left = `${parseInt(arm1c.style.left) + 100}px`;
  arm1c.style.top = `${parseInt(arm1c.style.top) - 40}px`;

  animate = setTimeout(replaceImagec, 200);
}
function replaceImaged() {
  arm1e.style.visibility = "visible";
  arm1d.style.visibility = "visible";
  arm1d.style.left = `${parseInt(arm1d.style.left) + 100}px`;
  arm1d.style.top = `${parseInt(arm1d.style.top) + 40}px`;

  animate = setTimeout(replaceImaged, 200);
}
function replaceImagee() {
  armpic3.style.visibility = "visible";
  arm1e.style.visibility = "visible";
  arm1e.style.left = `${parseInt(arm1e.style.left) + 100}px`;
  arm1e.style.top = `${parseInt(arm1e.style.top) - 60}px`;
  animate = setTimeout(replaceImagee, 200);
}

function stopAnimation() {
  clearTimeout(animate, 1000);
  const newLocalLeft = (arm.style.left = "1000px");
  const newLocalTop = (arm.style.top = "- 120px");
}

window.onload = init;
