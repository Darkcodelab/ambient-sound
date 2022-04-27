(function () {
  let boxes = document.getElementsByClassName("box");
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("mouseover", () => {
      boxes[i].children[0].classList.add("bg-zoom");
    });
    boxes[i].addEventListener("mouseout", () =>
      boxes[i].children[0].classList.remove("bg-zoom")
    );
  }
})();

let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let soundElem = document.getElementById(button.value);
    if (button.innerText == "play") {
      button.innerText = "stop";
      playMusic(soundElem);
    } else {
      button.innerText = "play";
      stopMusic(soundElem);
    }
  });
});

function playMusic(name) {
  name.play();
  name.volume = 0.5;
}

function stopMusic(name) {
  name.pause();
  name.currentTime = 0;
}
let slider = document.getElementsByClassName("slider");
for (let i = 0; i < slider.length; i++) {
  slider[i].addEventListener("input", function () {
    let vol = slider[i].value / 100;
    let audio = slider[i].previousElementSibling;
    audio.volume = vol;
  });
}
