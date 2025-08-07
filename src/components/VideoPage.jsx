import React, { useRef, useEffect } from 'react';
import bgVideo from '/src/assets/video/bg_vid_01.mp4'; // Adjust the path as necessary
import './VideoPage.css'; // Assuming you have a CSS file for styling

function VideoPage() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Set playback speed to 0.5x
    }
  }, []);

  return (
    <div className="video-bg-container">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="video-bg"
        src={bgVideo}
        type="video/mp4"
      />
    </div>
  );
}

export default VideoPage;
