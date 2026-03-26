import { defineIcons } from '../core/index';
import { strokeIcon } from './shared';

export const filmIcon = strokeIcon(
  [
  "M7 5H17Q19 5 19 7V17Q19 19 17 19H7Q5 19 5 17V7Q5 5 7 5Z",
  "M9 5L9 19",
  "M15 5L15 19",
  "M5 9L19 9",
  "M5 15L19 15"
],
  "0 0 24 24",
);

export const clapperboardIcon = strokeIcon(
  [
  "M4 8L20 8L18 20L6 20Z",
  "M4 8L8 4",
  "M10 8L14 4",
  "M16 8L20 4",
  "M7 13L17 13"
],
  "0 0 24 24",
);

export const cameraIcon = strokeIcon(
  [
  "M6 7H18Q21 7 21 10V16Q21 19 18 19H6Q3 19 3 16V10Q3 7 6 7Z",
  "M12 9.5a3.5 3.5 0 1 1 0 7a3.5 3.5 0 1 1 0 -7",
  "M7 7L9 4",
  "M15 4L17 7"
],
  "0 0 24 24",
);

export const cameraOffIcon = strokeIcon(
  [
  "M6 7H18Q21 7 21 10V16Q21 19 18 19H6Q3 19 3 16V10Q3 7 6 7Z",
  "M12 9.5a3.5 3.5 0 1 1 0 7a3.5 3.5 0 1 1 0 -7",
  "M7 7L9 4",
  "M15 4L17 7",
  "M4 4L20 20"
],
  "0 0 24 24",
);

export const imagePlusIcon = strokeIcon(
  [
  "M6 5H18Q20 5 20 7V17Q20 19 18 19H6Q4 19 4 17V7Q4 5 6 5Z",
  "M9 8.8a1.2 1.2 0 1 1 0 2.4a1.2 1.2 0 1 1 0 -2.4",
  "M6.5 17L11 12.5L14 15L18 11L20 13.5",
  "M15.6 17L18.4 17",
  "M17 15.6L17 18.4"
],
  "0 0 24 24",
);

export const galleryHorizontalIcon = strokeIcon(
  [
  "M5 6H9Q11 6 11 8V16Q11 18 9 18H5Q3 18 3 16V8Q3 6 5 6Z",
  "M15 6H19Q21 6 21 8V16Q21 18 19 18H15Q13 18 13 16V8Q13 6 15 6Z",
  "M7 9a1 1 0 1 1 0 2a1 1 0 1 1 0 -2",
  "M17 9a1 1 0 1 1 0 2a1 1 0 1 1 0 -2"
],
  "0 0 24 24",
);

export const galleryVerticalIcon = strokeIcon(
  [
  "M8 3H16Q18 3 18 5V9Q18 11 16 11H8Q6 11 6 9V5Q6 3 8 3Z",
  "M8 13H16Q18 13 18 15V19Q18 21 16 21H8Q6 21 6 19V15Q6 13 8 13Z",
  "M10 6a1 1 0 1 1 0 2a1 1 0 1 1 0 -2",
  "M10 16a1 1 0 1 1 0 2a1 1 0 1 1 0 -2"
],
  "0 0 24 24",
);

export const subtitlesIcon = strokeIcon(
  [
  "M5 6H19Q21 6 21 8V16Q21 18 19 18H5Q3 18 3 16V8Q3 6 5 6Z",
  "M6 11L11 11",
  "M13 11L18 11",
  "M6 15L11 15",
  "M13 15L18 15"
],
  "0 0 24 24",
);

export const waveformIcon = strokeIcon(
  [
  "M4 13L4 11",
  "M7 15L7 9",
  "M10 18L10 6",
  "M13 14L13 10",
  "M16 16L16 8",
  "M19 13L19 11"
],
  "0 0 24 24",
);

export const pictureInPictureIcon = strokeIcon(
  [
  "M5 5H19Q21 5 21 7V17Q21 19 19 19H5Q3 19 3 17V7Q3 5 5 5Z",
  "M13 11H18Q19 11 19 12V15Q19 16 18 16H13Q12 16 12 15V12Q12 11 13 11Z"
],
  "0 0 24 24",
);

export const podcastIcon = strokeIcon(
  [
  "M12 5.5a2.5 2.5 0 1 1 0 5a2.5 2.5 0 1 1 0 -5",
  "M6 8A6 6 0 0 1 18 8",
  "M8.5 8A3.5 3.5 0 0 1 15.5 8",
  "M12 10.5L12 19",
  "M10 21L14 21"
],
  "0 0 24 24",
);

export const mediaExtraIcons = defineIcons({
  "film": filmIcon,
  "clapperboard": clapperboardIcon,
  "camera": cameraIcon,
  "camera-off": cameraOffIcon,
  "image-plus": imagePlusIcon,
  "gallery-horizontal": galleryHorizontalIcon,
  "gallery-vertical": galleryVerticalIcon,
  "subtitles": subtitlesIcon,
  "waveform": waveformIcon,
  "picture-in-picture": pictureInPictureIcon,
  "podcast": podcastIcon,
});
