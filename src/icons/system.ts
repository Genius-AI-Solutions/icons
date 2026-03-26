import { defineIcons } from '../core/index';
import { strokeIcon } from './shared';
import { systemExtraIcons } from './system-extra';
import { systemParityIcons } from './system-parity';

export const clockIcon = strokeIcon(
  [
    "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z",
    "M12 6v6l4 2",
  ],
  "0 0 24 24",
);

export const calendarIcon = strokeIcon(
  [
    "M19 4H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2z",
    "M16 2v4",
    "M8 2v4",
    "M3 10h18",
  ],
  "0 0 24 24",
);

export const searchIcon = strokeIcon(
  [
    "M11 19a8 8 0 100-16 8 8 0 000 16z",
    "M21 21l-4.35-4.35",
  ],
  "0 0 24 24",
);

export const settingsIcon = strokeIcon(
  [
    "M12 15a3 3 0 100-6 3 3 0 000 6z",
    "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z",
  ],
  "0 0 24 24",
);

export const toolboxIcon = strokeIcon(
  [
    "M3 11h18v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8z",
    "M3 11l1-4a2 2 0 012-2h12a2 2 0 012 2l1 4",
    "M9 5V4a2 2 0 012-2h2a2 2 0 012 2v1",
    "M10 15h4",
  ],
  "0 0 24 24",
);

export const wrenchIcon = strokeIcon(
  "M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z",
  "0 0 24 24",
);

export const historyIcon = strokeIcon(
  [
    "M3 3v5h5",
    "M3.05 13A9 9 0 106 5.3L3 8",
    "M12 7v5l4 2",
  ],
  "0 0 24 24",
);

export const lockIcon = strokeIcon(
  [
    "M19 11H5a2 2 0 00-2 2v7a2 2 0 002 2h14a2 2 0 002-2v-7a2 2 0 00-2-2z",
    "M7 11V7a5 5 0 0110 0v4",
  ],
  "0 0 24 24",
);

export const unlockIcon = strokeIcon(
  [
    "M7 11V7a5 5 0 0 1 9.9-1",
    "M5 11h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2z",
  ],
  "0 0 24 24",
);

export const logOutIcon = strokeIcon(
  [
    "M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4",
    "M16 17l5-5-5-5",
    "M21 12H9",
  ],
  "0 0 24 24",
);

export const globeIcon = strokeIcon(
  [
    "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z",
    "M2 12h20",
    "M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z",
  ],
  "0 0 24 24",
);

export const wifiIcon = strokeIcon(
  [
    "M5 12.55a11 11 0 0114.08 0",
    "M1.42 9a16 16 0 0121.16 0",
    "M8.53 16.11a6 6 0 016.95 0",
    "M12 20h.01",
  ],
  "0 0 24 24",
);

export const wifiOffIcon = strokeIcon(
  [
    "M1 1l22 22",
    "M16.72 11.06A10.94 10.94 0 0119 12.55",
    "M5 12.55a10.94 10.94 0 015.17-2.39",
    "M10.71 5.05A16 16 0 0122.58 9",
    "M1.42 9a15.91 15.91 0 014.7-2.88",
    "M8.53 16.11a6 6 0 016.95 0",
    "M12 20h.01",
  ],
  "0 0 24 24",
);

export const powerIcon = strokeIcon(
  [
    "M18.36 6.64a9 9 0 11-12.73 0",
    "M12 2v10",
  ],
  "0 0 24 24",
);

export const calculatorIcon = strokeIcon(
  [
    "M4 4a2 2 0 012-2h12a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z",
    "M8 10h.01",
    "M12 10h.01",
    "M16 10h.01",
    "M8 14h.01",
    "M12 14h.01",
    "M16 14h.01",
    "M8 18h.01",
    "M12 18h.01",
    "M16 18h.01",
    "M8 6h8",
  ],
  "0 0 24 24",
);

export const monitorIcon = strokeIcon(
  [
    "M2 3h20a2 2 0 012 2v10a2 2 0 01-2 2H2a2 2 0 01-2-2V5a2 2 0 012-2z",
    "M8 21h8",
    "M12 17v4",
  ],
  "0 0 24 24",
);

export const laptopIcon = strokeIcon(
  [
    "M20 16V7a2 2 0 00-2-2H6a2 2 0 00-2 2v9m16 0H4m16 0l1.28 2.55a1 1 0 01-.9 1.45H3.62a1 1 0 01-.9-1.45L4 16",
  ],
  "0 0 24 24",
);

export const smartphoneIcon = strokeIcon(
  [
    "M5 2h14a1 1 0 011 1v18a1 1 0 01-1 1H5a1 1 0 01-1-1V3a1 1 0 011-1z",
    "M12 18h.01",
  ],
  "0 0 24 24",
);

export const deviceDesktopIcon = strokeIcon(
  [
    "M2 3h20a2 2 0 012 2v10a2 2 0 01-2 2H2a2 2 0 01-2-2V5a2 2 0 012-2z",
    "M8 21h8",
    "M12 17v4",
  ],
  "0 0 24 24",
);

export const deviceMobileIcon = strokeIcon(
  [
    "M5 2h14a1 1 0 011 1v18a1 1 0 01-1 1H5a1 1 0 01-1-1V3a1 1 0 011-1z",
    "M12 18h.01",
  ],
  "0 0 24 24",
);

export const deviceTabletIcon = strokeIcon(
  [
    "M4 2h16a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2z",
    "M12 18h.01",
  ],
  "0 0 24 24",
);

export const gripDiagonalIcon = strokeIcon(
  [
    "M21 15L15 21",
    "M21 9L9 21",
    "M21 3L3 21",
  ],
  "0 0 24 24",
);

export const mapPinIcon = strokeIcon(
  [
    "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z",
    "M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
  ],
  "0 0 24 24",
);

export const cpuIcon = strokeIcon(
  [
    "M4 4h16v16H4z",
    "M9 9h6v6H9z",
    "M9 1v3",
    "M15 1v3",
    "M9 20v3",
    "M15 20v3",
    "M20 9h3",
    "M20 14h3",
    "M1 9h3",
    "M1 14h3",
  ],
  "0 0 24 24",
);

export const databaseIcon = strokeIcon(
  [
    "M12 2c4.97 0 9 1.343 9 3s-4.03 3-9 3-9-1.343-9-3 4.03-3 9-3z",
    "M21 12c0 1.66-4.03 3-9 3s-9-1.34-9-3",
    "M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5",
  ],
  "0 0 24 24",
);

export const serverIcon = strokeIcon(
  [
    "M2 5a2 2 0 012-2h16a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2V5z",
    "M2 15a2 2 0 012-2h16a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z",
    "M6 7h.01",
    "M6 17h.01",
  ],
  "0 0 24 24",
);

export const sunIcon = strokeIcon(
  [
    "M12 17a5 5 0 100-10 5 5 0 000 10z",
    "M12 1v2",
    "M12 21v2",
    "M4.22 4.22l1.42 1.42",
    "M18.36 18.36l1.42 1.42",
    "M1 12h2",
    "M21 12h2",
    "M4.22 19.78l1.42-1.42",
    "M18.36 5.64l1.42-1.42",
  ],
  "0 0 24 24",
);

export const moonIcon = strokeIcon(
  "M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z",
  "0 0 24 24",
);

export const systemIcons = defineIcons({
  "clock": clockIcon,
  "calendar": calendarIcon,
  "search": searchIcon,
  "settings": settingsIcon,
  "toolbox": toolboxIcon,
  "wrench": wrenchIcon,
  "history": historyIcon,
  "lock": lockIcon,
  "unlock": unlockIcon,
  "log-out": logOutIcon,
  "globe": globeIcon,
  "wifi": wifiIcon,
  "wifi-off": wifiOffIcon,
  "power": powerIcon,
  "calculator": calculatorIcon,
  "monitor": monitorIcon,
  "laptop": laptopIcon,
  "smartphone": smartphoneIcon,
  "device-desktop": deviceDesktopIcon,
  "device-mobile": deviceMobileIcon,
  "device-tablet": deviceTabletIcon,
  "grip-diagonal": gripDiagonalIcon,
  "map-pin": mapPinIcon,
  "cpu": cpuIcon,
  "database": databaseIcon,
  "server": serverIcon,
  "sun": sunIcon,
  "moon": moonIcon,
  ...systemExtraIcons,
  ...systemParityIcons,
});
