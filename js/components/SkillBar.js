class SkillBar {
  constructor(selector, data) {
    this.selector = selector;
    this.data = data;

    this.DOM = document.querySelector(this.selector);

    this.render();
  }
  generateProgressBar(progressBar) {
  //   return `<div class="skills">
  //           <div class="texts">
  //            <div class="label">${progressBar.label}</div>
  //            </div>
  //            <div class="bar">
  //           <div class="progress" style="width: ${progressBar.value}%;">
  //           <div class="loading"></div>
  //          </div>
  //       </div>
  //  </div>`;
  return;
  }

  formatNumber(number) {
    return Math.round(number);
  }

  render() {
    let HTML = "";
    for (const progress of this.data) {
      HTML += this.generateProgressBar(progress);
    }

    if (HTML === "") {
      console.warn("WARNING: this.data neturi nei vieno validaus objekto");
      return false;
    }

    this.DOM.innerHTML += HTML;
  }
}

export { SkillBar };
