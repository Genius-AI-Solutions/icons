import { defineIcons } from '../core/index';
import { strokeIcon } from './shared';

export const duplicateIcon = strokeIcon(
  [
  "M8 6H14Q16 6 16 8V14Q16 16 14 16H8Q6 16 6 14V8Q6 6 8 6Z",
  "M11 9H17Q19 9 19 11V17Q19 19 17 19H11Q9 19 9 17V11Q9 9 11 9Z"
],
  "0 0 24 24",
);

export const duplicatePlusIcon = strokeIcon(
  [
  "M8 6H14Q16 6 16 8V14Q16 16 14 16H8Q6 16 6 14V8Q6 6 8 6Z",
  "M11 9H17Q19 9 19 11V17Q19 19 17 19H11Q9 19 9 17V11Q9 9 11 9Z",
  "M15.8 17L18.2 17",
  "M17 15.8L17 18.2"
],
  "0 0 24 24",
);

export const resizeIcon = strokeIcon(
  [
  "M7 5H17Q19 5 19 7V17Q19 19 17 19H7Q5 19 5 17V7Q5 5 7 5Z",
  "M9 15L15 9",
  "M12 9L15 9L15 12",
  "M9 12L9 15L12 15"
],
  "0 0 24 24",
);

export const resizeHorizontalIcon = strokeIcon(
  [
  "M6 7H18Q20 7 20 9V15Q20 17 18 17H6Q4 17 4 15V9Q4 7 6 7Z",
  "M4 12L20 12",
  "M8 9L4 12L8 15",
  "M16 9L20 12L16 15"
],
  "0 0 24 24",
);

export const resizeVerticalIcon = strokeIcon(
  [
  "M9 4H15Q17 4 17 6V18Q17 20 15 20H9Q7 20 7 18V6Q7 4 9 4Z",
  "M12 4L12 20",
  "M9 8L12 4L15 8",
  "M9 16L12 20L15 16"
],
  "0 0 24 24",
);

export const selectAllIcon = strokeIcon(
  [
  "M7 5H17Q19 5 19 7V17Q19 19 17 19H7Q5 19 5 17V7Q5 5 7 5Z",
  "M8 8L16 8",
  "M8 12L16 12",
  "M8 16L16 16",
  "M8 8L8 16",
  "M16 8L16 16"
],
  "0 0 24 24",
);

export const deselectIcon = strokeIcon(
  [
  "M7 5H17Q19 5 19 7V17Q19 19 17 19H7Q5 19 5 17V7Q5 5 7 5Z",
  "M4 20L20 4"
],
  "0 0 24 24",
);

export const flipHorizontalIcon = strokeIcon(
  [
  "M12 4L12 20",
  "M4 7L10 12L4 17Z",
  "M20 7L14 12L20 17Z"
],
  "0 0 24 24",
);

export const flipVerticalIcon = strokeIcon(
  [
  "M4 12L20 12",
  "M7 4L12 10L17 4Z",
  "M7 20L12 14L17 20Z"
],
  "0 0 24 24",
);

export const bringForwardIcon = strokeIcon(
  [
  "M7.5 8H14.5Q16 8 16 9.5V16.5Q16 18 14.5 18H7.5Q6 18 6 16.5V9.5Q6 8 7.5 8Z",
  "M11.5 4H16.5Q18 4 18 5.5V10.5Q18 12 16.5 12H11.5Q10 12 10 10.5V5.5Q10 4 11.5 4Z",
  "M18 7L20 5L18 3"
],
  "0 0 24 24",
);

export const bringToFrontIcon = strokeIcon(
  [
  "M6.5 9H13.5Q15 9 15 10.5V17.5Q15 19 13.5 19H6.5Q5 19 5 17.5V10.5Q5 9 6.5 9Z",
  "M10.5 5H17.5Q19 5 19 6.5V13.5Q19 15 17.5 15H10.5Q9 15 9 13.5V6.5Q9 5 10.5 5Z",
  "M19 8L21 6L19 4"
],
  "0 0 24 24",
);

export const sendBackwardIcon = strokeIcon(
  [
  "M9.5 6H16.5Q18 6 18 7.5V14.5Q18 16 16.5 16H9.5Q8 16 8 14.5V7.5Q8 6 9.5 6Z",
  "M5.5 10H10.5Q12 10 12 11.5V16.5Q12 18 10.5 18H5.5Q4 18 4 16.5V11.5Q4 10 5.5 10Z",
  "M4 17L2 19L4 21"
],
  "0 0 24 24",
);

export const sendToBackIcon = strokeIcon(
  [
  "M10.5 5H17.5Q19 5 19 6.5V13.5Q19 15 17.5 15H10.5Q9 15 9 13.5V6.5Q9 5 10.5 5Z",
  "M6.5 9H13.5Q15 9 15 10.5V17.5Q15 19 13.5 19H6.5Q5 19 5 17.5V10.5Q5 9 6.5 9Z",
  "M5 18L3 20L5 22"
],
  "0 0 24 24",
);

export const maskIcon = strokeIcon(
  [
  "M7 5H17Q19 5 19 7V17Q19 19 17 19H7Q5 19 5 17V7Q5 5 7 5Z",
  "M10 8.5a3.5 3.5 0 1 1 0 7a3.5 3.5 0 1 1 0 -7",
  "M14 8.5a3.5 3.5 0 1 1 0 7a3.5 3.5 0 1 1 0 -7"
],
  "0 0 24 24",
);

export const unmaskIcon = strokeIcon(
  [
  "M7 5H17Q19 5 19 7V17Q19 19 17 19H7Q5 19 5 17V7Q5 5 7 5Z",
  "M9.5 8.8a3.2 3.2 0 1 1 0 6.4a3.2 3.2 0 1 1 0 -6.4",
  "M14.5 8.8a3.2 3.2 0 1 1 0 6.4a3.2 3.2 0 1 1 0 -6.4",
  "M4 20L20 4"
],
  "0 0 24 24",
);

export const lockAspectIcon = strokeIcon(
  [
  "M7 5H17Q19 5 19 7V17Q19 19 17 19H7Q5 19 5 17V7Q5 5 7 5Z",
  "M5 9L9 9",
  "M15 15L19 15",
  "M15 15L15 19",
  "M14.4 7.8H17.6Q18.6 7.8 18.6 8.8V11.1Q18.6 12.1 17.6 12.1H14.4Q13.4 12.1 13.4 11.1V8.8Q13.4 7.8 14.4 7.8Z",
  "M14.4 7.8V6a1.6 1.6 0 013.2 0v1.8"
],
  "0 0 24 24",
);

export const unlockAspectIcon = strokeIcon(
  [
  "M7 5H17Q19 5 19 7V17Q19 19 17 19H7Q5 19 5 17V7Q5 5 7 5Z",
  "M5 9L9 9",
  "M15 15L19 15",
  "M15 15L15 19",
  "M14.5 6.8H17.5Q18.5 6.8 18.5 7.8V9.6Q18.5 10.6 17.5 10.6H14.5Q13.5 10.6 13.5 9.6V7.8Q13.5 6.8 14.5 6.8Z",
  "M14.5 6.8L14.5 5.2",
  "M14.5 5.2Q16 3.7 17.5 5.2"
],
  "0 0 24 24",
);

export const copyStyleIcon = strokeIcon(
  [
  "M7 16L12 5L16 9L11 20Z",
  "M9.5 14.5L14.5 9.5",
  "M6 19L18 19"
],
  "0 0 24 24",
);

export const pasteStyleIcon = strokeIcon(
  [
  "M7 16L12 5L16 9L11 20Z",
  "M9.5 14.5L14.5 9.5",
  "M15 4H19Q20 4 20 5V9Q20 10 19 10H15Q14 10 14 9V5Q14 4 15 4Z",
  "M16 6L18 6"
],
  "0 0 24 24",
);

export const clearFormattingIcon = strokeIcon(
  [
  "M7 16L12 5L16 9L11 20Z",
  "M9.5 14.5L14.5 9.5",
  "M5 5L19 19"
],
  "0 0 24 24",
);

export const resetLayoutIcon = strokeIcon(
  [
  "M7 5H17Q19 5 19 7V17Q19 19 17 19H7Q5 19 5 17V7Q5 5 7 5Z",
  "M12 8L12 16",
  "M9 11L12 8L15 11"
],
  "0 0 24 24",
);

export const applyIcon = strokeIcon(
  [
  "M7 5H17Q19 5 19 7V17Q19 19 17 19H7Q5 19 5 17V7Q5 5 7 5Z",
  "M8 12L11 15L16 9"
],
  "0 0 24 24",
);

export const actionUiIcons = defineIcons({
  "duplicate": duplicateIcon,
  "duplicate-plus": duplicatePlusIcon,
  "resize": resizeIcon,
  "resize-horizontal": resizeHorizontalIcon,
  "resize-vertical": resizeVerticalIcon,
  "select-all": selectAllIcon,
  "deselect": deselectIcon,
  "flip-horizontal": flipHorizontalIcon,
  "flip-vertical": flipVerticalIcon,
  "bring-forward": bringForwardIcon,
  "bring-to-front": bringToFrontIcon,
  "send-backward": sendBackwardIcon,
  "send-to-back": sendToBackIcon,
  "mask": maskIcon,
  "unmask": unmaskIcon,
  "lock-aspect": lockAspectIcon,
  "unlock-aspect": unlockAspectIcon,
  "copy-style": copyStyleIcon,
  "paste-style": pasteStyleIcon,
  "clear-formatting": clearFormattingIcon,
  "reset-layout": resetLayoutIcon,
  "apply": applyIcon,
});
