const $ = (x) => document.querySelectorAll(x);
const $$ = (x) => document.querySelectorAll(x);

$.add = (el) => {
  document.body.appendChild(el);
};
$.remove = (el) => {
  el.remove();
};

HTMLElement.prototype.hide = function () {
  this.style.visibility = "hidden";
};
HTMLElement.prototype.show = function () {
  this.style.display = "";
  this.style.visibility = "visible";
};
HTMLElement.prototype.none = function () {
  this.style.display = "none";
};
HTMLElement.prototype.in = function () {
  this.style.display = "unset";
};

$.Width = window.innerHeight;
HTMLElement.prototype.fadeIn = function (node) {
  this.style.animation = "opr 1s";
};
HTMLElement.prototype.fadeOut = function (node) {
  this.style.animation = "op 1s";
};

HTMLElement.prototype.clone = function () {
  return this.cloneNode(true);
};

HTMLElement.prototype.on = function (x, y) {
  this.addEventListener(x, y, false);
};

const Copy = (x) => {
  var a = document.createElement("textarea");
  a.value = x;
  a.style.border = "none";
  a.style.opacity = "0.0";
  a.style.position = "absolute";
  a.style.width = "0.1px";
  a.style.height = "0.1px";
  a.style.fontSize = "0.1px";
  a.id = "textarea";
  $.add(a);
  a.select();
  a.setSelectionRange(0, 99999);
  document.execCommand("copy");
  a.blur();
  a.remove();
};
function deepClone(obj) {
  let clone = {};
  for (let i in obj) {
    if (obj[i] != null && typeof obj[i] == "object") clone[i] = clone(obj[i]);
    else clone[i] = obj[i];
  }
  return clone;
}
function isLight(color) {
  const hex = color.replace("#", "");
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 155;
}
function className(def = "", ...args) {
  return def + " " + args.join(" ");
}
function hexLighter(color, amount) {
  amount = isLight(color) ? -amount : amount + 5;
  return (
    "#" +
    color
      .replace(/^#/, "")
      .replace(/../g, (color) =>
        (
          "0" +
          Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)
        ).substr(-2)
      )
  );
}
function removeCookie(...args) {
  args.forEach((r) => {
    document.cookie = r + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  });
}
function moveToVideo(text) {
  let timestamp = text.split(":");
  let seconds = 0;
  if (timestamp.length == 3) {
    seconds =
      Number(timestamp[0]) * 3600 +
      Number(timestamp[1]) * 60 +
      Number(timestamp[2]);
  } else {
    seconds = Number(timestamp[0]) * 60 + Number(timestamp[1]);
  }
  player.seekTo(seconds, true);
}
