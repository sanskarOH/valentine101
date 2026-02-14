import { Highlighter } from "../ui/highlighter";

export default function LoveLetter() {
  return (
    <div className="flex justify-center items-center py-7">
      <div className="max-w-2xl bg-white/80 backdrop-blur-lg p-10 rounded-3xl shadow-xl border border-pink-200">
        <h2 className="text-3xl font-semibold mb-6 text-pink-400">
          A Letter To You 💖
        </h2>

        <p className="text-lg  text-black space-y-4">
          My{" "}
          <Highlighter action="highlight" color="#FFC1CC">
            dearest Kaveri
          </Highlighter>
          ,
          <br />
          From the moment you walked into my life, everything started feeling
          <Highlighter action="underline">lighter, brighter</Highlighter>, and
          somehow more meaningful . I became more{" "}
          <Highlighter action="underline">full of life</Highlighter>.
          <br />
          <br />
          You are my calm in chaos, my <Highlighter>happiness</Highlighter> on
          difficult days, and{" "}
          <Highlighter action="underline" color="#FF0000">
            my favorite person
          </Highlighter>{" "}
          to exist with. I know I sometimes get angry but I want to and I am
          trying to build a life with you in it.
          <br />
          <br />
          But deep down in my heart,{" "}
          <Highlighter>I love you a lot.</Highlighter>
          <br />
          <br />
          Meow.
        </p>
      </div>
    </div>
  );
}
