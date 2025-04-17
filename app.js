document.getElementById('generate-song').addEventListener('click', function () {
    const lyrics = document.getElementById('lyrics').value;
    const vocalStyle = document.getElementById('vocal-style').value;

    if (!lyrics) {
        alert("Please enter lyrics to generate the song.");
        return;
    }

    // Show loading feedback
    document.getElementById('loading').style.display = "block";

    // Start the background music
    const backgroundMusic = document.getElementById('background-music');
    backgroundMusic.play();

    // Generate vocals based on lyrics and vocal style (singing/rap)
    generateLyricsOverMusic(lyrics, vocalStyle);
});

function generateLyricsOverMusic(lyrics, vocalStyle) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(lyrics);

    // Set the voice characteristics based on the vocal style
    if (vocalStyle === "singing") {
        utterance.pitch = 1.5;  // Higher pitch for singing
        utterance.rate = 0.9;   // Slower rate for singing
    } else if (vocalStyle === "rapping") {
        utterance.pitch = 1.0;  // Normal pitch for rapping
        utterance.rate = 1.5;   // Faster rate for rapping
    }

    // When speech is finished, stop the background music
    utterance.onend = function () {
        backgroundMusic.pause();
        backgroundMusic.currentTime = 0;  // Reset the music to the start
        document.getElementById('loading').style.display = "none";
    }

    // Speak the lyrics over the background music
    synth.speak(utterance);
}
