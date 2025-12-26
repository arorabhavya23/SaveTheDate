import React, { useRef, useEffect, useState } from 'react';
import bgVideo from '/src/assets/video/bg_vid_01.mp4';
import bgImage from '/src/assets/images/B_and_G_background.png';
import './VideoPage.css';

function VideoPage() {
  const videoRef = useRef(null);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // If autoplay fails, show image
    const handlePlay = () => setShowImage(false);
    const handleError = () => setShowImage(true);

    video.addEventListener('play', handlePlay);
    video.addEventListener('error', handleError);

    // Try to play programmatically (for some browsers)
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => setShowImage(true));
    }

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('error', handleError);
    };
  }, []);

  return (
    <div className="video-bg-container">
      {!showImage ? (
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
      ) : (
        <img
          src={bgImage}
          alt="Background"
          className="video-bg"
        />
      )}
    </div>
  );
}

export default VideoPage;
