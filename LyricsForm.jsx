import React, { useState } from "react";

export default function LyricsForm() {
  const [lyrics, setLyrics] = useState("");
  const [genre, setGenre] = useState("pop");  // Default genre
  const [loading, setLoading] = useState(false);
  const [audioUrl, setAudioUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call for song generation with genre and lyrics
    setTimeout(() => {
      // Placeholder audio URL logic, based on genre/mood selection
      setAudioUrl(`/songs/${genre}-song.mp3`);
      setLoading(false);
    }, 3000);
  };

  return (
    <div className="w-full max-w-xl">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <textarea
          rows="6"
          placeholder="Type or paste your lyrics here..."
          className="p-4 rounded-lg text-black"
          value={lyrics}
          onChange={(e) => setLyrics(e.target.value)}
          required
        />

        <select
          className="p-3 rounded-lg bg-gray-200"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value="pop">Pop</option>
          <option value="rock">Rock</option>
          <option value="hiphop">Hip-Hop</option>
          <option value="electronic">Electronic</option>
          <option value="country">Country</option>
          <option value="jazz">Jazz</option>
        </select>

        <button
          type="submit"
          className="bg-pink-600 hover:bg-pink-500 rounded-xl py-3 font-semibold transition"
        >
          {loading ? "Creating your vibe..." : "Make My Song"}
        </button>
      </form>

      {loading && (
        <p className="mt-4 text-pink-300 animate-pulse">Generating music...</p>
      )}

      {audioUrl && !loading && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Your Song:</h2>
          <audio controls className="w-full">
            <source src={audioUrl} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <a
            href={audioUrl}
            download
            className="mt-2 inline-block bg-blue-500 text-white py-2 px-4 rounded-md"
          >
            Download Song
          </a>
        </div>
      )}
    </div>
  );
}
