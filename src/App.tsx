import Hero from "./section/Hero";
import ValentineCard from "./components/ValentineCard";

export default function App() {
  return (
    <>
      <div className="bg-[#F8A4A3] min-h-screen flex flex-col items-center p-6 ">
        <Hero />
        <ValentineCard />
      </div>
    </>
  );
}
