const createSkillTemplate = (skillData) => {
  let skillList = "";
  (skillData.skills || []).forEach((skill) => {
    skillList +=
      "<li>" +
      `<i class="${skill.iconClass}"></i><h4>${skill.label}</h4>` +
      "</li>";
  });
  return (
    '<div class="skill-part">' +
    `<h3>${skillData.group}</h3>` +
    '<ul class="skill-bars">' +
    skillList +
    "</ul>" +
    "</div>"
  );
};

const createWorkExperienceTemplate = (workExp) => {
  let description = "";
  workExp.description.map((des) => {
    description += `<li>${des}</li>`;
  });
  return (
    '<div class="timeline-block">' +
    '<div class="timeline-ico">' +
    `<img src="${workExp.iconPath}"/>` +
    "</div>" +
    '<div class="timeline-header">' +
    `<h3>${workExp.company}</h3>` +
    `<p>${workExp.type}</p>` +
    `<p>${workExp.start} - ${workExp.end}</p>` +
    "</div>" +
    '<div class="timeline-content">' +
    `<h4>${workExp.title}</h4>` +
    '<ul class="des">' +
    description +
    "</ul>" +
    "</div>" +
    "</div>"
  );
};

document.addEventListener("DOMContentLoaded", async () => {
  // Add Skill
  const skillsItemsDOM = document.querySelector("#skills-dom");
  let skillsItemsHTMLString = '<div class="col-six tab-full">';
  skills[0].map((skill) => {
    skillsItemsHTMLString += createSkillTemplate(skill);
  });
  skillsItemsHTMLString += '</div><div class="col-six tab-full">';
  skills[1].map((skill) => {
    skillsItemsHTMLString += createSkillTemplate(skill);
  });
  skillsItemsHTMLString += "</div>";
  skillsItemsDOM.innerHTML = skillsItemsHTMLString;

  // Add Work Experience
  const experienceItemsDOM = document.querySelector("#work-experience-dom");
  let experienceItemsHTMLString = "";
  experiences.map((exp) => {
    experienceItemsHTMLString += createWorkExperienceTemplate(exp);
  });
  experienceItemsDOM.innerHTML = experienceItemsHTMLString;

  // const tempBlogDOM = document.querySelector(".temp-blogs");
  // tempBlogDOM.innerHTML = blogs[0].content;
});
