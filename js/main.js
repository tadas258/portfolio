import { SkillBar } from "./components/SkillBar.js";
import { skillBarData } from "./data/skillBarData.js";
import { showUpWindow } from "./components/skill.js";
import { socialsData } from "./data/socialsData.js";
import { renderSocials } from "./components/renderSocials.js";

renderSocials(".socials", socialsData);
new SkillBar(".skills_box", skillBarData);
showUpWindow();
// showUpWindowRight();
