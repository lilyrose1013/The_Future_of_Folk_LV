import { useState, useRef, useEffect } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import audioFile from '../Music/Rohelise.mp3';

export default function Layout({ children }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Set volume to 30%
    }
  }, []);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="app">
      <Nav />
      <main className="main-content" id="main-content">
        {children}
      </main>
      <Footer />
      
      {/* Audio Player */}
      <audio ref={audioRef} loop>
        <source src={audioFile} type="audio/mpeg" />
      </audio>
      
      {/* Audio Control Button */}
      <button 
        className="audio-control" 
        onClick={toggleAudio}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? '🔊' : '🔇'}
      </button>
    </div>
  );
}
