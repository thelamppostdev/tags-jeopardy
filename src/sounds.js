let _ctx = null;
let _muted = false;

function ctx() {
  if (!_ctx) _ctx = new (window.AudioContext || window.webkitAudioContext)();
  return _ctx;
}

export function setMuted(val) { _muted = val; }
export function isMuted() { return _muted; }

function guard() {
  if (_muted) return null;
  const c = ctx();
  if (c.state === 'suspended') c.resume();
  return c;
}

// Helper: play a bell-like tone (fundamental + inharmonic overtone = classic bell timbre)
function bell(c, freq, startTime, vol = 0.35, decay = 0.7) {
  [1, 2.756, 5.404].forEach((ratio, i) => {
    const osc = c.createOscillator();
    const gain = c.createGain();
    osc.connect(gain); gain.connect(c.destination);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq * ratio, startTime);
    const v = vol / (i + 1);
    gain.gain.setValueAtTime(0, startTime);
    gain.gain.linearRampToValueAtTime(v, startTime + 0.005); // soft attack
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + decay);
    osc.start(startTime);
    osc.stop(startTime + decay + 0.05);
  });
}

// Helper: noise burst for click/transient
function clickBurst(c, startTime, vol = 0.12, dur = 0.012) {
  const buf = c.createBuffer(1, Math.floor(c.sampleRate * dur), c.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
  const src = c.createBufferSource();
  src.buffer = buf;
  const gain = c.createGain();
  gain.gain.setValueAtTime(vol, startTime);
  src.connect(gain); gain.connect(c.destination);
  src.start(startTime);
}

// 1. Question open — springy "boing" with percussive click
export function playQuestionOpen() {
  const c = guard(); if (!c) return;
  const now = c.currentTime;

  clickBurst(c, now, 0.14);

  // Spring: high → low pitch with slight wobble
  const osc = c.createOscillator();
  const gain = c.createGain();
  osc.connect(gain); gain.connect(c.destination);
  osc.type = 'sine';
  osc.frequency.setValueAtTime(620, now);
  osc.frequency.setValueAtTime(680, now + 0.02); // tiny upward snap
  osc.frequency.exponentialRampToValueAtTime(110, now + 0.32);
  gain.gain.setValueAtTime(0, now);
  gain.gain.linearRampToValueAtTime(0.45, now + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.32);
  osc.start(now); osc.stop(now + 0.35);
}

// 2. Reveal — magic sparkle cascade (quick ascending bright tones)
export function playReveal() {
  const c = guard(); if (!c) return;
  const now = c.currentTime;
  // B4, D#5, F#5, B5, D#6 — warmer, mid-register sparkle
  [494, 622, 740, 988, 1245].forEach((freq, i) => {
    const osc = c.createOscillator();
    const gain = c.createGain();
    osc.connect(gain); gain.connect(c.destination);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now + i * 0.07);
    gain.gain.setValueAtTime(0, now + i * 0.07);
    gain.gain.linearRampToValueAtTime(0.15, now + i * 0.07 + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.07 + 0.28);
    osc.start(now + i * 0.07);
    osc.stop(now + i * 0.07 + 0.32);
  });
}

// 3. Correct — classic Jeopardy bell chime (C5 → E5 → G5 with rich bell harmonics)
export function playCorrect() {
  const c = guard(); if (!c) return;
  const now = c.currentTime;
  bell(c, 523, now,       0.08, 0.9);  // C5
  bell(c, 659, now + 0.2, 0.05, 0.9);  // E5
  bell(c, 784, now + 0.4, 0.1,  1.1);  // G5 — last note rings longest
}

// 4. Wrong — triple descending "wah wah wah" trombone buzzer
export function playWrong() {
  const c = guard(); if (!c) return;
  const now = c.currentTime;

  [0, 0.18].forEach((offset) => {
    const osc = c.createOscillator();
    const gain = c.createGain();
    osc.connect(gain); gain.connect(c.destination);

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(90, now + offset);

    gain.gain.setValueAtTime(0, now + offset);
    gain.gain.linearRampToValueAtTime(3.0, now + offset + 0.008);
    gain.gain.setValueAtTime(3.0, now + offset + 0.12);
    gain.gain.exponentialRampToValueAtTime(0.01, now + offset + 0.15);

    osc.start(now + offset); osc.stop(now + offset + 0.16);
  });
}

// 5. Celebration — triumphant Jeopardy-style winner fanfare
export function playCelebration() {
  const c = guard(); if (!c) return;
  const now = c.currentTime;

  // Ascending run: G4 C5 E5 G5 (quick 16ths)
  [392, 523, 659, 784].forEach((freq, i) => {
    bell(c, freq, now + i * 0.11, 0.28, 0.4);
  });

  // Triumphant hits: G5 chord stabs
  const chords = [
    { time: 0.55, notes: [784, 988, 1175] },   // G5 maj
    { time: 0.85, notes: [880, 1047, 1319] },  // A5 / C6 / E6
    { time: 1.15, notes: [784, 988, 1175] },   // G5 maj
    { time: 1.5,  notes: [523, 659, 784, 1047] }, // C5 maj full
  ];

  chords.forEach(({ time, notes }) => {
    notes.forEach(freq => {
      const osc = c.createOscillator();
      const gain = c.createGain();
      osc.connect(gain); gain.connect(c.destination);
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + time);
      gain.gain.setValueAtTime(0, now + time);
      gain.gain.linearRampToValueAtTime(0.18 / notes.length * 2.5, now + time + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + time + 0.55);
      osc.start(now + time); osc.stop(now + time + 0.6);
    });
    clickBurst(c, now + time, 0.06);
  });
}
