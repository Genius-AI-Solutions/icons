import { defineIcons } from '../core/index';
import { fillIcon, strokeIcon } from './shared';

export const alertOctagonIcon = strokeIcon(
  [
  "M8 2L16 2L22 8L22 16L16 22L8 22L2 16L2 8Z",
  "M12 7L12 13",
  "M12 17L12 17"
],
  "0 0 24 24",
);

export const badgeAlertIcon = strokeIcon(
  [
  "M12 3.5a8.5 8.5 0 1 1 0 17a8.5 8.5 0 1 1 0 -17",
  "M12 9L14.8 14.5L9.2 14.5Z",
  "M12 10.6L12 12.6",
  "M12 13.5L12 13.5"
],
  "0 0 24 24",
);

export const badgeCheckIcon = strokeIcon(
  [
  "M12 3.5a8.5 8.5 0 1 1 0 17a8.5 8.5 0 1 1 0 -17",
  "M9.4 12L11.6 14.6L15.4 9.4"
],
  "0 0 24 24",
);

export const badgeInfoIcon = strokeIcon(
  [
  "M12 3.5a8.5 8.5 0 1 1 0 17a8.5 8.5 0 1 1 0 -17",
  "M12 10.2L12 13.4",
  "M12 14.4L12 14.4"
],
  "0 0 24 24",
);

export const banIcon = strokeIcon(
  [
  "M12 3a9 9 0 1 1 0 18a9 9 0 1 1 0 -18",
  "M6 18L18 6"
],
  "0 0 24 24",
);

export const shieldIcon = strokeIcon(
  "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  "0 0 24 24",
);

export const shieldAlertIcon = strokeIcon(
  [
  "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  "M12 8L12 13",
  "M12 16.5L12 16.5"
],
  "0 0 24 24",
);

export const shieldXIcon = strokeIcon(
  [
  "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  "M9.5 9.5L14.5 14.5",
  "M14.5 9.5L9.5 14.5"
],
  "0 0 24 24",
);

export const shieldMinusIcon = strokeIcon(
  [
  "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  "M9.2 12L14.8 12"
],
  "0 0 24 24",
);

export const shieldPlusIcon = strokeIcon(
  [
  "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  "M9.6 12L14.4 12",
  "M12 9.6L12 14.4"
],
  "0 0 24 24",
);

export const verifiedIcon = strokeIcon(
  [
  "M12 4a8 8 0 1 1 0 16a8 8 0 1 1 0 -16",
  "M12 3L14.2 5.2L17.5 5.2L18.8 8.2L21 10.5L19.2 13.2L19.5 16.5L16.5 17.8L14.2 20L12 18L9.8 20L7.5 17.8L4.5 16.5L4.8 13.2L3 10.5L5.2 8.2L6.5 5.2L9.8 5.2Z",
  "M8.5 12L11 14.5L16 9.5"
],
  "0 0 24 24",
);

export const pendingIcon = strokeIcon(
  [
  "M12 3a9 9 0 1 1 0 18a9 9 0 1 1 0 -18",
  "M12 7L12 12",
  "M12 12L15.5 14"
],
  "0 0 24 24",
);

export const offlineIcon = strokeIcon(
  [
  "M12 3a9 9 0 1 1 0 18a9 9 0 1 1 0 -18",
  "M6.5 14.5A5.5 4.2 0 0 1 17.5 14.5",
  "M8.8 11.8A3.2 2.5 0 0 1 15.2 11.8",
  "M4 20L20 4"
],
  "0 0 24 24",
);

export const onlineIcon = strokeIcon(
  [
  "M12 3a9 9 0 1 1 0 18a9 9 0 1 1 0 -18",
  "M6.5 14.5A5.5 4.2 0 0 1 17.5 14.5",
  "M8.8 11.8A3.2 2.5 0 0 1 15.2 11.8",
  "M12 15.6a1.2 1.2 0 1 1 0 2.4a1.2 1.2 0 1 1 0 -2.4"
],
  "0 0 24 24",
);

export const dotIcon = strokeIcon(
  "M12 8.8a3.2 3.2 0 1 1 0 6.4a3.2 3.2 0 1 1 0 -6.4",
  "0 0 24 24",
);

export const dotFilledIcon = fillIcon(
  "M12 8a4 4 0 1 1 0 8a4 4 0 1 1 0 -8",
  "0 0 24 24",
);

export const slashCircleIcon = strokeIcon(
  [
  "M12 3a9 9 0 1 1 0 18a9 9 0 1 1 0 -18",
  "M6 18L18 6"
],
  "0 0 24 24",
);

export const statusExtraIcons = defineIcons({
  "alert-octagon": alertOctagonIcon,
  "badge-alert": badgeAlertIcon,
  "badge-check": badgeCheckIcon,
  "badge-info": badgeInfoIcon,
  "ban": banIcon,
  "shield": shieldIcon,
  "shield-alert": shieldAlertIcon,
  "shield-x": shieldXIcon,
  "shield-minus": shieldMinusIcon,
  "shield-plus": shieldPlusIcon,
  "verified": verifiedIcon,
  "pending": pendingIcon,
  "offline": offlineIcon,
  "online": onlineIcon,
  "dot": dotIcon,
  "dot-filled": dotFilledIcon,
  "slash-circle": slashCircleIcon,
});
