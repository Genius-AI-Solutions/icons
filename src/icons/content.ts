import { defineIcons } from '../core/index';
import { fillIcon, strokeIcon } from './shared';
import { contentExtraIcons } from './content-extra';
import { contentParityIcons } from './content-parity';
import { contentUiIcons } from './content-ui';

export const stickyNoteIcon = strokeIcon(
  [
    "M15.5 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V8.5L15.5 3z",
    "M15 3v6h6",
  ],
  "0 0 24 24",
);

export const fileTextIcon = strokeIcon(
  [
    "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z",
    "M14 2v6h6",
    "M16 13H8",
    "M16 17H8",
    "M10 9H8",
  ],
  "0 0 24 24",
);

export const imageIcon = strokeIcon(
  [
    "M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z",
    "M8.5 10a1.5 1.5 0 100-3 1.5 1.5 0 000 3z",
    "M21 15l-5-5L5 21",
  ],
  "0 0 24 24",
);

export const linkIcon = strokeIcon(
  [
    "M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71",
    "M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71",
  ],
  "0 0 24 24",
);

export const gridIcon = strokeIcon(
  [
    "M3 3h7v7H3z",
    "M14 3h7v7h-7z",
    "M14 14h7v7h-7z",
    "M3 14h7v7H3z",
  ],
  "0 0 24 24",
);

export const listIcon = strokeIcon(
  [
    "M8 6h13",
    "M8 12h13",
    "M8 18h13",
    "M3 6h.01",
    "M3 12h.01",
    "M3 18h.01",
  ],
  "0 0 24 24",
);

export const layersIcon = strokeIcon(
  [
    "M12 2L2 7l10 5 10-5-10-5z",
    "M2 17l10 5 10-5",
    "M2 12l10 5 10-5",
  ],
  "0 0 24 24",
);

export const hashIcon = strokeIcon(
  [
    "M4 9h16",
    "M4 15h16",
    "M10 3L8 21",
    "M16 3l-2 18",
  ],
  "0 0 24 24",
);

export const tagIcon = strokeIcon(
  [
    "M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z",
    "M7 7h.01",
  ],
  "0 0 24 24",
);

export const folderIcon = strokeIcon(
  "M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z",
  "0 0 24 24",
);

export const fileIcon = strokeIcon(
  [
    "M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z",
    "M13 2v7h7",
  ],
  "0 0 24 24",
);

export const paperclipIcon = strokeIcon(
  "M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48",
  "0 0 24 24",
);

export const boldIcon = fillIcon(
  "M6 4h6a4 4 0 0 1 4 4 3.5 3.5 0 0 1-1 2.5A4.5 4.5 0 0 1 18 15a5 5 0 0 1-5 5H6V4zm7 6a1.5 1.5 0 0 0 0-3H9v3h4zm.5 7a2.5 2.5 0 0 0 0-5H9v5h4.5z",
  "0 0 24 24",
);

export const italicIcon = strokeIcon(
  [
    "M19 4H10",
    "M14 20H5",
    "M15 4L9 20",
  ],
  "0 0 24 24",
);

export const underlineIcon = strokeIcon(
  [
    "M7 5v5a5 5 0 0 0 10 0V5",
    "M5 19h14",
  ],
  "0 0 24 24",
);

export const strikethroughIcon = strokeIcon(
  [
    "M16 4H9a3 3 0 0 0 0 6h6a3 3 0 0 1 0 6H8",
    "M4 12h16",
  ],
  "0 0 24 24",
);

export const heading1Icon = strokeIcon(
  [
    "M4 12h8",
    "M4 4v16",
    "M12 4v16",
    "M17 20V10l3-2",
  ],
  "0 0 24 24",
);

export const heading2Icon = strokeIcon(
  [
    "M4 12h8",
    "M4 4v16",
    "M12 4v16",
    "M21 18h-4c0-2.5 4-2.7 4-6 0-1.7-1.3-3-3-3a3 3 0 0 0-3 3",
  ],
  "0 0 24 24",
);

export const heading3Icon = strokeIcon(
  [
    "M4 12h8",
    "M4 4v16",
    "M12 4v16",
    "M17.5 10a1.5 1.5 0 0 1 0 3H18a1.5 1.5 0 0 1 0 3",
  ],
  "0 0 24 24",
);

export const codeIcon = strokeIcon(
  [
    "M16 18l6-6-6-6",
    "M8 6l-6 6 6 6",
  ],
  "0 0 24 24",
);

export const codeBlockIcon = strokeIcon(
  [
    "M10 20l4-16",
    "M17 6l5 6-5 6",
    "M7 6l-5 6 5 6",
  ],
  "0 0 24 24",
);

export const checkSquareIcon = strokeIcon(
  [
    "M9 11l3 3L22 4",
    "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",
  ],
  "0 0 24 24",
);

export const quoteBlockIcon = fillIcon(
  [
    "M3 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z",
    "M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z",
  ],
  "0 0 24 24",
);

export const tableIcon = strokeIcon(
  [
    "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18",
  ],
  "0 0 24 24",
);

export const listOrderedIcon = strokeIcon(
  [
    "M10 6h11",
    "M10 12h11",
    "M10 18h11",
    "M4 6h1v4",
    "M4 10h2",
    "M6 18H4c0-1 2-2 2-3s-1-1.5-2-1",
  ],
  "0 0 24 24",
);

export const alignLeftIcon = strokeIcon(
  [
    "M3 6h21",
    "M3 12h15",
    "M3 18h18",
  ],
  "0 0 24 24",
);

export const alignCenterIcon = strokeIcon(
  [
    "M3 6h21",
    "M6 12h12",
    "M4 18h16",
  ],
  "0 0 24 24",
);

export const alignRightIcon = strokeIcon(
  [
    "M3 6h21",
    "M9 12h12",
    "M6 18h15",
  ],
  "0 0 24 24",
);

export const alignJustifyIcon = strokeIcon(
  [
    "M3 6h21",
    "M3 12h21",
    "M3 18h21",
  ],
  "0 0 24 24",
);

export const indentIcon = strokeIcon(
  [
    "M3 8h21",
    "M3 12h21",
    "M3 16h21",
    "M7 4l4 4-4 4",
  ],
  "0 0 24 24",
);

export const outdentIcon = strokeIcon(
  [
    "M3 8h21",
    "M3 12h21",
    "M3 16h21",
    "M11 4l-4 4 4 4",
  ],
  "0 0 24 24",
);

export const contentIcons = defineIcons({
  "sticky-note": stickyNoteIcon,
  "file-text": fileTextIcon,
  "image": imageIcon,
  "link": linkIcon,
  "grid": gridIcon,
  "list": listIcon,
  "layers": layersIcon,
  "hash": hashIcon,
  "tag": tagIcon,
  "folder": folderIcon,
  "file": fileIcon,
  "paperclip": paperclipIcon,
  "bold": boldIcon,
  "italic": italicIcon,
  "underline": underlineIcon,
  "strikethrough": strikethroughIcon,
  "heading-1": heading1Icon,
  "heading-2": heading2Icon,
  "heading-3": heading3Icon,
  "code": codeIcon,
  "code-block": codeBlockIcon,
  "check-square": checkSquareIcon,
  "quote-block": quoteBlockIcon,
  "table": tableIcon,
  "list-ordered": listOrderedIcon,
  "align-left": alignLeftIcon,
  "align-center": alignCenterIcon,
  "align-right": alignRightIcon,
  "align-justify": alignJustifyIcon,
  "indent": indentIcon,
  "outdent": outdentIcon,
  ...contentExtraIcons,
  ...contentParityIcons,
  ...contentUiIcons,
});
