document.getElementById('generate-song').addEventListener('click', function () {
    const lyrics = document.getElementById('lyrics').value;
    const vocalStyle = document.getElementById('vocal-style').value;

    if (!lyrics) {
        alert("Please enter lyrics to generate the song.");
        return;
    }

    // Loading feedback
    document.getElementById('loading').style.display = "block";

    // Simulating audio generation
    generateAudio(lyrics, vocalStyle);
});

function generateAudio(lyrics, vocalStyle) {
    // Configure the voice for singing or rapping
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(lyrics);

    // Select voice based on vocal style
    if (vocalStyle === "singing") {
        // Here you can set the pitch and rate for a singing-like effect
        utterance.pitch = 1.5;  // High pitch for singing effect
        utterance.rate = 0.9;   // Slow rate for singing effect
    } else if (vocalStyle === "rapping") {
        // Rapping can be faster, more staccato-like
        utterance.pitch = 1.0;
        utterance.rate = 1.5;   // Faster rate for rapping
    }

    // Play the audio
    utterance.onend = function () {
        document.getElementById('loading').style.display = "none";
        // Audio is ready to play
        document.getElementById('audio-player').src = URL.createObjectURL(new Blob([utterance], { type: 'audio/wav' }));
        document.getElementById('audio-player').style.display = "block";
        document.getElementById('audio-player').play();
    }

    // Speak the generated text (simulating the vocal generation)
    synth.speak(utterance);
}
