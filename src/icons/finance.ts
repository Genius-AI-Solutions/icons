import { defineIcons } from '../core/index';
import { strokeIcon } from './shared';
import { financeExtraIcons } from './finance-extra';

export const dollarSignIcon = strokeIcon(
  [
    "M12 1v22",
    "M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6",
  ],
  "0 0 24 24",
);

export const coinsIcon = strokeIcon(
  [
    "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z",
    "M9 12h.01",
    "M15 12h.01",
    "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",
  ],
  "0 0 24 24",
);

export const trendingUpIcon = strokeIcon(
  [
    "M23 6l-9.5 9.5-5-5L1 18",
    "M17 6h6v6",
  ],
  "0 0 24 24",
);

export const trendingDownIcon = strokeIcon(
  [
    "M23 18l-9.5-9.5-5 5L1 6",
    "M17 18h6v-6",
  ],
  "0 0 24 24",
);

export const creditCardIcon = strokeIcon(
  [
    "M1 10h22",
    "M3 4h18a2 2 0 012 2v12a2 2 0 01-2 2H3a2 2 0 01-2-2V6a2 2 0 012-2z",
  ],
  "0 0 24 24",
);

export const barChartIcon = strokeIcon(
  [
    "M3 3v18h18",
    "M18 17V9",
    "M13 17V5",
    "M8 17v-3",
  ],
  "0 0 24 24",
);

export const financeIcons = defineIcons({
  "dollar-sign": dollarSignIcon,
  "coins": coinsIcon,
  "trending-up": trendingUpIcon,
  "trending-down": trendingDownIcon,
  "credit-card": creditCardIcon,
  "bar-chart": barChartIcon,
  ...financeExtraIcons,
});
