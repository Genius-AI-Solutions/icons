import { defineIcons } from '../core/index';
import { strokeIcon } from './shared';

export const clipboardIcon = strokeIcon(
  [
  "M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2",
  "M15 2H9a1 1 0 00-1 1v2a1 1 0 001 1h6a1 1 0 001-1V3a1 1 0 00-1-1z"
],
  "0 0 24 24",
);

export const clipboardCopyIcon = strokeIcon(
  [
  "M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2",
  "M15 2H9a1 1 0 00-1 1v2a1 1 0 001 1h6a1 1 0 001-1V3a1 1 0 00-1-1z",
  "M10.5 10.5H16Q17 10.5 17 11.5V17Q17 18 16 18H10.5Q9.5 18 9.5 17V11.5Q9.5 10.5 10.5 10.5Z",
  "M8 8H13.5Q14.5 8 14.5 9V14.5Q14.5 15.5 13.5 15.5H8Q7 15.5 7 14.5V9Q7 8 8 8Z"
],
  "0 0 24 24",
);

export const clipboardPasteIcon = strokeIcon(
  [
  "M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2",
  "M15 2H9a1 1 0 00-1 1v2a1 1 0 001 1h6a1 1 0 001-1V3a1 1 0 00-1-1z",
  "M10 12.5H14Q15 12.5 15 13.5V17.5Q15 18.5 14 18.5H10Q9 18.5 9 17.5V13.5Q9 12.5 10 12.5Z",
  "M9 15.5L15 15.5"
],
  "0 0 24 24",
);

export const scissorsIcon = strokeIcon(
  [
  "M6.5 14.8a2.2 2.2 0 1 1 0 4.4a2.2 2.2 0 1 1 0 -4.4",
  "M10.5 14.8a2.2 2.2 0 1 1 0 4.4a2.2 2.2 0 1 1 0 -4.4",
  "M8 15.4L18.5 5.5",
  "M8.8 15.2L18.5 18.5"
],
  "0 0 24 24",
);

export const scanSearchIcon = strokeIcon(
  [
  "M6 5L6 8",
  "M6 5L9 5",
  "M18 5L15 5",
  "M18 5L18 8",
  "M6 19L6 16",
  "M6 19L9 19",
  "M18 19L15 19",
  "M18 19L18 16",
  "M12.3 10.1a2.2 2.2 0 1 1 0 4.4a2.2 2.2 0 1 1 0 -4.4",
  "M13.6 13.6L16.2 16.2"
],
  "0 0 24 24",
);

export const moveIcon = strokeIcon(
  [
  "M12 3L12 21",
  "M3 12L21 12",
  "M9 6L12 3L15 6",
  "M9 18L12 21L15 18",
  "M6 9L3 12L6 15",
  "M18 9L21 12L18 15"
],
  "0 0 24 24",
);

export const moveDiagonalIcon = strokeIcon(
  [
  "M5 19L19 5",
  "M5 5L19 19",
  "M5 10L5 5L10 5",
  "M14 19L19 19L19 14",
  "M14 5L19 5L19 10",
  "M5 14L5 19L10 19"
],
  "0 0 24 24",
);

export const replaceIcon = strokeIcon(
  [
  "M4 9L18 9",
  "M15 6L18 9L15 12",
  "M20 15L6 15",
  "M9 12L6 15L9 18"
],
  "0 0 24 24",
);

export const mergeIcon = strokeIcon(
  [
  "M6 6L12 12",
  "M6 18L12 12",
  "M12 12L18 12",
  "M6 5a1 1 0 1 1 0 2a1 1 0 1 1 0 -2",
  "M6 17a1 1 0 1 1 0 2a1 1 0 1 1 0 -2",
  "M18 11a1 1 0 1 1 0 2a1 1 0 1 1 0 -2"
],
  "0 0 24 24",
);

export const combineIcon = strokeIcon(
  [
  "M8 8a4 4 0 1 1 0 8a4 4 0 1 1 0 -8",
  "M16 8a4 4 0 1 1 0 8a4 4 0 1 1 0 -8"
],
  "0 0 24 24",
);

export const archiveIcon = strokeIcon(
  [
  "M6 5H18Q20 5 20 7V17Q20 19 18 19H6Q4 19 4 17V7Q4 5 6 5Z",
  "M4 9L20 9",
  "M10 13L14 13"
],
  "0 0 24 24",
);

export const archiveRestoreIcon = strokeIcon(
  [
  "M6 5H18Q20 5 20 7V17Q20 19 18 19H6Q4 19 4 17V7Q4 5 6 5Z",
  "M4 9L20 9",
  "M12 16L12 11",
  "M9 13L12 10L15 13"
],
  "0 0 24 24",
);

export const pinIcon = strokeIcon(
  [
  "M12 3L17 8L14.5 10.5L14.5 16L9.5 16L9.5 10.5L7 8Z",
  "M12 16L12 22"
],
  "0 0 24 24",
);

export const pinOffIcon = strokeIcon(
  [
  "M12 3L17 8L14.5 10.5L14.5 16L9.5 16L9.5 10.5L7 8Z",
  "M12 16L12 22",
  "M4 4L20 20"
],
  "0 0 24 24",
);

export const sendHorizontalIcon = strokeIcon(
  [
  "M3 12L21 12",
  "M21 12L12 7L12 17Z"
],
  "0 0 24 24",
);

export const importIcon = strokeIcon(
  [
  "M6 5H18Q20 5 20 7V17Q20 19 18 19H6Q4 19 4 17V7Q4 5 6 5Z",
  "M12 3L12 12",
  "M9 9L12 12L15 9"
],
  "0 0 24 24",
);

export const exportIcon = strokeIcon(
  [
  "M6 5H18Q20 5 20 7V17Q20 19 18 19H6Q4 19 4 17V7Q4 5 6 5Z",
  "M12 12L12 3",
  "M9 6L12 3L15 6"
],
  "0 0 24 24",
);

export const eraseIcon = strokeIcon(
  [
  "M9 5L19 15L14 20L4 10Z",
  "M13 18L20 18"
],
  "0 0 24 24",
);

export const replyIcon = strokeIcon(
  [
  "M20 18L10 18",
  "M10 18L10 13",
  "M6 16L10 12L14 16"
],
  "0 0 24 24",
);

export const forwardIcon = strokeIcon(
  [
  "M4 18L14 18",
  "M14 18L14 13",
  "M10 16L14 12L18 16"
],
  "0 0 24 24",
);

export const clipboardListIcon = strokeIcon(
  [
  "M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2",
  "M15 2H9a1 1 0 00-1 1v2a1 1 0 001 1h6a1 1 0 001-1V3a1 1 0 00-1-1z",
  "M8.5 9.9a0.6 0.6 0 1 1 0 1.2a0.6 0.6 0 1 1 0 -1.2",
  "M8.5 13.4a0.6 0.6 0 1 1 0 1.2a0.6 0.6 0 1 1 0 -1.2",
  "M8.5 16.9a0.6 0.6 0 1 1 0 1.2a0.6 0.6 0 1 1 0 -1.2",
  "M10.5 10.5L16 10.5",
  "M10.5 14L16 14",
  "M10.5 17.5L16 17.5"
],
  "0 0 24 24",
);

export const clipboardPenIcon = strokeIcon(
  [
  "M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2",
  "M15 2H9a1 1 0 00-1 1v2a1 1 0 001 1h6a1 1 0 001-1V3a1 1 0 00-1-1z",
  "M9 17L15.5 10.5",
  "M15.5 10.5L17.5 12.5",
  "M8 18L10.5 18.5"
],
  "0 0 24 24",
);

export const clipboardHeartIcon = strokeIcon(
  [
  "M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2",
  "M15 2H9a1 1 0 00-1 1v2a1 1 0 001 1h6a1 1 0 001-1V3a1 1 0 00-1-1z",
  "M12 16.71l-2.13 -1.95a1.7 1.7 0 012.4-2.4l0.09 0.09l0.09 -0.09a1.7 1.7 0 012.4 2.4z"
],
  "0 0 24 24",
);

export const clipboardPulseIcon = strokeIcon(
  [
  "M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2",
  "M15 2H9a1 1 0 00-1 1v2a1 1 0 001 1h6a1 1 0 001-1V3a1 1 0 00-1-1z",
  "M7.5 14L9.5 14",
  "M9.5 14L11 11.2",
  "M11 11.2L12.5 17",
  "M12.5 17L14.2 12.8",
  "M14.2 12.8L16.5 12.8"
],
  "0 0 24 24",
);

export const actionExtraIcons = defineIcons({
  "clipboard": clipboardIcon,
  "clipboard-copy": clipboardCopyIcon,
  "clipboard-paste": clipboardPasteIcon,
  "scissors": scissorsIcon,
  "scan-search": scanSearchIcon,
  "move": moveIcon,
  "move-diagonal": moveDiagonalIcon,
  "replace": replaceIcon,
  "merge": mergeIcon,
  "combine": combineIcon,
  "archive": archiveIcon,
  "archive-restore": archiveRestoreIcon,
  "pin": pinIcon,
  "pin-off": pinOffIcon,
  "send-horizontal": sendHorizontalIcon,
  "import": importIcon,
  "export": exportIcon,
  "erase": eraseIcon,
  "reply": replyIcon,
  "forward": forwardIcon,
  "clipboard-list": clipboardListIcon,
  "clipboard-pen": clipboardPenIcon,
  "clipboard-heart": clipboardHeartIcon,
  "clipboard-pulse": clipboardPulseIcon,
});
