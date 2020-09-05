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
    '<div class="d-f">' +
    '<div class="df-1 d-m-n d-t-b d-d-b pt-2">' +
    '<div class="pt-1">' +
    `<h3 class="mt-0 mb-0 ff-ppin-b tt-u tls-0.2">${company}</h3>` +
    `<p class="tc-gr fs-2 tls-0.05">${type}</p>` +
    `<p class="tc-gr fs-2 tls-0.05">${start} - ${end}</p>` +
    "</div>" +
    "</div>" +
    '<div class="df-2 ps-r ml-2 pt-2 pb-7 bc-dw blw-1 bls-s">' +
    '<div class="ps-a ps-ln2 ta-c tlh-4 br-c bgc-b w-4 h-4 tc-w">' +
    `<i class="fas fa-briefcase"></i>` +
    "</div>" +
    '<div class="ml-4 pt-1">' +
    '<div class="d-m-b d-t-n d-d-n pb-2">' +
    `<h3 class="d-ib mt-0 w-100p ff-ppin-b tt-u tls-0.2">${company}</h3>` +
    `<p class="d-ib tc-gr mt-0 mb-0 fs-2 tls-0.05">${start} - ${end}, ${type}</p>` +
    "</div>" +
    '<div class="d-m-b d-t-n d-d-n h-0.3 bgc-dw w-15p mb-2"></div>' +
    "<div>" +
    `<h4 class="mt-0 fs-2 mb-1.5 tls-0.05">${title}</h4>` +
    '<div class="d-m-n d-t-b d-d-b h-0.3 bgc-dw w-15p"></div>' +
    '<ul class="tc-gr lst-n fs-2 tlh-1.8 tls-0.05 mt-1">' +
    des +
    "</ul>" +
    "</div>" +
    "</div>" +
    "</div>" +
    "</div>"
  );
};

const createEduTemplate = ({ school, start, end, studyField, extraInfo }) => {
  let des = "";
  extraInfo.map((info) => {
    des += `<li>${info}</li>`;
  });
  return (
    '<div class="d-f">' +
    '<div class="df-1 d-m-n d-t-b d-d-b pt-2">' +
    '<div class="pt-1">' +
    `<h3 class="mt-0 mb-0 ff-ppin-b tt-u tls-0.2">${school}</h3>` +
    `<p class="tc-gr fs-2 tls-0.05">${start} - ${end}</p>` +
    "</div>" +
    "</div>" +
    '<div class="df-2 ps-r ml-2 pt-2 pb-7 bc-dw blw-1 bls-s">' +
    '<div class="ps-a ps-ln2 ta-c tlh-4 br-c bgc-b w-4 h-4 tc-w">' +
    `<i class="fas fa-graduation-cap"></i>` +
    "</div>" +
    '<div class="ml-4 pt-1">' +
    '<div class="d-m-b d-t-n d-d-n pb-2">' +
    `<h3 class="d-ib mt-0 w-100p ff-ppin-b tt-u tls-0.2">${school}</h3>` +
    `<p class="d-ib tc-gr mt-0 mb-0 fs-2 tls-0.05">${start} - ${end}</p>` +
    "</div>" +
    '<div class="d-m-b d-t-n d-d-n h-0.3 bgc-dw w-15p mb-2"></div>' +
    "<div>" +
    `<h4 class="mt-0 fs-2 mb-1.5 tls-0.05">${studyField}</h4>` +
    '<div class="d-m-n d-t-b d-d-b h-0.3 bgc-dw w-15p"></div>' +
    '<ul class="tc-gr lst-n fs-2 tlh-1.8 tls-0.05 mt-1">' +
    des +
    "</ul>" +
    "</div>" +
    "</div>" +
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
