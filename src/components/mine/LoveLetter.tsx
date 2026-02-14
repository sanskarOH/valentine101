import { Highlighter } from "../ui/highlighter";

export default function LoveLetter() {
  return (
    <div className="flex justify-center items-center py-7">
      <div className="max-w-2xl bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-2xl border border-white/20">
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
          lighter, brighter, and somehow more meaningful.
          <br />
          <br />
          You are my calm in chaos, my happiness on difficult days, and my
          favorite person to exist with.
          <br />,
        </p>
      </div>
    </div>
  );
}
