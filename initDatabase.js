const createExperienceTemplate = (expData) => {
  return (
    '<div class="experience-item" data-scroll-reveal="enter from the bottom over .5s">' +
    '<div class="name-designation" data-scroll-reveal="enter from the left after .5s">' +
    `<h3 class="designation">${expData.title}</h3>` +
    `<p class="name-of-org">${expData.company}</p>` +
    "</div>" +
    `<div class="stay-time ${expData.bgColor}">` +
    "<p>" +
    expData.start +
    "<br /> -" +
    `<br /> ${expData.end ? expData.end : "Now"}` +
    "</p>" +
    "</div>" +
    '<div class="comments" data-scroll-reveal="enter from the right after .5s">' +
    "<ul>" +
    "<li>" +
    '<span class="bold">Project</span>:' +
    '<a href="https://dinhthienphuc.github.io/StaticWeb.Back_packing/" target="_blank">Static Web - Back Packing</a>' +
    "</li>" +
    "<li>" +
    '<span class="bold">Project Description</span>: A website allows users buy backs, knifes, glasses,... anythings they need for a trip, a climbing mountain,...' +
    "</li>" +
    "<li>" +
    '<span class="bold">Team Size</span>: 1' +
    "</li>" +
    "<li>" +
    '<span class="bold">Responsiblities</span>: Design mock-ups. Study about UX/UI. Build interface.' +
    "</li>" +
    "<li>" +
    '<span class="bold">Accomplishments</span>: Archive 1st position in competition.' +
    "</li>" +
    "<li>" +
    '<span class="bold">Technologies</span>: HTML, JavaScript, CSS' +
    "</li>" +
    "</ul>" +
    "</div>" +
    "</div>"
  );
};

document.addEventListener("DOMContentLoaded", async () => {
  // console.log(experiences);
  const experienceItemsDOM = document.querySelector(".experience-items");
  let experienceItemsHTMLString = "";
  experiences.map((exp) => {
    experienceItemsHTMLString += createExperienceTemplate(exp);
  });
  experienceItemsDOM.innerHTML = experienceItemsHTMLString;

  const tempBlogDOM = document.querySelector(".temp-blogs");
  tempBlogDOM.innerHTML = blogs[0].content;
});
