let techStacks = [django, rubyOnRails, javascript];
let projectCards = document.querySelector("#project-cards");

let template = document.querySelector("#card-template");

techStacks.forEach(insertProjects);

$(".tech-stack").click(function() {
  if (!this.classList.contains("active")) {
    $(".tech-stack.active").addClass("border-black text-gray-800 hover:bg-gray-400 hover:text-gray-800");
    $(".tech-stack.active").removeClass("active bg-gray-800 text-white");
    $(this).removeClass("border-black hover:border-gray-200 text-gray-800 hover:bg-gray-200");
    $(this).addClass("active bg-gray-800 text-white");

    let stack = getStack(this)
    changeStack(stack);
  }
});

function getStack(button) {
  if (button.classList.contains("ror")) {
    index = 0;
  } 
  else if (button.classList.contains("django")) {
    index = 1;
  } 
  else {
    index = 2;
  }
  return index;
}

function changeStack(stack) {
  let stackProjects = techStacks[stack];
  let oldCards = $(projectCards).children();

  // projectCards.querySelectorAll('*').forEach(n => n.remove());
  $(oldCards).fadeOut(600, function() {
    $(this).remove();
    insertProjects(stackProjects);
  });
  return false;
};

function insertProjects(stackProjects) {
  let div = document.createElement("div");
  // $(div).addClass("container mx-auto md:flex md:justify-center")
  // $(div).hide()

  stackProjects.forEach(function(projectContent) {
    let card = template.content.cloneNode(true);
    let cardMain = card.querySelector(".card-main");
  
    // let img = card.querySelector("img");
    // img.setAttribute("src", projectContent[0]);
    // img.setAttribute("alt", projectContent[1]);

    cardMain.style.backgroundImage = "url(/resources/videos/screenshot/" + projectContent[0] + ".png)"

    let videoSrc = card.querySelector("video source");
    let videoPath = "/resources/videos/" + projectContent[0] + ".mp4"
    videoSrc.setAttribute("src", videoPath);
    
    let cardTitle = card.querySelector(".card-title");
    cardTitle.textContent = projectContent[2];
    
    let cardContent = card.querySelector(".card-content");
    cardContent.textContent = projectContent[3];

    let cardStack = card.querySelector(".card-stack");
    cardStack.textContent = "Stack: " + projectContent[4]
    
    let liveLink = card.querySelector(".live-link");
    liveLink.setAttribute("href", projectContent[5])

    let cardText = card.querySelector(".card-text");
    let overlay = card.querySelector(".overlay");
    let video = card.querySelector("video");

    cardMain.addEventListener("mouseover", function(){
      cardText.style.transform = "scale(1.3)";
      overlay.classList.remove("opacity-60");
      overlay.classList.add("opacity-40");
      video.play();
    });
    cardMain.addEventListener("mouseout", function(){
      cardText.style.transform = "scale(1.0)";
      overlay.classList.remove("opacity-40");
      overlay.classList.add("opacity-60");
      video.pause();
    });

    let loadMessage = card.querySelector(".load-message");

    cardMain.addEventListener("click", function(){
      loadMessage.textContent = projectContent[6];
    });

    $(div).append(card);
  });
  $(projectCards).append(div);
  $(div).fadeIn(600);
}
