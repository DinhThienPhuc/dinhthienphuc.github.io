const createSkillTemplate = ({ skills, group }) => {
  let skillList = "";
  (skills || []).forEach((skill) => {
    skillList +=
      "<li>" +
      `<i class="${skill.iconClass}"></i><h4>${skill.label}</h4>` +
      "</li>";
  });
  return (
    '<div class="skill-part">' +
    `<h3>${group}</h3>` +
    '<ul class="skill-bars">' +
    skillList +
    "</ul>" +
    "</div>"
  );
};

const createWorkExperienceTemplate = ({
  description,
  iconPath,
  company,
  type,
  start,
  end,
  title,
}) => {
  let des = "";
  description.map((chunk) => {
    des += `<li>${chunk}</li>`;
  });
  return (
    '<div class="timeline-block">' +
    '<div class="timeline-ico">' +
    `<img src="${iconPath}"/>` +
    "</div>" +
    '<div class="timeline-header">' +
    `<h3>${company}</h3>` +
    `<p>${type}</p>` +
    `<p>${start} - ${end}</p>` +
    "</div>" +
    '<div class="timeline-content">' +
    `<h4>${title}</h4>` +
    '<ul class="des">' +
    des +
    "</ul>" +
    "</div>" +
    "</div>"
  );
};

const createEduTemplate = ({
  school,
  start,
  end,
  studyField,
  extraInfo,
  iconPath,
}) => {
  let des = "";
  extraInfo.map((info) => {
    des += `<li>${info}</li>`;
  });
  return (
    '<div class="timeline-block">' +
    '<div class="timeline-ico">' +
    `<img src="${iconPath}"/>` +
    "</div>" +
    '<div class="timeline-header">' +
    `<h3>${school}</h3>` +
    `<p>${start} - ${end}</p>` +
    "</div>" +
    '<div class="timeline-content">' +
    `<h4>${studyField}</h4>` +
    '<ul class="des">' +
    des +
    "</ul>" +
    "</div>" +
    "</div>"
  );
};

document.addEventListener("DOMContentLoaded", async () => {
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

  const experienceItemsDOM = document.querySelector("#work-experience-dom");
  let experienceItemsHTMLString = "";
  experiences.map((exp) => {
    experienceItemsHTMLString += createWorkExperienceTemplate(exp);
  });
  experienceItemsDOM.innerHTML = experienceItemsHTMLString;

  const eduItemsDOM = document.querySelector("#education-dom");
  let eduItemsHTMLString = "";
  educations.map((edu) => {
    eduItemsHTMLString += createEduTemplate(edu);
  });
  eduItemsDOM.innerHTML = eduItemsHTMLString;
});
