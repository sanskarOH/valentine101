"use client";
import { useState } from "react";
import confetti from "canvas-confetti";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
export default function ValentineCard() {
  const [accepted, setAccepted] = useState(false);
  const [noPosition, setNoPosition] = useState({ top: 0, left: 0 });

  const moveNoButton = () => {
    const randomTop = Math.floor(Math.random() * 200);
    const randomLeft = Math.floor(Math.random() * 200);
    setNoPosition({ top: randomTop, left: randomLeft });
  };

  const navigate = useNavigate();

  const handleYes = () => {
    navigate("/her");
  };

  const handleClick = () => {
    const end = Date.now() + 3 * 1000; // 3 seconds
    const colors = ["#ff0000", "#ff1a1a", "#cc0000", "#ff4d4d"];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 10,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 10,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    };

    frame();

    setTimeout(() => {
      handleYes();
    }, 3000);
  };

  return (
    <div className=" flex items-center justify-center bg-pink-100">
      <div className="relative w-[350px] h-[400px] bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center text-center overflow-hidden">
        {!accepted ? (
          <>
            <h2 className="text-2xl font-bold text-pink-600 mb-6">
              Will you be my Valentine? 💖
            </h2>

            <div className="flex gap-6">
              <button
                onClick={() => setAccepted(true)}
                className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg transition"
              >
                Yes 💘
              </button>

              <button
                onMouseEnter={moveNoButton}
                style={
                  noPosition.top !== 0 || noPosition.left !== 0
                    ? {
                        position: "absolute",
                        top: noPosition.top,
                        left: noPosition.left,
                      }
                    : {}
                }
                className="bg-gray-400 text-white px-6 py-2 rounded-lg cursor-not-allowed"
              >
                No 🙈
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-pink-600 mb-4">
              I love you so much ❤️
            </h2>
            <div
              className="tenor-gif-embed"
              data-postid="1431348599608247730"
              data-share-method="host"
              data-aspect-ratio="1"
              data-width="100%"
            >
              <a href="https://tenor.com/view/kiss-lip-kiss-hug-kiss-kiss-kiss-sending-kisses-gif-1431348599608247730">
                Kiss Lip Kiss Sticker
              </a>
              from{" "}
              <a href="https://tenor.com/search/kiss-stickers">Kiss Stickers</a>
            </div>{" "}
            <script
              type="text/javascript"
              async
              src="https://tenor.com/embed.js"
            ></script>
            <Button variant="outline" onClick={handleClick}>
              Click Me
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
