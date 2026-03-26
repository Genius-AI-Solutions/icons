import { defineIcons } from '../core/index';
import { fillIcon, strokeIcon } from './shared';
import { navigationExtraIcons } from './navigation-extra';
import { navigationParityIcons } from './navigation-parity';
import { navigationUiIcons } from './navigation-ui';

export const arrowLeftIcon = strokeIcon(
  [
    "M19 12H5",
    "M12 19l-7-7 7-7",
  ],
  "0 0 24 24",
);

export const arrowRightIcon = strokeIcon(
  [
    "M5 12h14",
    "M12 5l7 7-7 7",
  ],
  "0 0 24 24",
);

export const chevronLeftIcon = strokeIcon(
  "M15 18l-6-6 6-6",
  "0 0 24 24",
);

export const chevronRightIcon = strokeIcon(
  "M9 18l6-6-6-6",
  "0 0 24 24",
);

export const chevronDownIcon = strokeIcon(
  "M6 9l6 6 6-6",
  "0 0 24 24",
);

export const chevronUpIcon = strokeIcon(
  "M18 15l-6-6-6 6",
  "0 0 24 24",
);

export const triangleDownIcon = fillIcon(
  "M12 16L6 10h12z",
  "0 0 24 24",
);

export const arrowUpRightIcon = strokeIcon(
  [
    "M7 17L17 7",
    "M7 7h10v10",
  ],
  "0 0 24 24",
);

export const homeIcon = strokeIcon(
  [
    "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z",
    "M9 22V12h6v10",
  ],
  "0 0 24 24",
);

export const externalLinkIcon = strokeIcon(
  [
    "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6",
    "M15 3h6v6",
    "M10 14L21 3",
  ],
  "0 0 24 24",
);

export const chevronsRightIcon = strokeIcon(
  [
    "M13 17l5-5-5-5",
    "M6 17l5-5-5-5",
  ],
  "0 0 24 24",
);

export const menuIcon = strokeIcon(
  [
    "M3 12h18",
    "M3 6h18",
    "M3 18h18",
  ],
  "0 0 24 24",
);

export const moreVerticalIcon = strokeIcon(
  [
    "M12 13a1 1 0 100-2 1 1 0 000 2z",
    "M12 6a1 1 0 100-2 1 1 0 000 2z",
    "M12 20a1 1 0 100-2 1 1 0 000 2z",
  ],
  "0 0 24 24",
);

export const moreHorizontalIcon = strokeIcon(
  [
    "M12 13a1 1 0 100-2 1 1 0 000 2z",
    "M19 13a1 1 0 100-2 1 1 0 000 2z",
    "M5 13a1 1 0 100-2 1 1 0 000 2z",
  ],
  "0 0 24 24",
);

export const zoomInIcon = strokeIcon(
  [
    "M11 19a8 8 0 100-16 8 8 0 000 16z",
    "M21 21l-4.35-4.35",
    "M11 8v6",
    "M8 11h6",
  ],
  "0 0 24 24",
);

export const zoomOutIcon = strokeIcon(
  [
    "M11 19a8 8 0 100-16 8 8 0 000 16z",
    "M21 21l-4.35-4.35",
    "M8 11h6",
  ],
  "0 0 24 24",
);

export const maximize2Icon = strokeIcon(
  [
    "M15 3h6v6",
    "M9 21H3v-6",
    "M21 3l-7 7",
    "M3 21l7-7",
  ],
  "0 0 24 24",
);

export const minimize2Icon = strokeIcon(
  [
    "M4 14h6v6",
    "M20 10h-6V4",
    "M14 10l7-7",
    "M3 21l7-7",
  ],
  "0 0 24 24",
);

export const expandIcon = strokeIcon(
  [
    "M21 21l-6-6m6 6v-4.8m0 4.8h-4.8",
    "M3 16.2V21m0 0h4.8M3 21l6-6",
    "M21 7.8V3m0 0h-4.8M21 3l-6 6",
    "M3 7.8V3m0 0h4.8M3 3l6 6",
  ],
  "0 0 24 24",
);

export const navigationIcons = defineIcons({
  "arrow-left": arrowLeftIcon,
  "arrow-right": arrowRightIcon,
  "chevron-left": chevronLeftIcon,
  "chevron-right": chevronRightIcon,
  "chevron-down": chevronDownIcon,
  "chevron-up": chevronUpIcon,
  "triangle-down": triangleDownIcon,
  "arrow-up-right": arrowUpRightIcon,
  "home": homeIcon,
  "external-link": externalLinkIcon,
  "chevrons-right": chevronsRightIcon,
  "menu": menuIcon,
  "more-vertical": moreVerticalIcon,
  "more-horizontal": moreHorizontalIcon,
  "zoom-in": zoomInIcon,
  "zoom-out": zoomOutIcon,
  "maximize-2": maximize2Icon,
  "minimize-2": minimize2Icon,
  "expand": expandIcon,
  ...navigationExtraIcons,
  ...navigationParityIcons,
  ...navigationUiIcons,
});
