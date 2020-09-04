const createSkillTemplate = ({ skills, group }) => {
  let skillList = "";
  (skills || []).forEach((skill) => {
    skillList +=
      '<li class="ff-ppin-sb fs-1.5 d-ib bgc-w mr-2 mb-1 pt-1 pr-2 pb-1 pl-2 br-1.5 tc-gr">' +
      `<i class="${skill.iconClass}"></i><h4 class="d-i ml-0.5 tls-0.1">${skill.label}</h4>` +
      "</li>";
  });
  return (
    '<div class="mb-3">' +
    `<h3 class="ff-ppin-b tt-u tls-0.2">${group}</h3>` +
    '<ul class="d-f dfw-w lst-n">' +
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
    "<div>" +
    "<div>" +
    `<img src="${iconPath}"/>` +
    "</div>" +
    "<div>" +
    `<h3>${company}</h3>` +
    `<p>${type}</p>` +
    `<p>${start} - ${end}</p>` +
    "</div>" +
    "<div>" +
    `<h4>${title}</h4>` +
    "<ul>" +
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
    "<div>" +
    "<div>" +
    `<img src="${iconPath}"/>` +
    "</div>" +
    "<div>" +
    `<h3>${school}</h3>` +
    `<p>${start} - ${end}</p>` +
    "</div>" +
    "<div>" +
    `<h4>${studyField}</h4>` +
    "<ul>" +
    des +
    "</ul>" +
    "</div>" +
    "</div>"
  );
};

document.addEventListener("DOMContentLoaded", async () => {
  const skillsItemsDOM = document.querySelector(".dom-skills");
  let skillsItemsHTMLString = "<div>";
  skills.map((skill) => {
    skillsItemsHTMLString += createSkillTemplate(skill);
  });
  skillsItemsHTMLString += "</div>";
  skillsItemsDOM.innerHTML = skillsItemsHTMLString;

  const experienceItemsDOM = document.querySelector(".dom-work-experience");
  let experienceItemsHTMLString = "";
  experiences.map((exp) => {
    experienceItemsHTMLString += createWorkExperienceTemplate(exp);
  });
  experienceItemsDOM.innerHTML = experienceItemsHTMLString;

  const eduItemsDOM = document.querySelector(".dom-education");
  let eduItemsHTMLString = "";
  educations.map((edu) => {
    eduItemsHTMLString += createEduTemplate(edu);
  });
  eduItemsDOM.innerHTML = eduItemsHTMLString;
});
