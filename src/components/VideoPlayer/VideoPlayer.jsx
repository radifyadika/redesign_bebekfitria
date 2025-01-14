import React, { useRef } from "react";
import ReactPlayer from "react-player";
import "./VideoPlayer.css";

const VideoPlayer = ({ playState, setPlayState }) => {
  const player = useRef(null);

  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  };

  return (
    <div
      className={`video-player ${playState ? "" : "hide"}`}
      ref={player}
      onClick={closePlayer}
    >
      <ReactPlayer
        url="https://www.youtube.com/watch?v=igcQXfu15-0" // Replace with actual video URL
        playing={playState} // Plays the video when playState is true
        controls={true} // Enables controls
        width="75%" // Make the player responsive
        height="75%"
      />
    </div>
  );
};

export default VideoPlayer;
