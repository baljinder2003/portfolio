import React, { useEffect } from 'react';
import './DrumMachine.css'
const drumPads = [
  { key: 'Q', id: 'Heater-1', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3' },
  { key: 'W', id: 'Heater-2', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3' },
  { key: 'E', id: 'Heater-3', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3' },
  { key: 'A', id: 'Chord-1', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3' },
  { key: 'S', id: 'Chord-2', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3' },
  { key: 'D', id: 'Chord-3', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3' },
  { key: 'Z', id: 'Heater-4', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3' },
  { key: 'X', id: 'Clap', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3' },
  { key: 'C', id: 'Open-HH', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3' }
];

function DrumMachine() {
  useEffect(() => {
    const handleKeydown = (event) => {
      const pad = drumPads.find(p => p.key === event.key.toUpperCase());
      if (pad) {
        playSound(pad.key, pad.id);
      }
    };
    document.addEventListener('keydown', handleKeydown);
    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  const playSound = (key, id) => {
    const audio = document.getElementById(key);
    if (audio) {
      audio.currentTime = 0;
      audio.play();
      document.getElementById('display').innerText = id;
    }
  };

  const drumPadElements = drumPads.map(pad => (
    <div key={pad.key} className="drum-pad" id={pad.id} onClick={() => playSound(pad.key, pad.id)}>
      {pad.key}
      <audio className="clip" id={pad.key} src={pad.src}></audio>
    </div>
  ));

  return (
    <div id="DrumMachine">
      <div id='drum-machine'>
        <div id="display"></div>
        <div id="drum-pads">
          {drumPadElements}
        </div>
      </div>
    </div>
  );
}

export default DrumMachine;
