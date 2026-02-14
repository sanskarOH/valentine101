import { AuroraText } from "@/components/ui/aurora-text";
import { GravityStarsBackground } from "@/components/animate-ui/components/backgrounds/gravity-stars";
import { Pinlist } from "@/components/mine/Pinlist";
import LoveLetter from "@/components/mine/LoveLetter";
import { ComicText } from "@/components/ui/comic-text";

export default function Her() {
  return (
    <>
      <GravityStarsBackground className="absolute -z-10" />
      <div className="main-container flex  flex-col items-center">
        <div className=" header min-h-screen flex flex-col p-6  ">
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl leading-none">
            Hello, <AuroraText>Beautiful</AuroraText>
          </h1>
          <div className="Letter">
            <LoveLetter />
          </div>
          <div className="cheers">
            <h1 className="text-4xl font-extrabold tracking-tighter mt-9">
              This Valentines
            </h1>
            <ComicText>Cheers to Us</ComicText>
          </div>
        </div>
      </div>
    </>
  );
}
