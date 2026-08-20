/**
 * Web Audio Engine for Opera Formação
 * Synthesizes realistic heavy diesel engine sound (Caterpillar/Komatsu-style)
 * using dual low-frequency oscillators, harmonic sub-bass, and noise filter rumble.
 */

class MachinerySoundEngine {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private masterGain: GainNode | null = null;
  private engineOsc1: OscillatorNode | null = null;
  private engineOsc2: OscillatorNode | null = null;
  private subOsc: OscillatorNode | null = null;
  private noiseNode: AudioBufferSourceNode | null = null;
  private filterNode: BiquadFilterNode | null = null;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public toggleSound(onStateChange?: (playing: boolean) => void): boolean {
    try {
      this.initContext();
      if (!this.ctx) return false;

      if (this.isPlaying) {
        this.stopEngine();
        this.isPlaying = false;
        if (onStateChange) onStateChange(false);
        return false;
      } else {
        this.startEngine();
        this.isPlaying = true;
        if (onStateChange) onStateChange(true);
        return true;
      }
    } catch (err) {
      console.warn('Audio context initialization error:', err);
      return false;
    }
  }

  private startEngine() {
    if (!this.ctx) return;

    const now = this.ctx.currentTime;

    // Master gain node with smooth fade in
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0, now);
    this.masterGain.gain.linearRampToValueAtTime(0.25, now + 0.8);

    // Primary low frequency engine piston stroke (28Hz to 45Hz diesel rumble)
    this.engineOsc1 = this.ctx.createOscillator();
    this.engineOsc1.type = 'sawtooth';
    this.engineOsc1.frequency.setValueAtTime(32, now);

    // Secondary engine harmonic (64Hz)
    this.engineOsc2 = this.ctx.createOscillator();
    this.engineOsc2.type = 'triangle';
    this.engineOsc2.frequency.setValueAtTime(64, now);

    // Sub-bass heavy vibration (20Hz)
    this.subOsc = this.ctx.createOscillator();
    this.subOsc.type = 'sine';
    this.subOsc.frequency.setValueAtTime(22, now);

    // Low pass filter to replicate heavy engine exhaust & metal housing
    this.filterNode = this.ctx.createBiquadFilter();
    this.filterNode.type = 'lowpass';
    this.filterNode.frequency.setValueAtTime(180, now);
    this.filterNode.Q.setValueAtTime(3, now);

    // Generate 2 seconds of pink/white noise buffer for diesel combustion rattle
    const bufferSize = this.ctx.sampleRate * 2;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    let lastOut = 0.0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      output[i] = (lastOut + 0.02 * white) / 1.02;
      lastOut = output[i];
      output[i] *= 3.5; // boost rumble noise
    }

    this.noiseNode = this.ctx.createBufferSource();
    this.noiseNode.buffer = noiseBuffer;
    this.noiseNode.loop = true;

    const noiseFilter = this.ctx.createBiquadFilter();
    noiseFilter.type = 'bandpass';
    noiseFilter.frequency.setValueAtTime(140, now);
    noiseFilter.Q.setValueAtTime(2.5, now);

    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0.12, now);

    // Connect nodes
    this.engineOsc1.connect(this.filterNode);
    this.engineOsc2.connect(this.filterNode);
    this.subOsc.connect(this.filterNode);

    this.noiseNode.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(this.filterNode);

    this.filterNode.connect(this.masterGain);
    this.masterGain.connect(this.ctx.destination);

    // Start playback
    this.engineOsc1.start(now);
    this.engineOsc2.start(now);
    this.subOsc.start(now);
    this.noiseNode.start(now);
  }

  private stopEngine() {
    if (!this.ctx || !this.masterGain) return;

    const now = this.ctx.currentTime;
    this.masterGain.gain.linearRampToValueAtTime(0.001, now + 0.5);

    setTimeout(() => {
      try {
        this.engineOsc1?.stop();
        this.engineOsc2?.stop();
        this.subOsc?.stop();
        this.noiseNode?.stop();

        this.engineOsc1?.disconnect();
        this.engineOsc2?.disconnect();
        this.subOsc?.disconnect();
        this.noiseNode?.disconnect();
        this.masterGain?.disconnect();
      } catch {
        // Safe cleanup ignore
      }
    }, 600);
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }
}

export const machinerySound = new MachinerySoundEngine();
