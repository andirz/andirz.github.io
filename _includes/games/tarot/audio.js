const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playSynth(type) {
  if (audioCtx.state === 'suspended') audioCtx.resume();
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  const now = audioCtx.currentTime;

  if (type === 'draw') {
    // Kurzes "Karten-Mischen" (Weißes Rauschen nachempfunden)
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(120, now);
    osc.frequency.exponentialRampToValueAtTime(40, now + 0.15);
    gain.gain.setValueAtTime(0.05, now);
  } else if (type === 'reveal') {
    // Magisches "Pling"
    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, now);
    osc.frequency.exponentialRampToValueAtTime(1320, now + 0.1);
    gain.gain.setValueAtTime(0.1, now);
  } else if (type === 'flip') {
    // Dumpfes "Woosh" beim Umdrehen
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(200, now);
    gain.gain.setValueAtTime(0.08, now);
  }
  
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
  osc.start();
  osc.stop(now + 0.3);
}