import React, { useState, useEffect } from "react";
import { library } from '@fortawesome/fontawesome-svg-core'

import "./App.css";
import pfp from "./images/pfpWhite.jpg";
import view from "./images/viewW.svg";
import insta from "./images/insta.png";
import discord from "./images/discord.png";
import background from "./images/forest.jpg";
import cover from "./images/hearteater.png";
import stop from "./song/hearteater.mp3";
import bg from "./videos/arimabg.mp4";
import banner from "./videos/bannerChrome.gif";


import { faPause } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faForwardStep } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {

  const [currentTime, setCurrentTime] = useState(0);
  const maxTime = 93;
  const [isPlaying, setIsPlaying] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const [isOverlayClicked, setIsOverlayClicked] = useState(false);
  const [bio, setBio] = useState("");
  const [entered, setEntered] = useState(false);
  const [bioText] = useState("|");
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  let pp = faPlay;

  useEffect(() => {
    const timer = setInterval(() => {
      if (isTyping) {
        if (index < bioText.length) {
          setBio((prevBio) => prevBio + bioText.charAt(index));
          setIndex((prevIndex) => prevIndex + 1);
        } else {
          setIsTyping(false);
        }
      } else {
        if (index >= 0) {
          setBio((prevBio) => prevBio.slice(0, index));
          setIndex((prevIndex) => prevIndex - 1);
        } else {
          setIsTyping(true);
        }
      }
    }, 200);

    return () => clearInterval(timer);
  }, [bioText, index, isTyping]);

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.round(seconds % 60);
    const formattedTime = `${minutes}:${
      remainingSeconds < 10 ? "0" : ""
    }${remainingSeconds}`;
    return formattedTime;
  }

  useEffect(() => {
    const audioElement = document.getElementById("audio");

    if (isPlaying && isOverlayClicked) {
      {
        /*audioPlay();*/
      }
      setIsPlaying(true);
    }

    const interval = setInterval(() => {
      const elapsedTime = Math.round(audioElement.currentTime);
      setCurrentTime(elapsedTime);

      if (elapsedTime >= maxTime) {
        audioElement.currentTime = 0;
        setCurrentTime(0);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [isPlaying, isOverlayClicked, maxTime]);

  function audioPlay() {
    var audio = document.getElementById("audio");
    audio.volume = 1;
    audio.play();
  }

  const handlePlayPause = () => {
    const audioElement = document.getElementById("audio");
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      pp = faPause
      console.log(pp)
      audioElement.pause();
    } else {
      pp = faPlay
      console.log(pp)
      audioElement.play();
    }

    console.log(isPlaying);
  };

  const handleOverlayClick = () => {
    setShowOverlay(false);
    setIsOverlayClicked(true);
    {
      /*audioPlay();*/
    }
    setEntered(true);
  };

  return (
    <div className="app-container">
      {/* <video autoPlay loop muted className="video-background">
        <source src={bg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>*/}
      {showOverlay && (
        <div className="overlay" onClick={handleOverlayClick}>
          <p1 className="click">Click Anywhere</p1>
        </div>
      )}

      <div className="alles">
        <div className={`main-container ${entered ? "entered" : ""}`}>
          <div className="background">
            <img src={background} alt="" />
          </div>
          <div className="upper-container">
            <img src={banner} alt="banner" className="banner" />
            <div className="wrapc">
              <div className="div1" id="break"></div>
              <img src={pfp} className="pfp" alt="Profile Picture" />
            </div>
            <div className="info">
              <h1 className="name">sakuii</h1>
              <h1 className="bio">professional trader (jaja){bio}</h1> {/* Bio with typewriter effect */}
            </div>
            <div className="links">
              <a
                href="https://www.instagram.com/maxim._zzz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={insta} className="link5" alt="Instagram" />
              </a>
              <a
                href="https://discord.com/users/1079862959360184390"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={discord} className="link5" alt="Discord" />
              </a>
            </div>
          </div>
        <div className="middle-container">
          <div className="dcContainer">
            <img src="/src/images/ttpfp1.jpeg" alt="pfp" />
          <h2 className="ttName" >@maximi</h2>
          <a href="#" className="extLink">Open in TikTok</a>
          </div>
        </div>

          <div className="lower-container">
            <div className="song">
              <a
                href="https://soundcloud.com/trapdailysounds/glokk40spaz-sg-lul-ki-stop-playin-prod-by-khroam"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
                  <p1 className="songtitle">hearteater</p1>
              <div className="lied">
                <div className="songinfo">
                  <p1 className="album" href></p1>
                </div>
                <div className="time-label">
                  {formatTime(currentTime)}
                </div>


                <div className="timeline">
                  <div className="ball" style={{ left: `${(currentTime / maxTime) * 100}%` }}>
                  </div>
                  <div className="indicator" style={{ width: `${(currentTime / maxTime) * 100}%` }}>
                  </div>
                  <div className="staticStripe">
                  </div>
                </div>
                <div className="time-label">
                  {formatTime(maxTime)}
                </div>
                <div className="song-btn">
                  <button className="reverse-btn">
                  <FontAwesomeIcon icon={faForwardStep} />
                  </button>
                  <button
                    onClick={handlePlayPause}
                    className="play-pause-btn"
                    id="playPauseBtn"
                  >
                    <FontAwesomeIcon
                      icon={pp}
                      style={{ color: "#ffffff" }}
                    />
                  </button>
                  <button className="forward-btn">
                  <FontAwesomeIcon icon={faForwardStep} />
                  </button>
                </div>
              </div>

              <audio id="audio" src={stop} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
