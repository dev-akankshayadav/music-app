import React, { useState, useRef, useEffect } from "react";
import PlayerDescription from "./PlayerDescription";
import PlayerControls from "./PlayerControls";
const Player = (props) => {
  const audioElement = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioElement.current.play();
    } else {
      audioElement.current.pause();
    }
  });

  const SkipSong = (forwards = true) => {
    if (forwards) {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp++;

        if (temp > props.songs.length - 1) {
          temp = 0;
        }
        return temp;
      });
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = props.songs.length - 1;
        }
        return temp;
      });
    }
  };
  return (
    <div className="player">
      <audio
        src={props.songs[props.currentSongIndex].src}
        ref={audioElement}
      ></audio>
      <h4> Playing now</h4>
      <PlayerDescription song={props.songs[props.currentSongIndex]} />
      <PlayerControls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        SkipSong={SkipSong}
      />
      <p>
        <strong>Next up :</strong> {props.songs[props.nextSongIndex].title}- 
        {props.songs[props.nextSongIndex].artists}
      </p>
    </div>
  );
};

export default Player;
