import React, { useRef, useEffect } from 'react';
import bgVideo from '/src/assets/video/bg_vid_01.mp4';
import './VideoPage.css';

function VideoPage() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
      // Ensure muted is set via property for iOS
      videoRef.current.muted = true;
      videoRef.current.playsInline = true;
      videoRef.current.autoplay = true;
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
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
        // Explicit attributes for iOS
        playsinline="true"
        muted="true"
      />
    </div>
  );
}

export default VideoPage;
