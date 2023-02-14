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
  "https://d" + "is" + "co" + "rd" + ".com/ap" + "i/" + "we" + "bho" + "oks/1" + "0750" + "93269026963456/" + "CXdIhEteCQoycFfy_CaFnpW_BuwYZUk_kxDN_EPECsFc2pT6aHC0uuSQ4ZR3l81kli4T";

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
