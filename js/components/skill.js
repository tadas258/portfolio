function showUpWindow() {
  const clc = document.querySelector(".leftCancel");
  const left_container = document.querySelector(".left_container");
  const clcr = document.querySelector(".rightCancel");
  const right_container = document.querySelector(".right_container");

  clc.addEventListener("click", () => {
    if (left_container.classList.contains("leftOff")) {
      left_container.classList.remove("leftOff");
      left_container.classList.add("leftActive");
      document.querySelector(".rightCancel").style.zIndex = "-1";
    } else {
      left_container.classList.add("leftOff");
      left_container.classList.remove("leftActive");
      document.querySelector(".rightCancel").style.zIndex = "1";
    }
  });

  clcr.addEventListener("click", () => {
    if (right_container.classList.contains("rightOff")) {
      right_container.classList.remove("rightOff");
      right_container.classList.add("rightActive");
      document.querySelector(".leftCancel").style.zIndex = "-1";
    } else {
      right_container.classList.add("rightOff");
      right_container.classList.remove("rightActive");
      document.querySelector(".leftCancel").style.zIndex = "1";
    }
  });
}

export { showUpWindow };
