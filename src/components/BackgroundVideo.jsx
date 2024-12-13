import React from "react";

const BackgroundVideo = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen -z-10 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>
      {/* Overlay para controlar a opacidade do vídeo */}
      <div className="absolute inset-0 bg-black/50" />
    </div>
  );
};

export default BackgroundVideo;
