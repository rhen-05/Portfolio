import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const MusicPlayer: React.FC = () => {
  const { language } = useLanguage();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Volume background lembut (30%) agar tidak mengagetkan
    audio.volume = 0.3;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch((err) => {
        console.info('Audio play error / file not found yet:', err);
      });
    }
  };

  return (
    <div className="fixed bottom-4 left-4 sm:bottom-5 sm:left-5 z-40 select-none">
      {/* Background Audio Element */}
      <audio
        ref={audioRef}
        src="/assets/audio/bgm.mp3"
        loop
        preload="none"
      />

      {/* Floating Glass Pill Player Button */}
      <button
        onClick={togglePlay}
        aria-label={isPlaying ? 'Pause Background Music' : 'Play Background Music'}
        className="group flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-white/85 dark:bg-[#171C19]/85 backdrop-blur-md border border-black/10 dark:border-white/10 shadow-lg hover:shadow-xl hover:border-[#087F5B]/50 transition-all duration-300 cursor-pointer text-primary active:scale-95 touch-target"
      >
        {/* Animated Equalizer Sound Bars */}
        <div className="flex items-end gap-[3px] h-3.5 w-3.5 shrink-0 justify-center">
          <span
            className={`w-[2px] bg-[#087F5B] rounded-full transition-all duration-200 ${
              isPlaying ? 'animate-music-bar-1' : 'h-1.5 opacity-60'
            }`}
          />
          <span
            className={`w-[2px] bg-[#087F5B] rounded-full transition-all duration-200 ${
              isPlaying ? 'animate-music-bar-2' : 'h-2.5 opacity-60'
            }`}
          />
          <span
            className={`w-[2px] bg-[#087F5B] rounded-full transition-all duration-200 ${
              isPlaying ? 'animate-music-bar-3' : 'h-1 opacity-60'
            }`}
          />
        </div>

        {/* Text Status */}
        <div className="flex items-center gap-1.5 font-poppins text-[10px] sm:text-[11px] font-bold tracking-wider uppercase">
          <span className="text-secondary group-hover:text-primary transition-colors">
            {language === 'id' ? 'BGM' : 'SOUND'}
          </span>
          <span className={isPlaying ? 'text-[#087F5B]' : 'text-muted'}>
            [{isPlaying ? 'ON' : 'OFF'}]
          </span>
        </div>

        {/* Mute/Volume Indicator Icon */}
        <div className="text-secondary group-hover:text-[#087F5B] transition-colors ml-0.5">
          {isPlaying ? (
            <Volume2 className="w-3.5 h-3.5 text-[#087F5B]" />
          ) : (
            <VolumeX className="w-3.5 h-3.5 text-muted" />
          )}
        </div>
      </button>
    </div>
  );
};
