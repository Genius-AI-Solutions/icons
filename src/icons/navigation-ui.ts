import { defineIcons } from '../core/index';
import { strokeIcon } from './shared';

export const chevronUpDownIcon = strokeIcon(
  [
  "M8 11L12 7L16 11",
  "M8 13L12 17L16 13"
],
  "0 0 24 24",
);

export const chevronLeftRightIcon = strokeIcon(
  [
  "M11 8L7 12L11 16",
  "M13 8L17 12L13 16"
],
  "0 0 24 24",
);

export const arrowUpDownIcon = strokeIcon(
  [
  "M12 4L12 20",
  "M8 8L12 4L16 8",
  "M8 16L12 20L16 16"
],
  "0 0 24 24",
);

export const arrowLeftRightIcon = strokeIcon(
  [
  "M4 12L20 12",
  "M8 8L4 12L8 16",
  "M16 8L20 12L16 16"
],
  "0 0 24 24",
);

export const cornerUpLeftIcon = strokeIcon(
  [
  "M6 18L6 6",
  "M6 6L18 6",
  "M10 2L6 6L10 10"
],
  "0 0 24 24",
);

export const cornerUpRightIcon = strokeIcon(
  [
  "M18 18L18 6",
  "M6 6L18 6",
  "M14 2L18 6L14 10"
],
  "0 0 24 24",
);

export const cornerDownLeftIcon = strokeIcon(
  [
  "M6 6L6 18",
  "M6 18L18 18",
  "M10 14L6 18L10 22"
],
  "0 0 24 24",
);

export const cornerDownRightIcon = strokeIcon(
  [
  "M18 6L18 18",
  "M6 18L18 18",
  "M14 14L18 18L14 22"
],
  "0 0 24 24",
);

export const firstPageIcon = strokeIcon(
  [
  "M6 5L6 19",
  "M18 5L10 12L18 19Z"
],
  "0 0 24 24",
);

export const lastPageIcon = strokeIcon(
  [
  "M18 5L18 19",
  "M6 5L14 12L6 19Z"
],
  "0 0 24 24",
);

export const expandHorizontalIcon = strokeIcon(
  [
  "M4 12L20 12",
  "M8 8L4 12L8 16",
  "M16 8L20 12L16 16",
  "M12 7L12 17"
],
  "0 0 24 24",
);

export const expandVerticalIcon = strokeIcon(
  [
  "M12 4L12 20",
  "M8 8L12 4L16 8",
  "M8 16L12 20L16 16",
  "M7 12L17 12"
],
  "0 0 24 24",
);

export const collapseHorizontalIcon = strokeIcon(
  [
  "M8 8L12 12L8 16",
  "M16 8L12 12L16 16",
  "M4 12L8 12",
  "M16 12L20 12"
],
  "0 0 24 24",
);

export const collapseVerticalIcon = strokeIcon(
  [
  "M8 8L12 12L16 8",
  "M8 16L12 12L16 16",
  "M12 4L12 8",
  "M12 16L12 20"
],
  "0 0 24 24",
);

export const dragHandleIcon = strokeIcon(
  [
  "M8 7.2a0.8 0.8 0 1 1 0 1.6a0.8 0.8 0 1 1 0 -1.6",
  "M12 7.2a0.8 0.8 0 1 1 0 1.6a0.8 0.8 0 1 1 0 -1.6",
  "M16 7.2a0.8 0.8 0 1 1 0 1.6a0.8 0.8 0 1 1 0 -1.6",
  "M8 11.2a0.8 0.8 0 1 1 0 1.6a0.8 0.8 0 1 1 0 -1.6",
  "M12 11.2a0.8 0.8 0 1 1 0 1.6a0.8 0.8 0 1 1 0 -1.6",
  "M16 11.2a0.8 0.8 0 1 1 0 1.6a0.8 0.8 0 1 1 0 -1.6",
  "M8 15.2a0.8 0.8 0 1 1 0 1.6a0.8 0.8 0 1 1 0 -1.6",
  "M12 15.2a0.8 0.8 0 1 1 0 1.6a0.8 0.8 0 1 1 0 -1.6",
  "M16 15.2a0.8 0.8 0 1 1 0 1.6a0.8 0.8 0 1 1 0 -1.6"
],
  "0 0 24 24",
);

export const dragHandleHorizontalIcon = strokeIcon(
  [
  "M7 11.2a0.8 0.8 0 1 1 0 1.6a0.8 0.8 0 1 1 0 -1.6",
  "M12 11.2a0.8 0.8 0 1 1 0 1.6a0.8 0.8 0 1 1 0 -1.6",
  "M17 11.2a0.8 0.8 0 1 1 0 1.6a0.8 0.8 0 1 1 0 -1.6"
],
  "0 0 24 24",
);

export const dragHandleVerticalIcon = strokeIcon(
  [
  "M12 6.2a0.8 0.8 0 1 1 0 1.6a0.8 0.8 0 1 1 0 -1.6",
  "M12 11.2a0.8 0.8 0 1 1 0 1.6a0.8 0.8 0 1 1 0 -1.6",
  "M12 16.2a0.8 0.8 0 1 1 0 1.6a0.8 0.8 0 1 1 0 -1.6"
],
  "0 0 24 24",
);

export const navigateFitIcon = strokeIcon(
  [
  "M6 4H18Q20 4 20 6V18Q20 20 18 20H6Q4 20 4 18V6Q4 4 6 4Z",
  "M9 9L15 9",
  "M15 9L15 15",
  "M15 15L9 15",
  "M9 15L9 9"
],
  "0 0 24 24",
);

export const navigationUiIcons = defineIcons({
  "chevron-up-down": chevronUpDownIcon,
  "chevron-left-right": chevronLeftRightIcon,
  "arrow-up-down": arrowUpDownIcon,
  "arrow-left-right": arrowLeftRightIcon,
  "corner-up-left": cornerUpLeftIcon,
  "corner-up-right": cornerUpRightIcon,
  "corner-down-left": cornerDownLeftIcon,
  "corner-down-right": cornerDownRightIcon,
  "first-page": firstPageIcon,
  "last-page": lastPageIcon,
  "expand-horizontal": expandHorizontalIcon,
  "expand-vertical": expandVerticalIcon,
  "collapse-horizontal": collapseHorizontalIcon,
  "collapse-vertical": collapseVerticalIcon,
  "drag-handle": dragHandleIcon,
  "drag-handle-horizontal": dragHandleHorizontalIcon,
  "drag-handle-vertical": dragHandleVerticalIcon,
  "navigate-fit": navigateFitIcon,
});
