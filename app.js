document.getElementById("generate-song").addEventListener("click", function() {
    const title = document.getElementById("song-title").value;
    const lyrics = document.getElementById("lyrics").value;
    const styles = document.getElementById("styles").value;
    const stylesAvoid = document.getElementById("styles-avoid").value;

    if (lyrics.trim() === "") {
        alert("Please enter some lyrics.");
        return;
    }

    // Show loading state
    document.getElementById("loading").style.display = "block";
    document.getElementById("audio-player").style.display = "none";

    // Simulate song generation delay (e.g., calling an API)
    setTimeout(function() {
        // Hide loading state
        document.getElementById("loading").style.display = "none";
        
        // Display the song title in the console (just for demonstration)
        console.log(`Song Title: ${title}`);
        console.log(`Styles: ${styles}`);
        console.log(`Styles to Avoid: ${stylesAvoid}`);

        // Simulate generated song URL (you can replace this with your actual song URL)
        const songUrl = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
        
        // Show the audio player and set the song
        const audioPlayer = document.getElementById("audio-player");
        audioPlayer.src = songUrl;
        audioPlayer.style.display = "block";
    }, 2000); // Simulate a 2-second delay
});
