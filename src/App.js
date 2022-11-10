// import "./App.css";
import React from "react";
import "./index.css";
import Player from "./components/Player";
import { useState, useEffect } from "react";

function App() {
  const [songs] = useState([
    {
      title: "Tera-Ghata",
      artists: "Gajendra Verma",
      img_src: "./images/song3.jpg",
      src: "./songs/01 - Tera Ghata (320 Kbps) - DownloadMing.SE.mp3",
    },
    {
      title: "Humdard",
      artists: "Arijit Singh",
      img_src: "./images/song1.jpg",
      src: "./songs/Humdard-Arijit-Singh.mp3",
    },
    {
      title: "Kaun Tujhe",
      artists: "Arijit Singh",
      img_src: "./images/song7.jpg",
      src: "./songs/Kaun Tujhe (M S Dhoni - The Untold Story) 320.mp3",
    },
    {
      title: "Pyaar Hota Jaa raha hai",
      artists: "Altaaf Sayyed",
      img_src: "./images/song5.jpg",
      src: "./songs/Pyaar_Hota_Ja_Raha_Hain_Latest_Video_Song_Altaaf_Sayyed_T-Series-GurQe8ws-6M.mp3",
    },
    {
      title: "Suna-Hai",
      artists: "Jubin Nautiyal",
      img_src: "./images/song4.jpg",
      src: "./songs/Suna-Hai-Tere-Dil-Pe-Mera(PaglaSongs).mp3",
    },
    {
      title: "Tu-Meri",
      artists: "Altaaf Sayyed",
      img_src: "./images/song6.jpg",
      src: "./songs/Tu_Meri_Dua_Si_Lage_by_Altaaf_Sayyed_Latest_Hindi_Song_Chandra-Surya_Affection_Music_Records-8G8uyYbDcMI.mp3",
    },
    {
      title: "Tum-Chupa Na Sakogi",
      artists: "Udit Narayan",
      img_src: "./images/song2.jpg",
      src: "./songs/Tum_chupa_na_sakoge_mein_woh_raaz_hoon_luka_chuppi_movie_new_song-aujX6O7OYsw.mp3",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  },[currentSongIndex]);

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
