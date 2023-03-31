import React, { useRef, useState } from 'react'
import VideoFooter from "./components/footer/VideoFooter";
import "./video.css"

function Video() {

  const videoRef = useRef(null)
  const [play, setPlay] = useState(false)

    function handdleStart() {

      if(play){
        videoRef.current.pause();
        setPlay(false);
      } else {
        videoRef.current.play();
        setPlay(true);
      }
    }

  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        onClick={handdleStart}
        loop
        src="https://aws-br-cdn.kwai.net/upic/2021/08/16/03/BMjAyMTA4MTYwMzU0MTFfMTUwMDAwOTYyNDI0ODIzXzE1MDA2MDE1MzE4Mzg2M18yXzM=_b_Bd0118c26b420e20fbc8ecd4682d00bf6.mp4"
      ></video>
      {/* Sidebar */}
      <VideoFooter />
    </div>
  );
}

export default Video
