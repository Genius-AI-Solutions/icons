import { defineIcons } from '../core/index';
import { strokeIcon } from './shared';
import { educationExtraIcons } from './education-extra';

export const bookOpenIcon = strokeIcon(
  [
    "M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z",
    "M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z",
  ],
  "0 0 24 24",
);

export const bookIcon = strokeIcon(
  [
    "M4 19.5A2.5 2.5 0 016.5 17H20",
    "M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z",
  ],
  "0 0 24 24",
);

export const notebookIcon = strokeIcon(
  [
    "M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z",
    "M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z",
  ],
  "0 0 24 24",
);

export const graduationCapIcon = strokeIcon(
  [
    "M22 10v6M2 10l10-5 10 5-10 5z",
    "M6 12v5c3 3 9 3 12 0v-5",
  ],
  "0 0 24 24",
);

export const pencilIcon = strokeIcon(
  [
    "M17 3a2.828 2.828 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z",
  ],
  "0 0 24 24",
);

export const usersIcon = strokeIcon(
  [
    "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2",
    "M9 11a4 4 0 100-8 4 4 0 000 8z",
    "M23 21v-2a4 4 0 00-3-3.87",
    "M16 3.13a4 4 0 010 7.75",
  ],
  "0 0 24 24",
);

export const userIcon = strokeIcon(
  [
    "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2",
    "M12 11a4 4 0 100-8 4 4 0 000 8z",
  ],
  "0 0 24 24",
);

export const lightbulbIcon = strokeIcon(
  [
    "M9 18h6",
    "M10 22h4",
    "M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0018 8 6 6 0 006 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 018.91 14",
  ],
  "0 0 24 24",
);

export const sparklesIcon = strokeIcon(
  [
    "M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z",
    "M5 3v4",
    "M19 17v4",
    "M3 5h4",
    "M17 19h4",
  ],
  "0 0 24 24",
);

export const brainIcon = strokeIcon(
  [
    "M9.5 2A2.5 2.5 0 0112 4.5v15a2.5 2.5 0 01-4.96.44 2.5 2.5 0 01-2.96-3.08 3 3 0 01-.34-5.58 2.5 2.5 0 011.32-4.24 2.5 2.5 0 01.34-1.01A2.5 2.5 0 019.5 2z",
    "M14.5 2A2.5 2.5 0 0012 4.5v15a2.5 2.5 0 004.96.44 2.5 2.5 0 002.96-3.08 3 3 0 00.34-5.58 2.5 2.5 0 00-1.32-4.24 2.5 2.5 0 00-.34-1.01A2.5 2.5 0 0014.5 2z",
  ],
  "0 0 24 24",
);

export const educationIcons = defineIcons({
  "book-open": bookOpenIcon,
  "book": bookIcon,
  "notebook": notebookIcon,
  "graduation-cap": graduationCapIcon,
  "pencil": pencilIcon,
  "users": usersIcon,
  "user": userIcon,
  "lightbulb": lightbulbIcon,
  "sparkles": sparklesIcon,
  "brain": brainIcon,
  ...educationExtraIcons,
});
