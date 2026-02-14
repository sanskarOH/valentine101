import Hero from "./section/Hero";
import ValentineCard from "./components/ValentineCard";
import Her from "./pages/Her";
import { Routes, Route } from "react-router-dom";

function Home() {
  return (
    <div className="bg-[#F8A4A3] min-h-screen flex flex-col items-center p-6">
      <Hero />
      <ValentineCard />
    </div>
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
