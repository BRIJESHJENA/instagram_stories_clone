import React, { Key, useEffect, useState } from "react";

interface Props {
  key: Key;
  duration: number;
}

const ProgressBar: React.FC<Props> = ({ key, duration }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 100 / (duration * 10) : 100));
    }, 100);

    return () => clearInterval(interval);
  }, [duration]);

  return (
    <div
      key={key}
      style={{
        position: "absolute",
        top: 0,
        width: "100%",
        height: "5px",
        background: "gray",
      }}
    >
      <div
        style={{
          width: `${progress}%`,
          height: "100%",
          background: "white",
          transition: "width 0.1s",
        }}
      />
    </div>
  );
};

export default ProgressBar;
