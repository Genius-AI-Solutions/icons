import { defineIcons } from '../core/index';
import { strokeIcon } from './shared';

export const playCircleIcon = strokeIcon(
  [
  "M12 3a9 9 0 1 1 0 18a9 9 0 1 1 0 -18",
  "M10 8L17 12L10 16Z"
],
  "0 0 24 24",
);

export const pauseCircleIcon = strokeIcon(
  [
  "M12 3a9 9 0 1 1 0 18a9 9 0 1 1 0 -18",
  "M9.6 8H10.9Q11.5 8 11.5 8.6V15.4Q11.5 16 10.9 16H9.6Q9 16 9 15.4V8.6Q9 8 9.6 8Z",
  "M14.1 8H15.4Q16 8 16 8.6V15.4Q16 16 15.4 16H14.1Q13.5 16 13.5 15.4V8.6Q13.5 8 14.1 8Z"
],
  "0 0 24 24",
);

export const stopCircle2Icon = strokeIcon(
  [
  "M12 3a9 9 0 1 1 0 18a9 9 0 1 1 0 -18",
  "M9.5 8.5H14.5Q15.5 8.5 15.5 9.5V14.5Q15.5 15.5 14.5 15.5H9.5Q8.5 15.5 8.5 14.5V9.5Q8.5 8.5 9.5 8.5Z"
],
  "0 0 24 24",
);

export const recordIcon = strokeIcon(
  [
  "M12 3a9 9 0 1 1 0 18a9 9 0 1 1 0 -18",
  "M12 8a4 4 0 1 1 0 8a4 4 0 1 1 0 -8"
],
  "0 0 24 24",
);

export const discIcon = strokeIcon(
  [
  "M12 4a8 8 0 1 1 0 16a8 8 0 1 1 0 -16",
  "M12 10a2 2 0 1 1 0 4a2 2 0 1 1 0 -4",
  "M12 4L12 7"
],
  "0 0 24 24",
);

export const albumIcon = strokeIcon(
  [
  "M7 5H17Q19 5 19 7V17Q19 19 17 19H7Q5 19 5 17V7Q5 5 7 5Z",
  "M12 8a4 4 0 1 1 0 8a4 4 0 1 1 0 -8",
  "M12 11a1 1 0 1 1 0 2a1 1 0 1 1 0 -2"
],
  "0 0 24 24",
);

export const libraryMusicIcon = strokeIcon(
  [
  "M4 6L20 6",
  "M6 10L18 10",
  "M8 14L16 14",
  "M11 8L11 18",
  "M16 7L16 16",
  "M10 17.8a1.2 1.2 0 1 1 0 2.4a1.2 1.2 0 1 1 0 -2.4",
  "M15 15.8a1.2 1.2 0 1 1 0 2.4a1.2 1.2 0 1 1 0 -2.4"
],
  "0 0 24 24",
);

export const castIcon = strokeIcon(
  [
  "M4 18L8 18",
  "M4 14L10 14",
  "M4 10L12 10",
  "M8 5H18Q20 5 20 7V15Q20 17 18 17H8Q6 17 6 15V7Q6 5 8 5Z"
],
  "0 0 24 24",
);

export const castOffIcon = strokeIcon(
  [
  "M4 18L8 18",
  "M4 14L10 14",
  "M4 10L12 10",
  "M8 5H18Q20 5 20 7V15Q20 17 18 17H8Q6 17 6 15V7Q6 5 8 5Z",
  "M4 4L20 20"
],
  "0 0 24 24",
);

export const equalizerIcon = strokeIcon(
  [
  "M7 6L7 18",
  "M12 9L12 18",
  "M17 5L17 18",
  "M7 9.8a1.2 1.2 0 1 1 0 2.4a1.2 1.2 0 1 1 0 -2.4",
  "M12 11.8a1.2 1.2 0 1 1 0 2.4a1.2 1.2 0 1 1 0 -2.4",
  "M17 7.8a1.2 1.2 0 1 1 0 2.4a1.2 1.2 0 1 1 0 -2.4"
],
  "0 0 24 24",
);

export const mediaParityIcons = defineIcons({
  "play-circle": playCircleIcon,
  "pause-circle": pauseCircleIcon,
  "stop-circle-2": stopCircle2Icon,
  "record": recordIcon,
  "disc": discIcon,
  "album": albumIcon,
  "library-music": libraryMusicIcon,
  "cast": castIcon,
  "cast-off": castOffIcon,
  "equalizer": equalizerIcon,
});
