import { defineIcons } from '../core/index';
import { fillIcon, strokeIcon } from './shared';

export const cursorArrowIcon = strokeIcon(
  "M6 4L6 18L10 14L13 20L15 19L12 13L18 13Z",
  "0 0 24 24",
);

export const cursorClickIcon = strokeIcon(
  [
  "M6 4L6 18L10 14L13 20L15 19L12 13L18 13Z",
  "M18 3.8a2.2 2.2 0 1 1 0 4.4a2.2 2.2 0 1 1 0 -4.4"
],
  "0 0 24 24",
);

export const cursorTextIcon = strokeIcon(
  [
  "M8 5L8 19",
  "M16 5L16 19",
  "M6 5L18 5",
  "M6 19L18 19"
],
  "0 0 24 24",
);

export const cursorCrosshairIcon = strokeIcon(
  [
  "M12 4L12 20",
  "M4 12L20 12",
  "M12 9a3 3 0 1 1 0 6a3 3 0 1 1 0 -6"
],
  "0 0 24 24",
);

export const cursorMoveIcon = strokeIcon(
  [
  "M12 4L12 20",
  "M4 12L20 12",
  "M9 7L12 4L15 7",
  "M9 17L12 20L15 17",
  "M7 9L4 12L7 15",
  "M17 9L20 12L17 15"
],
  "0 0 24 24",
);

export const cursorGrabIcon = strokeIcon(
  [
  "M10 8H14Q16 8 16 10V16Q16 18 14 18H10Q8 18 8 16V10Q8 8 10 8Z",
  "M10 8L10 4",
  "M12 8L12 3",
  "M14 8L14 4",
  "M16 10L18 8"
],
  "0 0 24 24",
);

export const lassoSelectIcon = strokeIcon(
  [
  "M6 7L10 5L16 7L18 11L16 16L11 18L7 15L6 10",
  "M6 9.3a0.7 0.7 0 1 1 0 1.4a0.7 0.7 0 1 1 0 -1.4",
  "M10 4.3a0.7 0.7 0 1 1 0 1.4a0.7 0.7 0 1 1 0 -1.4",
  "M16 6.3a0.7 0.7 0 1 1 0 1.4a0.7 0.7 0 1 1 0 -1.4",
  "M18 10.3a0.7 0.7 0 1 1 0 1.4a0.7 0.7 0 1 1 0 -1.4",
  "M16 15.3a0.7 0.7 0 1 1 0 1.4a0.7 0.7 0 1 1 0 -1.4",
  "M11 17.3a0.7 0.7 0 1 1 0 1.4a0.7 0.7 0 1 1 0 -1.4",
  "M7 14.3a0.7 0.7 0 1 1 0 1.4a0.7 0.7 0 1 1 0 -1.4"
],
  "0 0 24 24",
);

export const marqueeSelectIcon = strokeIcon(
  [
  "M6 5L10 5",
  "M14 5L18 5",
  "M19 6L19 10",
  "M19 14L19 18",
  "M14 19L18 19",
  "M6 19L10 19",
  "M5 14L5 18",
  "M5 6L5 10"
],
  "0 0 24 24",
);

export const cropIcon = strokeIcon(
  [
  "M7 3L7 17",
  "M7 17L21 17",
  "M17 21L17 7",
  "M17 7L3 7"
],
  "0 0 24 24",
);

export const sliceIcon = strokeIcon(
  [
  "M7 5H17Q19 5 19 7V17Q19 19 17 19H7Q5 19 5 17V7Q5 5 7 5Z",
  "M5 19L19 5",
  "M15 5L19 5",
  "M19 5L19 9"
],
  "0 0 24 24",
);

export const eyedropperIcon = strokeIcon(
  [
  "M10 4L20 14L16 18L6 8Z",
  "M8 10L4 14",
  "M4 14L3 19"
],
  "0 0 24 24",
);

export const colorPaletteIcon = strokeIcon(
  [
  "M12 4c-4.97 0-9 3.58-9 8s3.13 8 7 8h1.5a1.5 1.5 0 001.5-1.5c0-.83-.67-1.5-1.5-1.5h-.5a3 3 0 010-6h2a6 6 0 100-12z",
  "M9 8.2a0.8 0.8 0 1 1 0 1.6a0.8 0.8 0 1 1 0 -1.6",
  "M15 7.2a0.8 0.8 0 1 1 0 1.6a0.8 0.8 0 1 1 0 -1.6",
  "M17 11.2a0.8 0.8 0 1 1 0 1.6a0.8 0.8 0 1 1 0 -1.6"
],
  "0 0 24 24",
);

export const swatchIcon = strokeIcon(
  [
  "M6.5 9H11.5Q13 9 13 10.5V15.5Q13 17 11.5 17H6.5Q5 17 5 15.5V10.5Q5 9 6.5 9Z",
  "M12.5 5H17.5Q19 5 19 6.5V11.5Q19 13 17.5 13H12.5Q11 13 11 11.5V6.5Q11 5 12.5 5Z"
],
  "0 0 24 24",
);

export const gradientIcon = strokeIcon(
  [
  "M6 6H18Q20 6 20 8V16Q20 18 18 18H6Q4 18 4 16V8Q4 6 6 6Z",
  "M7 15L17 9",
  "M7 14a1 1 0 1 1 0 2a1 1 0 1 1 0 -2",
  "M17 8a1 1 0 1 1 0 2a1 1 0 1 1 0 -2"
],
  "0 0 24 24",
);

export const gradientLinearIcon = strokeIcon(
  [
  "M6 6H18Q20 6 20 8V16Q20 18 18 18H6Q4 18 4 16V8Q4 6 6 6Z",
  "M7 15L17 9",
  "M14 9L17 9L17 12",
  "M7 12L7 15L10 15"
],
  "0 0 24 24",
);

export const gradientRadialIcon = strokeIcon(
  [
  "M6 6H18Q20 6 20 8V16Q20 18 18 18H6Q4 18 4 16V8Q4 6 6 6Z",
  "M12 10.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 1 1 0 -3",
  "M12 8a4 4 0 1 1 0 8a4 4 0 1 1 0 -8",
  "M12 6a6 6 0 1 1 0 12a6 6 0 1 1 0 -12"
],
  "0 0 24 24",
);

export const paintBucketIcon = strokeIcon(
  [
  "M9 5L17 13L12 18L4 10Z",
  "M13 17L19 17",
  "M18 13a1 1 0 1 1 0 2a1 1 0 1 1 0 -2"
],
  "0 0 24 24",
);

export const brushIcon = strokeIcon(
  [
  "M7 16L12 5L16 9L11 20Z",
  "M9.5 14.5L14.5 9.5"
],
  "0 0 24 24",
);

export const penToolIcon = strokeIcon(
  [
  "M12 4a1 1 0 1 1 0 2a1 1 0 1 1 0 -2",
  "M6 17a1 1 0 1 1 0 2a1 1 0 1 1 0 -2",
  "M18 17a1 1 0 1 1 0 2a1 1 0 1 1 0 -2",
  "M10 8L14 8L12 12Z",
  "M12 6L12 8",
  "M12 12L6 17",
  "M12 12L18 17"
],
  "0 0 24 24",
);

export const bezierCurveIcon = strokeIcon(
  [
  "M6 17a1 1 0 1 1 0 2a1 1 0 1 1 0 -2",
  "M12 5a1 1 0 1 1 0 2a1 1 0 1 1 0 -2",
  "M18 17a1 1 0 1 1 0 2a1 1 0 1 1 0 -2",
  "M6 18Q12 10 18 18",
  "M6 18L9 12",
  "M12 6L12 10",
  "M18 18L15 12"
],
  "0 0 24 24",
);

export const anchorPointIcon = strokeIcon(
  [
  "M6 12L18 12",
  "M12 6L12 18",
  "M12 8L16 12L12 16L8 12Z"
],
  "0 0 24 24",
);

export const anchorPointFillIcon = fillIcon(
  [
  "M6 12L18 12",
  "M12 6L12 18",
  "M12 8L16 12L12 16L8 12Z"
],
  "0 0 24 24",
);

export const vectorNodeIcon = strokeIcon(
  [
  "M6 17a1 1 0 1 1 0 2a1 1 0 1 1 0 -2",
  "M12 7a1 1 0 1 1 0 2a1 1 0 1 1 0 -2",
  "M18 14a1 1 0 1 1 0 2a1 1 0 1 1 0 -2",
  "M6 18L12 8",
  "M12 8L18 15"
],
  "0 0 24 24",
);

export const vectorPathIcon = strokeIcon(
  [
  "M6 16a1 1 0 1 1 0 2a1 1 0 1 1 0 -2",
  "M18 6a1 1 0 1 1 0 2a1 1 0 1 1 0 -2",
  "M6 17Q12 3 18 7"
],
  "0 0 24 24",
);

export const booleanUnionIcon = strokeIcon(
  [
  "M10 8a4 4 0 1 1 0 8a4 4 0 1 1 0 -8",
  "M14 8a4 4 0 1 1 0 8a4 4 0 1 1 0 -8",
  "M15.8 7L18.2 7",
  "M17 5.8L17 8.2"
],
  "0 0 24 24",
);

export const booleanSubtractIcon = strokeIcon(
  [
  "M10 8a4 4 0 1 1 0 8a4 4 0 1 1 0 -8",
  "M14 8a4 4 0 1 1 0 8a4 4 0 1 1 0 -8",
  "M15.8 7L18.2 7"
],
  "0 0 24 24",
);

export const booleanIntersectIcon = strokeIcon(
  [
  "M10 8a4 4 0 1 1 0 8a4 4 0 1 1 0 -8",
  "M14 8a4 4 0 1 1 0 8a4 4 0 1 1 0 -8",
  "M11 8H13Q14 8 14 9V15Q14 16 13 16H11Q10 16 10 15V9Q10 8 11 8Z"
],
  "0 0 24 24",
);

export const booleanExcludeIcon = strokeIcon(
  [
  "M10 8a4 4 0 1 1 0 8a4 4 0 1 1 0 -8",
  "M14 8a4 4 0 1 1 0 8a4 4 0 1 1 0 -8",
  "M9 8L15 16"
],
  "0 0 24 24",
);

export const componentIcon = strokeIcon(
  [
  "M10.2 9H13.8Q15 9 15 10.2V13.8Q15 15 13.8 15H10.2Q9 15 9 13.8V10.2Q9 9 10.2 9Z",
  "M12 4L14 6L12 8L10 6Z",
  "M20 12L18 14L16 12L18 10Z",
  "M12 20L10 18L12 16L14 18Z",
  "M4 12L6 10L8 12L6 14Z"
],
  "0 0 24 24",
);

export const componentInstanceIcon = strokeIcon(
  [
  "M10.2 9H13.8Q15 9 15 10.2V13.8Q15 15 13.8 15H10.2Q9 15 9 13.8V10.2Q9 9 10.2 9Z",
  "M7 5H17Q19 5 19 7V17Q19 19 17 19H7Q5 19 5 17V7Q5 5 7 5Z"
],
  "0 0 24 24",
);

export const componentVariantIcon = strokeIcon(
  [
  "M7 5H17Q19 5 19 7V17Q19 19 17 19H7Q5 19 5 17V7Q5 5 7 5Z",
  "M12 5L12 19",
  "M5 12L19 12"
],
  "0 0 24 24",
);

export const componentSetIcon = strokeIcon(
  [
  "M6 5H9Q10 5 10 6V9Q10 10 9 10H6Q5 10 5 9V6Q5 5 6 5Z",
  "M15 5H18Q19 5 19 6V9Q19 10 18 10H15Q14 10 14 9V6Q14 5 15 5Z",
  "M6 14H9Q10 14 10 15V18Q10 19 9 19H6Q5 19 5 18V15Q5 14 6 14Z",
  "M15 14H18Q19 14 19 15V18Q19 19 18 19H15Q14 19 14 18V15Q14 14 15 14Z"
],
  "0 0 24 24",
);

export const layerLockIcon = strokeIcon(
  [
  "M12 4L20 8L12 12L4 8Z",
  "M12 10L20 14L12 18L4 14Z",
  "M15.4 16.8H18.6Q19.6 16.8 19.6 17.8V20.1Q19.6 21.1 18.6 21.1H15.4Q14.4 21.1 14.4 20.1V17.8Q14.4 16.8 15.4 16.8Z",
  "M15.4 16.8V15a1.6 1.6 0 013.2 0v1.8"
],
  "0 0 24 24",
);

export const layerVisibleIcon = strokeIcon(
  [
  "M12 4L20 8L12 12L4 8Z",
  "M12 10L20 14L12 18L4 14Z",
  "M17 15.8a1.2 1.2 0 1 1 0 2.4a1.2 1.2 0 1 1 0 -2.4",
  "M14.5 17A2.5 1.6 0 0 1 19.5 17"
],
  "0 0 24 24",
);

export const layerHiddenIcon = strokeIcon(
  [
  "M12 4L20 8L12 12L4 8Z",
  "M12 10L20 14L12 18L4 14Z",
  "M14 14L20 20"
],
  "0 0 24 24",
);

export const layerGroupIcon = strokeIcon(
  [
  "M12 4L20 8L12 12L4 8Z",
  "M12 10L20 14L12 18L4 14Z",
  "M5 3H19Q21 3 21 5V19Q21 21 19 21H5Q3 21 3 19V5Q3 3 5 3Z"
],
  "0 0 24 24",
);

export const groupSelectIcon = strokeIcon(
  [
  "M6.5 5H11.5Q13 5 13 6.5V11.5Q13 13 11.5 13H6.5Q5 13 5 11.5V6.5Q5 5 6.5 5Z",
  "M12.5 11H17.5Q19 11 19 12.5V17.5Q19 19 17.5 19H12.5Q11 19 11 17.5V12.5Q11 11 12.5 11Z",
  "M5 4.3a0.7 0.7 0 1 1 0 1.4a0.7 0.7 0 1 1 0 -1.4",
  "M19 18.3a0.7 0.7 0 1 1 0 1.4a0.7 0.7 0 1 1 0 -1.4"
],
  "0 0 24 24",
);

export const ungroupIcon = strokeIcon(
  [
  "M6.5 5H9.5Q11 5 11 6.5V9.5Q11 11 9.5 11H6.5Q5 11 5 9.5V6.5Q5 5 6.5 5Z",
  "M14.5 13H17.5Q19 13 19 14.5V17.5Q19 19 17.5 19H14.5Q13 19 13 17.5V14.5Q13 13 14.5 13Z",
  "M10 10L14 14"
],
  "0 0 24 24",
);

export const prototypeIcon = strokeIcon(
  [
  "M9 4H15Q17 4 17 6V18Q17 20 15 20H9Q7 20 7 18V6Q7 4 9 4Z",
  "M12 10L18 10",
  "M15 7L18 10L15 13"
],
  "0 0 24 24",
);

export const prototypeLinkIcon = strokeIcon(
  [
  "M5.5 5H8.5Q10 5 10 6.5V15.5Q10 17 8.5 17H5.5Q4 17 4 15.5V6.5Q4 5 5.5 5Z",
  "M15.5 7H18.5Q20 7 20 8.5V17.5Q20 19 18.5 19H15.5Q14 19 14 17.5V8.5Q14 7 15.5 7Z",
  "M10 11L14 11",
  "M12 9L14 11L12 13"
],
  "0 0 24 24",
);

export const flowConnectionIcon = strokeIcon(
  [
  "M5 10.8a1.2 1.2 0 1 1 0 2.4a1.2 1.2 0 1 1 0 -2.4",
  "M12 3.8a1.2 1.2 0 1 1 0 2.4a1.2 1.2 0 1 1 0 -2.4",
  "M19 10.8a1.2 1.2 0 1 1 0 2.4a1.2 1.2 0 1 1 0 -2.4",
  "M12 17.8a1.2 1.2 0 1 1 0 2.4a1.2 1.2 0 1 1 0 -2.4",
  "M6.2 12L17.8 12",
  "M12 6.2L12 17.8"
],
  "0 0 24 24",
);

export const flowScreenIcon = strokeIcon(
  [
  "M8 4H16Q18 4 18 6V18Q18 20 16 20H8Q6 20 6 18V6Q6 4 8 4Z",
  "M3.5 11a1 1 0 1 1 0 2a1 1 0 1 1 0 -2",
  "M20.5 11a1 1 0 1 1 0 2a1 1 0 1 1 0 -2",
  "M4.5 12L6 12",
  "M18 12L19.5 12"
],
  "0 0 24 24",
);

export const commentPinIcon = strokeIcon(
  [
  "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z",
  "M17 6L19 8L17.5 9.5L17.5 13L16.5 13L16.5 9.5L15 8Z"
],
  "0 0 24 24",
);

export const commentResolvedIcon = strokeIcon(
  [
  "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z",
  "M8 12L11 15L16 9"
],
  "0 0 24 24",
);

export const inspectIcon = strokeIcon(
  [
  "M7 5H17Q19 5 19 7V17Q19 19 17 19H7Q5 19 5 17V7Q5 5 7 5Z",
  "M5 12L19 12",
  "M12 5L12 19",
  "M12 10.8a1.2 1.2 0 1 1 0 2.4a1.2 1.2 0 1 1 0 -2.4"
],
  "0 0 24 24",
);

export const measureIcon = strokeIcon(
  [
  "M4 18L20 18",
  "M7 15L4 18L7 21",
  "M17 15L20 18L17 21",
  "M12 6L12 15"
],
  "0 0 24 24",
);

export const rulerHorizontalIcon = strokeIcon(
  [
  "M5 9H19Q20 9 20 10V14Q20 15 19 15H5Q4 15 4 14V10Q4 9 5 9Z",
  "M7 9L7 13",
  "M10 9L10 12",
  "M13 9L13 13",
  "M16 9L16 12"
],
  "0 0 24 24",
);

export const rulerVerticalIcon = strokeIcon(
  [
  "M10 4H14Q15 4 15 5V19Q15 20 14 20H10Q9 20 9 19V5Q9 4 10 4Z",
  "M9 7L13 7",
  "M9 10L12 10",
  "M9 13L13 13",
  "M9 16L12 16"
],
  "0 0 24 24",
);

export const spacingTokenIcon = strokeIcon(
  [
  "M12 4L19 8L19 16L12 20L5 16L5 8Z",
  "M8 12L16 12",
  "M10 10L8 12L10 14",
  "M14 10L16 12L14 14"
],
  "0 0 24 24",
);

export const colorTokenIcon = strokeIcon(
  [
  "M12 4L19 8L19 16L12 20L5 16L5 8Z",
  "M12 9a3 3 0 1 1 0 6a3 3 0 1 1 0 -6"
],
  "0 0 24 24",
);

export const radiusTokenIcon = strokeIcon(
  [
  "M12 4L19 8L19 16L12 20L5 16L5 8Z",
  "M10 8H14Q16 8 16 10V14Q16 16 14 16H10Q8 16 8 14V10Q8 8 10 8Z"
],
  "0 0 24 24",
);

export const shadowTokenIcon = strokeIcon(
  [
  "M12 4L19 8L19 16L12 20L5 16L5 8Z",
  "M9.5 8H13.5Q15 8 15 9.5V13.5Q15 15 13.5 15H9.5Q8 15 8 13.5V9.5Q8 8 9.5 8Z",
  "M11.5 10H15.5Q17 10 17 11.5V15.5Q17 17 15.5 17H11.5Q10 17 10 15.5V11.5Q10 10 11.5 10Z"
],
  "0 0 24 24",
);

export const typographyTokenIcon = strokeIcon(
  [
  "M12 4L19 8L19 16L12 20L5 16L5 8Z",
  "M10.4 8L13.6 8",
  "M12 8L12 16"
],
  "0 0 24 24",
);

export const variableIcon = strokeIcon(
  [
  "M9 6L7 12",
  "M7 12L9 18",
  "M12 11a1 1 0 1 1 0 2a1 1 0 1 1 0 -2",
  "M15 6L17 12",
  "M17 12L15 18"
],
  "0 0 24 24",
);

export const variableCollectionIcon = strokeIcon(
  [
  "M8 5L13 8L13 14L8 17L3 14L3 8Z",
  "M16 7L21 10L21 16L16 19L11 16L11 10Z"
],
  "0 0 24 24",
);

export const autoLayoutHorizontalIcon = strokeIcon(
  [
  "M7 6H17Q19 6 19 8V16Q19 18 17 18H7Q5 18 5 16V8Q5 6 7 6Z",
  "M7.8 9H9.2Q10 9 10 9.8V14.2Q10 15 9.2 15H7.8Q7 15 7 14.2V9.8Q7 9 7.8 9Z",
  "M14.8 9H16.2Q17 9 17 9.8V14.2Q17 15 16.2 15H14.8Q14 15 14 14.2V9.8Q14 9 14.8 9Z",
  "M10.5 12L13.5 12",
  "M12 10L14 12L12 14"
],
  "0 0 24 24",
);

export const autoLayoutVerticalIcon = strokeIcon(
  [
  "M8 5H16Q18 5 18 7V17Q18 19 16 19H8Q6 19 6 17V7Q6 5 8 5Z",
  "M9.8 7H14.2Q15 7 15 7.8V9.2Q15 10 14.2 10H9.8Q9 10 9 9.2V7.8Q9 7 9.8 7Z",
  "M9.8 14H14.2Q15 14 15 14.8V16.2Q15 17 14.2 17H9.8Q9 17 9 16.2V14.8Q9 14 9.8 14Z",
  "M12 10.5L12 13.5",
  "M10 12L12 14L14 12"
],
  "0 0 24 24",
);

export const distributeHorizontalIcon = strokeIcon(
  [
  "M4.8 8H6.2Q7 8 7 8.8V15.2Q7 16 6.2 16H4.8Q4 16 4 15.2V8.8Q4 8 4.8 8Z",
  "M11.3 8H12.7Q13.5 8 13.5 8.8V15.2Q13.5 16 12.7 16H11.3Q10.5 16 10.5 15.2V8.8Q10.5 8 11.3 8Z",
  "M17.8 8H19.2Q20 8 20 8.8V15.2Q20 16 19.2 16H17.8Q17 16 17 15.2V8.8Q17 8 17.8 8Z",
  "M7 12L10.5 12",
  "M13.5 12L17 12",
  "M8.5 10L7 12L8.5 14",
  "M15.5 10L17 12L15.5 14"
],
  "0 0 24 24",
);

export const distributeVerticalIcon = strokeIcon(
  [
  "M8.8 4H15.2Q16 4 16 4.8V6.2Q16 7 15.2 7H8.8Q8 7 8 6.2V4.8Q8 4 8.8 4Z",
  "M8.8 10.5H15.2Q16 10.5 16 11.3V12.7Q16 13.5 15.2 13.5H8.8Q8 13.5 8 12.7V11.3Q8 10.5 8.8 10.5Z",
  "M8.8 17H15.2Q16 17 16 17.8V19.2Q16 20 15.2 20H8.8Q8 20 8 19.2V17.8Q8 17 8.8 17Z",
  "M12 7L12 10.5",
  "M12 13.5L12 17",
  "M10 8.5L12 7L14 8.5",
  "M10 15.5L12 17L14 15.5"
],
  "0 0 24 24",
);

export const alignTopIcon = strokeIcon(
  [
  "M4 6L20 6",
  "M6.8 8H9.2Q10 8 10 8.8V15.2Q10 16 9.2 16H6.8Q6 16 6 15.2V8.8Q6 8 6.8 8Z",
  "M14.8 8H17.2Q18 8 18 8.8V12.2Q18 13 17.2 13H14.8Q14 13 14 12.2V8.8Q14 8 14.8 8Z"
],
  "0 0 24 24",
);

export const alignBottomIcon = strokeIcon(
  [
  "M4 18L20 18",
  "M6.8 10H9.2Q10 10 10 10.8V17.2Q10 18 9.2 18H6.8Q6 18 6 17.2V10.8Q6 10 6.8 10Z",
  "M14.8 13H17.2Q18 13 18 13.8V17.2Q18 18 17.2 18H14.8Q14 18 14 17.2V13.8Q14 13 14.8 13Z"
],
  "0 0 24 24",
);

export const alignMiddleIcon = strokeIcon(
  [
  "M4 12L20 12",
  "M6.8 8H9.2Q10 8 10 8.8V15.2Q10 16 9.2 16H6.8Q6 16 6 15.2V8.8Q6 8 6.8 8Z",
  "M14.8 9.5H17.2Q18 9.5 18 10.3V13.7Q18 14.5 17.2 14.5H14.8Q14 14.5 14 13.7V10.3Q14 9.5 14.8 9.5Z"
],
  "0 0 24 24",
);

export const alignBaselineIcon = strokeIcon(
  [
  "M4 17L20 17",
  "M6.8 9H9.2Q10 9 10 9.8V16.2Q10 17 9.2 17H6.8Q6 17 6 16.2V9.8Q6 9 6.8 9Z",
  "M14.8 11H17.2Q18 11 18 11.8V16.2Q18 17 17.2 17H14.8Q14 17 14 16.2V11.8Q14 11 14.8 11Z"
],
  "0 0 24 24",
);

export const handoffIcon = strokeIcon(
  [
  "M5.5 5H10.5Q12 5 12 6.5V17.5Q12 19 10.5 19H5.5Q4 19 4 17.5V6.5Q4 5 5.5 5Z",
  "M15.5 7H18.5Q20 7 20 8.5V15.5Q20 17 18.5 17H15.5Q14 17 14 15.5V8.5Q14 7 15.5 7Z",
  "M12 12L14 12",
  "M17 9L17 15",
  "M15.5 10.5L18.5 10.5",
  "M15.5 13.5L18.5 13.5"
],
  "0 0 24 24",
);

export const designToolIcons = defineIcons({
  "cursor-arrow": cursorArrowIcon,
  "cursor-click": cursorClickIcon,
  "cursor-text": cursorTextIcon,
  "cursor-crosshair": cursorCrosshairIcon,
  "cursor-move": cursorMoveIcon,
  "cursor-grab": cursorGrabIcon,
  "lasso-select": lassoSelectIcon,
  "marquee-select": marqueeSelectIcon,
  "crop": cropIcon,
  "slice": sliceIcon,
  "eyedropper": eyedropperIcon,
  "color-palette": colorPaletteIcon,
  "swatch": swatchIcon,
  "gradient": gradientIcon,
  "gradient-linear": gradientLinearIcon,
  "gradient-radial": gradientRadialIcon,
  "paint-bucket": paintBucketIcon,
  "brush": brushIcon,
  "pen-tool": penToolIcon,
  "bezier-curve": bezierCurveIcon,
  "anchor-point": anchorPointIcon,
  "anchor-point-fill": anchorPointFillIcon,
  "vector-node": vectorNodeIcon,
  "vector-path": vectorPathIcon,
  "boolean-union": booleanUnionIcon,
  "boolean-subtract": booleanSubtractIcon,
  "boolean-intersect": booleanIntersectIcon,
  "boolean-exclude": booleanExcludeIcon,
  "component": componentIcon,
  "component-instance": componentInstanceIcon,
  "component-variant": componentVariantIcon,
  "component-set": componentSetIcon,
  "layer-lock": layerLockIcon,
  "layer-visible": layerVisibleIcon,
  "layer-hidden": layerHiddenIcon,
  "layer-group": layerGroupIcon,
  "group-select": groupSelectIcon,
  "ungroup": ungroupIcon,
  "prototype": prototypeIcon,
  "prototype-link": prototypeLinkIcon,
  "flow-connection": flowConnectionIcon,
  "flow-screen": flowScreenIcon,
  "comment-pin": commentPinIcon,
  "comment-resolved": commentResolvedIcon,
  "inspect": inspectIcon,
  "measure": measureIcon,
  "ruler-horizontal": rulerHorizontalIcon,
  "ruler-vertical": rulerVerticalIcon,
  "spacing-token": spacingTokenIcon,
  "color-token": colorTokenIcon,
  "radius-token": radiusTokenIcon,
  "shadow-token": shadowTokenIcon,
  "typography-token": typographyTokenIcon,
  "variable": variableIcon,
  "variable-collection": variableCollectionIcon,
  "auto-layout-horizontal": autoLayoutHorizontalIcon,
  "auto-layout-vertical": autoLayoutVerticalIcon,
  "distribute-horizontal": distributeHorizontalIcon,
  "distribute-vertical": distributeVerticalIcon,
  "align-top": alignTopIcon,
  "align-bottom": alignBottomIcon,
  "align-middle": alignMiddleIcon,
  "align-baseline": alignBaselineIcon,
  "handoff": handoffIcon,
});
