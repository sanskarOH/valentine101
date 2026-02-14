import { MorphingText } from "@/components/ui/morphing-text";

const text = ["Kaveri", "Cutu", "Shona", "Meow <3"];
export default function Hero() {
  return (
    <>
      <MorphingText className="text-white" texts={text} />
      <div className="main-card">
        
      </div>
    </>
  );
}
