import { defineIcons } from '../core/index';
import { strokeIcon } from './shared';

export const mailPlusIcon = strokeIcon(
  [
  "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",
  "M22 6l-10 7L2 6",
  "M15.6 16L18.4 16",
  "M17 14.6L17 17.4"
],
  "0 0 24 24",
);

export const mailMinusIcon = strokeIcon(
  [
  "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",
  "M22 6l-10 7L2 6",
  "M15.6 16L18.4 16"
],
  "0 0 24 24",
);

export const mailWarningIcon = strokeIcon(
  [
  "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",
  "M22 6l-10 7L2 6",
  "M17 13L19.8 18.5L14.2 18.5Z",
  "M17 14.6L17 16.6",
  "M17 17.5L17 17.5"
],
  "0 0 24 24",
);

export const phonePlusIcon = strokeIcon(
  [
  "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z",
  "M16.7 8L19.3 8",
  "M18 6.7L18 9.3"
],
  "0 0 24 24",
);

export const phoneXIcon = strokeIcon(
  [
  "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z",
  "M16.8 6.8L19.2 9.2",
  "M19.2 6.8L16.8 9.2"
],
  "0 0 24 24",
);

export const phoneCheckIcon = strokeIcon(
  [
  "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z",
  "M16.8 8L17.6 9.2L20 6.8"
],
  "0 0 24 24",
);

export const inboxPlusIcon = strokeIcon(
  [
  "M6 5H18Q20 5 20 7V17Q20 19 18 19H6Q4 19 4 17V7Q4 5 6 5Z",
  "M4 12L9 12",
  "M9 12L11 15",
  "M11 15L13 15",
  "M13 15L15 12",
  "M15 12L20 12",
  "M16.8 8L19.2 8",
  "M18 6.8L18 9.2"
],
  "0 0 24 24",
);

export const inboxMinusIcon = strokeIcon(
  [
  "M6 5H18Q20 5 20 7V17Q20 19 18 19H6Q4 19 4 17V7Q4 5 6 5Z",
  "M4 12L9 12",
  "M9 12L11 15",
  "M11 15L13 15",
  "M13 15L15 12",
  "M15 12L20 12",
  "M16.8 8L19.2 8"
],
  "0 0 24 24",
);

export const messageForwardIcon = strokeIcon(
  [
  "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z",
  "M9 12L16 12",
  "M13.5 9.5L16 12L13.5 14.5"
],
  "0 0 24 24",
);

export const atMessageIcon = strokeIcon(
  [
  "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z",
  "M13.96 13.63L13.96 11.23L12.98 10.63L11.51 10.63L10.6 11.23L10.6 12.73L11.79 13.46L13.54 13.46L14.73 12.73L14.73 10.37L13.47 9.43L11.09 9.43L9.34 10.5L9.34 13.5L10.95 14.57L13.75 14.57L15.08 13.93"
],
  "0 0 24 24",
);

export const communicationParityIcons = defineIcons({
  "mail-plus": mailPlusIcon,
  "mail-minus": mailMinusIcon,
  "mail-warning": mailWarningIcon,
  "phone-plus": phonePlusIcon,
  "phone-x": phoneXIcon,
  "phone-check": phoneCheckIcon,
  "inbox-plus": inboxPlusIcon,
  "inbox-minus": inboxMinusIcon,
  "message-forward": messageForwardIcon,
  "at-message": atMessageIcon,
});
