// let draggableEl = document.querySelector(".draggable");
let draggableEls = document.querySelectorAll(".draggable");

let initX,
  initY = 0;
let moveEl = false;

let events = {
  mouse: {
    down: "mousedown",
    move: "mousemove",
    up: "mouseup",
  },
  touch: {
    down: "touchstart",
    move: "touchmove",
    up: "touchend",
  },
};

let deviceType = "";

// Detect device
const isTouchDevice = () => {
  try {
    // Try to create touch event
    document.createEvent("TouchEvent");
    deviceType = "touch";
    return true;
  } catch (e) {
    deviceType = "mouse";
    return false;
  }
};

isTouchDevice();

// Start mouse down / touch start

draggableEls.forEach((el) => {
  el.addEventListener(events[deviceType].down, (e) => {
    initX = e.clientX;
    initY = e.clientY;
    moveEl = true;
  });
});

// draggableEl.addEventListener(events[deviceType].down, (e) => {
//   e.preventDefault();
//   initX = e.clientX;
//   initY = e.clientY;
//   moveEl = true;
// });

// Move

draggableEls.forEach((el) => {
  el.addEventListener(events[deviceType].move, (e) => {
    if (moveEl) {
      e.preventDefault();
      let newX = e.clientX;
      let newY = e.clientY;
      el.style.top = el.offsetTop - (initY - newY) + "px";
      el.style.left = el.offsetLeft - (initX - newX) + "px";
      initX = newX;
      initY = newY;
    }
  });
});

// draggableEl.addEventListener(events[deviceType].move, (e) => {
//   if (moveEl) {
//     e.preventDefault();
//     let newX = e.clientX;
//     let newY = e.clientY;
//     draggableEl.style.top = draggableEl.offsetTop - (initY - newY) + "px";
//     draggableEl.style.left = draggableEl.offsetLeft - (initX - newX) + "px";
//     initX = newX;
//     initY = newY;
//   }
// });

// Mouse up
let stopMovement;

draggableEls.forEach((el) => {
  el.addEventListener(events[deviceType].up, (stopMovement = e) => {
    moveEl = false;
  });
});

// draggableEl.addEventListener(events[deviceType].up, (stopMovement = e) => {
//   moveEl = false;
// });

draggableEls.forEach((el) => {
  el.addEventListener("mouseleave", stopMovement);
});

// draggableEl.addEventListener("mouseleave", stopMovement);

draggableEls.forEach((el) => {
  el.addEventListener(events[deviceType].up, (e) => {
    moveEl = false;
  });
});

// draggableEl.addEventListener(events[deviceType].up, (e) => {
//   moveEl = false;
// });

// Slider magic
const container = document.querySelector(".container-theming");
const blackZone = document.querySelector(".black-zone");

document.querySelector(".slider").addEventListener("input", (e) => {
  container.style.setProperty("--position", `${e.target.value}% `);
});
