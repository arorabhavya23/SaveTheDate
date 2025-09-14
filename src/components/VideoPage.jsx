import React, { useRef, useEffect } from 'react';
import bgVideo from '/src/assets/video/bg_vid_01.mp4';
import './VideoPage.css';

function VideoPage() {
  const videoRef = useRef(null);

  return (
    <div className="video-bg-container">
      <video
        ref={videoRef}
        loop
        className="video-bg"
        src={bgVideo}
        type="video/mp4"
        playsInline
        muted
        autoPlay
      />
    </div>
  );
}

export default VideoPage;
