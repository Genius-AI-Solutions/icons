import { defineIcons } from '../core/index';
import { strokeIcon } from './shared';

export const schoolIcon = strokeIcon(
  [
  "M12 3L21 8L12 13L3 8Z",
  "M6 10L6 15",
  "M6 15Q12 19 18 15",
  "M18 10L18 15"
],
  "0 0 24 24",
);

export const libraryIcon = strokeIcon(
  [
  "M6 5H18Q20 5 20 7V18Q20 20 18 20H6Q4 20 4 18V7Q4 5 6 5Z",
  "M8 5L8 20",
  "M12 5L12 20",
  "M16 5L16 20"
],
  "0 0 24 24",
);

export const medalIcon = strokeIcon(
  [
  "M12 9.5a4.5 4.5 0 1 1 0 9a4.5 4.5 0 1 1 0 -9",
  "M9.5 3L12 7",
  "M14.5 3L12 7"
],
  "0 0 24 24",
);

export const certificateIcon = strokeIcon(
  [
  "M6 5H18Q20 5 20 7V13Q20 15 18 15H6Q4 15 4 13V7Q4 5 6 5Z",
  "M10 8a2 2 0 1 1 0 4a2 2 0 1 1 0 -4",
  "M8.5 15L8.5 20",
  "M11.5 15L11.5 20"
],
  "0 0 24 24",
);

export const flaskRoundIcon = strokeIcon(
  [
  "M9 3Q9 8 7 11",
  "M15 3Q15 8 17 11",
  "M8 11H16Q18 11 18 13V18Q18 20 16 20H8Q6 20 6 18V13Q6 11 8 11Z",
  "M9 3L15 3",
  "M8 15L16 15"
],
  "0 0 24 24",
);

export const microscopeIcon = strokeIcon(
  [
  "M9 5L13 9",
  "M13 9L10 16",
  "M7 19L17 19",
  "M12 16L17 16",
  "M16 8L19 5",
  "M17.5 3.5a1 1 0 1 1 0 2a1 1 0 1 1 0 -2"
],
  "0 0 24 24",
);

export const atomIcon = strokeIcon(
  [
  "M12 10.8a1.2 1.2 0 1 1 0 2.4a1.2 1.2 0 1 1 0 -2.4",
  "M5 12A7 3 0 0 1 19 12",
  "M12 5A3 7 0 0 1 12 19",
  "M6.5 6.5Q12 12 17.5 17.5",
  "M17.5 6.5Q12 12 6.5 17.5"
],
  "0 0 24 24",
);

export const rulersIcon = strokeIcon(
  [
  "M5.5 4H9.5Q11 4 11 5.5V18.5Q11 20 9.5 20H5.5Q4 20 4 18.5V5.5Q4 4 5.5 4Z",
  "M14.5 4H18.5Q20 4 20 5.5V18.5Q20 20 18.5 20H14.5Q13 20 13 18.5V5.5Q13 4 14.5 4Z",
  "M7 7L9 7",
  "M7 10L9 10",
  "M7 13L9 13",
  "M16 7L18 7",
  "M16 10L18 10",
  "M16 13L18 13"
],
  "0 0 24 24",
);

export const backpackIcon = strokeIcon(
  [
  "M9 6H15Q18 6 18 9V17Q18 20 15 20H9Q6 20 6 17V9Q6 6 9 6Z",
  "M8 7A4 3 0 0 1 16 7",
  "M9 6L9 3",
  "M15 6L15 3",
  "M6 12L18 12"
],
  "0 0 24 24",
);

export const bookmarkIcon = strokeIcon(
  "M6 3L18 3L18 21L12 16L6 21Z",
  "0 0 24 24",
);

export const educationExtraIcons = defineIcons({
  "school": schoolIcon,
  "library": libraryIcon,
  "medal": medalIcon,
  "certificate": certificateIcon,
  "flask-round": flaskRoundIcon,
  "microscope": microscopeIcon,
  "atom": atomIcon,
  "rulers": rulersIcon,
  "backpack": backpackIcon,
  "bookmark": bookmarkIcon,
});
