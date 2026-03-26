import { defineIcons } from '../core/index';
import { strokeIcon } from './shared';

export const crosshairIcon = strokeIcon(
  [
  "M12 3L12 8",
  "M12 16L12 21",
  "M3 12L8 12",
  "M16 12L21 12",
  "M12 8.5a3.5 3.5 0 1 1 0 7a3.5 3.5 0 1 1 0 -7"
],
  "0 0 24 24",
);

export const radarIcon = strokeIcon(
  [
  "M12 3a9 9 0 1 1 0 18a9 9 0 1 1 0 -18",
  "M12 3A9 9 0 0 1 21 12",
  "M12 6A6 6 0 0 1 18 12",
  "M12 12L17 7"
],
  "0 0 24 24",
);

export const mapPinPlusIcon = strokeIcon(
  [
  "M12 21s5-5.5 5-10a5 5 0 1 0-10 0c0 4.5 5 10 5 10Z",
  "M12 8.2a1.8 1.8 0 1 1 0 3.6a1.8 1.8 0 1 1 0 -3.6",
  "M10.2 10L13.8 10",
  "M12 8.2L12 11.8"
],
  "0 0 24 24",
);

export const mapPinMinusIcon = strokeIcon(
  [
  "M12 21s5-5.5 5-10a5 5 0 1 0-10 0c0 4.5 5 10 5 10Z",
  "M12 8.2a1.8 1.8 0 1 1 0 3.6a1.8 1.8 0 1 1 0 -3.6",
  "M10.2 10L13.8 10"
],
  "0 0 24 24",
);

export const routeLoopIcon = strokeIcon(
  [
  "M6 6.9a1.1 1.1 0 1 1 0 2.2a1.1 1.1 0 1 1 0 -2.2",
  "M18 6.9a1.1 1.1 0 1 1 0 2.2a1.1 1.1 0 1 1 0 -2.2",
  "M12 16.9a1.1 1.1 0 1 1 0 2.2a1.1 1.1 0 1 1 0 -2.2",
  "M7 8Q12 3 17 8",
  "M18 9Q18 16 12 18",
  "M12 18Q6 16 6 9"
],
  "0 0 24 24",
);

export const routeOffIcon = strokeIcon(
  [
  "M6 6.9a1.1 1.1 0 1 1 0 2.2a1.1 1.1 0 1 1 0 -2.2",
  "M18 14.9a1.1 1.1 0 1 1 0 2.2a1.1 1.1 0 1 1 0 -2.2",
  "M7 8Q12 4 17 9",
  "M4 4L20 20"
],
  "0 0 24 24",
);

export const waypointsIcon = strokeIcon(
  [
  "M5 5.8a1.2 1.2 0 1 1 0 2.4a1.2 1.2 0 1 1 0 -2.4",
  "M19 5.8a1.2 1.2 0 1 1 0 2.4a1.2 1.2 0 1 1 0 -2.4",
  "M12 16.8a1.2 1.2 0 1 1 0 2.4a1.2 1.2 0 1 1 0 -2.4",
  "M6.2 7L17.8 7",
  "M12 17L12 8.2"
],
  "0 0 24 24",
);

export const flagCheckeredIcon = strokeIcon(
  [
  "M6 3L6 21",
  "M8 5H16Q17 5 17 6V12Q17 13 16 13H8Q7 13 7 12V6Q7 5 8 5Z",
  "M7 9L17 9",
  "M12 5L12 13"
],
  "0 0 24 24",
);

export const turnLeftIcon = strokeIcon(
  [
  "M18 7L10 7",
  "M10 7L10 17",
  "M13 10L10 7L7 10"
],
  "0 0 24 24",
);

export const turnRightIcon = strokeIcon(
  [
  "M6 7L14 7",
  "M14 7L14 17",
  "M11 10L14 7L17 10"
],
  "0 0 24 24",
);

export const uTurnLeftIcon = strokeIcon(
  [
  "M18 6L10 6",
  "M10 6A4 5 0 0 1 10 18",
  "M10 18L4 18",
  "M7 15L4 18L7 21"
],
  "0 0 24 24",
);

export const uTurnRightIcon = strokeIcon(
  [
  "M6 6L14 6",
  "M14 6A4 5 0 0 1 14 18",
  "M14 18L20 18",
  "M17 15L20 18L17 21"
],
  "0 0 24 24",
);

export const focusIcon = strokeIcon(
  [
  "M5 9L5 5",
  "M5 5L9 5",
  "M19 9L19 5",
  "M19 5L15 5",
  "M5 15L5 19",
  "M5 19L9 19",
  "M19 15L19 19",
  "M19 19L15 19"
],
  "0 0 24 24",
);

export const focusOffIcon = strokeIcon(
  [
  "M5 9L5 5",
  "M5 5L9 5",
  "M19 9L19 5",
  "M19 5L15 5",
  "M5 15L5 19",
  "M5 19L9 19",
  "M19 15L19 19",
  "M19 19L15 19",
  "M4 4L20 20"
],
  "0 0 24 24",
);

export const globeLockIcon = strokeIcon(
  [
  "M11 4a7 7 0 1 1 0 14a7 7 0 1 1 0 -14",
  "M4 11L18 11",
  "M11 4a3 7 0 1 1 0 14a3 7 0 1 1 0 -14",
  "M15.7 14.5H19.3Q20.5 14.5 20.5 15.7V18.8Q20.5 20 19.3 20H15.7Q14.5 20 14.5 18.8V15.7Q14.5 14.5 15.7 14.5Z",
  "M16 14.5A1.5 1.5 0 0 1 19 14.5"
],
  "0 0 24 24",
);

export const mapPlusIcon = strokeIcon(
  [
  "M4 5L9 3L15 5L20 3L20 19L15 21L9 19L4 21Z",
  "M9 3L9 19",
  "M15 5L15 21",
  "M15.6 16.5L18.4 16.5",
  "M17 15.1L17 17.9"
],
  "0 0 24 24",
);

export const milestoneIcon = strokeIcon(
  [
  "M12 3L12 21",
  "M9 8H15Q16 8 16 9V12Q16 13 15 13H9Q8 13 8 12V9Q8 8 9 8Z",
  "M11.16 10.01L11.8 9.47L11.8 13",
  "M11.16 13L12.44 13"
],
  "0 0 24 24",
);

export const navigationParityIcons = defineIcons({
  "crosshair": crosshairIcon,
  "radar": radarIcon,
  "map-pin-plus": mapPinPlusIcon,
  "map-pin-minus": mapPinMinusIcon,
  "route-loop": routeLoopIcon,
  "route-off": routeOffIcon,
  "waypoints": waypointsIcon,
  "flag-checkered": flagCheckeredIcon,
  "turn-left": turnLeftIcon,
  "turn-right": turnRightIcon,
  "u-turn-left": uTurnLeftIcon,
  "u-turn-right": uTurnRightIcon,
  "focus": focusIcon,
  "focus-off": focusOffIcon,
  "globe-lock": globeLockIcon,
  "map-plus": mapPlusIcon,
  "milestone": milestoneIcon,
});
