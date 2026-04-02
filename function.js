particlesJS("particles-js", {
  "particles": {
    "number": { "value": 80 },
    "size": { "value": 3 },
    "move": { "speed": 2 },
    "line_linked": { "enable": true },
    "color": { "value": "#00ffcc" }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const projectCards = document.querySelectorAll("#projects .project-card");
  const toggleProjectsLink = document.getElementById("toggleProjects");
  const defaultVisibleProjects = 6;
  let isExpanded = false;

  if (!toggleProjectsLink) {
    return;
  }

  if (projectCards.length <= defaultVisibleProjects) {
    toggleProjectsLink.style.display = "none";
    return;
  }

  projectCards.forEach(function (card, index) {
    if (index >= defaultVisibleProjects) {
      card.classList.add("hidden-project");
    }
  });

  toggleProjectsLink.style.display = "inline-block";
  toggleProjectsLink.textContent = "View More";

  toggleProjectsLink.addEventListener("click", function (event) {
    event.preventDefault();

    if (!isExpanded) {
      projectCards.forEach(function (card) {
        card.classList.remove("hidden-project");
      });
      toggleProjectsLink.textContent = "View Less";
      isExpanded = true;
      return;
    }

    projectCards.forEach(function (card, index) {
      if (index >= defaultVisibleProjects) {
        card.classList.add("hidden-project");
      }
    });
    toggleProjectsLink.textContent = "View More";
    isExpanded = false;
  });
});
