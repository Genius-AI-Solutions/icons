import { defineIcons } from '../core/index';
import { strokeIcon } from './shared';

export const textIcon = strokeIcon(
  [
  "M5 8L19 8",
  "M8 8L8 18",
  "M16 8L16 18",
  "M8 18L16 18"
],
  "0 0 24 24",
);

export const textCursorIcon = strokeIcon(
  [
  "M5 7L19 7",
  "M12 7L12 19",
  "M5 19L19 19"
],
  "0 0 24 24",
);

export const typeIcon = strokeIcon(
  [
  "M4 6L20 6",
  "M12 6L12 20"
],
  "0 0 24 24",
);

export const pilcrowIcon = strokeIcon(
  [
  "M12 4L12 20",
  "M15 4L15 20",
  "M12 4Q7 4 7 9",
  "M7 9Q7 14 12 14"
],
  "0 0 24 24",
);

export const headingIcon = strokeIcon(
  [
  "M5 4L5 20",
  "M11 4L11 20",
  "M5 12L11 12",
  "M15 20L15 10",
  "M15 10L19 10"
],
  "0 0 24 24",
);

export const listTodoIcon = strokeIcon(
  [
  "M5 5.8a1.2 1.2 0 1 1 0 2.4a1.2 1.2 0 1 1 0 -2.4",
  "M8 7L19 7",
  "M5 10.8a1.2 1.2 0 1 1 0 2.4a1.2 1.2 0 1 1 0 -2.4",
  "M8 12L19 12",
  "M5 15.8a1.2 1.2 0 1 1 0 2.4a1.2 1.2 0 1 1 0 -2.4",
  "M4.2 17L5 17.8L6.4 16.4",
  "M8 17L19 17"
],
  "0 0 24 24",
);

export const listFilterIcon = strokeIcon(
  [
  "M4 7L20 7",
  "M4 12L16 12",
  "M4 17L12 17",
  "M17 10L20 14L14 14"
],
  "0 0 24 24",
);

export const columnsIcon = strokeIcon(
  [
  "M5.5 5H8.5Q10 5 10 6.5V17.5Q10 19 8.5 19H5.5Q4 19 4 17.5V6.5Q4 5 5.5 5Z",
  "M15.5 5H18.5Q20 5 20 6.5V17.5Q20 19 18.5 19H15.5Q14 19 14 17.5V6.5Q14 5 15.5 5Z"
],
  "0 0 24 24",
);

export const separatorsHorizontalIcon = strokeIcon(
  [
  "M4 8L20 8",
  "M4 16L20 16",
  "M8 11L16 11",
  "M8 13L16 13"
],
  "0 0 24 24",
);

export const separatorsVerticalIcon = strokeIcon(
  [
  "M8 4L8 20",
  "M16 4L16 20",
  "M11 8L11 16",
  "M13 8L13 16"
],
  "0 0 24 24",
);

export const stickyNotePlusIcon = strokeIcon(
  [
  "M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z",
  "M13 2v7h7",
  "M10.8 15.5L15.2 15.5",
  "M13 13.3L13 17.7"
],
  "0 0 24 24",
);

export const kanbanSquareIcon = strokeIcon(
  [
  "M6 4H18Q20 4 20 6V18Q20 20 18 20H6Q4 20 4 18V6Q4 4 6 4Z",
  "M7.6 7H9.2Q9.8 7 9.8 7.6V14.4Q9.8 15 9.2 15H7.6Q7 15 7 14.4V7.6Q7 7 7.6 7Z",
  "M12.35 7H13.95Q14.55 7 14.55 7.6V9.6Q14.55 10.2 13.95 10.2H12.35Q11.75 10.2 11.75 9.6V7.6Q11.75 7 12.35 7Z",
  "M16.8 7H18.4Q19 7 19 7.6V16.4Q19 17 18.4 17H16.8Q16.2 17 16.2 16.4V7.6Q16.2 7 16.8 7Z"
],
  "0 0 24 24",
);

export const signatureIcon = strokeIcon(
  [
  "M4 16Q7 10 10 16",
  "M10 16Q13 22 16 12",
  "M4 19L20 19"
],
  "0 0 24 24",
);

export const draftIcon = strokeIcon(
  [
  "M6 4H18Q20 4 20 6V18Q20 20 18 20H6Q4 20 4 18V6Q4 4 6 4Z",
  "M8 8L16 8",
  "M8 12L16 12",
  "M8 16L13 16",
  "M15 15L19 19"
],
  "0 0 24 24",
);

export const contentExtraIcons = defineIcons({
  "text": textIcon,
  "text-cursor": textCursorIcon,
  "type": typeIcon,
  "pilcrow": pilcrowIcon,
  "heading": headingIcon,
  "list-todo": listTodoIcon,
  "list-filter": listFilterIcon,
  "columns": columnsIcon,
  "separators-horizontal": separatorsHorizontalIcon,
  "separators-vertical": separatorsVerticalIcon,
  "sticky-note-plus": stickyNotePlusIcon,
  "kanban-square": kanbanSquareIcon,
  "signature": signatureIcon,
  "draft": draftIcon,
});
