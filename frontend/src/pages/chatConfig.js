export const defaultStopTimeout = 3_000;

export const ffmpegCoreUrl =
  "https://unpkg.com/@ffmpeg/core-st@0.11.1/dist/ffmpeg-core.js";

export const silenceRemoveCommand =
  "silenceremove=start_periods=1:stop_periods=-1:start_threshold=-30dB:stop_threshold=-30dB:start_silence=2:stop_silence=2";

export const whisperApiEndpoint = "https://api.openai.com/v1/audio/";

export const rasaApiEndpoint = "https://localhost:5005/webhooks/rest/webhook/"; // Rasa Endpoint
