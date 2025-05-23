import { useEffect, useState } from "react";

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (progress < 100) {
      const timer = setTimeout(() => setProgress(progress + 1), 50);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  const isSmall = screenWidth <= 320;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "12px",
        flexWrap: "wrap",
        width: "100%",
        maxWidth: "320px",
        padding: isSmall ? "0 5px" : "0",
      }}
    >
      <div
        style={{
          flex: "1",
          minWidth: isSmall ? "160px" : "200px",
          height: "25px",
          border: "3px solid #333",
          borderRadius: "6px",
          overflow: "hidden",
          backgroundColor: "#eee",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${progress}%`,
            backgroundColor: "black",
            transition: "width 0.05s linear",
          }}
        />
      </div>

      <div
        style={{
          minWidth: "50px",
          textAlign: "right",
          fontWeight: "bold",
          fontSize: isSmall ? "1rem" : "1.2rem",
          fontFamily: "monospace",
        }}
      >
        {progress}%
      </div>
    </div>
  );
};

export default Loader;
