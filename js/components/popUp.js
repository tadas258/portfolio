function popUp() {
  const hov1 = document.querySelector(".hover1");
  const pop1 = document.querySelector(".pop-up1");
  const hov2 = document.querySelector(".hover2");
  const pop2 = document.querySelector(".pop-up2");

  hov1.addEventListener("mouseover", function () {
    pop1.style.display = "block";
  });
  hov1.addEventListener("mouseout", function () {
    pop1.style.display = "none";
  });
  hov2.addEventListener("mouseover", function () {
    pop2.style.display = "block";
  });
  hov2.addEventListener("mouseout", function () {
    pop2.style.display = "none";
  });
}

export { popUp };
