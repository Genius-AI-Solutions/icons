import { defineIcons } from '../core/index';
import { strokeIcon } from './shared';
import { statusExtraIcons } from './status-extra';
import { statusParityIcons } from './status-parity';
import { statusUiIcons } from './status-ui';

export const notificationIcon = strokeIcon(
  [
    "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9",
    "M13.73 21a2 2 0 0 1-3.46 0",
    "M12 2a1 1 0 0 1 1 1v1",
    "M11 3a1 1 0 0 1 1-1",
    "M2 8a10 10 0 0 1 .5-2",
    "M21.5 6A10 10 0 0 1 22 8",
  ],
  "0 0 24 24",
);

export const spinnerIcon = strokeIcon(
  "M12 2v4m0 12v4m10-10h-4M6 12H2m15.07-7.07l-2.83 2.83M9.76 14.24l-2.83 2.83m12.14 0l-2.83-2.83M9.76 9.76L6.93 6.93",
  "0 0 24 24",
);

export const checkmarkIcon = strokeIcon(
  "M5 13l4 4L19 7",
  "0 0 24 24",
);

export const xIcon = strokeIcon(
  [
    "M6 6l12 12",
    "M18 6l-12 12",
  ],
  "0 0 24 24",
);

export const checkIcon = strokeIcon(
  "M20 6L9 17l-5-5",
  "0 0 24 24",
);

export const checkCircleIcon = strokeIcon(
  [
    "M22 11.08V12a10 10 0 11-5.93-9.14",
    "M22 4L12 14.01l-3-3",
  ],
  "0 0 24 24",
);

export const checkCheckIcon = strokeIcon(
  [
    "M18 6L7 17l-4-4",
    "M22 10l-7.5 7.5L13 16",
  ],
  "0 0 24 24",
);

export const xCircleIcon = strokeIcon(
  [
    "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z",
    "M15 9l-6 6",
    "M9 9l6 6",
  ],
  "0 0 24 24",
);

export const alertTriangleIcon = strokeIcon(
  [
    "M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z",
    "M12 9v4",
    "M12 17h.01",
  ],
  "0 0 24 24",
);

export const alertCircleIcon = strokeIcon(
  [
    "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z",
    "M12 8v4",
    "M12 16h.01",
  ],
  "0 0 24 24",
);

export const infoIcon = strokeIcon(
  [
    "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z",
    "M12 16v-4",
    "M12 8h.01",
  ],
  "0 0 24 24",
);

export const loader2Icon = strokeIcon(
  "M21 12a9 9 0 11-6.219-8.56",
  "0 0 24 24",
);

export const circleIcon = strokeIcon(
  "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z",
  "0 0 24 24",
);

export const squareIcon = strokeIcon(
  "M3 3h18v18H3z",
  "0 0 24 24",
);

export const inboxIcon = strokeIcon(
  [
    "M22 12h-6l-2 3h-4l-2-3H2",
    "M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z",
  ],
  "0 0 24 24",
);

export const bellIcon = strokeIcon(
  [
    "M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9",
    "M13.73 21a2 2 0 01-3.46 0",
  ],
  "0 0 24 24",
);

export const helpCircleIcon = strokeIcon(
  [
    "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z",
    "M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3",
    "M12 17h.01",
  ],
  "0 0 24 24",
);

export const shieldCheckIcon = strokeIcon(
  [
    "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    "M9 12l2 2 4-4",
  ],
  "0 0 24 24",
);

export const statusIcons = defineIcons({
  "notification": notificationIcon,
  "spinner": spinnerIcon,
  "checkmark": checkmarkIcon,
  "x": xIcon,
  "check": checkIcon,
  "check-circle": checkCircleIcon,
  "check-check": checkCheckIcon,
  "x-circle": xCircleIcon,
  "alert-triangle": alertTriangleIcon,
  "alert-circle": alertCircleIcon,
  "info": infoIcon,
  "loader-2": loader2Icon,
  "circle": circleIcon,
  "square": squareIcon,
  "inbox": inboxIcon,
  "bell": bellIcon,
  "help-circle": helpCircleIcon,
  "shield-check": shieldCheckIcon,
  ...statusExtraIcons,
  ...statusParityIcons,
  ...statusUiIcons,
});
