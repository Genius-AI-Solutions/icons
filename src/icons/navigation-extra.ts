import { defineIcons } from '../core/index';
import { strokeIcon } from './shared';

export const arrowUpIcon = strokeIcon(
  [
  "M12 19L12 5",
  "M5 12L12 5L19 12"
],
  "0 0 24 24",
);

export const arrowDownIcon = strokeIcon(
  [
  "M12 5L12 19",
  "M5 12L12 19L19 12"
],
  "0 0 24 24",
);

export const arrowUpLeftIcon = strokeIcon(
  [
  "M18 18L6 6",
  "M6 12L6 6L12 6"
],
  "0 0 24 24",
);

export const arrowDownLeftIcon = strokeIcon(
  [
  "M18 6L6 18",
  "M6 12L6 18L12 18"
],
  "0 0 24 24",
);

export const arrowDownRightIcon = strokeIcon(
  [
  "M6 6L18 18",
  "M12 18L18 18L18 12"
],
  "0 0 24 24",
);

export const chevronsLeftIcon = strokeIcon(
  [
  "M15 6L9 12L15 18",
  "M21 6L15 12L21 18"
],
  "0 0 24 24",
);

export const chevronsUpIcon = strokeIcon(
  [
  "M6 15L12 9L18 15",
  "M6 21L12 15L18 21"
],
  "0 0 24 24",
);

export const chevronsDownIcon = strokeIcon(
  [
  "M6 9L12 15L18 9",
  "M6 3L12 9L18 3"
],
  "0 0 24 24",
);

export const moveLeftIcon = strokeIcon(
  [
  "M20 12L4 12",
  "M8 8L4 12L8 16"
],
  "0 0 24 24",
);

export const moveRightIcon = strokeIcon(
  [
  "M4 12L20 12",
  "M16 8L20 12L16 16"
],
  "0 0 24 24",
);

export const moveUpIcon = strokeIcon(
  [
  "M12 20L12 4",
  "M8 8L12 4L16 8"
],
  "0 0 24 24",
);

export const moveDownIcon = strokeIcon(
  [
  "M12 4L12 20",
  "M8 16L12 20L16 16"
],
  "0 0 24 24",
);

export const routeIcon = strokeIcon(
  [
  "M5 6.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 1 1 0 -3",
  "M19 16.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 1 1 0 -3",
  "M6.5 8.5Q13 5 11.5 12",
  "M11.5 12Q10.5 18 17.5 17.5"
],
  "0 0 24 24",
);

export const compassIcon = strokeIcon(
  [
  "M12 3a9 9 0 1 1 0 18a9 9 0 1 1 0 -18",
  "M14 10L18 6L14 14L6 18Z"
],
  "0 0 24 24",
);

export const locateIcon = strokeIcon(
  [
  "M12 6a6 6 0 1 1 0 12a6 6 0 1 1 0 -12",
  "M12 2L12 5",
  "M12 19L12 22",
  "M2 12L5 12",
  "M19 12L22 12",
  "M12 10.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 1 1 0 -3"
],
  "0 0 24 24",
);

export const mapIcon = strokeIcon(
  [
  "M4 5L9 3L15 5L20 3L20 19L15 21L9 19L4 21Z",
  "M9 3L9 19",
  "M15 5L15 21"
],
  "0 0 24 24",
);

export const signpostIcon = strokeIcon(
  [
  "M12 2L12 22",
  "M12 5L20 5L17 9L12 9Z",
  "M12 11L4 11L7 15L12 15Z"
],
  "0 0 24 24",
);

export const navigationPointerIcon = strokeIcon(
  "M4 20L20 12L4 4L8 12Z",
  "0 0 24 24",
);

export const navigationExtraIcons = defineIcons({
  "arrow-up": arrowUpIcon,
  "arrow-down": arrowDownIcon,
  "arrow-up-left": arrowUpLeftIcon,
  "arrow-down-left": arrowDownLeftIcon,
  "arrow-down-right": arrowDownRightIcon,
  "chevrons-left": chevronsLeftIcon,
  "chevrons-up": chevronsUpIcon,
  "chevrons-down": chevronsDownIcon,
  "move-left": moveLeftIcon,
  "move-right": moveRightIcon,
  "move-up": moveUpIcon,
  "move-down": moveDownIcon,
  "route": routeIcon,
  "compass": compassIcon,
  "locate": locateIcon,
  "map": mapIcon,
  "signpost": signpostIcon,
  "navigation-pointer": navigationPointerIcon,
});
