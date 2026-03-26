import { defineIcons } from '../core/index';
import { strokeIcon } from './shared';

export const plusCircleIcon = strokeIcon(
  [
  "M12 3a9 9 0 1 1 0 18a9 9 0 1 1 0 -18",
  "M9 12L15 12",
  "M12 9L12 15"
],
  "0 0 24 24",
);

export const minusCircleIcon = strokeIcon(
  [
  "M12 3a9 9 0 1 1 0 18a9 9 0 1 1 0 -18",
  "M9 12L15 12"
],
  "0 0 24 24",
);

export const helpSquareIcon = strokeIcon(
  [
  "M6 4H18Q20 4 20 6V18Q20 20 18 20H6Q4 20 4 18V6Q4 4 6 4Z",
  "M10 10L10 10",
  "M9 8Q15 8 15 11",
  "M15 13Q12 13 12 17"
],
  "0 0 24 24",
);

export const infoSquareIcon = strokeIcon(
  [
  "M6 4H18Q20 4 20 6V18Q20 20 18 20H6Q4 20 4 18V6Q4 4 6 4Z",
  "M12 10L12 16",
  "M12 7L12 7"
],
  "0 0 24 24",
);

export const checkSquare2Icon = strokeIcon(
  [
  "M6 4H18Q20 4 20 6V18Q20 20 18 20H6Q4 20 4 18V6Q4 4 6 4Z",
  "M8 12L11 15L16 9"
],
  "0 0 24 24",
);

export const xSquareIcon = strokeIcon(
  [
  "M6 4H18Q20 4 20 6V18Q20 20 18 20H6Q4 20 4 18V6Q4 4 6 4Z",
  "M9 9L15 15",
  "M15 9L9 15"
],
  "0 0 24 24",
);

export const alertSquareIcon = strokeIcon(
  [
  "M6 4H18Q20 4 20 6V18Q20 20 18 20H6Q4 20 4 18V6Q4 4 6 4Z",
  "M12 8L12 13",
  "M12 16L12 16"
],
  "0 0 24 24",
);

export const shieldOffIcon = strokeIcon(
  [
  "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  "M4 4L20 20"
],
  "0 0 24 24",
);

export const bellOffIcon = strokeIcon(
  [
  "M6 9A6 6 0 0 1 18 9",
  "M18 9L18 15",
  "M6 9L6 15",
  "M4 17L20 17",
  "M11 20L13 20",
  "M4 4L20 20"
],
  "0 0 24 24",
);

export const bellRingIcon = strokeIcon(
  [
  "M6 9A6 6 0 0 1 18 9",
  "M18 9L18 15",
  "M6 9L6 15",
  "M4 17L20 17",
  "M11 20L13 20",
  "M3 9L5 7",
  "M19 7L21 9"
],
  "0 0 24 24",
);

export const badgeMinusIcon = strokeIcon(
  [
  "M12 3.5a8.5 8.5 0 1 1 0 17a8.5 8.5 0 1 1 0 -17",
  "M9.6 12L14.4 12"
],
  "0 0 24 24",
);

export const badgePlusIcon = strokeIcon(
  [
  "M12 3.5a8.5 8.5 0 1 1 0 17a8.5 8.5 0 1 1 0 -17",
  "M9.6 12L14.4 12",
  "M12 9.6L12 14.4"
],
  "0 0 24 24",
);

export const badgeHelpIcon = strokeIcon(
  [
  "M12 3.5a8.5 8.5 0 1 1 0 17a8.5 8.5 0 1 1 0 -17",
  "M12 15.6L12 15.6",
  "M10 9Q14 9 14 11.5",
  "M14 13Q12 13 12 15"
],
  "0 0 24 24",
);

export const badgeXIcon = strokeIcon(
  [
  "M12 3.5a8.5 8.5 0 1 1 0 17a8.5 8.5 0 1 1 0 -17",
  "M9.8 9.8L14.2 14.2",
  "M14.2 9.8L9.8 14.2"
],
  "0 0 24 24",
);

export const statusDraftIcon = strokeIcon(
  [
  "M6 7H18Q20 7 20 9V15Q20 17 18 17H6Q4 17 4 15V9Q4 7 6 7Z",
  "M8 12L16 12",
  "M8 15L13 15"
],
  "0 0 24 24",
);

export const statusArchivedIcon = strokeIcon(
  [
  "M6 7H18Q20 7 20 9V15Q20 17 18 17H6Q4 17 4 15V9Q4 7 6 7Z",
  "M8 11L16 11",
  "M10 14L14 14"
],
  "0 0 24 24",
);

export const statusParityIcons = defineIcons({
  "plus-circle": plusCircleIcon,
  "minus-circle": minusCircleIcon,
  "help-square": helpSquareIcon,
  "info-square": infoSquareIcon,
  "check-square-2": checkSquare2Icon,
  "x-square": xSquareIcon,
  "alert-square": alertSquareIcon,
  "shield-off": shieldOffIcon,
  "bell-off": bellOffIcon,
  "bell-ring": bellRingIcon,
  "badge-minus": badgeMinusIcon,
  "badge-plus": badgePlusIcon,
  "badge-help": badgeHelpIcon,
  "badge-x": badgeXIcon,
  "status-draft": statusDraftIcon,
  "status-archived": statusArchivedIcon,
});
