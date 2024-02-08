
function createLogo(imageSrc, altText, link) {
    var logo = document.createElement("img");
    logo.src = imageSrc;
    logo.alt = altText;

    var logoLink = document.createElement("a");
    logoLink.href = link || "#";
    logoLink.appendChild(logo);

    return logoLink;
}


function addLogosToWorkSection() {
    document.addEventListener("DOMContentLoaded", addLogosToWorkSection);
    var workSection = document.getElementById("projects");

  
  

    var githubLogo = createLogo("GitHub-logo.png", "GitHub", "https://github.com");
    workSection.appendChild(githubLogo);

    var jsLogo = createLogo("javascript.png", "JavaScript", "https://developer.mozilla.org/en-US/docs/Web/JavaScript");
    workSection.appendChild(jsLogo);

    var cssLogo = createLogo("css.png", "CSS", "#"); 
    workSection.appendChild(cssLogo);
}
