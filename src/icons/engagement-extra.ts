import { defineIcons } from '../core/index';
import { fillIcon, strokeIcon } from './shared';

export const smileIcon = strokeIcon(
  [
  "M12 3a9 9 0 1 1 0 18a9 9 0 1 1 0 -18",
  "M9 10L9 10",
  "M15 10L15 10",
  "M8 14Q12 18 16 14"
],
  "0 0 24 24",
);

export const frownIcon = strokeIcon(
  [
  "M12 3a9 9 0 1 1 0 18a9 9 0 1 1 0 -18",
  "M9 10L9 10",
  "M15 10L15 10",
  "M8 17Q12 13 16 17"
],
  "0 0 24 24",
);

export const mehIcon = strokeIcon(
  [
  "M12 3a9 9 0 1 1 0 18a9 9 0 1 1 0 -18",
  "M9 10L9 10",
  "M15 10L15 10",
  "M8.5 16L15.5 16"
],
  "0 0 24 24",
);

export const laughIcon = strokeIcon(
  [
  "M12 3a9 9 0 1 1 0 18a9 9 0 1 1 0 -18",
  "M8.5 9.5L9.5 10.5",
  "M14.5 10.5L15.5 9.5",
  "M7.5 14Q12 19 16.5 14"
],
  "0 0 24 24",
);

export const winkIcon = strokeIcon(
  [
  "M12 3a9 9 0 1 1 0 18a9 9 0 1 1 0 -18",
  "M8.5 10L9.5 10",
  "M14.5 10L15.5 11",
  "M8 15Q12 18 16 15"
],
  "0 0 24 24",
);

export const handHeartIcon = strokeIcon(
  [
  "M4 17Q8 14 11 17",
  "M11 17L15 17",
  "M15 17L18 14",
  "M12 11.12l-3 -2.76a1.7 1.7 0 012.4-2.4l0.12 0.12l0.12 -0.12a1.7 1.7 0 012.4 2.4z"
],
  "0 0 24 24",
);

export const clapIcon = strokeIcon(
  [
  "M9.5 5H10.5Q12 5 12 6.5V15.5Q12 17 10.5 17H9.5Q8 17 8 15.5V6.5Q8 5 9.5 5Z",
  "M13.5 6H14.5Q16 6 16 7.5V15.5Q16 17 14.5 17H13.5Q12 17 12 15.5V7.5Q12 6 13.5 6Z",
  "M6.5 9H7.5Q9 9 9 10.5V15.5Q9 17 7.5 17H6.5Q5 17 5 15.5V10.5Q5 9 6.5 9Z",
  "M17 4L19 2",
  "M19 8L22 8",
  "M18 12L21 14"
],
  "0 0 24 24",
);

export const badgeStarIcon = strokeIcon(
  [
  "M12 3.5a8.5 8.5 0 1 1 0 17a8.5 8.5 0 1 1 0 -17",
  "M12 9.12L13.08 11.4L15.36 11.76L13.68 13.44L14.16 15.6L12 14.52L9.84 15.6L10.32 13.44L8.64 11.76L10.92 11.4Z"
],
  "0 0 24 24",
);

export const bookmarkHeartIcon = strokeIcon(
  [
  "M6 3L18 3L18 21L12 16L6 21Z",
  "M12 11.84l-2.25 -2.07a1.7 1.7 0 012.4-2.4l0.09 0.09l0.09 -0.09a1.7 1.7 0 012.4 2.4z"
],
  "0 0 24 24",
);

export const confettiIcon = strokeIcon(
  [
  "M5 12L2 21",
  "M5 12L12 19",
  "M5 12L14 9",
  "M17 4L17 4",
  "M20 8L20 8",
  "M19 16L19 16",
  "M10 4L10 4",
  "M7 7L7 7"
],
  "0 0 24 24",
);

export const gemIcon = strokeIcon(
  [
  "M12 3L18 8L15 20L9 20L6 8Z",
  "M6 8L18 8",
  "M12 3L9 8",
  "M12 3L15 8",
  "M9 8L12 20",
  "M15 8L12 20"
],
  "0 0 24 24",
);

export const crownIcon = strokeIcon(
  [
  "M4 18L6 7L12 12L18 7L20 18Z",
  "M4 18L20 18"
],
  "0 0 24 24",
);

export const thumbsUpFillIcon = fillIcon(
  "M14 8V4l-4 8v8h9.5l1.5-8a2 2 0 00-2-2H14zM4 12h4v8H4z",
  "0 0 24 24",
);

export const thumbsDownFillIcon = fillIcon(
  "M10 16v4l4-8V4H4.5L3 12a2 2 0 002 2H10zM16 4h4v8h-4z",
  "0 0 24 24",
);

export const starHalfIcon = strokeIcon(
  [
  "M12 2L12 17.7",
  "M12 2L15.1 8.3L22 9.3L17 14.1L18.2 21L12 17.7L5.8 21L7 14.1L2 9.3L8.9 8.3Z"
],
  "0 0 24 24",
);

export const rosetteIcon = strokeIcon(
  [
  "M12 5a5 5 0 1 1 0 10a5 5 0 1 1 0 -10",
  "M9.5 15L8 21",
  "M14.5 15L16 21"
],
  "0 0 24 24",
);

export const engagementExtraIcons = defineIcons({
  "smile": smileIcon,
  "frown": frownIcon,
  "meh": mehIcon,
  "laugh": laughIcon,
  "wink": winkIcon,
  "hand-heart": handHeartIcon,
  "clap": clapIcon,
  "badge-star": badgeStarIcon,
  "bookmark-heart": bookmarkHeartIcon,
  "confetti": confettiIcon,
  "gem": gemIcon,
  "crown": crownIcon,
  "thumbs-up-fill": thumbsUpFillIcon,
  "thumbs-down-fill": thumbsDownFillIcon,
  "star-half": starHalfIcon,
  "rosette": rosetteIcon,
});
