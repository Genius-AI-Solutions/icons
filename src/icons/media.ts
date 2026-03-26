import { defineIcons } from '../core/index';
import { fillIcon, strokeIcon } from './shared';
import { mediaExtraIcons } from './media-extra';
import { mediaParityIcons } from './media-parity';

export const musicIcon = strokeIcon(
  [
    "M9 18V5l12-2v13",
    "M6 21a3 3 0 100-6 3 3 0 000 6z",
    "M18 19a3 3 0 100-6 3 3 0 000 6z",
  ],
  "0 0 24 24",
);

export const playIcon = strokeIcon(
  "M5 3l14 9-14 9V3z",
  "0 0 24 24",
);

export const pauseIcon = strokeIcon(
  [
    "M6 4h4v16H6z",
    "M14 4h4v16h-4z",
  ],
  "0 0 24 24",
);

export const skipForwardIcon = strokeIcon(
  [
    "M5 4l10 8-10 8V4z",
    "M19 5v14",
  ],
  "0 0 24 24",
);

export const skipBackIcon = strokeIcon(
  [
    "M19 20L9 12l10-8v16z",
    "M5 19V5",
  ],
  "0 0 24 24",
);

export const shuffleIcon = strokeIcon(
  [
    "M16 3h5v5",
    "M4 20L21 3",
    "M21 16v5h-5",
    "M15 15l6 6",
    "M4 4l5 5",
  ],
  "0 0 24 24",
);

export const repeatIcon = strokeIcon(
  [
    "M17 1l4 4-4 4",
    "M3 11V9a4 4 0 014-4h14",
    "M7 23l-4-4 4-4",
    "M21 13v2a4 4 0 01-4 4H3",
  ],
  "0 0 24 24",
);

export const stopCircleIcon = strokeIcon(
  [
    "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z",
    "M9 9h6v6H9z",
  ],
  "0 0 24 24",
);

export const volume1Icon = strokeIcon(
  [
    "M11 5L6 9H2v6h4l5 4V5z",
    "M15.54 8.46a5 5 0 010 7.07",
  ],
  "0 0 24 24",
);

export const volume2Icon = strokeIcon(
  [
    "M11 5L6 9H2v6h4l5 4V5z",
    "M19.07 4.93a10 10 0 010 14.14",
    "M15.54 8.46a5 5 0 010 7.07",
  ],
  "0 0 24 24",
);

export const volumeXIcon = strokeIcon(
  [
    "M11 5L6 9H2v6h4l5 4V5z",
    "M23 9l-6 6",
    "M17 9l6 6",
  ],
  "0 0 24 24",
);

export const stopIcon = fillIcon(
  "M6 6h12v12H6z",
  "0 0 24 24",
);

export const playFillIcon = fillIcon(
  "M8 5v14l11-7z",
  "0 0 24 24",
);

export const pauseFillIcon = fillIcon(
  [
    "M6 4h4v16H6z",
    "M14 4h4v16h-4z",
  ],
  "0 0 24 24",
);

export const micLargeIcon = strokeIcon(
  "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z",
  "0 0 24 24",
);

export const stopwatchClockIcon = strokeIcon(
  [
    "M12 5a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z",
    "M12 9v4l2 2",
    "M5 3L2 6",
    "M22 6l-3-3",
    "M12 2v3",
  ],
  "0 0 24 24",
);

export const timerClockIcon = strokeIcon(
  [
    "M10 2h4",
    "M12 14l3-3",
    "M12 6a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z",
  ],
  "0 0 24 24",
);

export const alarmClockIcon = strokeIcon(
  [
    "M12 5a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z",
    "M12 9v4l2 2",
    "M5 3L2 6",
    "M22 6l-3-3",
    "M6.38 18.7L4 21",
    "M17.64 18.67L20 21",
  ],
  "0 0 24 24",
);

export const intervalRepeatIcon = strokeIcon(
  [
    "M17 2.1l4 4-4 4",
    "M3 12.2v-2a4 4 0 0 1 4-4h12.8",
    "M7 21.9l-4-4 4-4",
    "M21 11.8v2a4 4 0 0 1-4 4H4.2",
  ],
  "0 0 24 24",
);

export const mediaIcons = defineIcons({
  "music": musicIcon,
  "play": playIcon,
  "pause": pauseIcon,
  "skip-forward": skipForwardIcon,
  "skip-back": skipBackIcon,
  "shuffle": shuffleIcon,
  "repeat": repeatIcon,
  "stop-circle": stopCircleIcon,
  "volume-1": volume1Icon,
  "volume-2": volume2Icon,
  "volume-x": volumeXIcon,
  "stop": stopIcon,
  "play-fill": playFillIcon,
  "pause-fill": pauseFillIcon,
  "mic-large": micLargeIcon,
  "stopwatch-clock": stopwatchClockIcon,
  "timer-clock": timerClockIcon,
  "alarm-clock": alarmClockIcon,
  "interval-repeat": intervalRepeatIcon,
  ...mediaExtraIcons,
  ...mediaParityIcons,
});
