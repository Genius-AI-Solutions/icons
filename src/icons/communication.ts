import { defineIcons } from '../core/index';
import { strokeIcon } from './shared';
import { communicationExtraIcons } from './communication-extra';
import { communicationParityIcons } from './communication-parity';

export const messageSquareIcon = strokeIcon(
  "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z",
  "0 0 24 24",
);

export const messageCircleIcon = strokeIcon(
  "M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z",
  "0 0 24 24",
);

export const mailIcon = strokeIcon(
  [
    "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",
    "M22 6l-10 7L2 6",
  ],
  "0 0 24 24",
);

export const phoneIcon = strokeIcon(
  "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z",
  "0 0 24 24",
);

export const sendIcon = strokeIcon(
  [
    "M22 2L11 13",
    "M22 2l-7 20-4-9-9-4 20-7z",
  ],
  "0 0 24 24",
);

export const micIcon = strokeIcon(
  [
    "M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z",
    "M19 10v2a7 7 0 01-14 0v-2",
    "M12 19v4",
    "M8 23h8",
  ],
  "0 0 24 24",
);

export const communicationIcons = defineIcons({
  "message-square": messageSquareIcon,
  "message-circle": messageCircleIcon,
  "mail": mailIcon,
  "phone": phoneIcon,
  "send": sendIcon,
  "mic": micIcon,
  ...communicationExtraIcons,
  ...communicationParityIcons,
});
