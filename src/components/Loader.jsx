import { useEffect, useState } from "react";

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress < 100) {
      const timer = setTimeout(() => setProgress(progress + 1), 50);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "12px",
      }}
    >
  
      <div
        style={{
          width: "200px",
          height: "25px",
          border: "3px solid #333",
          borderRadius: "6px",
          overflow: "hidden",
          backgroundColor: "#eee",
          position: "relative",
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
          width: "50px",
          textAlign: "right",
          fontWeight: "bold",
          fontSize: "1.2rem",
          fontFamily: "monospace",
        }}
      >
        {progress}%
      </div>
    </div>
  );
};

export default Loader;
