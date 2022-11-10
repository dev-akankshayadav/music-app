import React from "react";

const PlayerDescription = (props) => {
  return (
    <div className="player--details">
      <div className="details-img">
        <img src={props.song.img_src} alt={props.song.title} />
      </div>
      <h3 className="details-title">{props.song.title}</h3>
      <h4 className="details-artist">{props.song.artists}</h4>
    </div>
  );
};

export default PlayerDescription;
