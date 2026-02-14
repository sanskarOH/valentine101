import { Routes, Route } from "react-router-dom";
import { useRef } from "react";
import Home from "./Home";
import Her from "./pages/Her";

export default function App() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playMusic = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch(() => {});
    }
  };

  return (
    <>
      {/* 🔥 Audio is global now */}
      <audio ref={audioRef} src="/music/music.mp3" preload="auto" loop />

      <Routes>
        <Route path="/" element={<Home playMusic={playMusic} />} />
        <Route path="/her" element={<Her />} />
      </Routes>
    </>
  );
}
