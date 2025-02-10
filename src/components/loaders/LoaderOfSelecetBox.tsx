import React from "react";

const LoaderOfSelecetBox: React.FC = () => {
  const moveAnimation = {
    "0%": { left: "0%", opacity: 0 },
    "35%": { left: "41%", transform: "rotate(0deg)", opacity: 1 },
    "65%": { left: "59%", transform: "rotate(0deg)", opacity: 1 },
    "100%": { left: "100%", transform: "rotate(-180deg)", opacity: 0 },
  };

  const keyframes = `@keyframes move { 
    ${Object.entries(moveAnimation)
      .map(
        ([key, value]) =>
          `${key} { ${Object.entries(value)
            .map(([prop, val]) => `${prop}: ${val};`)
            .join(" ")} }`
      )
      .join(" ")}
  }`;

  React.useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = keyframes;
    document.head.appendChild(styleTag);

    return () => {
      document.head.removeChild(styleTag);
    };
  }, [keyframes]);

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-40  w-[100%] h-[100vh]  bg-[rgba(0,0,0,0.5)] backdrop-blur-lg  min-h-screen flex items-center justify-center">
      <div className=" z-40  w-[100%] h-[100%] flex justify-center items-center">
        {["G", "N", "I", "D", "A", "O", "L"].map((letter, index) => (
          <div
            key={index}
            className="absolute w-[20px] h-[36px] text-slate-200 text-lg font-sans opacity-0"
            style={{
              animation: `move 2s linear infinite`,
              animationDelay: `${index * 0.05}s`,
            }}
          >
            {letter}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoaderOfSelecetBox;
