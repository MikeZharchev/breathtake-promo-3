let draggableEl = document.querySelector(".draggable");

draggableEl.addEventListener("click", () => {
  console.log("clicked");
});

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
draggableEl.addEventListener(events[deviceType].down, (e) => {
  e.preventDefault();

  // init x/y
  //   initX = isTouchDevice() ? e.clientX : e.touches[0].clientX;
  //   initY = isTouchDevice() ? e.clientY : e.touches[0].clientY;
  initX = e.clientX;
  initY = e.clientY;

  // start movement
  moveEl = true;
});

// Move
draggableEl.addEventListener(events[deviceType].move, (e) => {
  if (moveEl) {
    e.preventDefault();
    let newX = e.clientX;
    let newY = e.clientY;
    draggableEl.style.top = draggableEl.offsetTop - (initY - newY) + "px";
    draggableEl.style.left = draggableEl.offsetLeft - (initX - newX) + "px";
    initX = newX;
    initY = newY;
  }
});

// Mouse up
let stopMovement;
draggableEl.addEventListener(events[deviceType].up, (stopMovement = e) => {
  moveEl = false;
});

draggableEl.addEventListener("mouseleave", stopMovement);

draggableEl.addEventListener(events[deviceType].up, (e) => {
  moveEl = false;
});
