import { useRef, useState } from "react";

export const Ejercicio2 = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <h2>2. Control de video</h2>
      <video
        ref={videoRef}
        width="320"
        height="240"
        src="/api/placeholder/320/240"
      />
      <button onClick={handlePlayPause}>
        {isPlaying ? "Pausar" : "Reproducir"}
      </button>
    </div>
  );
};
