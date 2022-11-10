import React from "react";
import { FaPlay, FaPause, FaBackward, FaForward } from "react-icons/fa";

const PlayerControls = (props) => {
  return (
    <div className="player--controls">
      <button className="skip-btn" onClick={() => props.SkipSong(false)}>
        <FaBackward />
      </button>
      <button
        className="play-btn"
        onClick={() => props.setIsPlaying(!props.isPlaying)}
      >
        {props.isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      <button className="skip-btn" onClick={() => props.SkipSong()}>
        <FaForward />
      </button>
    </div>
  );
};

export default PlayerControls;
