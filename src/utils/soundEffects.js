/**
 * Sistema de Áudio Procedural e Efeitos Sonoros Ambientais (Web Audio API)
 * Gera trilhas sonoras e micro-efeitos orgânicos em tempo real sem dependências externas.
 */

let audioCtx = null;
let masterGain = null;
let ambientGain = null;
let isAudioMuted = false;
let isAmbientPlaying = false;
let ambientNodes = [];
let chimeIntervalId = null;
let lastRustleTime = 0;

// Inicializa ou recupera o contexto de áudio garantindo compliance com autoplay do navegador
export function getAudioContext() {
  if (typeof window === 'undefined') return null;

  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return null;
    audioCtx = new AudioContextClass();

    masterGain = audioCtx.createGain();
    masterGain.gain.setValueAtTime(0.32, audioCtx.currentTime); // Volume mestre
    masterGain.connect(audioCtx.destination);

    ambientGain = audioCtx.createGain();
    ambientGain.gain.setValueAtTime(0.08, audioCtx.currentTime); // Volume sutil da música de fundo
    ambientGain.connect(masterGain);
  }

  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  return audioCtx;
}

export function isMuted() {
  return isAudioMuted;
}

/**
 * Inicia a trilha sonora de ambientação generativa (música contínua orgânica)
 */
export function startAmbientTrack() {
  if (isAmbientPlaying || isAudioMuted) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  isAmbientPlaying = true;
  ambientNodes = [];

  const now = ctx.currentTime;

  // Fade-in suave da trilha ambiente
  if (ambientGain) {
    ambientGain.gain.cancelScheduledValues(now);
    ambientGain.gain.setValueAtTime(0.001, now);
    ambientGain.gain.linearRampToValueAtTime(0.075, now + 1.8);
  }

  // Filtro passa-baixas quente modulado por LFO (respiração da planta)
  const masterFilter = ctx.createBiquadFilter();
  masterFilter.type = 'lowpass';
  masterFilter.frequency.setValueAtTime(420, now);
  masterFilter.Q.setValueAtTime(1.8, now);

  const lfo = ctx.createOscillator();
  const lfoGain = ctx.createGain();
  lfo.type = 'sine';
  lfo.frequency.setValueAtTime(0.05, now); // Ciclo lento de 20 segundos
  lfoGain.gain.setValueAtTime(160, now);
  lfo.connect(lfoGain);
  lfoGain.connect(masterFilter.frequency);
  lfo.start(now);
  ambientNodes.push(lfo);

  masterFilter.connect(ambientGain);

  // Acorde Pad Orgânico (C#3, G#3, E4, D#4) - Ecosistema sonoro contemplativo
  const freqs = [138.59, 207.65, 329.63, 311.13];

  freqs.forEach((freq, idx) => {
    const osc = ctx.createOscillator();
    const oscGain = ctx.createGain();

    osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
    // Leve desafinação analógica (detune) para espacialidade e calor acústico
    osc.frequency.setValueAtTime(freq, now);
    osc.detune.setValueAtTime((idx - 1.5) * 2.5, now);

    oscGain.gain.setValueAtTime(0.18 / freqs.length, now);

    osc.connect(oscGain);
    oscGain.connect(masterFilter);

    osc.start(now);
    ambientNodes.push(osc);
  });

  // Micro-gotas generativas e sinos de orvalho esporádicos (a cada 7-10s)
  const scheduleChime = () => {
    if (!isAmbientPlaying || isAudioMuted) return;
    playAmbientChime();
    const nextInterval = 6500 + Math.random() * 4500;
    chimeIntervalId = setTimeout(scheduleChime, nextInterval);
  };

  chimeIntervalId = setTimeout(scheduleChime, 4000);
}

/**
 * Para a trilha sonora de ambientação com fade-out gradual
 */
export function stopAmbientTrack() {
  if (!isAmbientPlaying) return;
  const ctx = getAudioContext();

  if (ambientGain && ctx) {
    const now = ctx.currentTime;
    ambientGain.gain.cancelScheduledValues(now);
    ambientGain.gain.linearRampToValueAtTime(0.0001, now + 1.2);
  }

  if (chimeIntervalId) {
    clearTimeout(chimeIntervalId);
    chimeIntervalId = null;
  }

  setTimeout(() => {
    ambientNodes.forEach((node) => {
      try {
        node.stop();
        node.disconnect();
      } catch (e) {}
    });
    ambientNodes = [];
    isAmbientPlaying = false;
  }, 1300);
}

/**
 * Micro-sino generativo de orvalho que soa esporadicamente na trilha ambiente
 */
function playAmbientChime() {
  if (isAudioMuted) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const chimeFreqs = [830.61, 987.77, 1108.73, 1318.51, 1479.98];
  const chosenFreq = chimeFreqs[Math.floor(Math.random() * chimeFreqs.length)];

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(chosenFreq, now);

  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.linearRampToValueAtTime(0.035, now + 0.05);
  gain.gain.exponentialRampToValueAtTime(0.00001, now + 2.5);

  osc.connect(gain);
  gain.connect(masterGain);

  osc.start(now);
  osc.stop(now + 2.6);
}

/**
 * Alterna entre mutar e desmutar o áudio com controle inteligente da música ambiente
 */
export function toggleAudioMute() {
  isAudioMuted = !isAudioMuted;

  if (isAudioMuted) {
    stopAmbientTrack();
    if (masterGain && audioCtx) {
      masterGain.gain.setValueAtTime(0, audioCtx.currentTime);
    }
  } else {
    if (masterGain && audioCtx) {
      masterGain.gain.setValueAtTime(0.32, audioCtx.currentTime);
    }
    startAmbientTrack();
  }

  return isAudioMuted;
}

/**
 * Som Orgânico de Farfalhar de Folhas ao Mudar de Seção ou Revelar Conteúdos
 * Ruído orgânico filtrado com cooldown de 2.4s para evitar qualquer poluição sonora
 */
export function playLeafRustleSound() {
  if (isAudioMuted) return;
  const nowMs = Date.now();
  if (nowMs - lastRustleTime < 2400) return; // Cooldown anti-poluição: no máximo 1x a cada 2.4s
  lastRustleTime = nowMs;

  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const bufferDuration = 0.22;
  const bufferSize = Math.floor(ctx.sampleRate * bufferDuration);
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const output = buffer.getChannelData(0);

  // Ruído rosa simulando vento em folhas
  let b0 = 0, b1 = 0, b2 = 0;
  for (let i = 0; i < bufferSize; i++) {
    const white = Math.random() * 2 - 1;
    b0 = 0.99886 * b0 + white * 0.0555179;
    b1 = 0.99332 * b1 + white * 0.0750759;
    b2 = 0.96900 * b2 + white * 0.1538520;
    output[i] = (b0 + b1 + b2 + white * 0.5362) * 0.12;
  }

  const whiteNoise = ctx.createBufferSource();
  whiteNoise.buffer = buffer;

  const filter1 = ctx.createBiquadFilter();
  filter1.type = 'bandpass';
  filter1.frequency.setValueAtTime(1450, now);
  filter1.Q.setValueAtTime(2.2, now);

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.001, now);
  gain.gain.linearRampToValueAtTime(0.14, now + 0.04);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + bufferDuration);

  whiteNoise.connect(filter1);
  filter1.connect(gain);
  gain.connect(masterGain);

  whiteNoise.start(now);
  whiteNoise.stop(now + bufferDuration + 0.05);
}

/**
 * 1. Som de Gotas d'Água (Ao clicar em REGAR O BROTO)
 */
export function playWaterDropSound() {
  if (isAudioMuted) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  const filter = ctx.createBiquadFilter();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(1200, now);
  osc.frequency.exponentialRampToValueAtTime(750, now + 0.09);

  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(2200, now);

  gain.gain.setValueAtTime(0.5, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);

  osc.connect(filter);
  filter.connect(gain);
  gain.connect(masterGain);

  osc.start(now);
  osc.stop(now + 0.15);

  setTimeout(() => {
    if (isAudioMuted || !ctx) return;
    const t = ctx.currentTime;
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();

    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(1550, t);
    osc2.frequency.exponentialRampToValueAtTime(920, t + 0.08);

    gain2.gain.setValueAtTime(0.35, t);
    gain2.gain.exponentialRampToValueAtTime(0.001, t + 0.12);

    osc2.connect(gain2);
    gain2.connect(masterGain);

    osc2.start(t);
    osc2.stop(t + 0.13);
  }, 90);
}

/**
 * 2. Som de Florescimento Botânico (Arpeggio Etéreo de Flores)
 */
export function playBloomSound() {
  if (isAudioMuted) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const notes = [370.0, 466.16, 554.37, 622.25, 739.99];

  notes.forEach((freq, index) => {
    const delay = index * 0.075;
    const now = ctx.currentTime + delay;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.25 - index * 0.03, now + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

    osc.connect(gain);
    gain.connect(masterGain);

    osc.start(now);
    osc.stop(now + 1.25);
  });
}

/**
 * 3. Som de Broto / Pop Botânico Orgânico (Bloco 1 {🌱})
 */
export function playSproutPopSound() {
  if (isAudioMuted) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'triangle';
  osc.frequency.setValueAtTime(280, now);
  osc.frequency.exponentialRampToValueAtTime(560, now + 0.08);

  gain.gain.setValueAtTime(0.45, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

  osc.connect(gain);
  gain.connect(masterGain);

  osc.start(now);
  osc.stop(now + 0.23);
}

/**
 * 4. Som de Terminal Cyber-Glitch (Bloco 2 >_)
 */
export function playTerminalGlitchSound() {
  if (isAudioMuted) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  const filter = ctx.createBiquadFilter();

  osc.type = 'sawtooth';
  osc.frequency.setValueAtTime(880, now);
  osc.frequency.setValueAtTime(1760, now + 0.02);
  osc.frequency.setValueAtTime(440, now + 0.04);

  filter.type = 'highpass';
  filter.frequency.setValueAtTime(600, now);

  gain.gain.setValueAtTime(0.2, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

  osc.connect(filter);
  filter.connect(gain);
  gain.connect(masterGain);

  osc.start(now);
  osc.stop(now + 0.13);
}

/**
 * 5. Som de Colheita / Giro 360° e Ondas de Choque (Bloco 3 🌿)
 */
export function playHarvestSound() {
  if (isAudioMuted) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(320, now);
  osc.frequency.exponentialRampToValueAtTime(740, now + 0.15);
  osc.frequency.exponentialRampToValueAtTime(260, now + 0.4);

  gain.gain.setValueAtTime(0.01, now);
  gain.gain.linearRampToValueAtTime(0.3, now + 0.15);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

  osc.connect(gain);
  gain.connect(masterGain);

  osc.start(now);
  osc.stop(now + 0.46);

  setTimeout(() => {
    if (isAudioMuted || !ctx) return;
    const t = ctx.currentTime;
    const shimmerOsc = ctx.createOscillator();
    const shimmerGain = ctx.createGain();

    shimmerOsc.type = 'sine';
    shimmerOsc.frequency.setValueAtTime(1320, t);

    shimmerGain.gain.setValueAtTime(0.2, t);
    shimmerGain.gain.exponentialRampToValueAtTime(0.001, t + 0.35);

    shimmerOsc.connect(shimmerGain);
    shimmerGain.connect(masterGain);

    shimmerOsc.start(t);
    shimmerOsc.stop(t + 0.36);
  }, 120);
}

/**
 * 6. Som da Motion Line (Ao navegar para o Artigo no Diário de Bordo)
 */
export function playMotionLineSound() {
  if (isAudioMuted) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(480, now);
  osc.frequency.exponentialRampToValueAtTime(980, now + 0.22);

  gain.gain.setValueAtTime(0.001, now);
  gain.gain.linearRampToValueAtTime(0.18, now + 0.06);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.26);

  osc.connect(gain);
  gain.connect(masterGain);

  osc.start(now);
  osc.stop(now + 0.27);
}
