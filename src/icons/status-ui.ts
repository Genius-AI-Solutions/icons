import { defineIcons } from '../core/index';
import { strokeIcon } from './shared';

export const stateActiveIcon = strokeIcon(
  [
  "M6 7H18Q20 7 20 9V15Q20 17 18 17H6Q4 17 4 15V9Q4 7 6 7Z",
  "M8 12L11 15L16 9"
],
  "0 0 24 24",
);

export const stateInactiveIcon = strokeIcon(
  [
  "M6 7H18Q20 7 20 9V15Q20 17 18 17H6Q4 17 4 15V9Q4 7 6 7Z",
  "M8 12L16 12"
],
  "0 0 24 24",
);

export const stateHoverIcon = strokeIcon(
  [
  "M6 7H18Q20 7 20 9V15Q20 17 18 17H6Q4 17 4 15V9Q4 7 6 7Z",
  "M12 5L14 9L10 9Z"
],
  "0 0 24 24",
);

export const stateFocusIcon = strokeIcon(
  [
  "M6 7H18Q20 7 20 9V15Q20 17 18 17H6Q4 17 4 15V9Q4 7 6 7Z",
  "M4 5H20Q22 5 22 7V17Q22 19 20 19H4Q2 19 2 17V7Q2 5 4 5Z"
],
  "0 0 24 24",
);

export const stateSelectedIcon = strokeIcon(
  [
  "M6 7H18Q20 7 20 9V15Q20 17 18 17H6Q4 17 4 15V9Q4 7 6 7Z",
  "M4 5H20Q22 5 22 7V17Q22 19 20 19H4Q2 19 2 17V7Q2 5 4 5Z",
  "M8 12L11 15L16 9"
],
  "0 0 24 24",
);

export const stateDisabledIcon = strokeIcon(
  [
  "M6 7H18Q20 7 20 9V15Q20 17 18 17H6Q4 17 4 15V9Q4 7 6 7Z",
  "M5 18L19 6"
],
  "0 0 24 24",
);

export const stateErrorIcon = strokeIcon(
  [
  "M6 7H18Q20 7 20 9V15Q20 17 18 17H6Q4 17 4 15V9Q4 7 6 7Z",
  "M9.8 9.8L14.2 14.2",
  "M14.2 9.8L9.8 14.2"
],
  "0 0 24 24",
);

export const stateSuccessIcon = strokeIcon(
  [
  "M6 7H18Q20 7 20 9V15Q20 17 18 17H6Q4 17 4 15V9Q4 7 6 7Z",
  "M8 12L11 15L16 9"
],
  "0 0 24 24",
);

export const stateWarningIcon = strokeIcon(
  [
  "M6 7H18Q20 7 20 9V15Q20 17 18 17H6Q4 17 4 15V9Q4 7 6 7Z",
  "M12 9L12 13",
  "M12 15L12 15"
],
  "0 0 24 24",
);

export const stateVisitedIcon = strokeIcon(
  [
  "M6 7H18Q20 7 20 9V15Q20 17 18 17H6Q4 17 4 15V9Q4 7 6 7Z",
  "M12 8.5a3.5 3.5 0 1 1 0 7a3.5 3.5 0 1 1 0 -7",
  "M12 10.5L12 12",
  "M12 12L14.2 13.3"
],
  "0 0 24 24",
);

export const newBadgeIcon = strokeIcon(
  [
  "M6 7H18Q20 7 20 9V15Q20 17 18 17H6Q4 17 4 15V9Q4 7 6 7Z",
  "M9.6 15.5L9.6 8.5L14.4 15.5L14.4 8.5"
],
  "0 0 24 24",
);

export const betaBadgeIcon = strokeIcon(
  [
  "M6 7H18Q20 7 20 9V15Q20 17 18 17H6Q4 17 4 15V9Q4 7 6 7Z",
  "M9.6 8.5L9.6 15.5",
  "M9.6 8.5L12.84 8.5L14.04 9.4L14.04 11.05L12.84 12L9.6 12",
  "M9.6 12L13.08 12L14.28 12.95L14.28 14.6L13.08 15.5L9.6 15.5"
],
  "0 0 24 24",
);

export const statusUiIcons = defineIcons({
  "state-active": stateActiveIcon,
  "state-inactive": stateInactiveIcon,
  "state-hover": stateHoverIcon,
  "state-focus": stateFocusIcon,
  "state-selected": stateSelectedIcon,
  "state-disabled": stateDisabledIcon,
  "state-error": stateErrorIcon,
  "state-success": stateSuccessIcon,
  "state-warning": stateWarningIcon,
  "state-visited": stateVisitedIcon,
  "new-badge": newBadgeIcon,
  "beta-badge": betaBadgeIcon,
});
