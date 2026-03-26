import { defineIcons } from '../core/index';
import { fillIcon, strokeIcon } from './shared';

export const checkboxIcon = strokeIcon(
  "M7 5H17Q19 5 19 7V17Q19 19 17 19H7Q5 19 5 17V7Q5 5 7 5Z",
  "0 0 24 24",
);

export const checkboxCheckedIcon = strokeIcon(
  [
  "M7 5H17Q19 5 19 7V17Q19 19 17 19H7Q5 19 5 17V7Q5 5 7 5Z",
  "M8 12L11 15L16 9"
],
  "0 0 24 24",
);

export const checkboxIndeterminateIcon = strokeIcon(
  [
  "M7 5H17Q19 5 19 7V17Q19 19 17 19H7Q5 19 5 17V7Q5 5 7 5Z",
  "M8 12L16 12"
],
  "0 0 24 24",
);

export const radioButtonIcon = strokeIcon(
  "M12 5a7 7 0 1 1 0 14a7 7 0 1 1 0 -14",
  "0 0 24 24",
);

export const radioButtonCheckedIcon = fillIcon(
  [
  "M12 5a7 7 0 1 1 0 14a7 7 0 1 1 0 -14",
  "M12 9a3 3 0 1 1 0 6a3 3 0 1 1 0 -6"
],
  "0 0 24 24",
);

export const toggleLeftIcon = strokeIcon(
  [
  "M8 8H16Q20 8 20 12V12Q20 16 16 16H8Q4 16 4 12V12Q4 8 8 8Z",
  "M9 9a3 3 0 1 1 0 6a3 3 0 1 1 0 -6"
],
  "0 0 24 24",
);

export const toggleRightIcon = strokeIcon(
  [
  "M8 8H16Q20 8 20 12V12Q20 16 16 16H8Q4 16 4 12V12Q4 8 8 8Z",
  "M15 9a3 3 0 1 1 0 6a3 3 0 1 1 0 -6"
],
  "0 0 24 24",
);

export const switchOnIcon = strokeIcon(
  [
  "M8 8H16Q20 8 20 12V12Q20 16 16 16H8Q4 16 4 12V12Q4 8 8 8Z",
  "M15 9a3 3 0 1 1 0 6a3 3 0 1 1 0 -6",
  "M7 12L9 12"
],
  "0 0 24 24",
);

export const switchOffIcon = strokeIcon(
  [
  "M8 8H16Q20 8 20 12V12Q20 16 16 16H8Q4 16 4 12V12Q4 8 8 8Z",
  "M9 9a3 3 0 1 1 0 6a3 3 0 1 1 0 -6",
  "M15 10L17 14",
  "M17 10L15 14"
],
  "0 0 24 24",
);

export const inputIcon = strokeIcon(
  [
  "M6 7H18Q20 7 20 9V15Q20 17 18 17H6Q4 17 4 15V9Q4 7 6 7Z",
  "M8 12L14 12"
],
  "0 0 24 24",
);

export const textareaIcon = strokeIcon(
  [
  "M6 5H18Q20 5 20 7V17Q20 19 18 19H6Q4 19 4 17V7Q4 5 6 5Z",
  "M8 10L16 10",
  "M8 14L16 14",
  "M8 18L13 18"
],
  "0 0 24 24",
);

export const selectIcon = strokeIcon(
  [
  "M6 7H18Q20 7 20 9V15Q20 17 18 17H6Q4 17 4 15V9Q4 7 6 7Z",
  "M14 11L16 13L18 11"
],
  "0 0 24 24",
);

export const comboboxIcon = strokeIcon(
  [
  "M6 7H18Q20 7 20 9V15Q20 17 18 17H6Q4 17 4 15V9Q4 7 6 7Z",
  "M14 7L14 17",
  "M16 11L18 13L20 11"
],
  "0 0 24 24",
);

export const searchFieldIcon = strokeIcon(
  [
  "M6 7H18Q20 7 20 9V15Q20 17 18 17H6Q4 17 4 15V9Q4 7 6 7Z",
  "M8.3 9.7a1.6 1.6 0 1 1 0 3.2a1.6 1.6 0 1 1 0 -3.2",
  "M9.6 12.6L12.2 15.2"
],
  "0 0 24 24",
);

export const formIcon = strokeIcon(
  [
  "M7 4H17Q19 4 19 6V18Q19 20 17 20H7Q5 20 5 18V6Q5 4 7 4Z",
  "M8 8L16 8",
  "M8 12L16 12",
  "M8 16L13 16"
],
  "0 0 24 24",
);

export const labelIcon = strokeIcon(
  [
  "M7 8H17Q19 8 19 10V14Q19 16 17 16H7Q5 16 5 14V10Q5 8 7 8Z",
  "M8 12L16 12"
],
  "0 0 24 24",
);

export const placeholderIcon = strokeIcon(
  [
  "M6 7H18Q20 7 20 9V15Q20 17 18 17H6Q4 17 4 15V9Q4 7 6 7Z",
  "M7 12L11 12",
  "M13 12L17 12"
],
  "0 0 24 24",
);

export const asteriskFieldIcon = strokeIcon(
  [
  "M6 7H18Q20 7 20 9V15Q20 17 18 17H6Q4 17 4 15V9Q4 7 6 7Z",
  "M8 10L8 14",
  "M6.5 11L9.5 13",
  "M9.5 11L6.5 13"
],
  "0 0 24 24",
);

export const requiredFieldIcon = strokeIcon(
  [
  "M6 7H18Q20 7 20 9V15Q20 17 18 17H6Q4 17 4 15V9Q4 7 6 7Z",
  "M15.5 9.5L15.5 14.5",
  "M13.5 12L17.5 12"
],
  "0 0 24 24",
);

export const helperTextIcon = strokeIcon(
  [
  "M6 7H18Q20 7 20 9V15Q20 17 18 17H6Q4 17 4 15V9Q4 7 6 7Z",
  "M7 19L17 19",
  "M7 12L15 12"
],
  "0 0 24 24",
);

export const contentUiIcons = defineIcons({
  "checkbox": checkboxIcon,
  "checkbox-checked": checkboxCheckedIcon,
  "checkbox-indeterminate": checkboxIndeterminateIcon,
  "radio-button": radioButtonIcon,
  "radio-button-checked": radioButtonCheckedIcon,
  "toggle-left": toggleLeftIcon,
  "toggle-right": toggleRightIcon,
  "switch-on": switchOnIcon,
  "switch-off": switchOffIcon,
  "input": inputIcon,
  "textarea": textareaIcon,
  "select": selectIcon,
  "combobox": comboboxIcon,
  "search-field": searchFieldIcon,
  "form": formIcon,
  "label": labelIcon,
  "placeholder": placeholderIcon,
  "asterisk-field": asteriskFieldIcon,
  "required-field": requiredFieldIcon,
  "helper-text": helperTextIcon,
});
