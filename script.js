const messages = { 
sad: {
    text: "I'm sorry to hear that you're feeling this way. It's okay to feel sad sometimes. If you want to talk about it, I'm here for you.",
    audio: "aud/Sad.mp3.mp3",
},
tired: {
    text: "It sounds like you're feeling tired. It's important to take care of yourself and get some rest. If you need to talk or vent, I'm here.",
    audio: "aud/Tired.mp3.mp3",
},
miss: {
    text: "Awnnnnnnnn she misses meeee, i miss you too snuggle wuggles *virtual hugs*",
    audio: "aud/Miss.mp3.mp3",
},
secret: {
    text: "Seems like my shayla really needs me huh? i'm here for you twin, I love you. STAY SAFE TWIN ",
    audio: "aud/Need.mp3.mp3"
}
};

function openLetter(type) {
    const popup = document.getElementById("popup")
    const message = document.getElementById("message")
    const voice = document.getElementById("voice")

    message.textContent = messages[type].text;
    voice.src = messages[type].audio;
    voice.style.display = "block";
    voice.play();
    popup.style.display = "flex";
}

function closePopup() {
    const popup = document.getElementById("popup");
    const voice = document.getElementById("voice");
    voice.pause();
    voice.currentTime = 0;
    popup.style.display = "none";
}

function askPassword() {
    const password = prompt("Entter the secret password");
    if (password === "bignuts") {
        openLetter("secret");
    } else {
        alert("Wrong password, try again.")
    }
}