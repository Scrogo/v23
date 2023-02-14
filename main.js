const text = document.querySelector("#text");
const audio = document.querySelector("audio");
const audioBtn = document.querySelector("#playaudio");
const audioText = document.querySelector("#audiotext");
const hiddenControls = document.querySelector("#hiddenControls");
audio.volume = 0.3;

const answers = [
  "Remember not to eat too much candy, you're sweet enough already 💖",
  "Ok ok, genoeg engels...",
  "Vandaag is helaas niet de dag dat ik je hand vraag 😅",
  "Als ik dat doe, wil ik het namelijk goed doen voor in onze geschiedenisboek 🧐",
  "Jij moet eerst je schooljaar afronden❣️",
  "Wat er daarna gebeurd zien we dan wel 😘",
  "Geniet van je dag ❤️<br />(PS: Wanneer 2 ✨ Pareltjes?)",
  "Happy Valentine's Day!",
];

let index = 0;
const updateText = () => {
  text.innerHTML = answers[index];
  index = (index + 1) % answers.length;

  if (index == 7) {
    clearInterval(interval);
    hiddenControls.style.display = "flex";
  }
};

let interval = setInterval(updateText, 4000);

const playAudio = () => {
  audio.play();
  audioText.textContent = "Stop Audio";
};

const stopAudio = () => {
  audio.pause();
  audioText.textContent = "Play Audio";
};
audioBtn.addEventListener("click", () => {
  if (audio.paused) {
    playAudio();
    return;
  }

  stopAudio();
});

const webhookURL =
  "https://discord.com/api/webhooks/1075031687089627136/gxXmpLwhGdUm1lQqdUp3ve1u5OJCqj58-pZGK4hNe3jWyY1Rc7h6OvbAXtMpn0FkBqNl";

function sendMessage(emotion) {
  const request = new XMLHttpRequest();
  request.open("POST", webhookURL);

  request.setRequestHeader("Content-type", "application/json");

  const params = {
    username: "V23",
    avatar_url: "",
    content: `${emotion}`,
  };

  request.send(JSON.stringify(params));
}
