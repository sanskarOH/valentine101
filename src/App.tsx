import Hero from "./section/Hero";
import ValentineCard from "./components/mine/ValentineCard";
import Her from "./pages/Her";
import { Routes, Route } from "react-router-dom";
import { useRef } from "react";

function Home() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playMusic = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch(() => {});
    }
  };
  return (
    <>
      <audio ref={audioRef} src="/music/music.mp3" preload="auto" loop />
      <div className="bg-[#F8A4A3] min-h-screen flex flex-col items-center p-6">
        <Hero />
        <ValentineCard playMusic={playMusic} />
      </div>
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/her" element={<Her />} />
    </Routes>
  );
}
