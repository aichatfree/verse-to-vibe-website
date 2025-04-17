document.getElementById('generate-song').addEventListener('click', function () {
    const lyrics = document.getElementById('lyrics').value;
    const vocalStyle = document.getElementById('vocal-style').value;

    if (!lyrics) {
        alert("Please enter lyrics to generate the song.");
        return;
    }

    // Start the background music
    const backgroundMusic = document.getElementById('background-music');
    backgroundMusic.play();

    // Use TTS to sing or rap the lyrics
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(lyrics);

    if (vocalStyle === "singing") {
        utterance.pitch = 1.5;
        utterance.rate = 0.9;
    } else if (vocalStyle === "rapping") {
        utterance.pitch = 1.0;
        utterance.rate = 1.5;
    }

    utterance.onend = function () {
        backgroundMusic.pause(); // Stop background music after singing/rap
    }

    synth.speak(utterance);
});
