import React, { useState, useEffect } from "react";
import { library } from '@fortawesome/fontawesome-svg-core'

import "./App.css";
import pfp from "./images/pfpWhite.jpg";
import view from "./images/viewW.svg";
import insta from "./images/insta.png";
import discord from "./images/discord.png";
import spotify from "./images/spotify.svg";
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
              <h1 className="bio">Hier steht eine super coole und informative information{bio}</h1> {/* Bio with typewriter effect */}
            </div>
            <div className="links">
              <a
                href="https://www.instagram.com/movemented/"
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
              <a
                href="https://open.spotify.com/user/fxa2rgcoes6rh504uqntgdbg0?si=ddf6f74527ff475d"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="link5" viewBox="0 0 496 512"><path d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"/></svg>
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
