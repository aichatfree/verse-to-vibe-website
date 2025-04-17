import React from "react";
import LyricsForm from "./components/LyricsForm";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-800 to-indigo-900 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-6">VerseToVibe</h1>
      <p className="mb-8 text-lg text-center max-w-xl">
        Paste your lyrics below and turn them into a song with one click.
      </p>
      <LyricsForm />
    </div>
  );
}
