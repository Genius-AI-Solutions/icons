import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const iconsDir = path.join(projectRoot, 'src', 'icons');

function formatNumber(value) {
  if (Number.isInteger(value)) {
    return String(value);
  }

  return String(Number(value.toFixed(2)));
}

function point([x, y]) {
  return `${formatNumber(x)} ${formatNumber(y)}`;
}

function line(x1, y1, x2, y2) {
  return `M${point([x1, y1])}L${point([x2, y2])}`;
}

function poly(points) {
  return `M${points.map(point).join('L')}`;
}

function polygon(points) {
  return `${poly(points)}Z`;
}

function circle(cx, cy, radius) {
  return `M${formatNumber(cx)} ${formatNumber(cy - radius)}a${formatNumber(radius)} ${formatNumber(radius)} 0 1 1 0 ${formatNumber(radius * 2)}a${formatNumber(radius)} ${formatNumber(radius)} 0 1 1 0 ${formatNumber(-radius * 2)}`;
}

function ellipse(cx, cy, radiusX, radiusY) {
  return `M${formatNumber(cx)} ${formatNumber(cy - radiusY)}a${formatNumber(radiusX)} ${formatNumber(radiusY)} 0 1 1 0 ${formatNumber(radiusY * 2)}a${formatNumber(radiusX)} ${formatNumber(radiusY)} 0 1 1 0 ${formatNumber(-radiusY * 2)}`;
}

function roundedRect(x, y, width, height, radius = 0) {
  if (radius <= 0) {
    return `M${formatNumber(x)} ${formatNumber(y)}H${formatNumber(x + width)}V${formatNumber(y + height)}H${formatNumber(x)}Z`;
  }

  return [
    `M${formatNumber(x + radius)} ${formatNumber(y)}`,
    `H${formatNumber(x + width - radius)}`,
    `Q${formatNumber(x + width)} ${formatNumber(y)} ${formatNumber(x + width)} ${formatNumber(y + radius)}`,
    `V${formatNumber(y + height - radius)}`,
    `Q${formatNumber(x + width)} ${formatNumber(y + height)} ${formatNumber(x + width - radius)} ${formatNumber(y + height)}`,
    `H${formatNumber(x + radius)}`,
    `Q${formatNumber(x)} ${formatNumber(y + height)} ${formatNumber(x)} ${formatNumber(y + height - radius)}`,
    `V${formatNumber(y + radius)}`,
    `Q${formatNumber(x)} ${formatNumber(y)} ${formatNumber(x + radius)} ${formatNumber(y)}`,
    'Z',
  ].join('');
}

function arcPath(startX, startY, radiusX, radiusY, endX, endY) {
  return `M${formatNumber(startX)} ${formatNumber(startY)}A${formatNumber(radiusX)} ${formatNumber(radiusY)} 0 0 1 ${formatNumber(endX)} ${formatNumber(endY)}`;
}

function quadPath(startX, startY, controlX, controlY, endX, endY) {
  return `M${formatNumber(startX)} ${formatNumber(startY)}Q${formatNumber(controlX)} ${formatNumber(controlY)} ${formatNumber(endX)} ${formatNumber(endY)}`;
}

function toPascalCase(name) {
  return name
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

function constantNameForIcon(name) {
  return `${toPascalCase(name).replace(/^[A-Z]/, (value) => value.toLowerCase())}Icon`;
}

function flattenPaths(paths) {
  if (typeof paths === 'string') {
    return [paths];
  }

  return paths.flat().filter(Boolean);
}

function stroke(name, paths, viewBox = '0 0 24 24') {
  return {
    kind: 'stroke',
    name,
    paths: flattenPaths(paths),
    viewBox,
  };
}

function fill(name, paths, viewBox = '0 0 24 24') {
  return {
    kind: 'fill',
    name,
    paths: flattenPaths(paths),
    viewBox,
  };
}

const glyphs = {
  A: [
    [[1, 14], [5, 0], [9, 14]],
    [[2.8, 8], [7.2, 8]],
  ],
  B: [
    [[1, 0], [1, 14]],
    [[1, 0], [6.4, 0], [8.4, 1.8], [8.4, 5.1], [6.4, 7], [1, 7]],
    [[1, 7], [6.8, 7], [8.8, 8.9], [8.8, 12.2], [6.8, 14], [1, 14]],
  ],
  C: [
    [[8.5, 1.5], [6.2, 0], [3, 0], [1, 2.2], [1, 11.8], [3, 14], [6.2, 14], [8.5, 12.5]],
  ],
  D: [
    [[1, 0], [1, 14]],
    [[1, 0], [5.7, 0], [9, 3.2], [9, 10.8], [5.7, 14], [1, 14]],
  ],
  E: [
    [[9, 0], [1, 0], [1, 14], [9, 14]],
    [[1, 7], [7, 7]],
  ],
  F: [
    [[1, 0], [1, 14]],
    [[1, 0], [9, 0]],
    [[1, 7], [7, 7]],
  ],
  G: [
    [[8.5, 1.5], [6.2, 0], [3, 0], [1, 2.2], [1, 11.8], [3, 14], [6.2, 14], [8.8, 12.2], [8.8, 8.6], [5.7, 8.6]],
  ],
  H: [
    [[1, 0], [1, 14]],
    [[9, 0], [9, 14]],
    [[1, 7], [9, 7]],
  ],
  I: [
    [[1.5, 0], [8.5, 0]],
    [[5, 0], [5, 14]],
    [[1.5, 14], [8.5, 14]],
  ],
  J: [
    [[1.5, 0], [8.5, 0]],
    [[5.5, 0], [5.5, 11.5], [4, 14], [1.5, 14]],
  ],
  K: [
    [[1, 0], [1, 14]],
    [[9, 0], [1, 7]],
    [[4.5, 7], [9, 14]],
  ],
  L: [
    [[1, 0], [1, 14], [9, 14]],
  ],
  M: [
    [[1, 14], [1, 0], [5, 6], [9, 0], [9, 14]],
  ],
  N: [
    [[1, 14], [1, 0], [9, 14], [9, 0]],
  ],
  O: [
    [[3, 0], [7, 0], [9, 2.2], [9, 11.8], [7, 14], [3, 14], [1, 11.8], [1, 2.2], [3, 0]],
  ],
  P: [
    [[1, 14], [1, 0], [6.5, 0], [8.8, 2.1], [8.8, 5.4], [6.5, 7], [1, 7]],
  ],
  Q: [
    [[3, 0], [7, 0], [9, 2.2], [9, 11.8], [7, 14], [3, 14], [1, 11.8], [1, 2.2], [3, 0]],
    [[6.5, 10.5], [9, 14]],
  ],
  R: [
    [[1, 14], [1, 0], [6.4, 0], [8.8, 2], [8.8, 5.3], [6.4, 7], [1, 7]],
    [[5.2, 7], [9, 14]],
  ],
  S: [
    [[8.6, 1.5], [6.2, 0], [3.1, 0], [1.4, 1.8], [1.4, 4.9], [3.2, 6.4], [6.9, 7.5], [8.6, 9.2], [8.6, 12.3], [6.9, 14], [3.6, 14], [1.2, 12.5]],
  ],
  T: [
    [[1, 0], [9, 0]],
    [[5, 0], [5, 14]],
  ],
  U: [
    [[1, 0], [1, 10.8], [3, 14], [7, 14], [9, 10.8], [9, 0]],
  ],
  V: [
    [[1, 0], [5, 14], [9, 0]],
  ],
  W: [
    [[1, 0], [3, 14], [5, 8], [7, 14], [9, 0]],
  ],
  X: [
    [[1, 0], [9, 14]],
    [[9, 0], [1, 14]],
  ],
  Y: [
    [[1, 0], [5, 7], [9, 0]],
    [[5, 7], [5, 14]],
  ],
  Z: [
    [[1, 0], [9, 0], [1, 14], [9, 14]],
  ],
  0: [
    [[3, 0], [7, 0], [9, 2.2], [9, 11.8], [7, 14], [3, 14], [1, 11.8], [1, 2.2], [3, 0]],
    [[8.1, 1.8], [1.9, 12.2]],
  ],
  1: [
    [[3, 3], [5, 1], [5, 14]],
    [[3, 14], [7, 14]],
  ],
  2: [
    [[2, 3], [3.7, 0], [7, 0], [8.8, 2], [8.8, 5], [1.6, 14], [9, 14]],
  ],
  3: [
    [[1.8, 1], [4, 0], [7.2, 0], [8.8, 1.8], [8.8, 5], [6.7, 7], [8.8, 9], [8.8, 12.2], [7.2, 14], [4, 14], [1.8, 13]],
  ],
  4: [
    [[7, 0], [7, 14]],
    [[7, 0], [1.5, 9], [9, 9]],
  ],
  5: [
    [[8.5, 0], [2, 0], [2, 6.3], [6.5, 6.3], [8.8, 8.3], [8.8, 12], [6.8, 14], [3.5, 14], [1.4, 12.6]],
  ],
  6: [
    [[8.2, 1.8], [6.3, 0], [3.2, 0], [1.2, 3], [1.2, 11], [3.2, 14], [6.5, 14], [8.8, 12], [8.8, 8.7], [6.8, 6.7], [1.8, 6.7]],
  ],
  7: [
    [[1, 0], [9, 0], [4.2, 14]],
  ],
  8: [
    [[3.2, 0], [6.8, 0], [8.8, 2], [8.8, 5.2], [6.8, 7], [3.2, 7], [1.2, 5.2], [1.2, 2], [3.2, 0]],
    [[3.2, 7], [6.8, 7], [8.8, 9], [8.8, 12], [6.8, 14], [3.2, 14], [1.2, 12], [1.2, 9], [3.2, 7]],
  ],
  9: [
    [[8.8, 7.2], [6.8, 7.2], [3.2, 7.2], [1.2, 5.2], [1.2, 2], [3.2, 0], [6.5, 0], [8.8, 3], [8.8, 11], [6.8, 14], [3.5, 14], [1.5, 12.7]],
  ],
  '&': [
    [[7.8, 14], [3.4, 9.4], [2, 7], [2.4, 3.4], [5, 1.2], [7.4, 1.2], [9, 2.8], [9, 5], [7.6, 6.6], [3.8, 10.5], [2, 12.5], [2.2, 14], [5, 14], [9, 9.5]],
  ],
  '*': [
    [[5, 1], [5, 13]],
    [[1.2, 4], [8.8, 10]],
    [[8.8, 4], [1.2, 10]],
  ],
  '@': [
    [[7.8, 10.8], [7.8, 5.2], [6.4, 3.8], [4.3, 3.8], [3, 5.2], [3, 8.7], [4.7, 10.4], [7.2, 10.4], [8.9, 8.7], [8.9, 3.2], [7.1, 1], [3.7, 1], [1.2, 3.5], [1.2, 10.5], [3.5, 13], [7.5, 13], [9.4, 11.5]],
  ],
  '!': [
    [[5, 0], [5, 9]],
    [[5, 12.5], [5, 14]],
  ],
  '?': [
    [[1.5, 3], [3.6, 0.8], [6.7, 0.8], [8.6, 2.6], [8.6, 5], [6.9, 6.8], [5, 8.4], [5, 10.2]],
    [[5, 12.5], [5, 14]],
  ],
  '%': [
    [[2, 14], [8, 0]],
    [[2.6, 4.2], [2.6, 4.2]],
    [[7.4, 9.8], [7.4, 9.8]],
    [[1.5, 3.8], [3.7, 1.8], [3.7, 5.8], [1.5, 3.8]],
    [[6.3, 10.2], [8.5, 8.2], [8.5, 12.2], [6.3, 10.2]],
  ],
  '/': [
    [[2, 14], [8, 0]],
  ],
  '\\': [
    [[2, 0], [8, 14]],
  ],
  '=': [
    [[1.5, 5], [8.5, 5]],
    [[1.5, 9], [8.5, 9]],
  ],
  '±': [
    [[5, 2], [5, 8]],
    [[2, 5], [8, 5]],
    [[2, 11], [8, 11]],
  ],
  '()': [
    [[4, 1], [2, 4], [2, 10], [4, 13]],
    [[6, 1], [8, 4], [8, 10], [6, 13]],
  ],
  '[]': [
    [[4, 1], [2, 1], [2, 13], [4, 13]],
    [[6, 1], [8, 1], [8, 13], [6, 13]],
  ],
};

function scaleGlyphPath(points, x, y, width, height) {
  return poly(
    points.map(([gx, gy]) => [
      x + (gx / 10) * width,
      y + (gy / 14) * height,
    ]),
  );
}

function glyphPaths(token, x, y, width, height) {
  const glyph = glyphs[token];

  if (!glyph) {
    throw new Error(`Missing glyph definition for "${token}".`);
  }

  return glyph.map((points) => scaleGlyphPath(points, x, y, width, height));
}

function textPaths(text, x, y, width, height, gap = 1.2) {
  const chars = text.split('');
  const charWidth = (width - gap * (chars.length - 1)) / chars.length;

  return chars.flatMap((char, index) =>
    glyphPaths(char, x + index * (charWidth + gap), y, charWidth, height),
  );
}

function docBase() {
  return [
    'M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z',
    'M13 2v7h7',
  ];
}

function folderBase() {
  return [
    'M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z',
  ];
}

function folderOpenBase() {
  return [
    'M3 7a2 2 0 012-2h4.5l2 2H19a2 2 0 012 2v1H9l-2 2H3z',
    'M3 10h18l-2 9a2 2 0 01-2 1H5a2 2 0 01-2-1z',
  ];
}

function userBase() {
  return [
    'M17 21v-1.5A4.5 4.5 0 0012.5 15h-5A4.5 4.5 0 003 19.5V21',
    circle(10, 8, 3),
  ];
}

function userCircleBase() {
  return [
    circle(12, 12, 9),
    circle(12, 9, 3),
    quadPath(6.5, 18, 12, 14.2, 17.5, 18),
  ];
}

function userSquareBase() {
  return [
    roundedRect(3, 3, 18, 18, 3),
    circle(12, 9, 3),
    quadPath(6.5, 18, 12, 14.2, 17.5, 18),
  ];
}

function usersGroupBase() {
  return [
    circle(9, 8, 3),
    circle(16.5, 9.5, 2.4),
    quadPath(3.5, 20, 9, 15.3, 14.5, 20),
    quadPath(13, 19.2, 16.5, 16.6, 20, 19.2),
  ];
}

function shieldBase() {
  return [
    'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
  ];
}

function mailBase() {
  return [
    'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z',
    'M22 6l-10 7L2 6',
  ];
}

function openMailBase() {
  return [
    'M4 8l8 5 8-5',
    'M2 10l10 7 10-7',
    'M4 6h16l2 12a2 2 0 01-2 2H4a2 2 0 01-2-2z',
  ];
}

function messageSquareBase() {
  return [
    'M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z',
  ];
}

function messageCircleBase() {
  return [
    'M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z',
  ];
}

function phoneBase() {
  return [
    'M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z',
  ];
}

function clipboardBase() {
  return [
    'M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2',
    'M15 2H9a1 1 0 00-1 1v2a1 1 0 001 1h6a1 1 0 001-1V3a1 1 0 00-1-1z',
  ];
}

function receiptBase() {
  return [
    'M6 3h12v18l-2-1.5L14 21l-2-1.5L10 21l-2-1.5L6 21V3z',
  ];
}

function shoppingCartBase() {
  return [
    'M3 5h2l2.2 10.5a1 1 0 001 .8H18a1 1 0 00.95-.68L21 9H7.2',
    circle(10, 19, 1.5),
    circle(17, 19, 1.5),
  ];
}

function shoppingBagBase() {
  return [
    roundedRect(5, 7, 14, 13, 2),
    arcPath(8, 8, 4, 4, 16, 8),
  ];
}

function basketBase() {
  return [
    'M4 10h16l-1.6 8a2 2 0 01-2 1.6H7.6a2 2 0 01-2-1.6z',
    'M8 10l4-6 4 6',
  ];
}

function packageBase() {
  return [
    polygon([[12, 2.5], [19.5, 6.5], [19.5, 17.5], [12, 21.5], [4.5, 17.5], [4.5, 6.5]]),
    line(12, 2.5, 12, 21.5),
    poly([[4.5, 6.5], [12, 10.5], [19.5, 6.5]]),
  ];
}

function storeBase() {
  return [
    roundedRect(4, 9, 16, 11, 2),
    'M3 9l2-5h14l2 5',
    line(8, 20, 8, 13),
    line(13, 20, 13, 16),
    line(13, 16, 17, 16),
  ];
}

function ticketBase() {
  return [
    'M4 8a2 2 0 012-2h12a2 2 0 012 2v2a2.5 2.5 0 010 4v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2a2.5 2.5 0 010-4z',
    line(10, 8, 10, 18),
  ];
}

function truckBase() {
  return [
    'M3 7h11v8H3z',
    'M14 10h4l3 3v2h-7z',
    circle(8, 18, 2),
    circle(18, 18, 2),
  ];
}

function warehouseBase() {
  return [
    polygon([[3, 8], [12, 3], [21, 8], [21, 20], [3, 20]]),
    line(9, 20, 9, 13),
    line(15, 20, 15, 13),
    line(9, 13, 15, 13),
  ];
}

function chartAxes() {
  return [
    line(4, 4, 4, 20),
    line(4, 20, 20, 20),
  ];
}

function cloudBase() {
  return [
    'M7 18h10a4 4 0 0 0 .3-8A6 6 0 0 0 6 8.8 4.5 4.5 0 0 0 7 18z',
  ];
}

function hardDriveBase() {
  return [
    roundedRect(3, 6, 18, 12, 3),
    line(7, 13, 17, 13),
    circle(7, 10, 1),
    circle(17, 10, 1),
  ];
}

function cameraBase() {
  return [
    roundedRect(3, 7, 18, 12, 3),
    circle(12, 13, 3.5),
    line(7, 7, 9, 4),
    line(15, 4, 17, 7),
  ];
}

function briefcaseBase() {
  return [
    roundedRect(3, 7, 18, 12, 2),
    'M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2',
    line(3, 12, 21, 12),
  ];
}

function banknoteBase() {
  return [
    roundedRect(3, 6, 18, 12, 2),
    circle(12, 12, 3),
    line(6, 9, 6, 9),
    line(18, 15, 18, 15),
  ];
}

function brushIconBase() {
  return [
    polygon([[7, 16], [12, 5], [16, 9], [11, 20]]),
    line(9.5, 14.5, 14.5, 9.5),
  ];
}

function badgeCircleBase() {
  return [circle(12, 12, 8.5)];
}

function overlayPlus(cx = 17, cy = 17, size = 2.2) {
  return [
    line(cx - size, cy, cx + size, cy),
    line(cx, cy - size, cx, cy + size),
  ];
}

function overlayMinus(cx = 17, cy = 17, size = 2.2) {
  return [line(cx - size, cy, cx + size, cy)];
}

function overlayCheck(cx = 17, cy = 17, size = 2.2) {
  return [poly([[cx - size, cy], [cx - 0.4, cy + size], [cx + size + 0.8, cy - size]])];
}

function overlayX(cx = 17, cy = 17, size = 2.1) {
  return [
    line(cx - size, cy - size, cx + size, cy + size),
    line(cx + size, cy - size, cx - size, cy + size),
  ];
}

function overlaySearch(cx = 17, cy = 17, radius = 2) {
  return [
    circle(cx - 0.7, cy - 0.7, radius),
    line(cx + 0.6, cy + 0.6, cx + 3.2, cy + 3.2),
  ];
}

function overlayLock(cx = 17, cy = 17) {
  return [
    roundedRect(cx - 2.6, cy - 0.2, 5.2, 4.3, 1),
    `M${formatNumber(cx - 1.6)} ${formatNumber(cy - 0.2)}V${formatNumber(cy - 2)}a1.6 1.6 0 013.2 0v1.8`,
  ];
}

function overlayHeart(cx = 17, cy = 17, scale = 1) {
  return [
    `M${formatNumber(cx)} ${formatNumber(cy + 2.6 * scale)}l${formatNumber(-2.5 * scale)} ${formatNumber(-2.3 * scale)}a1.7 1.7 0 012.4-2.4l${formatNumber(0.1 * scale)} ${formatNumber(0.1 * scale)}l${formatNumber(0.1 * scale)} ${formatNumber(-0.1 * scale)}a1.7 1.7 0 012.4 2.4z`,
  ];
}

function overlayStar(cx = 17, cy = 17, scale = 1) {
  return [
    polygon([
      [cx, cy - 2.4 * scale],
      [cx + 0.9 * scale, cy - 0.5 * scale],
      [cx + 2.8 * scale, cy - 0.2 * scale],
      [cx + 1.4 * scale, cy + 1.2 * scale],
      [cx + 1.8 * scale, cy + 3 * scale],
      [cx, cy + 2.1 * scale],
      [cx - 1.8 * scale, cy + 3 * scale],
      [cx - 1.4 * scale, cy + 1.2 * scale],
      [cx - 2.8 * scale, cy - 0.2 * scale],
      [cx - 0.9 * scale, cy - 0.5 * scale],
    ]),
  ];
}

function overlayInfo(cx = 17, cy = 17) {
  return [
    line(cx, cy - 1.8, cx, cy + 1.4),
    line(cx, cy + 2.4, cx, cy + 2.4),
  ];
}

function overlayWarning(cx = 17, cy = 17) {
  return [
    polygon([[cx, cy - 3], [cx + 2.8, cy + 2.5], [cx - 2.8, cy + 2.5]]),
    line(cx, cy - 1.4, cx, cy + 0.6),
    line(cx, cy + 1.5, cx, cy + 1.5),
  ];
}

function overlayPercent(cx = 17, cy = 17) {
  return [
    line(cx - 2.2, cy + 2.2, cx + 2.2, cy - 2.2),
    circle(cx - 1.6, cy - 1.3, 0.8),
    circle(cx + 1.6, cy + 1.3, 0.8),
  ];
}

function overlayArrowDown(cx = 17, cy = 17, size = 2.2) {
  return [
    line(cx, cy - size, cx, cy + size),
    poly([[cx - size, cy + 0.5], [cx, cy + size + 1.2], [cx + size, cy + 0.5]]),
  ];
}

function overlayArrowUp(cx = 17, cy = 17, size = 2.2) {
  return [
    line(cx, cy - size, cx, cy + size),
    poly([[cx - size, cy - 0.5], [cx, cy - size - 1.2], [cx + size, cy - 0.5]]),
  ];
}

function overlayArrowRight(cx = 17, cy = 17, size = 2.2) {
  return [
    line(cx - size, cy, cx + size, cy),
    poly([[cx + 0.5, cy - size], [cx + size + 1.2, cy], [cx + 0.5, cy + size]]),
  ];
}

function overlayArrowLeft(cx = 17, cy = 17, size = 2.2) {
  return [
    line(cx - size, cy, cx + size, cy),
    poly([[cx - 0.5, cy - size], [cx - size - 1.2, cy], [cx - 0.5, cy + size]]),
  ];
}

function fileVariant(name, overlayPaths) {
  return stroke(name, [...docBase(), ...overlayPaths]);
}

function folderVariant(name, overlayPaths, opened = false) {
  return stroke(name, [...(opened ? folderOpenBase() : folderBase()), ...overlayPaths]);
}

function userVariant(name, overlayPaths, base = userBase()) {
  return stroke(name, [...base, ...overlayPaths]);
}

function badgeVariant(name, overlayPaths) {
  return stroke(name, [...badgeCircleBase(), ...overlayPaths]);
}

function brandMonogram(name, label, frame = 'rounded') {
  let framePaths;

  if (frame === 'circle') {
    framePaths = [circle(12, 12, 9)];
  } else if (frame === 'hex') {
    framePaths = [polygon([[12, 3], [19, 7], [19, 17], [12, 21], [5, 17], [5, 7]])];
  } else if (frame === 'diamond') {
    framePaths = [polygon([[12, 3], [21, 12], [12, 21], [3, 12]])];
  } else {
    framePaths = [roundedRect(3, 3, 18, 18, 4)];
  }

  const width = label.length <= 2 ? 10.5 : 13;
  const x = label.length <= 2 ? 6.75 : 5.5;

  return stroke(name, [...framePaths, ...textPaths(label, x, 6, width, 12)]);
}

function glyphIcon(name, token) {
  return stroke(name, glyphPaths(token, 6, 4, 12, 16));
}

function pairPolygon(name, points) {
  const shape = polygon(points);

  return [
    stroke(name, shape),
    fill(`${name}-fill`, shape),
  ];
}

function pairRoundedShape(name, x, y, width, height, radius) {
  const shape = roundedRect(x, y, width, height, radius);

  return [
    stroke(name, shape),
    fill(`${name}-fill`, shape),
  ];
}

function pairEllipse(name, cx, cy, radiusX, radiusY) {
  const shape = ellipse(cx, cy, radiusX, radiusY);

  return [
    stroke(name, shape),
    fill(`${name}-fill`, shape),
  ];
}

function emitModule(fileName, registryName, icons) {
  const usesFill = icons.some((icon) => icon.kind === 'fill');
  const usesStroke = icons.some((icon) => icon.kind === 'stroke');
  const helpers = [];

  if (usesFill) {
    helpers.push('fillIcon');
  }

  if (usesStroke) {
    helpers.push('strokeIcon');
  }

  const lines = [
    "import { defineIcons } from '../core/index';",
    `import { ${helpers.join(', ')} } from './shared';`,
    '',
  ];

  for (const icon of icons) {
    const constant = constantNameForIcon(icon.name);
    const iconFactory = icon.kind === 'fill' ? 'fillIcon' : 'strokeIcon';
    const pathsLiteral =
      icon.paths.length === 1
        ? JSON.stringify(icon.paths[0])
        : `[\n${icon.paths.map((pathData) => `  ${JSON.stringify(pathData)}`).join(',\n')}\n]`;

    lines.push(`export const ${constant} = ${iconFactory}(`);
    lines.push(`  ${pathsLiteral},`);
    lines.push(`  ${JSON.stringify(icon.viewBox)},`);
    lines.push(');');
    lines.push('');
  }

  lines.push(`export const ${registryName} = defineIcons({`);

  for (const icon of icons) {
    lines.push(`  ${JSON.stringify(icon.name)}: ${constantNameForIcon(icon.name)},`);
  }

  lines.push('});');
  lines.push('');

  return fs.writeFile(path.join(iconsDir, fileName), lines.join('\n'), 'utf8');
}

function emitGeneratedIndex(modules) {
  const lines = ['// Auto-generated by scripts/generate-expanded-icons.mjs', ''];

  for (const { fileName, icons } of modules) {
    const constants = icons.map((icon) => constantNameForIcon(icon.name));
    lines.push(
      `export { ${constants.join(', ')} } from './${fileName.replace(/\.ts$/, '')}';`,
    );
  }

  lines.push('');

  return fs.writeFile(path.join(iconsDir, 'generated-index.ts'), lines.join('\n'), 'utf8');
}

const navigationExtraIcons = [
  stroke('arrow-up', [line(12, 19, 12, 5), poly([[5, 12], [12, 5], [19, 12]])]),
  stroke('arrow-down', [line(12, 5, 12, 19), poly([[5, 12], [12, 19], [19, 12]])]),
  stroke('arrow-up-left', [line(18, 18, 6, 6), poly([[6, 12], [6, 6], [12, 6]])]),
  stroke('arrow-down-left', [line(18, 6, 6, 18), poly([[6, 12], [6, 18], [12, 18]])]),
  stroke('arrow-down-right', [line(6, 6, 18, 18), poly([[12, 18], [18, 18], [18, 12]])]),
  stroke('chevrons-left', [poly([[15, 6], [9, 12], [15, 18]]), poly([[21, 6], [15, 12], [21, 18]])]),
  stroke('chevrons-up', [poly([[6, 15], [12, 9], [18, 15]]), poly([[6, 21], [12, 15], [18, 21]])]),
  stroke('chevrons-down', [poly([[6, 9], [12, 15], [18, 9]]), poly([[6, 3], [12, 9], [18, 3]])]),
  stroke('move-left', [line(20, 12, 4, 12), poly([[8, 8], [4, 12], [8, 16]])]),
  stroke('move-right', [line(4, 12, 20, 12), poly([[16, 8], [20, 12], [16, 16]])]),
  stroke('move-up', [line(12, 20, 12, 4), poly([[8, 8], [12, 4], [16, 8]])]),
  stroke('move-down', [line(12, 4, 12, 20), poly([[8, 16], [12, 20], [16, 16]])]),
  stroke('route', [circle(5, 8, 1.5), circle(19, 18, 1.5), quadPath(6.5, 8.5, 13, 5, 11.5, 12), quadPath(11.5, 12, 10.5, 18, 17.5, 17.5)]),
  stroke('compass', [circle(12, 12, 9), polygon([[14, 10], [18, 6], [14, 14], [6, 18]])]),
  stroke('locate', [circle(12, 12, 6), line(12, 2, 12, 5), line(12, 19, 12, 22), line(2, 12, 5, 12), line(19, 12, 22, 12), circle(12, 12, 1.5)]),
  stroke('map', [polygon([[4, 5], [9, 3], [15, 5], [20, 3], [20, 19], [15, 21], [9, 19], [4, 21]]), line(9, 3, 9, 19), line(15, 5, 15, 21)]),
  stroke('signpost', [line(12, 2, 12, 22), polygon([[12, 5], [20, 5], [17, 9], [12, 9]]), polygon([[12, 11], [4, 11], [7, 15], [12, 15]])]),
  stroke('navigation-pointer', [polygon([[4, 20], [20, 12], [4, 4], [8, 12]])]),
];

const statusExtraIcons = [
  stroke('alert-octagon', [polygon([[8, 2], [16, 2], [22, 8], [22, 16], [16, 22], [8, 22], [2, 16], [2, 8]]), line(12, 7, 12, 13), line(12, 17, 12, 17)]),
  badgeVariant('badge-alert', overlayWarning(12, 12)),
  badgeVariant('badge-check', overlayCheck(12, 12, 2.6)),
  badgeVariant('badge-info', overlayInfo(12, 12)),
  stroke('ban', [circle(12, 12, 9), line(6, 18, 18, 6)]),
  stroke('shield', shieldBase()),
  stroke('shield-alert', [...shieldBase(), line(12, 8, 12, 13), line(12, 16.5, 12, 16.5)]),
  stroke('shield-x', [...shieldBase(), ...overlayX(12, 12, 2.5)]),
  stroke('shield-minus', [...shieldBase(), ...overlayMinus(12, 12, 2.8)]),
  stroke('shield-plus', [...shieldBase(), ...overlayPlus(12, 12, 2.4)]),
  stroke('verified', [circle(12, 12, 8), polygon([[12, 3], [14.2, 5.2], [17.5, 5.2], [18.8, 8.2], [21, 10.5], [19.2, 13.2], [19.5, 16.5], [16.5, 17.8], [14.2, 20], [12, 18], [9.8, 20], [7.5, 17.8], [4.5, 16.5], [4.8, 13.2], [3, 10.5], [5.2, 8.2], [6.5, 5.2], [9.8, 5.2]]), poly([[8.5, 12], [11, 14.5], [16, 9.5]])]),
  stroke('pending', [circle(12, 12, 9), line(12, 7, 12, 12), line(12, 12, 15.5, 14)]),
  stroke('offline', [circle(12, 12, 9), arcPath(6.5, 14.5, 5.5, 4.2, 17.5, 14.5), arcPath(8.8, 11.8, 3.2, 2.5, 15.2, 11.8), line(4, 20, 20, 4)]),
  stroke('online', [circle(12, 12, 9), arcPath(6.5, 14.5, 5.5, 4.2, 17.5, 14.5), arcPath(8.8, 11.8, 3.2, 2.5, 15.2, 11.8), circle(12, 16.8, 1.2)]),
  stroke('dot', [circle(12, 12, 3.2)]),
  fill('dot-filled', [circle(12, 12, 4)]),
  stroke('slash-circle', [circle(12, 12, 9), line(6, 18, 18, 6)]),
];

const actionExtraIcons = [
  stroke('clipboard', clipboardBase()),
  stroke('clipboard-copy', [...clipboardBase(), roundedRect(9.5, 10.5, 7.5, 7.5, 1), roundedRect(7, 8, 7.5, 7.5, 1)]),
  stroke('clipboard-paste', [...clipboardBase(), roundedRect(9, 12.5, 6, 6, 1), line(9, 15.5, 15, 15.5)]),
  stroke('scissors', [circle(6.5, 17, 2.2), circle(10.5, 17, 2.2), line(8, 15.4, 18.5, 5.5), line(8.8, 15.2, 18.5, 18.5)]),
  stroke('scan-search', [line(6, 5, 6, 8), line(6, 5, 9, 5), line(18, 5, 15, 5), line(18, 5, 18, 8), line(6, 19, 6, 16), line(6, 19, 9, 19), line(18, 19, 15, 19), line(18, 19, 18, 16), ...overlaySearch(13, 13, 2.2)]),
  stroke('move', [line(12, 3, 12, 21), line(3, 12, 21, 12), poly([[9, 6], [12, 3], [15, 6]]), poly([[9, 18], [12, 21], [15, 18]]), poly([[6, 9], [3, 12], [6, 15]]), poly([[18, 9], [21, 12], [18, 15]])]),
  stroke('move-diagonal', [line(5, 19, 19, 5), line(5, 5, 19, 19), poly([[5, 10], [5, 5], [10, 5]]), poly([[14, 19], [19, 19], [19, 14]]), poly([[14, 5], [19, 5], [19, 10]]), poly([[5, 14], [5, 19], [10, 19]])]),
  stroke('replace', [line(4, 9, 18, 9), poly([[15, 6], [18, 9], [15, 12]]), line(20, 15, 6, 15), poly([[9, 12], [6, 15], [9, 18]])]),
  stroke('merge', [line(6, 6, 12, 12), line(6, 18, 12, 12), line(12, 12, 18, 12), circle(6, 6, 1), circle(6, 18, 1), circle(18, 12, 1)]),
  stroke('combine', [circle(8, 12, 4), circle(16, 12, 4)]),
  stroke('archive', [roundedRect(4, 5, 16, 14, 2), line(4, 9, 20, 9), line(10, 13, 14, 13)]),
  stroke('archive-restore', [roundedRect(4, 5, 16, 14, 2), line(4, 9, 20, 9), line(12, 16, 12, 11), poly([[9, 13], [12, 10], [15, 13]])]),
  stroke('pin', [polygon([[12, 3], [17, 8], [14.5, 10.5], [14.5, 16], [9.5, 16], [9.5, 10.5], [7, 8]]), line(12, 16, 12, 22)]),
  stroke('pin-off', [polygon([[12, 3], [17, 8], [14.5, 10.5], [14.5, 16], [9.5, 16], [9.5, 10.5], [7, 8]]), line(12, 16, 12, 22), line(4, 4, 20, 20)]),
  stroke('send-horizontal', [line(3, 12, 21, 12), polygon([[21, 12], [12, 7], [12, 17]])]),
  stroke('import', [roundedRect(4, 5, 16, 14, 2), line(12, 3, 12, 12), poly([[9, 9], [12, 12], [15, 9]])]),
  stroke('export', [roundedRect(4, 5, 16, 14, 2), line(12, 12, 12, 3), poly([[9, 6], [12, 3], [15, 6]])]),
  stroke('erase', [polygon([[9, 5], [19, 15], [14, 20], [4, 10]]), line(13, 18, 20, 18)]),
  stroke('reply', [line(20, 18, 10, 18), line(10, 18, 10, 13), poly([[6, 16], [10, 12], [14, 16]])]),
  stroke('forward', [line(4, 18, 14, 18), line(14, 18, 14, 13), poly([[10, 16], [14, 12], [18, 16]])]),
  stroke('clipboard-list', [...clipboardBase(), circle(8.5, 10.5, 0.6), circle(8.5, 14, 0.6), circle(8.5, 17.5, 0.6), line(10.5, 10.5, 16, 10.5), line(10.5, 14, 16, 14), line(10.5, 17.5, 16, 17.5)]),
  stroke('clipboard-pen', [...clipboardBase(), line(9, 17, 15.5, 10.5), line(15.5, 10.5, 17.5, 12.5), line(8, 18, 10.5, 18.5)]),
  stroke('clipboard-heart', [...clipboardBase(), ...overlayHeart(12, 14.5, 0.85)]),
  stroke('clipboard-pulse', [...clipboardBase(), line(7.5, 14, 9.5, 14), line(9.5, 14, 11, 11.2), line(11, 11.2, 12.5, 17), line(12.5, 17, 14.2, 12.8), line(14.2, 12.8, 16.5, 12.8)]),
];

const systemExtraIcons = [
  stroke('hard-drive', hardDriveBase()),
  stroke('hard-drive-download', [...hardDriveBase(), line(12, 8, 12, 15), poly([[9, 12], [12, 15], [15, 12]])]),
  stroke('hard-drive-upload', [...hardDriveBase(), line(12, 15, 12, 8), poly([[9, 11], [12, 8], [15, 11]])]),
  stroke('bluetooth', [line(12, 3, 12, 21), poly([[12, 3], [17, 8], [12, 12], [17, 16], [12, 21]]), poly([[7, 8], [12, 12], [7, 16]])]),
  stroke('bluetooth-off', [line(12, 3, 12, 21), poly([[12, 3], [17, 8], [12, 12], [17, 16], [12, 21]]), poly([[7, 8], [12, 12], [7, 16]]), line(4, 4, 20, 20)]),
  stroke('cloud', cloudBase()),
  stroke('cloud-off', [...cloudBase(), line(4, 4, 20, 20)]),
  stroke('cloud-rain', [...cloudBase(), line(8, 19, 8, 22), line(12, 19, 12, 22), line(16, 19, 16, 22)]),
  stroke('cloud-snow', [...cloudBase(), line(8, 19, 8, 21), line(12, 19, 12, 21), line(16, 19, 16, 21), line(7, 20, 9, 20), line(11, 20, 13, 20), line(15, 20, 17, 20)]),
  stroke('cloud-lightning', [...cloudBase(), polygon([[12, 18], [10, 22], [14, 22], [12.5, 25], [17, 19], [13, 19]])], '0 0 24 26'),
  stroke('cloud-fog', [...cloudBase(), line(5, 20, 19, 20), line(7, 23, 17, 23)], '0 0 24 26'),
  stroke('printer', [roundedRect(6, 3, 12, 6, 1.5), roundedRect(4, 9, 16, 8, 2), roundedRect(7, 15, 10, 6, 1.5), circle(17, 13, 0.8)]),
  stroke('fingerprint', [arcPath(12, 6, 6, 6, 12, 18), arcPath(9, 8, 3, 3, 9, 16), arcPath(15, 8, 3, 3, 15, 16), arcPath(7, 10, 5, 5, 7, 18), arcPath(17, 10, 5, 5, 17, 18)]),
  stroke('key-round', [circle(8, 12, 4), line(12, 12, 21, 12), line(18, 12, 18, 9), line(21, 12, 21, 9)]),
  stroke('plug', [roundedRect(7, 9, 10, 8, 2), line(10, 9, 10, 4), line(14, 9, 14, 4), line(12, 17, 12, 22)]),
  stroke('plug-zap', [roundedRect(7, 9, 10, 8, 2), line(10, 9, 10, 4), line(14, 9, 14, 4), line(12, 17, 12, 22), polygon([[12, 10], [10.5, 13], [12.5, 13], [11.5, 16], [14.5, 12.5], [12.5, 12.5]])]),
  stroke('webhooks', [circle(6, 12, 1.5), circle(18, 7, 1.5), circle(18, 17, 1.5), quadPath(7.5, 12, 12, 7, 16.5, 7), quadPath(7.5, 12, 12, 17, 16.5, 17)]),
];

const educationExtraIcons = [
  stroke('school', [polygon([[12, 3], [21, 8], [12, 13], [3, 8]]), line(6, 10, 6, 15), quadPath(6, 15, 12, 19, 18, 15), line(18, 10, 18, 15)]),
  stroke('library', [roundedRect(4, 5, 16, 15, 2), line(8, 5, 8, 20), line(12, 5, 12, 20), line(16, 5, 16, 20)]),
  stroke('medal', [circle(12, 14, 4.5), line(9.5, 3, 12, 7), line(14.5, 3, 12, 7)]),
  stroke('certificate', [roundedRect(4, 5, 16, 10, 2), circle(10, 10, 2), line(8.5, 15, 8.5, 20), line(11.5, 15, 11.5, 20)]),
  stroke('flask-round', [quadPath(9, 3, 9, 8, 7, 11), quadPath(15, 3, 15, 8, 17, 11), roundedRect(6, 11, 12, 9, 2), line(9, 3, 15, 3), line(8, 15, 16, 15)]),
  stroke('microscope', [line(9, 5, 13, 9), line(13, 9, 10, 16), line(7, 19, 17, 19), line(12, 16, 17, 16), line(16, 8, 19, 5), circle(17.5, 4.5, 1)]),
  stroke('atom', [circle(12, 12, 1.2), arcPath(5, 12, 7, 3, 19, 12), arcPath(12, 5, 3, 7, 12, 19), 'M6.5 6.5Q12 12 17.5 17.5', 'M17.5 6.5Q12 12 6.5 17.5']),
  stroke('rulers', [roundedRect(4, 4, 7, 16, 1.5), roundedRect(13, 4, 7, 16, 1.5), line(7, 7, 9, 7), line(7, 10, 9, 10), line(7, 13, 9, 13), line(16, 7, 18, 7), line(16, 10, 18, 10), line(16, 13, 18, 13)]),
  stroke('backpack', [roundedRect(6, 6, 12, 14, 3), arcPath(8, 7, 4, 3, 16, 7), line(9, 6, 9, 3), line(15, 6, 15, 3), line(6, 12, 18, 12)]),
  stroke('bookmark', [polygon([[6, 3], [18, 3], [18, 21], [12, 16], [6, 21]])]),
];

const contentExtraIcons = [
  stroke('text', [line(5, 8, 19, 8), line(8, 8, 8, 18), line(16, 8, 16, 18), line(8, 18, 16, 18)]),
  stroke('text-cursor', [line(5, 7, 19, 7), line(12, 7, 12, 19), line(5, 19, 19, 19)]),
  stroke('type', [line(4, 6, 20, 6), line(12, 6, 12, 20)]),
  stroke('pilcrow', [line(12, 4, 12, 20), line(15, 4, 15, 20), quadPath(12, 4, 7, 4, 7, 9), quadPath(7, 9, 7, 14, 12, 14)]),
  stroke('heading', [line(5, 4, 5, 20), line(11, 4, 11, 20), line(5, 12, 11, 12), line(15, 20, 15, 10), line(15, 10, 19, 10)]),
  stroke('list-todo', [circle(5, 7, 1.2), line(8, 7, 19, 7), circle(5, 12, 1.2), line(8, 12, 19, 12), circle(5, 17, 1.2), poly([[4.2, 17], [5, 17.8], [6.4, 16.4]]), line(8, 17, 19, 17)]),
  stroke('list-filter', [line(4, 7, 20, 7), line(4, 12, 16, 12), line(4, 17, 12, 17), poly([[17, 10], [20, 14], [14, 14]])]),
  stroke('columns', [roundedRect(4, 5, 6, 14, 1.5), roundedRect(14, 5, 6, 14, 1.5)]),
  stroke('separators-horizontal', [line(4, 8, 20, 8), line(4, 16, 20, 16), line(8, 11, 16, 11), line(8, 13, 16, 13)]),
  stroke('separators-vertical', [line(8, 4, 8, 20), line(16, 4, 16, 20), line(11, 8, 11, 16), line(13, 8, 13, 16)]),
  stroke('sticky-note-plus', [...docBase(), ...overlayPlus(13, 15.5, 2.2)]),
  stroke('kanban-square', [roundedRect(4, 4, 16, 16, 2), roundedRect(7, 7, 2.8, 8, 0.6), roundedRect(11.75, 7, 2.8, 3.2, 0.6), roundedRect(16.2, 7, 2.8, 10, 0.6)]),
  stroke('signature', [quadPath(4, 16, 7, 10, 10, 16), quadPath(10, 16, 13, 22, 16, 12), line(4, 19, 20, 19)]),
  stroke('draft', [roundedRect(4, 4, 16, 16, 2), line(8, 8, 16, 8), line(8, 12, 16, 12), line(8, 16, 13, 16), line(15, 15, 19, 19)]),
];

const communicationExtraIcons = [
  stroke('messages-square', [roundedRect(4, 5, 11, 9, 2), roundedRect(9, 11, 11, 8, 2), line(7, 14, 4, 17)]),
  stroke('messages-circle', [circle(9, 10, 5), circle(16, 14, 5), line(5.8, 14.2, 4, 17), line(19, 18, 20, 20)]),
  stroke('message-plus', [...messageSquareBase(), ...overlayPlus(12, 11.5, 2.4)]),
  stroke('message-x', [...messageSquareBase(), ...overlayX(12, 11.5, 2.1)]),
  stroke('message-check', [...messageSquareBase(), ...overlayCheck(12, 11.5, 2.2)]),
  stroke('message-warning', [...messageSquareBase(), ...overlayWarning(12, 11.5)]),
  stroke('message-quote', [...messageSquareBase(), polygon([[7, 8], [10, 8], [10, 12], [8, 12], [8, 15], [6, 15], [6, 11], [7, 8]]), polygon([[14, 8], [17, 8], [17, 12], [15, 12], [15, 15], [13, 15], [13, 11], [14, 8]])]),
  stroke('message-code', [...messageSquareBase(), line(10, 10, 8, 12), line(8, 12, 10, 14), line(14, 10, 16, 12), line(16, 12, 14, 14)]),
  stroke('message-typing', [...messageCircleBase(), circle(9, 12, 0.7), circle(12, 12, 0.7), circle(15, 12, 0.7)]),
  stroke('mail-open', openMailBase()),
  stroke('mail-check', [...mailBase(), ...overlayCheck(17, 16, 1.4)]),
  stroke('mail-x', [...mailBase(), ...overlayX(17, 16, 1.3)]),
  stroke('mail-search', [...mailBase(), ...overlaySearch(17, 16, 1.3)]),
  stroke('phone-call', [...phoneBase(), line(16, 4, 18, 6), line(18, 6, 20, 4), arcPath(15.5, 8, 5, 5, 20, 12)]),
  stroke('phone-forwarded', [...phoneBase(), line(16, 5, 20, 5), line(20, 5, 20, 9), poly([[16.5, 2.5], [20, 5], [16.5, 7.5]])]),
  stroke('phone-incoming', [...phoneBase(), line(15, 4, 20, 4), line(20, 4, 20, 9), line(20, 4, 15, 9)]),
  stroke('phone-missed', [...phoneBase(), line(15, 4, 20, 9), line(20, 4, 15, 9)]),
  stroke('phone-off', [...phoneBase(), line(4, 4, 20, 20)]),
  stroke('voicemail', [circle(7, 12, 4), circle(17, 12, 4), line(11, 12, 13, 12)]),
  stroke('video', [roundedRect(3, 7, 12, 10, 2), polygon([[15, 10], [21, 7], [21, 17], [15, 14]])]),
  stroke('video-off', [roundedRect(3, 7, 12, 10, 2), polygon([[15, 10], [21, 7], [21, 17], [15, 14]]), line(4, 4, 20, 20)]),
  stroke('headset', [arcPath(5, 11, 7, 7, 19, 11), roundedRect(4, 11, 3, 7, 1), roundedRect(17, 11, 3, 7, 1), quadPath(10, 19, 15, 21, 17, 17)]),
  stroke('radio', [circle(12, 13, 7), circle(12, 13, 2.2), line(5, 6, 10, 2), line(8, 4, 14, 4), line(16, 4, 18, 4)]),
  stroke('rss', [circle(6, 18, 1), arcPath(6, 12, 6, 6, 12, 18), arcPath(6, 6, 12, 12, 18, 18)]),
];

const mediaExtraIcons = [
  stroke('film', [roundedRect(5, 5, 14, 14, 2), line(9, 5, 9, 19), line(15, 5, 15, 19), line(5, 9, 19, 9), line(5, 15, 19, 15)]),
  stroke('clapperboard', [polygon([[4, 8], [20, 8], [18, 20], [6, 20]]), line(4, 8, 8, 4), line(10, 8, 14, 4), line(16, 8, 20, 4), line(7, 13, 17, 13)]),
  stroke('camera', cameraBase()),
  stroke('camera-off', [...cameraBase(), line(4, 4, 20, 20)]),
  stroke('image-plus', [roundedRect(4, 5, 16, 14, 2), circle(9, 10, 1.2), poly([[6.5, 17], [11, 12.5], [14, 15], [18, 11], [20, 13.5]]), ...overlayPlus(17, 17, 1.4)]),
  stroke('gallery-horizontal', [roundedRect(3, 6, 8, 12, 2), roundedRect(13, 6, 8, 12, 2), circle(7, 10, 1), circle(17, 10, 1)]),
  stroke('gallery-vertical', [roundedRect(6, 3, 12, 8, 2), roundedRect(6, 13, 12, 8, 2), circle(10, 7, 1), circle(10, 17, 1)]),
  stroke('subtitles', [roundedRect(3, 6, 18, 12, 2), line(6, 11, 11, 11), line(13, 11, 18, 11), line(6, 15, 11, 15), line(13, 15, 18, 15)]),
  stroke('waveform', [line(4, 13, 4, 11), line(7, 15, 7, 9), line(10, 18, 10, 6), line(13, 14, 13, 10), line(16, 16, 16, 8), line(19, 13, 19, 11)]),
  stroke('picture-in-picture', [roundedRect(3, 5, 18, 14, 2), roundedRect(12, 11, 7, 5, 1)]),
  stroke('podcast', [circle(12, 8, 2.5), arcPath(6, 8, 6, 6, 18, 8), arcPath(8.5, 8, 3.5, 3.5, 15.5, 8), line(12, 10.5, 12, 19), line(10, 21, 14, 21)]),
];

const financeExtraIcons = [
  stroke('chart-line', [...chartAxes(), poly([[6, 16], [10, 12], [13, 14], [18, 8]])]),
  stroke('chart-column', [...chartAxes(), roundedRect(7, 13, 2.5, 7, 0.4), roundedRect(11, 10, 2.5, 10, 0.4), roundedRect(15, 7, 2.5, 13, 0.4)]),
  stroke('chart-pie', [circle(12, 12, 8), line(12, 12, 12, 4), line(12, 12, 18, 15)]),
  stroke('chart-area', [...chartAxes(), polygon([[5, 17], [9, 12], [13, 14], [18, 8], [18, 20], [5, 20]])]),
  stroke('candlestick-chart', [...chartAxes(), line(8, 8, 8, 18), roundedRect(6.7, 10, 2.6, 5, 0.4), line(12, 5, 12, 18), roundedRect(10.7, 8, 2.6, 4.5, 0.4), line(16, 9, 16, 20), roundedRect(14.7, 12, 2.6, 5, 0.4)]),
  stroke('banknote', banknoteBase()),
  stroke('landmark', [polygon([[12, 3], [20, 7], [4, 7]]), line(6, 7, 6, 18), line(10, 7, 10, 18), line(14, 7, 14, 18), line(18, 7, 18, 18), line(3, 18, 21, 18)]),
  stroke('piggy-bank', [circle(11, 13, 6), line(17, 10, 20, 9), line(9, 7, 13, 7), circle(14, 12, 0.7), line(7, 19, 7, 21), line(15, 19, 15, 21), line(17, 15, 20, 16)]),
  stroke('badge-dollar-sign', [...badgeCircleBase(), line(12, 6, 12, 18), quadPath(15.5, 8.5, 9, 8.5, 9, 12), quadPath(9, 15.5, 15, 15.5, 15, 12)]),
  stroke('receipt', receiptBase()),
  stroke('receipt-cent', [...receiptBase(), circle(12, 13, 3.2), arcPath(13.6, 11.2, 2.2, 2.2, 13.6, 14.8), line(10.8, 9.8, 10.8, 16.2)]),
  stroke('receipt-tax', [...receiptBase(), line(9, 8, 15, 8), line(12, 8, 12, 18), line(8.5, 11, 15.5, 11)]),
  stroke('receipt-refund', [...receiptBase(), line(16, 16, 8, 16), poly([[10.5, 13.5], [8, 16], [10.5, 18.5]])]),
  stroke('coins-stack', [circle(12, 7, 5), arcPath(7, 7, 5, 2, 17, 7), arcPath(7, 12, 5, 2, 17, 12), arcPath(7, 17, 5, 2, 17, 17)]),
  stroke('hand-coins', [quadPath(4, 17, 7, 15, 10, 17), line(10, 17, 15, 17), line(15, 17, 18, 14), circle(15, 8, 3), line(15, 5, 15, 11), quadPath(17, 6.5, 13, 6.5, 13, 8)]),
  stroke('wallet-minimal', [roundedRect(4, 7, 16, 10, 2), roundedRect(14, 10, 6, 4, 1), circle(16.5, 12, 0.6)]),
  stroke('briefcase', briefcaseBase()),
  stroke('briefcase-business', [...briefcaseBase(), line(12, 12, 12, 16), line(10, 14, 14, 14)]),
  stroke('safe', [roundedRect(5, 5, 14, 14, 2), circle(12, 12, 3), line(12, 9, 12, 15), line(9, 12, 15, 12)]),
  stroke('vault', [roundedRect(4, 4, 16, 16, 2), circle(12, 12, 5), line(12, 7, 12, 17), line(7, 12, 17, 12), line(8.5, 8.5, 15.5, 15.5)]),
  stroke('line-of-credit', [roundedRect(3, 7, 18, 10, 2), line(5, 12, 9, 12), line(12, 12, 19, 12), line(14, 9, 14, 15)]),
  stroke('scale', [line(12, 4, 12, 20), line(6, 8, 18, 8), poly([[6, 8], [3.5, 13], [8.5, 13]]), poly([[18, 8], [15.5, 13], [20.5, 13]]), line(8, 20, 16, 20)]),
  stroke('percent-circle', [circle(12, 12, 9), ...overlayPercent(12, 12)]),
  stroke('hand-cards', [quadPath(4, 17, 7, 15, 10, 17), line(10, 17, 15, 17), roundedRect(12, 8, 4, 6, 0.8), roundedRect(9.5, 7, 4, 6, 0.8), roundedRect(7, 6, 4, 6, 0.8)]),
  stroke('badge-percent', [...badgeCircleBase(), ...overlayPercent(12, 12)]),
  stroke('badge-euro', [...badgeCircleBase(), arcPath(15, 8, 5, 5, 9, 12), arcPath(9, 12, 5, 5, 15, 16), line(8.5, 10.5, 13, 10.5), line(8.5, 13.5, 13, 13.5)]),
  stroke('badge-pound-sterling', [...badgeCircleBase(), arcPath(10, 9, 3, 3, 14, 9), line(12, 9, 12, 16), line(9, 12, 15, 12), line(9, 16, 15, 16)]),
  stroke('badge-indian-rupee', [...badgeCircleBase(), line(9, 8, 16, 8), line(9, 11, 15, 11), line(10, 8, 14, 11), line(10, 16, 16, 12.5)]),
  stroke('wallet-cards', [roundedRect(4, 8, 13, 9, 2), roundedRect(8, 5, 12, 8, 1.5), line(6, 12, 14, 12), circle(16.5, 9.5, 0.6)]),
  stroke('receipt-pound-sterling', [...receiptBase(), arcPath(10, 11, 3, 3, 14, 11), line(12, 11, 12, 18), line(9, 14, 15, 14), line(9, 18, 15, 18)]),
];

const engagementExtraIcons = [
  stroke('smile', [circle(12, 12, 9), line(9, 10, 9, 10), line(15, 10, 15, 10), quadPath(8, 14, 12, 18, 16, 14)]),
  stroke('frown', [circle(12, 12, 9), line(9, 10, 9, 10), line(15, 10, 15, 10), quadPath(8, 17, 12, 13, 16, 17)]),
  stroke('meh', [circle(12, 12, 9), line(9, 10, 9, 10), line(15, 10, 15, 10), line(8.5, 16, 15.5, 16)]),
  stroke('laugh', [circle(12, 12, 9), line(8.5, 9.5, 9.5, 10.5), line(14.5, 10.5, 15.5, 9.5), quadPath(7.5, 14, 12, 19, 16.5, 14)]),
  stroke('wink', [circle(12, 12, 9), line(8.5, 10, 9.5, 10), line(14.5, 10, 15.5, 11), quadPath(8, 15, 12, 18, 16, 15)]),
  stroke('hand-heart', [quadPath(4, 17, 8, 14, 11, 17), line(11, 17, 15, 17), line(15, 17, 18, 14), ...overlayHeart(12, 8, 1.2)]),
  stroke('clap', [roundedRect(8, 5, 4, 12, 1.5), roundedRect(12, 6, 4, 11, 1.5), roundedRect(5, 9, 4, 8, 1.5), line(17, 4, 19, 2), line(19, 8, 22, 8), line(18, 12, 21, 14)]),
  stroke('badge-star', [...badgeCircleBase(), ...overlayStar(12, 12, 1.2)]),
  stroke('bookmark-heart', [polygon([[6, 3], [18, 3], [18, 21], [12, 16], [6, 21]]), ...overlayHeart(12, 9.5, 0.9)]),
  stroke('confetti', [line(5, 12, 2, 21), line(5, 12, 12, 19), line(5, 12, 14, 9), line(17, 4, 17, 4), line(20, 8, 20, 8), line(19, 16, 19, 16), line(10, 4, 10, 4), line(7, 7, 7, 7)]),
  stroke('gem', [polygon([[12, 3], [18, 8], [15, 20], [9, 20], [6, 8]]), line(6, 8, 18, 8), line(12, 3, 9, 8), line(12, 3, 15, 8), line(9, 8, 12, 20), line(15, 8, 12, 20)]),
  stroke('crown', [polygon([[4, 18], [6, 7], [12, 12], [18, 7], [20, 18]]), line(4, 18, 20, 18)]),
  fill('thumbs-up-fill', ['M14 8V4l-4 8v8h9.5l1.5-8a2 2 0 00-2-2H14zM4 12h4v8H4z']),
  fill('thumbs-down-fill', ['M10 16v4l4-8V4H4.5L3 12a2 2 0 002 2H10zM16 4h4v8h-4z']),
  stroke('star-half', [line(12, 2, 12, 17.7), polygon([[12, 2], [15.1, 8.3], [22, 9.3], [17, 14.1], [18.2, 21], [12, 17.7], [5.8, 21], [7, 14.1], [2, 9.3], [8.9, 8.3]])]),
  stroke('rosette', [circle(12, 10, 5), line(9.5, 15, 8, 21), line(14.5, 15, 16, 21)]),
];

function fileFamilyIcons() {
  return [
    fileVariant('file-plus', overlayPlus()),
    fileVariant('file-minus', overlayMinus()),
    fileVariant('file-check', overlayCheck()),
    fileVariant('file-x', overlayX()),
    fileVariant('file-search', overlaySearch()),
    stroke('file-code', [...docBase(), line(11, 15, 9, 17), line(9, 17, 11, 19), line(15, 15, 17, 17), line(17, 17, 15, 19)]),
    stroke('file-image', [...docBase(), circle(9, 12, 1.2), poly([[7, 18], [11, 14], [14, 17], [17, 13], [20, 18]])]),
    stroke('file-video', [...docBase(), roundedRect(8, 13, 7, 5, 1), polygon([[15, 14.5], [18, 13], [18, 18], [15, 16.5]])]),
    stroke('file-audio', [...docBase(), line(9, 18, 9, 15), line(12, 19, 12, 14), line(15, 18, 15, 15), quadPath(8, 13, 12, 11, 16, 13)]),
    stroke('file-archive', [...docBase(), roundedRect(8, 13, 8, 5, 1), line(10, 15.5, 14, 15.5)]),
    fileVariant('file-lock', overlayLock()),
    stroke('file-symlink', [...docBase(), line(9, 18, 15, 12), line(15, 12, 15, 16), line(15, 12, 11, 12)]),
    stroke('file-stack', [roundedRect(6.5, 6.5, 10, 14, 1.5), roundedRect(9.5, 3.5, 10, 14, 1.5)]),
    stroke('files', [roundedRect(5.5, 5.5, 10.5, 13.5, 1.5), roundedRect(8, 8, 10.5, 13.5, 1.5)]),
    fileVariant('file-upload', overlayArrowUp()),
    fileVariant('file-download', overlayArrowDown()),
    stroke('file-spreadsheet', [...docBase(), roundedRect(8, 12.5, 10, 7, 1), line(11.3, 12.5, 11.3, 19.5), line(14.7, 12.5, 14.7, 19.5), line(8, 15.8, 18, 15.8)]),
    stroke('file-chart', [...docBase(), line(8, 19, 8, 14), line(12, 19, 12, 12), line(16, 19, 16, 16)]),
    stroke('file-signature', [...docBase(), quadPath(8, 17.5, 10, 14.2, 12, 17.5), quadPath(12, 17.5, 14, 20, 16, 16.4), line(8, 20, 18, 20)]),
    stroke('file-scan', [...docBase(), line(8, 12, 8, 10), line(8, 10, 10, 10), line(16, 10, 18, 10), line(18, 10, 18, 12), line(8, 18, 8, 20), line(8, 20, 10, 20), line(18, 18, 18, 20), line(16, 20, 18, 20), line(10, 15, 16, 15)]),
    fileVariant('file-warning', overlayWarning()),
    fileVariant('file-heart', overlayHeart()),
    stroke('file-terminal', [...docBase(), line(10, 15, 8, 17), line(8, 17, 10, 19), line(12.5, 19, 16.5, 19)]),
    stroke('file-diff', [...docBase(), line(9, 14, 9, 18), line(7, 16, 11, 16), line(15, 14, 15, 18)]),
    stroke('file-user', [...docBase(), circle(12, 14, 2), quadPath(9, 19, 12, 16.8, 15, 19)]),
    stroke('file-clock', [...docBase(), circle(13, 16, 3), line(13, 16, 13, 14.2), line(13, 16, 14.5, 16.9)]),
    stroke('file-badge', [...docBase(), circle(13, 16, 2.5), poly([[13, 14.5], [14.2, 15.7], [13, 16.9], [11.8, 15.7], [13, 14.5]])]),
    folderVariant('folder-open', [], true),
    stroke('folders', [roundedRect(3, 6, 12, 12, 2), roundedRect(9, 9, 12, 12, 2)]),
    folderVariant('folder-plus', overlayPlus()),
    folderVariant('folder-minus', overlayMinus()),
    folderVariant('folder-search', overlaySearch()),
    folderVariant('folder-lock', overlayLock()),
    folderVariant('folder-heart', overlayHeart()),
    folderVariant('folder-check', overlayCheck()),
    folderVariant('folder-x', overlayX()),
    folderVariant('folder-archive', [roundedRect(8.5, 13.5, 9, 5.5, 0.8), line(11, 16.2, 15, 16.2)]),
    folderVariant('folder-key', [circle(9.5, 16.5, 1.6), line(11, 16.5, 16.5, 16.5), line(14.2, 16.5, 14.2, 14.6), line(16.2, 16.5, 16.2, 15)]),
    folderVariant('folder-root', [line(12, 14, 12, 19), line(12, 16, 9, 16), line(12, 16, 15, 16), circle(9, 16, 0.8), circle(15, 16, 0.8), circle(12, 19.2, 0.8)]),
    folderVariant('folder-code', [line(10, 15, 8, 17), line(8, 17, 10, 19), line(14, 15, 16, 17), line(16, 17, 14, 19)]),
    folderVariant('folder-git', [circle(9, 17, 1), circle(14, 14, 1), circle(17, 18, 1), line(10, 16.3, 13, 14.7), line(15, 14.7, 16.2, 17.2)]),
    folderVariant('folder-tree', [line(12, 14, 12, 19), line(12, 16, 9, 16), line(12, 17.5, 15, 17.5), circle(9, 16, 0.8), circle(15, 17.5, 0.8), circle(12, 19.2, 0.8)]),
    folderVariant('folder-input', overlayArrowLeft()),
    folderVariant('folder-output', overlayArrowRight()),
    folderVariant('folder-kanban', [roundedRect(8, 13.5, 2.5, 5, 0.6), roundedRect(11.75, 13.5, 2.5, 3.2, 0.6), roundedRect(15.5, 13.5, 2.5, 6, 0.6)]),
    folderVariant('folder-sync', [quadPath(9, 15.5, 12, 12.5, 16, 14), poly([[15, 12.2], [17.5, 13.9], [15.4, 16]]), quadPath(15.5, 18.3, 12.3, 20.4, 8.8, 19), poly([[9.6, 17], [7.1, 18.9], [9.8, 20.5]])]),
  ];
}

function peopleFamilyIcons() {
  return [
    userVariant('user-plus', overlayPlus()),
    userVariant('user-minus', overlayMinus()),
    userVariant('user-check', overlayCheck()),
    userVariant('user-x', overlayX()),
    userVariant('user-search', overlaySearch()),
    stroke('user-circle', userCircleBase()),
    stroke('user-square', userSquareBase()),
    stroke('user-round', [circle(12, 12, 9), circle(12, 9, 3), quadPath(6.7, 18, 12, 14, 17.3, 18)]),
    stroke('users-round', [circle(12, 12, 9), circle(9.2, 9, 2.4), circle(15.2, 10, 2), quadPath(5.8, 17.8, 10.4, 14.6, 15, 17.8), quadPath(13, 18.5, 15.5, 16.4, 18, 18.5)]),
    stroke('users-square', [roundedRect(3, 3, 18, 18, 3), ...usersGroupBase()]),
    userVariant('user-cog', [circle(17, 17, 2), line(17, 13.5, 17, 14.7), line(17, 19.3, 17, 20.5), line(13.5, 17, 14.7, 17), line(19.3, 17, 20.5, 17)]),
    userVariant('user-lock', overlayLock()),
    userVariant('user-pen', [line(14.5, 19.5, 19, 15), line(17.5, 13.5, 20.5, 16.5), line(14.3, 19.7, 13.2, 20.8)]),
    userVariant('user-star', overlayStar()),
    userVariant('user-heart', overlayHeart()),
    userVariant('user-shield', [polygon([[17, 13], [20, 14.2], [20, 17.5], [17, 20], [14, 17.5], [14, 14.2]])]),
    userVariant('user-voice', [line(17, 14, 17, 19), arcPath(18.5, 15.5, 2, 2.5, 18.5, 17.5), arcPath(20, 14.5, 3.5, 4, 20, 18.5)]),
    stroke('id-card', [roundedRect(3, 6, 18, 12, 2), circle(8, 11, 2), quadPath(5.5, 16, 8, 13.6, 10.5, 16), line(13, 10, 18, 10), line(13, 13, 18, 13)]),
    stroke('badge-id', [polygon([[12, 2], [19, 5], [19, 13], [12, 22], [5, 13], [5, 5]]), circle(12, 10, 2.4), quadPath(8.8, 16.5, 12, 13.8, 15.2, 16.5)]),
    stroke('contact-book', [roundedRect(5, 3, 14, 18, 2), line(9, 3, 9, 21), circle(14, 10, 2), quadPath(11.6, 16, 14, 13.8, 16.4, 16)]),
    stroke('group', usersGroupBase()),
    stroke('team', [...usersGroupBase(), roundedRect(3, 16.5, 18, 3.5, 1)]),
    stroke('badge-user', [...badgeCircleBase(), circle(12, 10, 2.5), quadPath(8, 18, 12, 14.6, 16, 18)]),
    stroke('contact-round', [circle(12, 12, 9), line(7, 6, 7, 18), circle(14.5, 10, 2.1), quadPath(11.8, 16.2, 14.5, 13.8, 17.2, 16.2)]),
  ];
}

function commerceFamilyIcons() {
  return [
    stroke('shopping-cart', shoppingCartBase()),
    stroke('shopping-cart-plus', [...shoppingCartBase(), ...overlayPlus(18, 8, 1.6)]),
    stroke('shopping-cart-checkout', [...shoppingCartBase(), ...overlayCheck(18, 8, 1.6)]),
    stroke('shopping-cart-remove', [...shoppingCartBase(), ...overlayX(18, 8, 1.4)]),
    stroke('shopping-bag', shoppingBagBase()),
    stroke('shopping-bag-check', [...shoppingBagBase(), ...overlayCheck(12, 15.5, 2)]),
    stroke('shopping-bag-plus', [...shoppingBagBase(), ...overlayPlus(12, 15.5, 2)]),
    stroke('basket', basketBase()),
    stroke('package', packageBase()),
    stroke('package-open', [...packageBase(), line(4.5, 6.5, 12, 2.5), line(12, 2.5, 19.5, 6.5)]),
    stroke('package-check', [...packageBase(), ...overlayCheck(17, 17, 1.4)]),
    stroke('package-x', [...packageBase(), ...overlayX(17, 17, 1.3)]),
    stroke('package-search', [...packageBase(), ...overlaySearch(17, 17, 1.4)]),
    stroke('boxes', [roundedRect(4, 9, 6, 6, 1), roundedRect(14, 9, 6, 6, 1), roundedRect(9, 15, 6, 6, 1)]),
    stroke('box-seam', [...packageBase(), line(12, 10.5, 12, 21.5)]),
    stroke('box-select', [...packageBase(), line(7, 11, 7, 8.5), line(7, 8.5, 9.5, 8.5), line(17, 8.5, 14.5, 8.5), line(17, 8.5, 17, 11), line(7, 18, 7, 15.5), line(7, 18, 9.5, 18), line(17, 18, 14.5, 18), line(17, 18, 17, 15.5)]),
    stroke('box-return', [...packageBase(), line(17, 15, 10, 15), poly([[12, 12.5], [9, 15], [12, 17.5]])]),
    stroke('truck', truckBase()),
    stroke('truck-fast', [...truckBase(), line(3, 9, 8, 9), line(3, 12, 7, 12)]),
    stroke('delivery', [...truckBase(), ...overlayCheck(18, 8, 1.2)]),
    stroke('warehouse', warehouseBase()),
    stroke('store', storeBase()),
    stroke('storefront', [...storeBase(), line(5.5, 9, 5.5, 6), line(9.5, 9, 9.5, 6), line(13.5, 9, 13.5, 6), line(17.5, 9, 17.5, 6)]),
    stroke('qr-code', [roundedRect(4, 4, 6, 6, 1), roundedRect(14, 4, 6, 6, 1), roundedRect(4, 14, 6, 6, 1), line(15, 15, 15, 17), line(17, 15, 20, 15), line(17, 17, 17, 20), line(19, 17, 19, 19)]),
    stroke('barcode', [line(4, 6, 4, 18), line(7, 6, 7, 18), line(10, 6, 10, 18), line(12, 6, 12, 18), line(15, 6, 15, 18), line(18, 6, 18, 18), line(20, 6, 20, 18)]),
    stroke('ticket', ticketBase()),
    stroke('ticket-percent', [...ticketBase(), ...overlayPercent(15, 13.5)]),
    stroke('sale-tag', ['M20 13.5l-6.5 6.5a2 2 0 01-2.8 0L2 11.3V3h8.3L20 12.7a2 2 0 010 2.8z', circle(7.5, 7.5, 1)]),
    stroke('tags', ['M14 3H5v9l8.5 8.5a2 2 0 002.8 0l4.7-4.7a2 2 0 000-2.8L14 3z', 'M10 6H3v7l8.5 8.5', circle(8, 8, 0.9)]),
    stroke('coupon', [...ticketBase(), line(12, 8, 12, 18), line(7, 13, 10, 13), line(14, 13, 17, 13)]),
    stroke('gift-card', [roundedRect(3, 7, 18, 10, 2), line(3, 11.5, 21, 11.5), line(12, 7, 12, 17), line(12, 7, 8.5, 7), arcPath(8.5, 7, 2, 2, 12, 10), line(12, 7, 15.5, 7), arcPath(15.5, 7, 2, 2, 12, 10)]),
    stroke('scan-line', [line(6, 5, 6, 8), line(6, 5, 9, 5), line(18, 5, 15, 5), line(18, 5, 18, 8), line(6, 19, 6, 16), line(6, 19, 9, 19), line(18, 19, 15, 19), line(18, 19, 18, 16), line(5, 12, 19, 12)]),
    stroke('scan-qr', [line(6, 5, 6, 8), line(6, 5, 9, 5), line(18, 5, 15, 5), line(18, 5, 18, 8), line(6, 19, 6, 16), line(6, 19, 9, 19), line(18, 19, 15, 19), line(18, 19, 18, 16), roundedRect(9.5, 9.5, 2.5, 2.5, 0.4), roundedRect(14, 12, 2.5, 2.5, 0.4)]),
    stroke('hand-package', [quadPath(4, 17, 7, 15, 10, 17), line(10, 17, 14, 17), line(14, 17, 17, 14), polygon([[14, 3.5], [19, 6.5], [19, 11.5], [14, 14.5], [9, 11.5], [9, 6.5]]), line(14, 3.5, 14, 14.5)]),
    stroke('badge-tag', [...badgeCircleBase(), poly([[9, 10], [15, 10], [17, 12], [15, 14], [9, 14], [7, 12], [9, 10]])]),
    stroke('receipt-text', [...receiptBase(), line(9, 8, 15, 8), line(9, 11, 15, 11), line(9, 14, 15, 14), line(9, 17, 13, 17)]),
  ];
}

const navigationUiIcons = [
  stroke('chevron-up-down', [poly([[8, 11], [12, 7], [16, 11]]), poly([[8, 13], [12, 17], [16, 13]])]),
  stroke('chevron-left-right', [poly([[11, 8], [7, 12], [11, 16]]), poly([[13, 8], [17, 12], [13, 16]])]),
  stroke('arrow-up-down', [line(12, 4, 12, 20), poly([[8, 8], [12, 4], [16, 8]]), poly([[8, 16], [12, 20], [16, 16]])]),
  stroke('arrow-left-right', [line(4, 12, 20, 12), poly([[8, 8], [4, 12], [8, 16]]), poly([[16, 8], [20, 12], [16, 16]])]),
  stroke('corner-up-left', [line(6, 18, 6, 6), line(6, 6, 18, 6), poly([[10, 2], [6, 6], [10, 10]])]),
  stroke('corner-up-right', [line(18, 18, 18, 6), line(6, 6, 18, 6), poly([[14, 2], [18, 6], [14, 10]])]),
  stroke('corner-down-left', [line(6, 6, 6, 18), line(6, 18, 18, 18), poly([[10, 14], [6, 18], [10, 22]])], '0 0 24 24'),
  stroke('corner-down-right', [line(18, 6, 18, 18), line(6, 18, 18, 18), poly([[14, 14], [18, 18], [14, 22]])], '0 0 24 24'),
  stroke('first-page', [line(6, 5, 6, 19), polygon([[18, 5], [10, 12], [18, 19]])]),
  stroke('last-page', [line(18, 5, 18, 19), polygon([[6, 5], [14, 12], [6, 19]])]),
  stroke('expand-horizontal', [line(4, 12, 20, 12), poly([[8, 8], [4, 12], [8, 16]]), poly([[16, 8], [20, 12], [16, 16]]), line(12, 7, 12, 17)]),
  stroke('expand-vertical', [line(12, 4, 12, 20), poly([[8, 8], [12, 4], [16, 8]]), poly([[8, 16], [12, 20], [16, 16]]), line(7, 12, 17, 12)]),
  stroke('collapse-horizontal', [poly([[8, 8], [12, 12], [8, 16]]), poly([[16, 8], [12, 12], [16, 16]]), line(4, 12, 8, 12), line(16, 12, 20, 12)]),
  stroke('collapse-vertical', [poly([[8, 8], [12, 12], [16, 8]]), poly([[8, 16], [12, 12], [16, 16]]), line(12, 4, 12, 8), line(12, 16, 12, 20)]),
  stroke('drag-handle', [circle(8, 8, 0.8), circle(12, 8, 0.8), circle(16, 8, 0.8), circle(8, 12, 0.8), circle(12, 12, 0.8), circle(16, 12, 0.8), circle(8, 16, 0.8), circle(12, 16, 0.8), circle(16, 16, 0.8)]),
  stroke('drag-handle-horizontal', [circle(7, 12, 0.8), circle(12, 12, 0.8), circle(17, 12, 0.8)]),
  stroke('drag-handle-vertical', [circle(12, 7, 0.8), circle(12, 12, 0.8), circle(12, 17, 0.8)]),
  stroke('navigate-fit', [roundedRect(4, 4, 16, 16, 2), line(9, 9, 15, 9), line(15, 9, 15, 15), line(15, 15, 9, 15), line(9, 15, 9, 9)]),
];

const actionUiIcons = [
  stroke('duplicate', [roundedRect(6, 6, 10, 10, 2), roundedRect(9, 9, 10, 10, 2)]),
  stroke('duplicate-plus', [roundedRect(6, 6, 10, 10, 2), roundedRect(9, 9, 10, 10, 2), ...overlayPlus(17, 17, 1.2)]),
  stroke('resize', [roundedRect(5, 5, 14, 14, 2), line(9, 15, 15, 9), poly([[12, 9], [15, 9], [15, 12]]), poly([[9, 12], [9, 15], [12, 15]])]),
  stroke('resize-horizontal', [roundedRect(4, 7, 16, 10, 2), line(4, 12, 20, 12), poly([[8, 9], [4, 12], [8, 15]]), poly([[16, 9], [20, 12], [16, 15]])]),
  stroke('resize-vertical', [roundedRect(7, 4, 10, 16, 2), line(12, 4, 12, 20), poly([[9, 8], [12, 4], [15, 8]]), poly([[9, 16], [12, 20], [15, 16]])]),
  stroke('select-all', [roundedRect(5, 5, 14, 14, 2), line(8, 8, 16, 8), line(8, 12, 16, 12), line(8, 16, 16, 16), line(8, 8, 8, 16), line(16, 8, 16, 16)]),
  stroke('deselect', [roundedRect(5, 5, 14, 14, 2), line(4, 20, 20, 4)]),
  stroke('flip-horizontal', [line(12, 4, 12, 20), polygon([[4, 7], [10, 12], [4, 17]]), polygon([[20, 7], [14, 12], [20, 17]])]),
  stroke('flip-vertical', [line(4, 12, 20, 12), polygon([[7, 4], [12, 10], [17, 4]]), polygon([[7, 20], [12, 14], [17, 20]])]),
  stroke('bring-forward', [roundedRect(6, 8, 10, 10, 1.5), roundedRect(10, 4, 8, 8, 1.5), poly([[18, 7], [20, 5], [18, 3]])]),
  stroke('bring-to-front', [roundedRect(5, 9, 10, 10, 1.5), roundedRect(9, 5, 10, 10, 1.5), poly([[19, 8], [21, 6], [19, 4]])]),
  stroke('send-backward', [roundedRect(8, 6, 10, 10, 1.5), roundedRect(4, 10, 8, 8, 1.5), poly([[4, 17], [2, 19], [4, 21]])]),
  stroke('send-to-back', [roundedRect(9, 5, 10, 10, 1.5), roundedRect(5, 9, 10, 10, 1.5), poly([[5, 18], [3, 20], [5, 22]])]),
  stroke('mask', [roundedRect(5, 5, 14, 14, 2), circle(10, 12, 3.5), circle(14, 12, 3.5)]),
  stroke('unmask', [roundedRect(5, 5, 14, 14, 2), circle(9.5, 12, 3.2), circle(14.5, 12, 3.2), line(4, 20, 20, 4)]),
  stroke('lock-aspect', [roundedRect(5, 5, 14, 14, 2), line(5, 9, 9, 9), line(15, 15, 19, 15), line(15, 15, 15, 19), ...overlayLock(16, 8)]),
  stroke('unlock-aspect', [roundedRect(5, 5, 14, 14, 2), line(5, 9, 9, 9), line(15, 15, 19, 15), line(15, 15, 15, 19), roundedRect(13.5, 6.8, 5, 3.8, 1), line(14.5, 6.8, 14.5, 5.2), quadPath(14.5, 5.2, 16, 3.7, 17.5, 5.2)]),
  stroke('copy-style', [brushIconBase(), line(6, 19, 18, 19)]),
  stroke('paste-style', [brushIconBase(), roundedRect(14, 4, 6, 6, 1), line(16, 6, 18, 6)]),
  stroke('clear-formatting', [brushIconBase(), line(5, 5, 19, 19)]),
  stroke('reset-layout', [roundedRect(5, 5, 14, 14, 2), line(12, 8, 12, 16), poly([[9, 11], [12, 8], [15, 11]])]),
  stroke('apply', [roundedRect(5, 5, 14, 14, 2), poly([[8, 12], [11, 15], [16, 9]])]),
];

const contentUiIcons = [
  stroke('checkbox', [roundedRect(5, 5, 14, 14, 2)]),
  stroke('checkbox-checked', [roundedRect(5, 5, 14, 14, 2), poly([[8, 12], [11, 15], [16, 9]])]),
  stroke('checkbox-indeterminate', [roundedRect(5, 5, 14, 14, 2), line(8, 12, 16, 12)]),
  stroke('radio-button', [circle(12, 12, 7)]),
  fill('radio-button-checked', [circle(12, 12, 7), circle(12, 12, 3)]),
  stroke('toggle-left', [roundedRect(4, 8, 16, 8, 4), circle(9, 12, 3)]),
  stroke('toggle-right', [roundedRect(4, 8, 16, 8, 4), circle(15, 12, 3)]),
  stroke('switch-on', [roundedRect(4, 8, 16, 8, 4), circle(15, 12, 3), line(7, 12, 9, 12)]),
  stroke('switch-off', [roundedRect(4, 8, 16, 8, 4), circle(9, 12, 3), line(15, 10, 17, 14), line(17, 10, 15, 14)]),
  stroke('input', [roundedRect(4, 7, 16, 10, 2), line(8, 12, 14, 12)]),
  stroke('textarea', [roundedRect(4, 5, 16, 14, 2), line(8, 10, 16, 10), line(8, 14, 16, 14), line(8, 18, 13, 18)]),
  stroke('select', [roundedRect(4, 7, 16, 10, 2), poly([[14, 11], [16, 13], [18, 11]])]),
  stroke('combobox', [roundedRect(4, 7, 16, 10, 2), line(14, 7, 14, 17), poly([[16, 11], [18, 13], [20, 11]])]),
  stroke('search-field', [roundedRect(4, 7, 16, 10, 2), ...overlaySearch(9, 12, 1.6)]),
  stroke('form', [roundedRect(5, 4, 14, 16, 2), line(8, 8, 16, 8), line(8, 12, 16, 12), line(8, 16, 13, 16)]),
  stroke('label', [roundedRect(5, 8, 14, 8, 2), line(8, 12, 16, 12)]),
  stroke('placeholder', [roundedRect(4, 7, 16, 10, 2), line(7, 12, 11, 12), line(13, 12, 17, 12)]),
  stroke('asterisk-field', [roundedRect(4, 7, 16, 10, 2), line(8, 10, 8, 14), line(6.5, 11, 9.5, 13), line(9.5, 11, 6.5, 13)]),
  stroke('required-field', [roundedRect(4, 7, 16, 10, 2), line(15.5, 9.5, 15.5, 14.5), line(13.5, 12, 17.5, 12)]),
  stroke('helper-text', [roundedRect(4, 7, 16, 10, 2), line(7, 19, 17, 19), line(7, 12, 15, 12)]),
];

const statusUiIcons = [
  stroke('state-active', [roundedRect(4, 7, 16, 10, 2), poly([[8, 12], [11, 15], [16, 9]])]),
  stroke('state-inactive', [roundedRect(4, 7, 16, 10, 2), line(8, 12, 16, 12)]),
  stroke('state-hover', [roundedRect(4, 7, 16, 10, 2), polygon([[12, 5], [14, 9], [10, 9]])]),
  stroke('state-focus', [roundedRect(4, 7, 16, 10, 2), roundedRect(2, 5, 20, 14, 2)]),
  stroke('state-selected', [roundedRect(4, 7, 16, 10, 2), roundedRect(2, 5, 20, 14, 2), poly([[8, 12], [11, 15], [16, 9]])]),
  stroke('state-disabled', [roundedRect(4, 7, 16, 10, 2), line(5, 18, 19, 6)]),
  stroke('state-error', [roundedRect(4, 7, 16, 10, 2), ...overlayX(12, 12, 2.2)]),
  stroke('state-success', [roundedRect(4, 7, 16, 10, 2), poly([[8, 12], [11, 15], [16, 9]])]),
  stroke('state-warning', [roundedRect(4, 7, 16, 10, 2), line(12, 9, 12, 13), line(12, 15, 12, 15)]),
  stroke('state-visited', [roundedRect(4, 7, 16, 10, 2), circle(12, 12, 3.5), line(12, 10.5, 12, 12), line(12, 12, 14.2, 13.3)]),
  stroke('new-badge', [roundedRect(4, 7, 16, 10, 2), ...textPaths('N', 9, 8.5, 6, 7)]),
  stroke('beta-badge', [roundedRect(4, 7, 16, 10, 2), ...textPaths('B', 9, 8.5, 6, 7)]),
];

function shapeRegistryIcons() {
  return [
    fill('circle-fill', circle(12, 12, 8)),
    fill('square-fill', roundedRect(5, 5, 14, 14, 2)),
    stroke('triangle-down-outline', polygon([[12, 18], [5, 8], [19, 8]])),
    ...pairPolygon('triangle-up', [[12, 6], [5, 16], [19, 16]]),
    ...pairPolygon('triangle-left', [[6, 12], [16, 5], [16, 19]]),
    ...pairPolygon('triangle-right', [[18, 12], [8, 5], [8, 19]]),
    ...pairPolygon('diamond', [[12, 4], [19, 12], [12, 20], [5, 12]]),
    ...pairPolygon('hexagon', [[8, 4], [16, 4], [20, 12], [16, 20], [8, 20], [4, 12]]),
    ...pairPolygon('pentagon', [[12, 4], [19, 9], [16, 20], [8, 20], [5, 9]]),
    ...pairPolygon('octagon', [[8, 4], [16, 4], [20, 8], [20, 16], [16, 20], [8, 20], [4, 16], [4, 8]]),
    ...pairPolygon('star-4', [[12, 4], [14.5, 9.5], [20, 12], [14.5, 14.5], [12, 20], [9.5, 14.5], [4, 12], [9.5, 9.5]]),
    ...pairPolygon('star-6', [[12, 4], [15, 9], [20, 10], [16, 14], [17, 20], [12, 17], [7, 20], [8, 14], [4, 10], [9, 9]]),
    ...pairPolygon('star-8', [[12, 4], [14, 8], [18, 6], [16, 10], [20, 12], [16, 14], [18, 18], [14, 16], [12, 20], [10, 16], [6, 18], [8, 14], [4, 12], [8, 10], [6, 6], [10, 8]]),
    ...pairEllipse('oval', 12, 12, 8, 5),
    ...pairRoundedShape('pill', 4, 8, 16, 8, 4),
    ...pairPolygon('rhombus', [[10, 5], [19, 10], [14, 19], [5, 14]]),
    ...pairPolygon('parallelogram', [[7, 5], [19, 5], [17, 19], [5, 19]]),
    ...pairPolygon('trapezoid', [[7, 6], [17, 6], [20, 18], [4, 18]]),
    ...pairPolygon('cross-shape', [[9, 4], [15, 4], [15, 9], [20, 9], [20, 15], [15, 15], [15, 20], [9, 20], [9, 15], [4, 15], [4, 9], [9, 9]]),
    ...pairPolygon('plus-shape', [[10, 4], [14, 4], [14, 10], [20, 10], [20, 14], [14, 14], [14, 20], [10, 20], [10, 14], [4, 14], [4, 10], [10, 10]]),
    ...pairPolygon('x-shape', [[7, 4], [12, 9], [17, 4], [20, 7], [15, 12], [20, 17], [17, 20], [12, 15], [7, 20], [4, 17], [9, 12], [4, 7]]),
    fill('bookmark-fill', polygon([[6, 3], [18, 3], [18, 21], [12, 16], [6, 21]])),
    fill('heart-fill', 'M12 21l-1.7-1.55C5.2 14.73 2 11.8 2 8.2C2 5.42 4.24 3.2 7 3.2c1.56 0 3.06.74 4 1.9c.94-1.16 2.44-1.9 4-1.9c2.76 0 5 2.22 5 5c0 3.6-3.2 6.53-8.3 11.25z'),
    stroke('circle-dashed', [line(12, 4, 12, 6), line(18, 6, 16.5, 7.5), line(20, 12, 18, 12), line(18, 18, 16.5, 16.5), line(12, 20, 12, 18), line(6, 18, 7.5, 16.5), line(4, 12, 6, 12), line(6, 6, 7.5, 7.5)]),
    stroke('square-dashed', [line(6, 5, 10, 5), line(14, 5, 18, 5), line(19, 6, 19, 10), line(19, 14, 19, 18), line(14, 19, 18, 19), line(6, 19, 10, 19), line(5, 14, 5, 18), line(5, 6, 5, 10)]),
    stroke('diamond-dashed', [line(12, 4, 15, 7), line(17, 9, 20, 12), line(17, 15, 15, 17), line(12, 20, 9, 17), line(7, 15, 4, 12), line(7, 9, 9, 7)]),
    stroke('selection-circle', [circle(12, 12, 7), circle(12, 5, 0.8), circle(19, 12, 0.8), circle(12, 19, 0.8), circle(5, 12, 0.8)]),
    stroke('selection-square', [roundedRect(6, 6, 12, 12, 1.5), circle(6, 6, 0.8), circle(18, 6, 0.8), circle(18, 18, 0.8), circle(6, 18, 0.8)]),
    stroke('selection-diamond', [polygon([[12, 5], [19, 12], [12, 19], [5, 12]]), circle(12, 5, 0.8), circle(19, 12, 0.8), circle(12, 19, 0.8), circle(5, 12, 0.8)]),
    stroke('selection-hexagon', [polygon([[8, 5], [16, 5], [20, 12], [16, 19], [8, 19], [4, 12]]), circle(8, 5, 0.8), circle(16, 5, 0.8), circle(20, 12, 0.8), circle(16, 19, 0.8), circle(8, 19, 0.8), circle(4, 12, 0.8)]),
    stroke('shape-union', [circle(10, 12, 4), circle(14, 12, 4), line(12, 8, 12, 16)]),
    stroke('shape-subtract', [circle(10, 12, 4), circle(14, 12, 4), line(11.5, 12, 16.5, 12)]),
    stroke('shape-intersect', [circle(10, 12, 4), circle(14, 12, 4), roundedRect(10, 8, 4, 8, 1)]),
    stroke('shape-exclude', [circle(10, 12, 4), circle(14, 12, 4), line(10, 8, 18, 16)]),
    stroke('shape-outline', [roundedRect(5, 5, 14, 14, 2), circle(12, 12, 4)]),
    stroke('shape-fill', [roundedRect(5, 5, 14, 14, 2), polygon([[12, 8], [16, 16], [8, 16]])]),
  ];
}

function layoutRegistryIcons() {
  return [
    stroke('frame', [roundedRect(4, 4, 16, 16, 2)]),
    stroke('frame-plus', [roundedRect(4, 4, 16, 16, 2), ...overlayPlus(17, 17, 1.4)]),
    stroke('artboard', [roundedRect(5, 4, 14, 16, 2), line(5, 8, 19, 8)]),
    stroke('artboard-horizontal', [roundedRect(3, 6, 18, 12, 2), line(3, 9, 21, 9)]),
    stroke('artboard-vertical', [roundedRect(6, 3, 12, 18, 2), line(6, 6, 18, 6)]),
    stroke('layout-template', [roundedRect(4, 5, 16, 14, 2), line(4, 9, 20, 9), line(10, 9, 10, 19)]),
    stroke('layout-dashboard', [roundedRect(4, 5, 16, 14, 2), line(10, 5, 10, 19), line(4, 12, 20, 12)]),
    stroke('layout-sidebar-left', [roundedRect(4, 5, 16, 14, 2), line(9, 5, 9, 19)]),
    stroke('layout-sidebar-right', [roundedRect(4, 5, 16, 14, 2), line(15, 5, 15, 19)]),
    stroke('layout-header', [roundedRect(4, 5, 16, 14, 2), line(4, 9, 20, 9)]),
    stroke('layout-footer', [roundedRect(4, 5, 16, 14, 2), line(4, 15, 20, 15)]),
    stroke('layout-split-horizontal', [roundedRect(4, 5, 16, 14, 2), line(4, 12, 20, 12)]),
    stroke('layout-split-vertical', [roundedRect(4, 5, 16, 14, 2), line(12, 5, 12, 19)]),
    stroke('panel-left', [roundedRect(4, 5, 16, 14, 2), roundedRect(4, 5, 5, 14, 1.5)]),
    stroke('panel-right', [roundedRect(4, 5, 16, 14, 2), roundedRect(15, 5, 5, 14, 1.5)]),
    stroke('panel-top', [roundedRect(4, 5, 16, 14, 2), roundedRect(4, 5, 16, 4, 1.5)]),
    stroke('panel-bottom', [roundedRect(4, 5, 16, 14, 2), roundedRect(4, 15, 16, 4, 1.5)]),
    stroke('panel-left-close', [roundedRect(4, 5, 16, 14, 2), roundedRect(4, 5, 5, 14, 1.5), poly([[10, 12], [7, 12], [8.8, 10.2], [7, 12], [8.8, 13.8]])]),
    stroke('panel-right-close', [roundedRect(4, 5, 16, 14, 2), roundedRect(15, 5, 5, 14, 1.5), poly([[14, 12], [17, 12], [15.2, 10.2], [17, 12], [15.2, 13.8]])]),
    stroke('panel-left-open', [roundedRect(4, 5, 16, 14, 2), roundedRect(4, 5, 5, 14, 1.5), poly([[8, 12], [11, 12], [9.2, 10.2], [11, 12], [9.2, 13.8]])]),
    stroke('panel-right-open', [roundedRect(4, 5, 16, 14, 2), roundedRect(15, 5, 5, 14, 1.5), poly([[16, 12], [13, 12], [14.8, 10.2], [13, 12], [14.8, 13.8]])]),
    stroke('panel-top-open', [roundedRect(4, 5, 16, 14, 2), roundedRect(4, 5, 16, 4, 1.5), poly([[12, 8], [12, 11], [10.2, 9.2], [12, 11], [13.8, 9.2]])]),
    stroke('panel-bottom-open', [roundedRect(4, 5, 16, 14, 2), roundedRect(4, 15, 16, 4, 1.5), poly([[12, 16], [12, 13], [10.2, 14.8], [12, 13], [13.8, 14.8]])]),
    stroke('panel-left-dashed', [roundedRect(4, 5, 16, 14, 2), line(7, 7, 7, 9), line(7, 11, 7, 13), line(7, 15, 7, 17)]),
    stroke('panel-right-dashed', [roundedRect(4, 5, 16, 14, 2), line(17, 7, 17, 9), line(17, 11, 17, 13), line(17, 15, 17, 17)]),
    stroke('sidebar-left', [roundedRect(4, 4, 16, 16, 2), roundedRect(4, 4, 4, 16, 1.5)]),
    stroke('sidebar-right', [roundedRect(4, 4, 16, 16, 2), roundedRect(16, 4, 4, 16, 1.5)]),
    stroke('sidebar-left-collapse', [roundedRect(4, 4, 16, 16, 2), roundedRect(4, 4, 4, 16, 1.5), poly([[11, 8], [8, 12], [11, 16]])]),
    stroke('sidebar-right-collapse', [roundedRect(4, 4, 16, 16, 2), roundedRect(16, 4, 4, 16, 1.5), poly([[13, 8], [16, 12], [13, 16]])]),
    stroke('sidebar-left-open', [roundedRect(4, 4, 16, 16, 2), roundedRect(4, 4, 4, 16, 1.5), poly([[9, 8], [12, 12], [9, 16]])]),
    stroke('sidebar-right-open', [roundedRect(4, 4, 16, 16, 2), roundedRect(16, 4, 4, 16, 1.5), poly([[15, 8], [12, 12], [15, 16]])]),
    stroke('dock-left', [roundedRect(4, 5, 16, 14, 2), roundedRect(4, 8, 4, 8, 1.2)]),
    stroke('dock-right', [roundedRect(4, 5, 16, 14, 2), roundedRect(16, 8, 4, 8, 1.2)]),
    stroke('dock-bottom', [roundedRect(4, 5, 16, 14, 2), roundedRect(8, 15, 8, 4, 1.2)]),
    stroke('container', [roundedRect(4, 6, 16, 12, 2)]),
    stroke('container-fluid', [roundedRect(5, 6, 14, 12, 2), poly([[3, 12], [5, 10], [5, 14]]), poly([[21, 12], [19, 10], [19, 14]])]),
    stroke('section', [roundedRect(4, 5, 16, 14, 2), line(4, 9, 20, 9), line(4, 15, 20, 15)]),
    stroke('card', [roundedRect(5, 5, 14, 14, 2), line(8, 9, 16, 9), line(8, 13, 14, 13)]),
    stroke('card-stack', [roundedRect(6, 7, 12, 12, 2), roundedRect(8, 5, 12, 12, 2)]),
    stroke('modal', [roundedRect(3, 4, 18, 16, 2), roundedRect(7, 8, 10, 8, 1.5)]),
    stroke('drawer-left', [roundedRect(4, 5, 16, 14, 2), roundedRect(4, 5, 6, 14, 1.5)]),
    stroke('drawer-right', [roundedRect(4, 5, 16, 14, 2), roundedRect(14, 5, 6, 14, 1.5)]),
    stroke('popover', [roundedRect(5, 5, 14, 11, 2), polygon([[12, 16], [10, 20], [14, 16]])]),
    stroke('tooltip', [roundedRect(6, 6, 12, 8, 2), polygon([[10, 14], [12, 18], [14, 14]])]),
    stroke('tabs', [roundedRect(4, 7, 16, 12, 2), roundedRect(5, 5, 5, 4, 1), roundedRect(10, 5, 5, 4, 1), roundedRect(15, 5, 4, 4, 1)]),
    stroke('tabs-vertical', [roundedRect(7, 4, 12, 16, 2), roundedRect(5, 5, 4, 5, 1), roundedRect(5, 10, 4, 5, 1), roundedRect(5, 15, 4, 4, 1)]),
    stroke('accordion', [roundedRect(4, 5, 16, 14, 2), line(6, 9, 18, 9), line(6, 14, 18, 14), poly([[16, 7], [18, 9], [20, 7]]), poly([[16, 12], [18, 14], [20, 12]])]),
    stroke('breadcrumb', [roundedRect(4, 9, 5, 6, 1.5), poly([[11, 9], [15, 12], [11, 15]]), roundedRect(16, 9, 4, 6, 1.5)]),
    stroke('pagination', [roundedRect(5, 9, 4, 6, 1.5), roundedRect(10, 9, 4, 6, 1.5), roundedRect(15, 9, 4, 6, 1.5), poly([[3, 12], [5, 10], [5, 14]]), poly([[21, 12], [19, 10], [19, 14]])]),
    stroke('stepper', [circle(6, 12, 1.5), circle(12, 12, 1.5), circle(18, 12, 1.5), line(7.5, 12, 10.5, 12), line(13.5, 12, 16.5, 12)]),
    stroke('divider-horizontal', [line(4, 12, 10, 12), line(14, 12, 20, 12)]),
    stroke('divider-vertical', [line(12, 4, 12, 10), line(12, 14, 12, 20)]),
    stroke('spacing-horizontal', [line(4, 12, 8, 12), line(16, 12, 20, 12), poly([[10, 9], [8, 12], [10, 15]]), poly([[14, 9], [16, 12], [14, 15]])]),
    stroke('spacing-vertical', [line(12, 4, 12, 8), line(12, 16, 12, 20), poly([[9, 10], [12, 8], [15, 10]]), poly([[9, 14], [12, 16], [15, 14]])]),
    stroke('padding-horizontal', [roundedRect(5, 6, 14, 12, 2), line(8, 8, 8, 16), line(16, 8, 16, 16), poly([[6, 12], [8, 10], [8, 14]]), poly([[18, 12], [16, 10], [16, 14]])]),
    stroke('padding-vertical', [roundedRect(6, 5, 12, 14, 2), line(8, 8, 16, 8), line(8, 16, 16, 16), poly([[12, 6], [10, 8], [14, 8]]), poly([[12, 18], [10, 16], [14, 16]])]),
    stroke('margin-horizontal', [roundedRect(7, 6, 10, 12, 2), line(4, 12, 7, 12), line(17, 12, 20, 12), poly([[5.5, 10], [4, 12], [5.5, 14]]), poly([[18.5, 10], [20, 12], [18.5, 14]])]),
    stroke('margin-vertical', [roundedRect(6, 7, 12, 10, 2), line(12, 4, 12, 7), line(12, 17, 12, 20), poly([[10, 5.5], [12, 4], [14, 5.5]]), poly([[10, 18.5], [12, 20], [14, 18.5]])]),
    stroke('gap-horizontal', [roundedRect(4, 8, 5, 8, 1.5), roundedRect(15, 8, 5, 8, 1.5), poly([[11, 10], [9, 12], [11, 14]]), poly([[13, 10], [15, 12], [13, 14]])]),
    stroke('gap-vertical', [roundedRect(8, 4, 8, 5, 1.5), roundedRect(8, 15, 8, 5, 1.5), poly([[10, 11], [12, 9], [14, 11]]), poly([[10, 13], [12, 15], [14, 13]])]),
    stroke('grid-2', [roundedRect(4, 4, 7, 16, 1.5), roundedRect(13, 4, 7, 16, 1.5)]),
    stroke('grid-3', [roundedRect(4, 4, 4.5, 16, 1.2), roundedRect(9.75, 4, 4.5, 16, 1.2), roundedRect(15.5, 4, 4.5, 16, 1.2)]),
    stroke('grid-4', [roundedRect(4, 4, 7, 7, 1.2), roundedRect(13, 4, 7, 7, 1.2), roundedRect(4, 13, 7, 7, 1.2), roundedRect(13, 13, 7, 7, 1.2)]),
    stroke('grid-layout', [roundedRect(4, 4, 16, 16, 2), line(12, 4, 12, 20), line(4, 12, 20, 12)]),
  ];
}

function designToolRegistryIcons() {
  return [
    stroke('cursor-arrow', [polygon([[6, 4], [6, 18], [10, 14], [13, 20], [15, 19], [12, 13], [18, 13]])]),
    stroke('cursor-click', [polygon([[6, 4], [6, 18], [10, 14], [13, 20], [15, 19], [12, 13], [18, 13]]), circle(18, 6, 2.2)]),
    stroke('cursor-text', [line(8, 5, 8, 19), line(16, 5, 16, 19), line(6, 5, 18, 5), line(6, 19, 18, 19)]),
    stroke('cursor-crosshair', [line(12, 4, 12, 20), line(4, 12, 20, 12), circle(12, 12, 3)]),
    stroke('cursor-move', [line(12, 4, 12, 20), line(4, 12, 20, 12), poly([[9, 7], [12, 4], [15, 7]]), poly([[9, 17], [12, 20], [15, 17]]), poly([[7, 9], [4, 12], [7, 15]]), poly([[17, 9], [20, 12], [17, 15]])]),
    stroke('cursor-grab', [roundedRect(8, 8, 8, 10, 2), line(10, 8, 10, 4), line(12, 8, 12, 3), line(14, 8, 14, 4), line(16, 10, 18, 8)]),
    stroke('lasso-select', [poly([[6, 7], [10, 5], [16, 7], [18, 11], [16, 16], [11, 18], [7, 15], [6, 10]]), circle(6, 10, 0.7), circle(10, 5, 0.7), circle(16, 7, 0.7), circle(18, 11, 0.7), circle(16, 16, 0.7), circle(11, 18, 0.7), circle(7, 15, 0.7)]),
    stroke('marquee-select', [line(6, 5, 10, 5), line(14, 5, 18, 5), line(19, 6, 19, 10), line(19, 14, 19, 18), line(14, 19, 18, 19), line(6, 19, 10, 19), line(5, 14, 5, 18), line(5, 6, 5, 10)]),
    stroke('crop', [line(7, 3, 7, 17), line(7, 17, 21, 17), line(17, 21, 17, 7), line(17, 7, 3, 7)]),
    stroke('slice', [roundedRect(5, 5, 14, 14, 2), line(5, 19, 19, 5), line(15, 5, 19, 5), line(19, 5, 19, 9)]),
    stroke('eyedropper', [polygon([[10, 4], [20, 14], [16, 18], [6, 8]]), line(8, 10, 4, 14), line(4, 14, 3, 19)]),
    stroke('color-palette', ['M12 4c-4.97 0-9 3.58-9 8s3.13 8 7 8h1.5a1.5 1.5 0 001.5-1.5c0-.83-.67-1.5-1.5-1.5h-.5a3 3 0 010-6h2a6 6 0 100-12z', circle(9, 9, 0.8), circle(15, 8, 0.8), circle(17, 12, 0.8)]),
    stroke('swatch', [roundedRect(5, 9, 8, 8, 1.5), roundedRect(11, 5, 8, 8, 1.5)]),
    stroke('gradient', [roundedRect(4, 6, 16, 12, 2), line(7, 15, 17, 9), circle(7, 15, 1), circle(17, 9, 1)]),
    stroke('gradient-linear', [roundedRect(4, 6, 16, 12, 2), line(7, 15, 17, 9), poly([[14, 9], [17, 9], [17, 12]]), poly([[7, 12], [7, 15], [10, 15]])]),
    stroke('gradient-radial', [roundedRect(4, 6, 16, 12, 2), circle(12, 12, 1.5), circle(12, 12, 4), circle(12, 12, 6)]),
    stroke('paint-bucket', [polygon([[9, 5], [17, 13], [12, 18], [4, 10]]), line(13, 17, 19, 17), circle(18, 14, 1)]),
    stroke('brush', brushIconBase()),
    stroke('pen-tool', [circle(12, 5, 1), circle(6, 18, 1), circle(18, 18, 1), polygon([[10, 8], [14, 8], [12, 12]]), line(12, 6, 12, 8), line(12, 12, 6, 17), line(12, 12, 18, 17)]),
    stroke('bezier-curve', [circle(6, 18, 1), circle(12, 6, 1), circle(18, 18, 1), quadPath(6, 18, 12, 10, 18, 18), line(6, 18, 9, 12), line(12, 6, 12, 10), line(18, 18, 15, 12)]),
    stroke('anchor-point', [line(6, 12, 18, 12), line(12, 6, 12, 18), polygon([[12, 8], [16, 12], [12, 16], [8, 12]])]),
    fill('anchor-point-fill', [line(6, 12, 18, 12), line(12, 6, 12, 18), polygon([[12, 8], [16, 12], [12, 16], [8, 12]])]),
    stroke('vector-node', [circle(6, 18, 1), circle(12, 8, 1), circle(18, 15, 1), line(6, 18, 12, 8), line(12, 8, 18, 15)]),
    stroke('vector-path', [circle(6, 17, 1), circle(18, 7, 1), quadPath(6, 17, 12, 3, 18, 7)]),
    stroke('boolean-union', [circle(10, 12, 4), circle(14, 12, 4), ...overlayPlus(17, 7, 1.2)]),
    stroke('boolean-subtract', [circle(10, 12, 4), circle(14, 12, 4), ...overlayMinus(17, 7, 1.2)]),
    stroke('boolean-intersect', [circle(10, 12, 4), circle(14, 12, 4), roundedRect(10, 8, 4, 8, 1)]),
    stroke('boolean-exclude', [circle(10, 12, 4), circle(14, 12, 4), line(9, 8, 15, 16)]),
    stroke('component', [roundedRect(9, 9, 6, 6, 1.2), polygon([[12, 4], [14, 6], [12, 8], [10, 6]]), polygon([[20, 12], [18, 14], [16, 12], [18, 10]]), polygon([[12, 20], [10, 18], [12, 16], [14, 18]]), polygon([[4, 12], [6, 10], [8, 12], [6, 14]])]),
    stroke('component-instance', [roundedRect(9, 9, 6, 6, 1.2), roundedRect(5, 5, 14, 14, 2)]),
    stroke('component-variant', [roundedRect(5, 5, 14, 14, 2), line(12, 5, 12, 19), line(5, 12, 19, 12)]),
    stroke('component-set', [roundedRect(5, 5, 5, 5, 1), roundedRect(14, 5, 5, 5, 1), roundedRect(5, 14, 5, 5, 1), roundedRect(14, 14, 5, 5, 1)]),
    stroke('layer-lock', [polygon([[12, 4], [20, 8], [12, 12], [4, 8]]), polygon([[12, 10], [20, 14], [12, 18], [4, 14]]), ...overlayLock(17, 17)]),
    stroke('layer-visible', [polygon([[12, 4], [20, 8], [12, 12], [4, 8]]), polygon([[12, 10], [20, 14], [12, 18], [4, 14]]), circle(17, 17, 1.2), arcPath(14.5, 17, 2.5, 1.6, 19.5, 17)]),
    stroke('layer-hidden', [polygon([[12, 4], [20, 8], [12, 12], [4, 8]]), polygon([[12, 10], [20, 14], [12, 18], [4, 14]]), line(14, 14, 20, 20)]),
    stroke('layer-group', [polygon([[12, 4], [20, 8], [12, 12], [4, 8]]), polygon([[12, 10], [20, 14], [12, 18], [4, 14]]), roundedRect(3, 3, 18, 18, 2)]),
    stroke('group-select', [roundedRect(5, 5, 8, 8, 1.5), roundedRect(11, 11, 8, 8, 1.5), circle(5, 5, 0.7), circle(19, 19, 0.7)]),
    stroke('ungroup', [roundedRect(5, 5, 6, 6, 1.5), roundedRect(13, 13, 6, 6, 1.5), line(10, 10, 14, 14)]),
    stroke('prototype', [roundedRect(7, 4, 10, 16, 2), line(12, 10, 18, 10), poly([[15, 7], [18, 10], [15, 13]])]),
    stroke('prototype-link', [roundedRect(4, 5, 6, 12, 1.5), roundedRect(14, 7, 6, 12, 1.5), line(10, 11, 14, 11), poly([[12, 9], [14, 11], [12, 13]])]),
    stroke('flow-connection', [circle(5, 12, 1.2), circle(12, 5, 1.2), circle(19, 12, 1.2), circle(12, 19, 1.2), line(6.2, 12, 17.8, 12), line(12, 6.2, 12, 17.8)]),
    stroke('flow-screen', [roundedRect(6, 4, 12, 16, 2), circle(3.5, 12, 1), circle(20.5, 12, 1), line(4.5, 12, 6, 12), line(18, 12, 19.5, 12)]),
    stroke('comment-pin', [...messageSquareBase(), polygon([[17, 6], [19, 8], [17.5, 9.5], [17.5, 13], [16.5, 13], [16.5, 9.5], [15, 8]])]),
    stroke('comment-resolved', [...messageSquareBase(), poly([[8, 12], [11, 15], [16, 9]])]),
    stroke('inspect', [roundedRect(5, 5, 14, 14, 2), line(5, 12, 19, 12), line(12, 5, 12, 19), circle(12, 12, 1.2)]),
    stroke('measure', [line(4, 18, 20, 18), poly([[7, 15], [4, 18], [7, 21]]), poly([[17, 15], [20, 18], [17, 21]]), line(12, 6, 12, 15)]),
    stroke('ruler-horizontal', [roundedRect(4, 9, 16, 6, 1), line(7, 9, 7, 13), line(10, 9, 10, 12), line(13, 9, 13, 13), line(16, 9, 16, 12)]),
    stroke('ruler-vertical', [roundedRect(9, 4, 6, 16, 1), line(9, 7, 13, 7), line(9, 10, 12, 10), line(9, 13, 13, 13), line(9, 16, 12, 16)]),
    stroke('spacing-token', [polygon([[12, 4], [19, 8], [19, 16], [12, 20], [5, 16], [5, 8]]), line(8, 12, 16, 12), poly([[10, 10], [8, 12], [10, 14]]), poly([[14, 10], [16, 12], [14, 14]])]),
    stroke('color-token', [polygon([[12, 4], [19, 8], [19, 16], [12, 20], [5, 16], [5, 8]]), circle(12, 12, 3)]),
    stroke('radius-token', [polygon([[12, 4], [19, 8], [19, 16], [12, 20], [5, 16], [5, 8]]), roundedRect(8, 8, 8, 8, 2)]),
    stroke('shadow-token', [polygon([[12, 4], [19, 8], [19, 16], [12, 20], [5, 16], [5, 8]]), roundedRect(8, 8, 7, 7, 1.5), roundedRect(10, 10, 7, 7, 1.5)]),
    stroke('typography-token', [polygon([[12, 4], [19, 8], [19, 16], [12, 20], [5, 16], [5, 8]]), ...textPaths('T', 10, 8, 4, 8)]),
    stroke('variable', [line(9, 6, 7, 12), line(7, 12, 9, 18), circle(12, 12, 1), line(15, 6, 17, 12), line(17, 12, 15, 18)]),
    stroke('variable-collection', [polygon([[8, 5], [13, 8], [13, 14], [8, 17], [3, 14], [3, 8]]), polygon([[16, 7], [21, 10], [21, 16], [16, 19], [11, 16], [11, 10]])]),
    stroke('auto-layout-horizontal', [roundedRect(5, 6, 14, 12, 2), roundedRect(7, 9, 3, 6, 0.8), roundedRect(14, 9, 3, 6, 0.8), line(10.5, 12, 13.5, 12), poly([[12, 10], [14, 12], [12, 14]])]),
    stroke('auto-layout-vertical', [roundedRect(6, 5, 12, 14, 2), roundedRect(9, 7, 6, 3, 0.8), roundedRect(9, 14, 6, 3, 0.8), line(12, 10.5, 12, 13.5), poly([[10, 12], [12, 14], [14, 12]])]),
    stroke('distribute-horizontal', [roundedRect(4, 8, 3, 8, 0.8), roundedRect(10.5, 8, 3, 8, 0.8), roundedRect(17, 8, 3, 8, 0.8), line(7, 12, 10.5, 12), line(13.5, 12, 17, 12), poly([[8.5, 10], [7, 12], [8.5, 14]]), poly([[15.5, 10], [17, 12], [15.5, 14]])]),
    stroke('distribute-vertical', [roundedRect(8, 4, 8, 3, 0.8), roundedRect(8, 10.5, 8, 3, 0.8), roundedRect(8, 17, 8, 3, 0.8), line(12, 7, 12, 10.5), line(12, 13.5, 12, 17), poly([[10, 8.5], [12, 7], [14, 8.5]]), poly([[10, 15.5], [12, 17], [14, 15.5]])]),
    stroke('align-top', [line(4, 6, 20, 6), roundedRect(6, 8, 4, 8, 0.8), roundedRect(14, 8, 4, 5, 0.8)]),
    stroke('align-bottom', [line(4, 18, 20, 18), roundedRect(6, 10, 4, 8, 0.8), roundedRect(14, 13, 4, 5, 0.8)]),
    stroke('align-middle', [line(4, 12, 20, 12), roundedRect(6, 8, 4, 8, 0.8), roundedRect(14, 9.5, 4, 5, 0.8)]),
    stroke('align-baseline', [line(4, 17, 20, 17), roundedRect(6, 9, 4, 8, 0.8), roundedRect(14, 11, 4, 6, 0.8)]),
    stroke('handoff', [roundedRect(4, 5, 8, 14, 1.5), roundedRect(14, 7, 6, 10, 1.5), line(12, 12, 14, 12), line(17, 9, 17, 15), line(15.5, 10.5, 18.5, 10.5), line(15.5, 13.5, 18.5, 13.5)]),
  ];
}

function calendarBase() {
  return [
    roundedRect(4, 5, 16, 15, 2),
    line(8, 3, 8, 7),
    line(16, 3, 16, 7),
    line(4, 9, 20, 9),
  ];
}

function calendarVariant(name, overlayPaths) {
  return stroke(name, [...calendarBase(), ...overlayPaths]);
}

function mapPinBase() {
  return [
    'M12 21s5-5.5 5-10a5 5 0 1 0-10 0c0 4.5 5 10 5 10Z',
    circle(12, 10, 1.8),
  ];
}

function mapPinVariant(name, overlayPaths) {
  return stroke(name, [...mapPinBase(), ...overlayPaths]);
}

function circleVariant(name, overlayPaths) {
  return stroke(name, [circle(12, 12, 9), ...overlayPaths]);
}

function mediaCircleVariant(name, overlayPaths) {
  return stroke(name, [circle(12, 12, 9), ...overlayPaths]);
}

function mailVariant(name, overlayPaths) {
  return stroke(name, [...mailBase(), ...overlayPaths]);
}

function phoneVariant(name, overlayPaths) {
  return stroke(name, [...phoneBase(), ...overlayPaths]);
}

function cloudVariant(name, overlayPaths, viewBox = '0 0 24 24') {
  return stroke(name, [...cloudBase(), ...overlayPaths], viewBox);
}

function houseBase() {
  return [
    polygon([[4, 10], [12, 4], [20, 10]]),
    roundedRect(6, 10, 12, 10, 1.5),
    line(10, 20, 10, 14),
    line(14, 20, 14, 14),
  ];
}

function buildingBase() {
  return [
    roundedRect(6, 4, 12, 16, 2),
    line(10, 8, 10, 16),
    line(14, 8, 14, 16),
    line(6, 10, 18, 10),
    line(6, 14, 18, 14),
  ];
}

function tallBuildingBase() {
  return [
    roundedRect(8, 3, 8, 17, 2),
    line(10.7, 7, 10.7, 17),
    line(13.3, 7, 13.3, 17),
    line(8, 9.5, 16, 9.5),
    line(8, 13, 16, 13),
  ];
}

function sunBase() {
  return [
    circle(12, 12, 3.5),
    line(12, 2, 12, 5),
    line(12, 19, 12, 22),
    line(2, 12, 5, 12),
    line(19, 12, 22, 12),
    line(4.8, 4.8, 7.1, 7.1),
    line(16.9, 16.9, 19.2, 19.2),
    line(16.9, 7.1, 19.2, 4.8),
    line(4.8, 19.2, 7.1, 16.9),
  ];
}

function terminalBase() {
  return [
    roundedRect(4, 5, 16, 14, 2),
    line(6, 9, 9, 12),
    line(9, 12, 6, 15),
    line(11, 15, 16, 15),
  ];
}

function databaseBase() {
  return [
    ellipse(12, 6.5, 6, 2.2),
    line(6, 6.5, 6, 17.5),
    line(18, 6.5, 18, 17.5),
    ellipse(12, 17.5, 6, 2.2),
    arcPath(6, 11, 6, 2.2, 18, 11),
    arcPath(6, 14.2, 6, 2.2, 18, 14.2),
  ];
}

function gearBase(cx = 12, cy = 12, radius = 3) {
  const r = radius + 1.8;
  return [
    circle(cx, cy, radius),
    line(cx, cy - r, cx, cy - radius - 0.4),
    line(cx, cy + radius + 0.4, cx, cy + r),
    line(cx - r, cy, cx - radius - 0.4, cy),
    line(cx + radius + 0.4, cy, cx + r, cy),
    line(cx - r * 0.72, cy - r * 0.72, cx - (radius + 0.4) * 0.72, cy - (radius + 0.4) * 0.72),
    line(cx + (radius + 0.4) * 0.72, cy + (radius + 0.4) * 0.72, cx + r * 0.72, cy + r * 0.72),
    line(cx + (radius + 0.4) * 0.72, cy - (radius + 0.4) * 0.72, cx + r * 0.72, cy - r * 0.72),
    line(cx - r * 0.72, cy + r * 0.72, cx - (radius + 0.4) * 0.72, cy + (radius + 0.4) * 0.72),
  ];
}

function batteryBase() {
  return [
    roundedRect(3, 8, 16, 8, 1.5),
    roundedRect(19, 10, 2, 4, 0.6),
  ];
}

function monitorBase() {
  return [
    roundedRect(4, 5, 16, 10, 2),
    line(12, 15, 12, 19),
    line(9, 19, 15, 19),
  ];
}

function bookBase() {
  return [
    roundedRect(5, 4, 13, 16, 1.5),
    line(9, 4, 9, 20),
  ];
}

function carBase() {
  return [
    roundedRect(4, 10, 16, 5, 2),
    polygon([[7, 10], [9.5, 7], [15, 7], [17, 10]]),
    circle(8, 17.5, 1.5),
    circle(16, 17.5, 1.5),
  ];
}

function busBase() {
  return [
    roundedRect(5, 6, 14, 10, 2),
    line(7, 9.5, 17, 9.5),
    line(8, 6, 8, 16),
    line(16, 6, 16, 16),
    circle(8, 18, 1.3),
    circle(16, 18, 1.3),
  ];
}

function trainBase() {
  return [
    roundedRect(6, 5, 12, 11, 2),
    line(9, 8.5, 15, 8.5),
    circle(8.5, 18, 1.2),
    circle(15.5, 18, 1.2),
    line(9, 16, 7, 20),
    line(15, 16, 17, 20),
  ];
}

function boatBase() {
  return [
    polygon([[5, 16], [19, 16], [16, 20], [8, 20]]),
    line(8, 16, 10, 9),
    line(10, 9, 16, 16),
    line(10, 9, 10, 5),
  ];
}

function bikeBase() {
  return [
    circle(7, 17, 2.5),
    circle(17, 17, 2.5),
    line(7, 17, 11, 11),
    line(11, 11, 14, 17),
    line(14, 17, 17, 17),
    line(11, 11, 17, 11),
    line(17, 11, 19, 8),
    line(11, 11, 9, 8),
  ];
}

function steeringWheelBase() {
  return [
    circle(12, 12, 8),
    circle(12, 12, 3),
    line(12, 4, 12, 9),
    line(5.5, 16, 9.5, 13),
    line(18.5, 16, 14.5, 13),
  ];
}

function hourHandPaths(hour) {
  const angle = -Math.PI / 2 + (hour / 12) * Math.PI * 2;
  const endX = 12 + Math.cos(angle) * 4.2;
  const endY = 12 + Math.sin(angle) * 4.2;

  return [
    line(12, 12, 12, 7),
    line(12, 12, endX, endY),
  ];
}

const transportRegistryIcons = [
  stroke('car', carBase()),
  stroke('car-front', [roundedRect(6, 6, 12, 10, 2), line(9, 9, 15, 9), line(6, 13, 18, 13), circle(8.5, 18, 1.2), circle(15.5, 18, 1.2)]),
  stroke('car-taxi', [...carBase(), line(9, 6, 15, 6), line(10.5, 4, 13.5, 4)]),
  stroke('bus', busBase()),
  stroke('bus-front', [roundedRect(6, 5, 12, 12, 2), line(8, 8.5, 16, 8.5), line(6, 13, 18, 13), circle(8.5, 19, 1.2), circle(15.5, 19, 1.2)]),
  stroke('train', [...trainBase(), line(12, 2.5, 12, 5)]),
  stroke('train-front', [roundedRect(7, 4, 10, 13, 2), line(9, 8, 15, 8), line(8, 13, 16, 13), circle(9, 18.5, 1.1), circle(15, 18.5, 1.1), line(10, 17, 8, 20), line(14, 17, 16, 20)]),
  stroke('tram', [...trainBase(), line(7, 11.5, 17, 11.5), line(12, 3, 12, 5)]),
  stroke('subway', [...trainBase(), poly([[8, 12], [12, 14.5], [16, 12]])]),
  stroke('cable-car', [roundedRect(6, 8, 12, 9, 2), line(4, 5, 20, 5), line(12, 5, 12, 8), circle(8.5, 18.5, 1.1), circle(15.5, 18.5, 1.1)]),
  stroke('plane', [line(12, 3, 12, 21), line(12, 8, 5, 12), line(12, 8, 19, 12), line(12, 16, 7, 19), line(12, 16, 17, 19)]),
  stroke('plane-takeoff', [line(4, 18, 20, 18), line(12, 5, 12, 15), line(12, 10, 6, 13), line(12, 10, 18, 13), line(12, 15, 8, 17)]),
  stroke('plane-landing', [line(4, 19, 20, 19), line(12, 4, 12, 15), line(12, 9, 6, 12), line(12, 9, 18, 12), line(12, 15, 16, 17)]),
  stroke('helicopter', [roundedRect(7, 10, 8, 5, 1.5), line(4, 9, 20, 9), line(12, 7, 12, 10), line(15, 12, 20, 12), line(10, 15, 7, 18), line(12, 15, 14, 18)]),
  stroke('ship', [polygon([[5, 16], [19, 16], [16, 20], [8, 20]]), roundedRect(8, 8, 8, 8, 1.5), line(10, 8, 10, 5), line(8, 22, 10, 23), line(12, 22, 14, 23), line(16, 22, 18, 23)], '0 0 24 24'),
  stroke('boat', boatBase()),
  stroke('bike', bikeBase()),
  stroke('scooter', [circle(8, 18, 1.8), circle(17, 18, 1.8), line(10, 18, 15, 18), line(14, 18, 16, 9), line(16, 9, 14, 7)]),
  stroke('motorcycle', [circle(7, 17, 2.2), circle(17, 17, 2.2), line(7, 17, 11, 13), line(11, 13, 15, 13), line(15, 13, 17, 17), line(11, 13, 13, 9), line(13, 9, 17, 9)]),
  stroke('van', [roundedRect(4, 9, 14, 7, 2), roundedRect(18, 11, 2, 5, 0.8), circle(8, 18, 1.4), circle(16, 18, 1.4)]),
  stroke('pickup-truck', [roundedRect(4, 10, 10, 5, 1.8), roundedRect(14, 11, 6, 4, 1.2), circle(8, 17.5, 1.4), circle(16, 17.5, 1.4)]),
  stroke('fuel', [roundedRect(6, 5, 7, 14, 1.5), line(9.5, 5, 9.5, 8), line(13, 8, 17, 8), line(17, 8, 17, 18), line(16, 18, 18, 20)]),
  stroke('parking', [roundedRect(5, 5, 14, 14, 2), ...textPaths('P', 9, 8, 6, 8)]),
  stroke('traffic-cone', [polygon([[12, 4], [18, 19], [6, 19]]), line(9, 11, 15, 11), line(8, 15, 16, 15)]),
  stroke('traffic-light', [roundedRect(9, 3, 6, 18, 2), circle(12, 8, 1.2), circle(12, 12, 1.2), circle(12, 16, 1.2)]),
  stroke('navigation-off', [polygon([[4, 20], [20, 12], [4, 4], [8, 12]]), line(4, 4, 20, 20)]),
  stroke('luggage', [roundedRect(6, 7, 12, 13, 2), line(10, 7, 10, 4), line(14, 7, 14, 4), line(9, 12, 9, 16), line(15, 12, 15, 16)]),
  stroke('suitcase', [roundedRect(4, 8, 16, 11, 2), line(10, 8, 10, 5), line(14, 8, 14, 5), line(12, 8, 12, 19)]),
  stroke('ticket-plane', [...ticketBase(), line(9, 12, 15, 12), line(12, 9, 12, 15), line(12, 12, 16.5, 8.5)]),
  stroke('passport', [roundedRect(6, 4, 12, 16, 2), line(9, 4, 9, 20), circle(13, 12, 3.2), line(9.8, 12, 16.2, 12), ellipse(13, 12, 1.5, 3.2)]),
  stroke('map-route', [polygon([[4, 5], [9, 3], [15, 5], [20, 3], [20, 19], [15, 21], [9, 19], [4, 21]]), line(9, 3, 9, 19), line(15, 5, 15, 21), quadPath(6.5, 16, 10, 10, 13, 13), quadPath(13, 13, 15.5, 15, 18, 9), circle(6.5, 16, 0.8), circle(18, 9, 0.8)]),
  stroke('milepost', [line(12, 3, 12, 21), polygon([[12, 7], [18, 7], [15.5, 10], [12, 10]]), polygon([[12, 12], [6, 12], [8.5, 15], [12, 15]])]),
  stroke('anchor', [line(12, 3, 12, 14), circle(12, 5, 1.5), arcPath(5, 14, 7, 7, 19, 14), line(7, 14, 7, 18), line(17, 14, 17, 18), poly([[7, 18], [4.5, 15.5], [7, 15.5]]), poly([[17, 18], [19.5, 15.5], [17, 15.5]])]),
  stroke('steering-wheel', steeringWheelBase()),
  stroke('ferry', [polygon([[5, 16], [19, 16], [16, 20], [8, 20]]), roundedRect(8, 10, 8, 6, 1.2), line(10, 10, 10, 7), line(8, 22, 10, 23), line(12, 22, 14, 23), line(16, 22, 18, 23)], '0 0 24 24'),
  stroke('traffic-barrier', [line(4, 18, 20, 18), roundedRect(6, 10, 12, 5, 1), line(8, 10, 11, 15), line(12, 10, 15, 15), line(16, 10, 18, 13)]),
];

const placeRegistryIcons = [
  stroke('building', buildingBase()),
  stroke('building-2', [roundedRect(5, 6, 6, 14, 1.5), roundedRect(13, 3, 6, 17, 1.5), line(8, 10, 8, 18), line(16, 7, 16, 18)]),
  stroke('house', houseBase()),
  stroke('house-plus', [...houseBase(), ...overlayPlus(17, 17, 1.3)]),
  stroke('house-lock', [...houseBase(), ...overlayLock(17, 16.5)]),
  stroke('hotel', [roundedRect(6, 4, 12, 16, 2), ...textPaths('H', 9, 8, 6, 8)]),
  stroke('hospital', [roundedRect(6, 4, 12, 16, 2), ...overlayPlus(12, 12, 3)]),
  stroke('school-2', [polygon([[4, 9], [12, 4], [20, 9], [12, 14]]), roundedRect(7, 14, 10, 6, 1.5), line(12, 14, 12, 20)]),
  stroke('factory', [polygon([[4, 19], [4, 12], [10, 16], [10, 12], [16, 16], [16, 7], [20, 7], [20, 19]]), line(8, 7, 8, 3), line(12, 7, 12, 5)]),
  stroke('apartment', [tallBuildingBase(), line(10.5, 20, 10.5, 16), line(13.5, 20, 13.5, 16)]),
  stroke('office-building', [roundedRect(7, 3, 10, 17, 1.8), line(10, 7, 10, 17), line(14, 7, 14, 17), line(7, 10, 17, 10), line(7, 14, 17, 14)]),
  stroke('landmark-2', [polygon([[12, 3], [19, 8], [17, 20], [7, 20], [5, 8]]), line(8, 10, 16, 10), line(9, 14, 15, 14)]),
  stroke('church', [polygon([[12, 3], [20, 9], [20, 20], [4, 20], [4, 9]]), line(12, 3, 12, 9), line(10, 6, 14, 6), line(12, 9, 12, 20)]),
  stroke('mosque', [line(12, 3, 12, 7), polygon([[6, 20], [6, 11], [9, 8], [12, 11], [15, 8], [18, 11], [18, 20]]), circle(12, 6, 1.4)]),
  stroke('townhall', [polygon([[4, 8], [12, 4], [20, 8]]), line(6, 8, 6, 19), line(10, 8, 10, 19), line(14, 8, 14, 19), line(18, 8, 18, 19), line(4, 19, 20, 19)]),
  stroke('store-2', [roundedRect(5, 8, 14, 12, 2), line(4, 8, 20, 8), line(6, 4, 18, 4), line(6, 4, 5, 8), line(10, 4, 9, 8), line(14, 4, 13, 8), line(18, 4, 17, 8)]),
  stroke('warehouse-2', [polygon([[4, 8], [12, 3], [20, 8], [20, 20], [4, 20]]), line(8, 11, 16, 11), line(8, 15, 16, 15)]),
  stroke('tent', [polygon([[4, 20], [12, 5], [20, 20]]), line(12, 5, 12, 20), line(8, 13, 12, 9), line(12, 9, 16, 13)]),
  stroke('tree-palm', [line(12, 12, 12, 20), quadPath(12, 6, 7, 5, 4, 8), quadPath(12, 6, 17, 5, 20, 8), quadPath(12, 7, 6, 9, 5, 13), quadPath(12, 7, 18, 9, 19, 13)]),
  stroke('mountain', [polygon([[3, 20], [9, 10], [13, 16], [16, 11], [21, 20]])]),
  stroke('mountain-snow', [polygon([[3, 20], [9, 10], [13, 16], [16, 11], [21, 20]]), polygon([[8, 11], [9, 9], [10.5, 11], [9.2, 12.2]])]),
  stroke('flag-pole', [line(8, 3, 8, 21), polygon([[8, 5], [18, 7], [8, 10]])]),
  mapPinVariant('map-pin-house', [...houseBase(), line(8, 10, 16, 10)]),
  mapPinVariant('map-pin-building', [...buildingBase(), line(6, 12, 18, 12)]),
  mapPinVariant('map-pin-check', overlayCheck(12, 10, 1.8)),
  mapPinVariant('map-pin-off', [line(5, 5, 19, 19)]),
  mapPinVariant('map-pinned', [line(12, 20, 12, 23)]),
  stroke('globe-2', [circle(12, 12, 9), line(3, 12, 21, 12), ellipse(12, 12, 4, 9), ellipse(12, 12, 9, 4)]),
  stroke('earth', [circle(12, 12, 9), polygon([[8, 7], [11, 5], [15, 6], [17, 10], [16, 15], [12, 18], [8, 16], [6, 12]])]),
  stroke('locate-fixed', [circle(12, 12, 5), line(12, 2, 12, 6), line(12, 18, 12, 22), line(2, 12, 6, 12), line(18, 12, 22, 12), circle(12, 12, 1.3)]),
  stroke('locate-off', [circle(12, 12, 5), line(12, 2, 12, 6), line(12, 18, 12, 22), line(2, 12, 6, 12), line(18, 12, 22, 12), line(4, 4, 20, 20)]),
  stroke('campground', [polygon([[5, 20], [12, 8], [19, 20]]), line(12, 8, 12, 20), line(7, 16, 17, 16), line(5, 6, 5, 20)]),
];

const accessibilityRegistryIcons = [
  stroke('accessibility', [circle(12, 4.5, 1.5), line(12, 6, 12, 12), line(7, 9, 17, 9), line(12, 12, 9, 20), line(12, 12, 15, 20), circle(12, 12, 9)]),
  stroke('accessible', [circle(12, 12, 9), circle(11, 7, 1.2), line(11, 8.2, 13, 12), line(13, 12, 16, 12), circle(11, 16, 2.5), line(13, 12, 11, 16)]),
  stroke('hearing', ['M8 13c0-4 2-7 5-7 2.5 0 4 2 4 4 0 1.8-1 3.1-2.4 4.1-1.2.9-1.6 1.5-1.6 2.9', arcPath(16, 6, 3.5, 5.5, 20, 10)]),
  stroke('hearing-off', ['M8 13c0-4 2-7 5-7 2.5 0 4 2 4 4 0 1.8-1 3.1-2.4 4.1-1.2.9-1.6 1.5-1.6 2.9', line(4, 4, 20, 20)]),
  stroke('ear', ['M8 13c0-4 2-7 5-7 2.5 0 4 2 4 4 0 1.8-1 3.1-2.4 4.1-1.2.9-1.6 1.5-1.6 2.9', arcPath(10, 17, 2.5, 2.5, 14, 17)]),
  stroke('ear-off', ['M8 13c0-4 2-7 5-7 2.5 0 4 2 4 4 0 1.8-1 3.1-2.4 4.1-1.2.9-1.6 1.5-1.6 2.9', arcPath(10, 17, 2.5, 2.5, 14, 17), line(4, 4, 20, 20)]),
  stroke('eye-closed', [arcPath(4, 12, 8, 5, 20, 12), line(6, 15, 8, 13), line(10, 16, 10.5, 13.5), line(14, 16, 13.5, 13.5), line(18, 15, 16, 13)]),
  stroke('hand', [poly([[8, 20], [7, 13], [7.5, 9], [9, 9], [9, 5], [10.5, 5], [10.5, 9], [12, 4], [13.5, 4], [13.5, 9], [15, 5], [16.5, 5], [16.5, 11], [18, 9], [19, 10.5], [18, 20]])]),
  stroke('handshake', [poly([[4, 13], [8, 9], [11, 12], [13, 10], [16, 13], [20, 9]]), line(7, 16, 10, 13), line(10, 13, 12.5, 15.5), line(12.5, 15.5, 16, 12)]),
  stroke('person-standing', [circle(12, 4.5, 1.5), line(12, 6, 12, 13), line(8.5, 9, 15.5, 9), line(12, 13, 9.5, 20), line(12, 13, 14.5, 20)]),
  stroke('person-walking', [circle(12, 4.5, 1.5), line(12, 6, 11, 11), line(11, 11, 15, 13), line(11, 11, 8, 14), line(15, 13, 17, 20), line(11, 11, 8, 20)]),
  stroke('person-running', [circle(12, 4.5, 1.5), line(12, 6, 15, 10), line(15, 10, 19, 11), line(15, 10, 11, 13), line(11, 13, 8, 20), line(13, 14, 18, 18)]),
  stroke('wheelchair', [circle(11, 7, 1.2), line(11, 8.2, 13, 12), line(13, 12, 16, 12), circle(11, 16, 3), line(13, 12, 11, 16)]),
  stroke('baby', [circle(12, 8, 2.3), arcPath(6, 15, 6, 5, 18, 15), line(9, 17.5, 15, 17.5)]),
  stroke('cane', [arcPath(9, 7, 3, 3, 15, 7), line(12, 7, 12, 21)]),
  stroke('braille', [circle(8, 8, 1), circle(8, 12, 1), circle(8, 16, 1), circle(14, 10, 1), circle(14, 14, 1), circle(16.5, 18, 1)]),
  stroke('captions', [roundedRect(4, 6, 16, 12, 2), ...textPaths('CC', 6.5, 9, 11, 5.5, 0.8)]),
  stroke('sign-language', [circle(15, 5.5, 1), poly([[10, 20], [8.5, 13], [9, 9.5], [10.5, 9.5], [10.5, 6], [12, 6], [12, 10], [13.5, 7], [15, 8], [14, 12], [16.5, 12], [17.5, 14], [16.5, 20]])]),
  stroke('audio-description', [roundedRect(4, 6, 16, 12, 2), polygon([[7, 11], [10, 9], [10, 15]]), ...textPaths('AD', 11.5, 9, 6.5, 5.5, 0.6)]),
  stroke('contrast', [circle(12, 12, 8), line(12, 4, 12, 20), arcPath(12, 4, 8, 8, 12, 20)]),
  stroke('high-contrast', [circle(12, 12, 8), line(12, 4, 12, 20), arcPath(12, 4, 8, 8, 12, 20), line(18, 4, 18, 7), line(16.5, 5.5, 19.5, 5.5)]),
  stroke('low-vision', [arcPath(2, 12, 10, 6, 22, 12), circle(12, 12, 2.2), line(4, 4, 20, 20)]),
  stroke('speech', [arcPath(6, 13, 6, 3, 18, 13), line(7, 13, 17, 13), arcPath(17, 10, 3, 2, 20, 13)]),
  stroke('speech-off', [arcPath(6, 13, 6, 3, 18, 13), line(7, 13, 17, 13), arcPath(17, 10, 3, 2, 20, 13), line(4, 4, 20, 20)]),
  stroke('stethoscope', [arcPath(7, 6, 4, 4, 11, 6), arcPath(13, 6, 4, 4, 17, 6), line(11, 6, 11, 13), line(13, 6, 13, 13), arcPath(11, 17, 4, 4, 17, 17), circle(18, 17, 1.5)]),
  stroke('pill-capsule', [roundedRect(5, 9, 14, 6, 3), line(12, 9, 12, 15)]),
  stroke('syringe', [line(5, 19, 10, 14), line(10, 14, 14, 18), line(9, 9, 15, 15), line(15, 9, 18, 6), line(18, 6, 20, 8), line(16, 4, 20, 8)]),
  stroke('heart-pulse', [...overlayHeart(9, 10, 1.4), line(4, 16, 8, 16), line(8, 16, 10, 13), line(10, 13, 12, 18), line(12, 18, 14, 14), line(14, 14, 20, 14)]),
  stroke('bandage', [roundedRect(5, 9, 14, 6, 2), line(9, 9, 15, 15), line(15, 9, 9, 15), circle(10, 12, 0.5), circle(12, 12, 0.5), circle(14, 12, 0.5)]),
  stroke('bone', [circle(7, 8, 1.6), circle(17, 8, 1.6), circle(7, 16, 1.6), circle(17, 16, 1.6), line(8.5, 9.5, 15.5, 14.5), line(8.5, 14.5, 15.5, 9.5)]),
  stroke('dna', [quadPath(8, 4, 16, 8, 8, 20), quadPath(16, 4, 8, 8, 16, 20), line(9.2, 7, 14.8, 7), line(8.4, 12, 15.6, 12), line(9.2, 17, 14.8, 17)]),
  stroke('pill-bottle', [roundedRect(7, 4, 10, 16, 2), line(9, 4, 15, 4), line(9, 7, 15, 7), roundedRect(9.5, 11, 5, 5, 1)]),
  stroke('ambulance', [roundedRect(3, 10, 10, 6, 1.5), roundedRect(13, 11, 6, 5, 1.2), line(13, 11, 16, 8), line(7, 10, 7, 16), line(5.5, 13, 8.5, 13), line(7, 11.5, 7, 14.5), circle(7, 18, 1.4), circle(16, 18, 1.4)]),
  stroke('siren', [roundedRect(8, 7, 8, 8, 3), line(8, 15, 16, 15), line(6, 18, 18, 18), line(12, 3, 12, 6), line(6, 9, 4, 7), line(18, 9, 20, 7)]),
  stroke('cross', [roundedRect(10, 4, 4, 16, 1), roundedRect(4, 10, 16, 4, 1)]),
  stroke('brain-circuit', [quadPath(8, 7, 5, 10, 7, 14), quadPath(16, 7, 19, 10, 17, 14), quadPath(7, 14, 8, 19, 12, 19), quadPath(17, 14, 16, 19, 12, 19), line(10, 10, 14, 10), line(12, 10, 12, 14), circle(9.2, 10, 0.7), circle(14.8, 10, 0.7), circle(12, 15.2, 0.7)]),
];

const developerRegistryIcons = [
  stroke('terminal', terminalBase()),
  stroke('terminal-square', [roundedRect(5, 5, 14, 14, 2), line(7, 9, 10, 12), line(10, 12, 7, 15), line(12, 15, 17, 15)]),
  stroke('code-xml', [line(8, 8, 5, 12), line(5, 12, 8, 16), line(16, 8, 19, 12), line(19, 12, 16, 16), line(13, 6, 11, 18)]),
  stroke('braces', [poly([[9, 5], [7, 7], [7, 10], [5, 12], [7, 14], [7, 17], [9, 19]]), poly([[15, 5], [17, 7], [17, 10], [19, 12], [17, 14], [17, 17], [15, 19]])]),
  stroke('brackets-curly', [poly([[9, 5], [7, 7], [7, 10], [5, 12], [7, 14], [7, 17], [9, 19]]), line(12, 4, 12, 20), poly([[15, 5], [17, 7], [17, 10], [19, 12], [17, 14], [17, 17], [15, 19]])]),
  stroke('bug', [circle(12, 8, 3), line(12, 11, 12, 19), line(8, 14, 16, 14), line(7, 9, 4, 6), line(17, 9, 20, 6), line(8, 17, 5, 20), line(16, 17, 19, 20)]),
  stroke('bug-play', [circle(11, 8, 3), line(11, 11, 11, 19), line(7, 14, 15, 14), line(6, 9, 3, 6), line(16, 9, 19, 6), line(7, 17, 4, 20), line(15, 17, 18, 20), polygon([[16, 13], [20, 15], [16, 17]])]),
  stroke('git-branch', [circle(7, 6, 1.4), circle(7, 18, 1.4), circle(17, 9, 1.4), line(7, 7.4, 7, 16.6), quadPath(7, 10, 10, 9, 15.6, 9)]),
  stroke('git-commit', [circle(12, 12, 3), line(3, 12, 9, 12), line(15, 12, 21, 12)]),
  stroke('git-compare', [circle(7, 6, 1.2), circle(17, 6, 1.2), circle(7, 18, 1.2), circle(17, 18, 1.2), line(8.2, 6, 15.8, 6), line(7, 7.2, 7, 16.8), line(17, 7.2, 17, 16.8), line(8.2, 18, 15.8, 18)]),
  stroke('git-fork', [circle(7, 6, 1.3), circle(17, 8, 1.3), circle(7, 18, 1.3), line(7, 7.3, 7, 16.7), quadPath(7, 10, 10, 8, 15.7, 8)]),
  stroke('git-pull-request', [circle(7, 6, 1.3), circle(7, 18, 1.3), circle(17, 6, 1.3), line(7, 7.3, 7, 16.7), line(7, 6, 15.7, 6), poly([[13.5, 3.8], [17, 6], [13.5, 8.2]])]),
  stroke('package-plus', [...packageBase(), ...overlayPlus(17, 17, 1.4)]),
  stroke('package-minus', [...packageBase(), ...overlayMinus(17, 17, 1.4)]),
  stroke('package-gear', [...packageBase(), ...gearBase(17, 17, 1.6)]),
  stroke('container-image', [roundedRect(4, 5, 16, 14, 2), roundedRect(6, 7, 4, 4, 0.5), roundedRect(10.5, 7, 4, 4, 0.5), roundedRect(15, 7, 3, 4, 0.5), circle(8.5, 15, 1), poly([[11, 18], [14, 14.5], [17, 18]])]),
  stroke('binary', [...textPaths('01', 6.5, 8, 11, 8, 1)]),
  stroke('binary-tree', [circle(12, 6, 1.2), circle(7, 12, 1.2), circle(17, 12, 1.2), circle(5, 18, 1.2), circle(9, 18, 1.2), circle(15, 18, 1.2), circle(19, 18, 1.2), line(12, 7.2, 12, 9), line(12, 9, 7, 10.8), line(12, 9, 17, 10.8), line(7, 13.2, 5, 16.8), line(7, 13.2, 9, 16.8), line(17, 13.2, 15, 16.8), line(17, 13.2, 19, 16.8)]),
  stroke('function', [...textPaths('F', 7, 7, 5, 9), line(14, 9, 18, 9), line(14, 15, 18, 15)]),
  stroke('function-square', [roundedRect(5, 5, 14, 14, 2), ...textPaths('F', 8.5, 8, 4, 8), line(13.8, 9.5, 16.5, 9.5), line(13.8, 14.5, 16.5, 14.5)]),
  stroke('lambda', [line(9, 19, 13, 5), line(13, 5, 18, 19), line(11.3, 12, 15.5, 12)]),
  stroke('api', [roundedRect(4, 7, 16, 10, 2), ...textPaths('API', 5.3, 9.2, 13.4, 5.5, 0.6)]),
  stroke('api-lock', [roundedRect(4, 7, 16, 10, 2), ...textPaths('API', 5.3, 9.2, 13.4, 5.5, 0.6), ...overlayLock(18, 18)]),
  stroke('api-key', [roundedRect(4, 7, 16, 10, 2), ...textPaths('API', 5.3, 9.2, 13.4, 5.5, 0.6), circle(18, 18, 1.1), line(19.1, 18, 21, 18), line(20.2, 17.2, 20.2, 18.8)]),
  stroke('database-search', [...databaseBase(), ...overlaySearch(17, 17, 1.6)]),
  stroke('database-backup', [...databaseBase(), line(12, 10, 12, 16), poly([[9.5, 12.5], [12, 10], [14.5, 12.5]])]),
  stroke('database-zap', [...databaseBase(), polygon([[13, 10], [10, 15], [13, 15], [11, 19], [16, 13], [13, 13]])]),
  stroke('server-stack', [roundedRect(5, 5, 14, 4, 1), roundedRect(5, 10, 14, 4, 1), roundedRect(5, 15, 14, 4, 1), circle(8, 7, 0.6), circle(8, 12, 0.6), circle(8, 17, 0.6)]),
  stroke('server-cog', [roundedRect(4, 6, 12, 10, 1.5), circle(8, 9, 0.6), circle(8, 13, 0.6), ...gearBase(18, 16, 1.7)]),
  stroke('command', [roundedRect(5, 5, 5, 5, 2), roundedRect(14, 5, 5, 5, 2), roundedRect(5, 14, 5, 5, 2), roundedRect(14, 14, 5, 5, 2), line(10, 7.5, 14, 7.5), line(7.5, 10, 7.5, 14), line(16.5, 10, 16.5, 14), line(10, 16.5, 14, 16.5)]),
  stroke('command-square', [roundedRect(4, 4, 16, 16, 2), roundedRect(7, 7, 3.5, 3.5, 1.4), roundedRect(13.5, 7, 3.5, 3.5, 1.4), roundedRect(7, 13.5, 3.5, 3.5, 1.4), roundedRect(13.5, 13.5, 3.5, 3.5, 1.4)]),
  stroke('test-tube', [line(10, 4, 10, 14), line(14, 4, 14, 14), quadPath(10, 14, 12, 20, 14, 14), line(8, 4, 16, 4)]),
  stroke('flask-conical', [line(10, 4, 14, 4), line(12, 4, 12, 9), polygon([[9, 20], [15, 20], [18, 12], [6, 12]])]),
  stroke('bracket-dot', [line(8, 5, 5, 12), line(5, 12, 8, 19), line(16, 5, 19, 12), line(19, 12, 16, 19), circle(12, 12, 1.2)]),
  stroke('regex', [...textPaths('*', 6.5, 8, 4.5, 8), circle(15.5, 15.5, 1.2), line(17, 17, 20, 20)]),
  stroke('route-code', [circle(6, 8, 1.2), circle(18, 16, 1.2), quadPath(7.2, 8.2, 12, 4, 13, 12), line(9, 18, 12, 15), line(12, 15, 9, 12), line(15, 12, 18, 15), line(18, 15, 15, 18)]),
  stroke('workflow', [roundedRect(4, 5, 6, 4, 1), roundedRect(14, 10, 6, 4, 1), roundedRect(4, 15, 6, 4, 1), line(10, 7, 14, 12), line(10, 17, 14, 12)]),
  stroke('pipeline', [circle(5, 12, 1.2), roundedRect(8, 10, 4, 4, 0.8), roundedRect(14, 10, 4, 4, 0.8), circle(21, 12, 1.2), line(6.2, 12, 8, 12), line(12, 12, 14, 12), line(18, 12, 19.8, 12)]),
  stroke('source-branch', [...docBase(), circle(10, 12, 1), circle(16, 9, 1), circle(16, 16, 1), line(10, 12, 16, 9), line(10, 12, 16, 16)]),
  stroke('source-commit', [...docBase(), circle(13, 14, 2.2), line(9, 14, 10.8, 14), line(15.2, 14, 17, 14)]),
];

const clockIcons = Array.from({ length: 12 }, (_, index) =>
  circleVariant(`clock-${index + 1}`, hourHandPaths(index + 1)),
);

const timeRegistryIcons = [
  calendarVariant('calendar-plus', overlayPlus(16, 15.5, 1.8)),
  calendarVariant('calendar-minus', overlayMinus(16, 15.5, 1.8)),
  calendarVariant('calendar-check', overlayCheck(16, 15.5, 1.8)),
  calendarVariant('calendar-x', overlayX(16, 15.5, 1.6)),
  calendarVariant('calendar-days', [line(8, 12.5, 16, 12.5), line(8, 16, 16, 16), line(10.5, 9, 10.5, 20), line(13.5, 9, 13.5, 20)]),
  calendarVariant('calendar-range', [line(8, 12.5, 16, 12.5), line(8, 16, 16, 16), roundedRect(7, 11, 3, 3, 0.6), roundedRect(14, 15, 3, 3, 0.6)]),
  calendarVariant('calendar-clock', [circle(16, 15.5, 3), line(16, 15.5, 16, 13.5), line(16, 15.5, 17.7, 16.6)]),
  calendarVariant('calendar-search', overlaySearch(16, 15.5, 1.6)),
  ...clockIcons,
  stroke('hourglass', [line(7, 4, 17, 4), line(7, 20, 17, 20), line(7, 4, 17, 20), line(17, 4, 7, 20)]),
  stroke('hourglass-half', [line(7, 4, 17, 4), line(7, 20, 17, 20), line(7, 4, 12, 10), line(17, 4, 12, 10), polygon([[8.5, 16], [15.5, 16], [12, 20]])]),
  stroke('timer-sand', [circle(12, 12, 8), line(9, 7, 15, 7), line(9, 17, 15, 17), line(9, 7, 15, 17), line(15, 7, 9, 17)]),
  stroke('watch', [roundedRect(8, 4, 8, 4, 1), circle(12, 12, 5), roundedRect(8, 16, 8, 4, 1), line(12, 12, 12, 9), line(12, 12, 14.5, 13.5)]),
];

const weatherRegistryIcons = [
  stroke('sunrise', [line(4, 18, 20, 18), arcPath(6, 18, 6, 6, 18, 18), line(12, 8, 12, 4), line(8.5, 11.5, 6.5, 9.5), line(15.5, 11.5, 17.5, 9.5)]),
  stroke('sunset', [line(4, 18, 20, 18), arcPath(6, 18, 6, 6, 18, 18), line(12, 4, 12, 8), line(8.5, 6.5, 6.5, 8.5), line(15.5, 6.5, 17.5, 8.5)]),
  cloudVariant('cloud-drizzle', [line(8, 19, 7, 22), line(12, 19, 11, 22), line(16, 19, 15, 22)], '0 0 24 24'),
  cloudVariant('cloud-hail', [circle(8, 20, 0.9), circle(12, 21, 0.9), circle(16, 20, 0.9)], '0 0 24 24'),
  stroke('wind', [quadPath(4, 9, 10, 5, 18, 9), quadPath(6, 14, 12, 10, 20, 14), quadPath(4, 18, 9, 16, 15, 18)]),
  stroke('thermometer', [line(12, 5, 12, 16), circle(12, 18, 3), roundedRect(10.5, 4, 3, 12, 1.5)]),
  stroke('umbrella', [arcPath(4, 12, 8, 8, 20, 12), line(12, 4, 12, 18), arcPath(12, 18, 2.5, 2.5, 15, 20)]),
  stroke('snowflake', [line(12, 4, 12, 20), line(5, 8, 19, 16), line(5, 16, 19, 8), line(8.5, 4, 15.5, 20), line(15.5, 4, 8.5, 20)]),
  stroke('tornado', [quadPath(4, 7, 12, 4, 20, 7), quadPath(6, 11, 13, 9, 18, 11), quadPath(8, 15, 13, 13, 16, 15), line(12, 15, 10, 20)]),
  stroke('rainbow', [arcPath(4, 20, 8, 8, 20, 20), arcPath(6, 20, 6, 6, 18, 20), arcPath(8, 20, 4, 4, 16, 20)]),
  stroke('moon-stars', [arcPath(15, 5, 7, 7, 15, 19), arcPath(18, 5, 6, 6, 18, 19), polygon([[6, 5], [6.7, 6.7], [8.5, 7.4], [6.7, 8.1], [6, 9.8], [5.3, 8.1], [3.5, 7.4], [5.3, 6.7]])]),
  stroke('sun-dim', [...sunBase(), circle(12, 12, 2)]),
  cloudVariant('cloud-sun', [...sunBase().slice(0, 5)], '0 0 24 24'),
  cloudVariant('cloud-moon', [arcPath(15, 7, 4, 4, 15, 15), arcPath(17, 7, 3, 3, 17, 15)], '0 0 24 24'),
  stroke('haze', [line(4, 9, 20, 9), line(6, 13, 18, 13), line(4, 17, 20, 17), circle(12, 6, 2)]),
  stroke('droplets', [ellipse(9, 13, 2, 4), ellipse(15, 11, 2, 4)]),
  stroke('waves', [quadPath(3, 11, 6, 8, 9, 11), quadPath(9, 11, 12, 14, 15, 11), quadPath(15, 11, 18, 8, 21, 11), quadPath(3, 17, 6, 14, 9, 17), quadPath(9, 17, 12, 20, 15, 17), quadPath(15, 17, 18, 14, 21, 17)]),
  stroke('thermometer-sun', [line(9, 7, 9, 16), circle(9, 18, 2.5), roundedRect(7.7, 6, 2.6, 10, 1.3), circle(17, 8, 2), line(17, 4, 17, 5), line(17, 11, 17, 12), line(13, 8, 14, 8), line(20, 8, 21, 8)]),
  stroke('thermometer-snowflake', [line(9, 7, 9, 16), circle(9, 18, 2.5), roundedRect(7.7, 6, 2.6, 10, 1.3), line(17, 5, 17, 11), line(14, 6.5, 20, 9.5), line(14, 9.5, 20, 6.5)]),
  stroke('windsock', [line(6, 4, 6, 20), polygon([[6, 6], [18, 8], [14, 16], [6, 14]]), line(9, 7, 12, 14), line(13, 8, 16, 15)]),
  stroke('cloudy', [...cloudBase(), roundedRect(5, 11, 8, 6, 3)]),
  stroke('cloud-rain-wind', [...cloudBase(), line(8, 19, 8, 22), line(12, 19, 12, 22), quadPath(4, 20, 9, 18, 14, 20)]),
  stroke('cloud-sun-rain', [...cloudBase(), circle(8, 7, 2), line(8, 3.5, 8, 4.7), line(4.5, 7, 5.7, 7), line(10.3, 9.3, 11.3, 10.3), line(8, 19, 8, 22), line(12, 19, 12, 22)]),
  stroke('sun-medium', [circle(12, 12, 3.5), line(12, 3, 12, 6), line(12, 18, 12, 21), line(3, 12, 6, 12), line(18, 12, 21, 12)]),
  stroke('sun-snow', [circle(9, 9, 3), line(9, 4, 9, 5.5), line(9, 12.5, 9, 14), line(4, 9, 5.5, 9), line(12.5, 9, 14, 9), line(17, 13, 17, 19), line(14, 14.5, 20, 17.5), line(14, 17.5, 20, 14.5)]),
  stroke('eclipse', [circle(10, 12, 7), circle(14, 12, 7)]),
  stroke('hurricane', [quadPath(5, 11, 12, 5, 19, 11), quadPath(19, 11, 15, 14, 10, 14), quadPath(10, 14, 6, 14, 8, 18), circle(8, 18, 1.3)]),
];

const navigationParityIcons = [
  stroke('crosshair', [line(12, 3, 12, 8), line(12, 16, 12, 21), line(3, 12, 8, 12), line(16, 12, 21, 12), circle(12, 12, 3.5)]),
  stroke('radar', [circle(12, 12, 9), arcPath(12, 3, 9, 9, 21, 12), arcPath(12, 6, 6, 6, 18, 12), line(12, 12, 17, 7)]),
  mapPinVariant('map-pin-plus', overlayPlus(12, 10, 1.8)),
  mapPinVariant('map-pin-minus', overlayMinus(12, 10, 1.8)),
  stroke('route-loop', [circle(6, 8, 1.1), circle(18, 8, 1.1), circle(12, 18, 1.1), quadPath(7, 8, 12, 3, 17, 8), quadPath(18, 9, 18, 16, 12, 18), quadPath(12, 18, 6, 16, 6, 9)]),
  stroke('route-off', [circle(6, 8, 1.1), circle(18, 16, 1.1), quadPath(7, 8, 12, 4, 17, 9), line(4, 4, 20, 20)]),
  stroke('waypoints', [circle(5, 7, 1.2), circle(19, 7, 1.2), circle(12, 18, 1.2), line(6.2, 7, 17.8, 7), line(12, 17, 12, 8.2)]),
  stroke('flag-checkered', [line(6, 3, 6, 21), roundedRect(7, 5, 10, 8, 1), line(7, 9, 17, 9), line(12, 5, 12, 13)]),
  stroke('turn-left', [line(18, 7, 10, 7), line(10, 7, 10, 17), poly([[13, 10], [10, 7], [7, 10]])]),
  stroke('turn-right', [line(6, 7, 14, 7), line(14, 7, 14, 17), poly([[11, 10], [14, 7], [17, 10]])]),
  stroke('u-turn-left', [line(18, 6, 10, 6), arcPath(10, 6, 4, 5, 10, 18), line(10, 18, 4, 18), poly([[7, 15], [4, 18], [7, 21]])]),
  stroke('u-turn-right', [line(6, 6, 14, 6), arcPath(14, 6, 4, 5, 14, 18), line(14, 18, 20, 18), poly([[17, 15], [20, 18], [17, 21]])]),
  stroke('focus', [line(5, 9, 5, 5), line(5, 5, 9, 5), line(19, 9, 19, 5), line(19, 5, 15, 5), line(5, 15, 5, 19), line(5, 19, 9, 19), line(19, 15, 19, 19), line(19, 19, 15, 19)]),
  stroke('focus-off', [line(5, 9, 5, 5), line(5, 5, 9, 5), line(19, 9, 19, 5), line(19, 5, 15, 5), line(5, 15, 5, 19), line(5, 19, 9, 19), line(19, 15, 19, 19), line(19, 19, 15, 19), line(4, 4, 20, 20)]),
  stroke('globe-lock', [circle(11, 11, 7), line(4, 11, 18, 11), ellipse(11, 11, 3, 7), roundedRect(14.5, 14.5, 6, 5.5, 1.2), arcPath(16, 14.5, 1.5, 1.5, 19, 14.5)]),
  stroke('map-plus', [polygon([[4, 5], [9, 3], [15, 5], [20, 3], [20, 19], [15, 21], [9, 19], [4, 21]]), line(9, 3, 9, 19), line(15, 5, 15, 21), ...overlayPlus(17, 16.5, 1.4)]),
  stroke('milestone', [line(12, 3, 12, 21), roundedRect(8, 8, 8, 5, 1), ...textPaths('1', 10.2, 9.2, 3.2, 3.8)]),
];

const statusParityIcons = [
  circleVariant('plus-circle', overlayPlus(12, 12, 3)),
  circleVariant('minus-circle', overlayMinus(12, 12, 3)),
  stroke('help-square', [roundedRect(4, 4, 16, 16, 2), line(10, 10, 10, 10), quadPath(9, 8, 15, 8, 15, 11), quadPath(15, 13, 12, 13, 12, 17)]),
  stroke('info-square', [roundedRect(4, 4, 16, 16, 2), line(12, 10, 12, 16), line(12, 7, 12, 7)]),
  stroke('check-square-2', [roundedRect(4, 4, 16, 16, 2), poly([[8, 12], [11, 15], [16, 9]])]),
  stroke('x-square', [roundedRect(4, 4, 16, 16, 2), line(9, 9, 15, 15), line(15, 9, 9, 15)]),
  stroke('alert-square', [roundedRect(4, 4, 16, 16, 2), line(12, 8, 12, 13), line(12, 16, 12, 16)]),
  stroke('shield-off', [...shieldBase(), line(4, 4, 20, 20)]),
  stroke('bell-off', [arcPath(6, 9, 6, 6, 18, 9), line(18, 9, 18, 15), line(6, 9, 6, 15), line(4, 17, 20, 17), line(11, 20, 13, 20), line(4, 4, 20, 20)]),
  stroke('bell-ring', [arcPath(6, 9, 6, 6, 18, 9), line(18, 9, 18, 15), line(6, 9, 6, 15), line(4, 17, 20, 17), line(11, 20, 13, 20), line(3, 9, 5, 7), line(19, 7, 21, 9)]),
  badgeVariant('badge-minus', overlayMinus(12, 12, 2.4)),
  badgeVariant('badge-plus', overlayPlus(12, 12, 2.4)),
  badgeVariant('badge-help', [line(12, 15.6, 12, 15.6), quadPath(10, 9, 14, 9, 14, 11.5), quadPath(14, 13, 12, 13, 12, 15)]),
  badgeVariant('badge-x', overlayX(12, 12, 2.2)),
  stroke('status-draft', [roundedRect(4, 7, 16, 10, 2), line(8, 12, 16, 12), line(8, 15, 13, 15)]),
  stroke('status-archived', [roundedRect(4, 7, 16, 10, 2), line(8, 11, 16, 11), line(10, 14, 14, 14)]),
];

const communicationParityIcons = [
  mailVariant('mail-plus', overlayPlus(17, 16, 1.4)),
  mailVariant('mail-minus', overlayMinus(17, 16, 1.4)),
  mailVariant('mail-warning', overlayWarning(17, 16)),
  phoneVariant('phone-plus', overlayPlus(18, 8, 1.3)),
  phoneVariant('phone-x', overlayX(18, 8, 1.2)),
  phoneVariant('phone-check', overlayCheck(18, 8, 1.2)),
  stroke('inbox-plus', [roundedRect(4, 5, 16, 14, 2), line(4, 12, 9, 12), line(9, 12, 11, 15), line(11, 15, 13, 15), line(13, 15, 15, 12), line(15, 12, 20, 12), ...overlayPlus(18, 8, 1.2)]),
  stroke('inbox-minus', [roundedRect(4, 5, 16, 14, 2), line(4, 12, 9, 12), line(9, 12, 11, 15), line(11, 15, 13, 15), line(13, 15, 15, 12), line(15, 12, 20, 12), ...overlayMinus(18, 8, 1.2)]),
  stroke('message-forward', [...messageSquareBase(), line(9, 12, 16, 12), poly([[13.5, 9.5], [16, 12], [13.5, 14.5]])]),
  stroke('at-message', [...messageSquareBase(), ...textPaths('@', 8.5, 9, 7, 6)]),
];

const systemParityIcons = [
  stroke('sliders-horizontal', [line(4, 8, 20, 8), line(4, 16, 20, 16), circle(9, 8, 1.5), circle(15, 16, 1.5)]),
  stroke('sliders-vertical', [line(8, 4, 8, 20), line(16, 4, 16, 20), circle(8, 9, 1.5), circle(16, 15, 1.5)]),
  stroke('settings-2', gearBase()),
  stroke('mouse', [roundedRect(8, 3, 8, 18, 4), line(12, 3, 12, 9)]),
  stroke('keyboard', [roundedRect(3, 7, 18, 10, 2), roundedRect(6, 10, 2, 2, 0.3), roundedRect(9, 10, 2, 2, 0.3), roundedRect(12, 10, 2, 2, 0.3), roundedRect(15, 10, 2, 2, 0.3), roundedRect(7, 13, 10, 2, 0.3)]),
  stroke('joystick', [circle(12, 19, 2), roundedRect(8, 15, 8, 4, 1), line(12, 15, 12, 7), circle(12, 5, 1.5)]),
  stroke('touchpad', [roundedRect(5, 5, 14, 14, 2), line(12, 5, 12, 19), line(5, 14, 19, 14)]),
  stroke('touch', [circle(12, 5, 1.2), poly([[10, 20], [9, 13], [9.5, 10], [11, 10], [11, 6.5], [12.5, 6.5], [12.5, 10], [14, 8], [15.5, 9], [14.5, 13], [17, 13], [18, 15], [17, 20]])]),
  stroke('touchscreen', [roundedRect(5, 4, 14, 16, 2), circle(12, 7, 1.2), poly([[11, 20], [10.2, 14], [10.5, 11], [12, 11], [12, 8], [13.3, 8], [13.3, 11], [14.5, 9.5], [15.8, 10.5], [15, 13], [17, 13], [18, 14.5], [17, 20]])]),
  stroke('monitor-smartphone', [roundedRect(3, 5, 12, 10, 2), line(8, 15, 8, 19), line(5, 19, 11, 19), roundedRect(16, 7, 5, 10, 1.5)]),
  stroke('laptop-minimal', [roundedRect(6, 5, 12, 9, 1.5), line(3, 18, 21, 18)]),
  stroke('scanner', [line(6, 5, 6, 8), line(6, 5, 9, 5), line(18, 5, 15, 5), line(18, 5, 18, 8), line(6, 19, 6, 16), line(6, 19, 9, 19), line(18, 19, 15, 19), line(18, 19, 18, 16), line(9, 12, 15, 12)]),
  stroke('battery', batteryBase()),
  stroke('battery-charging', [...batteryBase(), polygon([[12, 8.8], [10.2, 12.5], [12.4, 12.5], [11, 16.2], [14.8, 11.8], [12.6, 11.8]])]),
  stroke('battery-low', [...batteryBase(), roundedRect(5, 10, 3, 4, 0.5)]),
  stroke('battery-medium', [...batteryBase(), roundedRect(5, 10, 6.5, 4, 0.5)]),
  stroke('battery-full', [...batteryBase(), roundedRect(5, 10, 10, 4, 0.5)]),
  stroke('router', [roundedRect(4, 12, 16, 5, 1.5), line(8, 12, 8, 9), line(16, 12, 16, 9), arcPath(6, 9, 2, 2, 10, 9), arcPath(14, 9, 2, 2, 18, 9), circle(8, 14.5, 0.6), circle(12, 14.5, 0.6), circle(16, 14.5, 0.6)]),
  stroke('usb', [line(12, 20, 12, 7), poly([[10, 9], [12, 7], [14, 9]]), line(12, 11, 8, 15), line(8, 15, 8, 18), circle(8, 19, 1), line(12, 13, 16, 13), circle(18, 13, 1), line(12, 15, 16, 19), roundedRect(16, 19, 2.5, 2.5, 0.3)]),
  stroke('sim-card', [polygon([[8, 3], [16, 3], [20, 7], [20, 21], [8, 21], [4, 17], [4, 7]]), roundedRect(8.5, 9, 7, 7, 1), line(12, 9, 12, 16), line(8.5, 12.5, 15.5, 12.5)]),
  stroke('projector', [roundedRect(4, 8, 16, 7, 2), circle(8, 11.5, 1.2), circle(15, 11.5, 2), line(12, 15, 12, 20), line(8, 20, 16, 20)]),
  stroke('screen-share', [...monitorBase(), line(12, 16, 12, 9), poly([[9, 12], [12, 9], [15, 12]])]),
  stroke('screen-share-off', [...monitorBase(), line(12, 16, 12, 9), poly([[9, 12], [12, 9], [15, 12]]), line(4, 4, 20, 20)]),
  stroke('monitor-check', [...monitorBase(), ...overlayCheck(18, 16.5, 1.4)]),
  stroke('monitor-off', [...monitorBase(), line(4, 4, 20, 20)]),
  stroke('mouse-off', [roundedRect(8, 3, 8, 18, 4), line(12, 3, 12, 9), line(4, 4, 20, 20)]),
  stroke('gamepad-2', [roundedRect(4, 9, 16, 8, 4), line(9, 11.5, 9, 15.5), line(7, 13.5, 11, 13.5), circle(15.5, 12, 0.8), circle(17.8, 14.3, 0.8)]),
];

const mediaParityIcons = [
  mediaCircleVariant('play-circle', [polygon([[10, 8], [17, 12], [10, 16]])]),
  mediaCircleVariant('pause-circle', [roundedRect(9, 8, 2.5, 8, 0.6), roundedRect(13.5, 8, 2.5, 8, 0.6)]),
  mediaCircleVariant('stop-circle-2', [roundedRect(8.5, 8.5, 7, 7, 1)]),
  mediaCircleVariant('record', [circle(12, 12, 4)]),
  stroke('disc', [circle(12, 12, 8), circle(12, 12, 2), line(12, 4, 12, 7)]),
  stroke('album', [roundedRect(5, 5, 14, 14, 2), circle(12, 12, 4), circle(12, 12, 1)]),
  stroke('library-music', [line(4, 6, 20, 6), line(6, 10, 18, 10), line(8, 14, 16, 14), line(11, 8, 11, 18), line(16, 7, 16, 16), circle(10, 19, 1.2), circle(15, 17, 1.2)]),
  stroke('cast', [line(4, 18, 8, 18), line(4, 14, 10, 14), line(4, 10, 12, 10), roundedRect(6, 5, 14, 12, 2)]),
  stroke('cast-off', [line(4, 18, 8, 18), line(4, 14, 10, 14), line(4, 10, 12, 10), roundedRect(6, 5, 14, 12, 2), line(4, 4, 20, 20)]),
  stroke('equalizer', [line(7, 6, 7, 18), line(12, 9, 12, 18), line(17, 5, 17, 18), circle(7, 11, 1.2), circle(12, 13, 1.2), circle(17, 9, 1.2)]),
];

const contentParityIcons = [
  stroke('columns-2', [roundedRect(4, 5, 7, 14, 1.5), roundedRect(13, 5, 7, 14, 1.5)]),
  stroke('rows-2', [roundedRect(4, 5, 16, 6, 1.5), roundedRect(4, 13, 16, 6, 1.5)]),
  stroke('text-select', [line(6, 8, 18, 8), line(6, 12, 16, 12), line(6, 16, 18, 16), poly([[4, 6], [6, 8], [4, 10]]), poly([[20, 6], [18, 8], [20, 10]]), poly([[4, 14], [6, 16], [4, 18]]), poly([[20, 14], [18, 16], [20, 18]])]),
  stroke('type-outline', [roundedRect(5, 5, 14, 14, 2), ...textPaths('T', 9, 8, 6, 8)]),
  stroke('case-sensitive', [...textPaths('A', 6, 8, 5, 8), circle(16, 14, 2), line(16, 12, 16, 16), line(14.5, 14, 17.5, 14)]),
  stroke('wrap-text', [line(5, 8, 19, 8), line(5, 12, 15, 12), line(5, 16, 12, 16), line(12, 16, 12, 19), poly([[9.5, 16.5], [12, 19], [14.5, 16.5]])]),
  stroke('text-quote', [line(9, 8, 18, 8), line(9, 12, 18, 12), line(9, 16, 16, 16), polygon([[4, 8], [7, 8], [7, 12], [5, 12], [5, 15], [3, 15], [3, 11], [4, 8]])]),
  stroke('list-collapse', [line(10, 8, 20, 8), line(10, 12, 20, 12), line(10, 16, 20, 16), poly([[4, 10], [7, 13], [4, 16]])]),
  stroke('list-restart', [line(10, 8, 20, 8), line(10, 12, 20, 12), line(10, 16, 20, 16), arcPath(6, 10, 3, 3, 6, 16), poly([[3.5, 12], [6, 9.5], [8.5, 12]])]),
  stroke('paragraph-spacing', [line(9, 7, 15, 7), line(9, 12, 15, 12), line(9, 17, 15, 17), line(5, 5, 5, 19), poly([[3, 8], [5, 5], [7, 8]]), poly([[3, 16], [5, 19], [7, 16]]), line(19, 5, 19, 19), poly([[17, 8], [19, 5], [21, 8]]), poly([[17, 16], [19, 19], [21, 16]])]),
  stroke('newspaper', [roundedRect(4, 5, 16, 14, 2), roundedRect(6, 8, 5, 4, 0.6), line(12, 8.5, 18, 8.5), line(12, 11.5, 18, 11.5), line(6, 15, 18, 15), line(6, 18, 16, 18)]),
  stroke('newspaper-fold', [roundedRect(4, 5, 16, 14, 2), roundedRect(6, 8, 5, 4, 0.6), line(12, 8.5, 18, 8.5), line(12, 11.5, 18, 11.5), line(6, 15, 18, 15), line(6, 18, 14, 18), polygon([[20, 15], [17, 15], [20, 18]])]),
  stroke('book-check', [...bookBase(), ...overlayCheck(14.5, 16.5, 1.4)]),
  stroke('book-copy', [...bookBase(), roundedRect(8, 6.5, 11, 14, 1.2)]),
  stroke('book-text', [...bookBase(), line(11, 9, 16, 9), line(11, 12, 16, 12), line(11, 15, 15, 15)]),
  stroke('book-image', [...bookBase(), circle(13, 10.5, 1), poly([[10.5, 17], [13.5, 14], [16, 16], [18, 13.5]])]),
  stroke('columns-3', [roundedRect(4, 5, 4, 14, 1.2), roundedRect(10, 5, 4, 14, 1.2), roundedRect(16, 5, 4, 14, 1.2)]),
  stroke('rows-3', [roundedRect(4, 5, 16, 3.2, 1), roundedRect(4, 10.4, 16, 3.2, 1), roundedRect(4, 15.8, 16, 3.2, 1)]),
];

const brandExtraIcons = [
  brandMonogram('amazon', 'A', 'rounded'),
  brandMonogram('android', 'A', 'hex'),
  stroke('chrome', [circle(12, 12, 9), circle(12, 12, 3), line(12, 12, 20.5, 12), line(12, 12, 7, 4), line(12, 12, 7, 20)]),
  brandMonogram('edge', 'E', 'rounded'),
  brandMonogram('firefox', 'F', 'circle'),
  brandMonogram('github', 'GH', 'hex'),
  brandMonogram('gitlab', 'GL', 'hex'),
  brandMonogram('linkedin', 'IN', 'rounded'),
  stroke('x-logo', [line(5, 5, 19, 19), line(19, 5, 5, 19)]),
  brandMonogram('tiktok', 'TT', 'rounded'),
  brandMonogram('whatsapp', 'WA', 'circle'),
  brandMonogram('slack', 'SL', 'rounded'),
  brandMonogram('figma', 'F', 'rounded'),
  brandMonogram('spotify', 'SP', 'circle'),
  brandMonogram('twitch', 'TW', 'rounded'),
  brandMonogram('reddit', 'R', 'circle'),
  brandMonogram('pinterest', 'P', 'circle'),
  brandMonogram('snapchat', 'SC', 'rounded'),
  brandMonogram('telegram', 'TG', 'circle'),
  stroke('microsoft', [roundedRect(4, 4, 7, 7, 1), roundedRect(13, 4, 7, 7, 1), roundedRect(4, 13, 7, 7, 1), roundedRect(13, 13, 7, 7, 1)]),
  stroke('windows', [polygon([[4, 5], [11, 4], [11, 11], [4, 11]]), polygon([[13, 4], [20, 3], [20, 11], [13, 11]]), polygon([[4, 13], [11, 13], [11, 20], [4, 19]]), polygon([[13, 13], [20, 13], [20, 21], [13, 20]])]),
  brandMonogram('openai', 'AI', 'hex'),
  brandMonogram('stripe', 'ST', 'rounded'),
  brandMonogram('paypal', 'PP', 'rounded'),
  brandMonogram('shopify', 'SH', 'rounded'),
  stroke('visa', [roundedRect(3, 6, 18, 12, 2), ...textPaths('VI', 7.4, 8.2, 9, 8.8)]),
  stroke('mastercard', [circle(10, 12, 5), circle(14, 12, 5), line(12, 7, 12, 17)]),
  brandMonogram('npm', 'NPM', 'rounded'),
  brandMonogram('yarn', 'YR', 'hex'),
  brandMonogram('pnpm', 'PN', 'rounded'),
  stroke('docker', [roundedRect(5, 12, 3, 3, 0.5), roundedRect(8.5, 12, 3, 3, 0.5), roundedRect(12, 12, 3, 3, 0.5), roundedRect(8.5, 8.5, 3, 3, 0.5), roundedRect(12, 8.5, 3, 3, 0.5), quadPath(5, 17, 10.5, 20, 19, 17)]),
  brandMonogram('kubernetes', 'K', 'hex'),
  brandMonogram('aws', 'AWS', 'rounded'),
  brandMonogram('azure', 'AZ', 'diamond'),
  brandMonogram('vercel', 'V', 'diamond'),
  brandMonogram('netlify', 'N', 'hex'),
  brandMonogram('cloudflare', 'CF', 'rounded'),
  brandMonogram('jira', 'J', 'diamond'),
  brandMonogram('notion', 'N', 'rounded'),
  brandMonogram('trello', 'T', 'rounded'),
  brandMonogram('zoom', 'Z', 'rounded'),
  brandMonogram('dropbox', 'DB', 'diamond'),
  brandMonogram('dribbble', 'D', 'circle'),
  brandMonogram('behance', 'B', 'rounded'),
];

const letterIcons = 'abcdefghijklmnopqrstuvwxyz'
  .split('')
  .map((letter) => glyphIcon(`letter-${letter}`, letter.toUpperCase()));

const digitIcons = '0123456789'
  .split('')
  .map((digit) => glyphIcon(`number-${digit}`, digit));

const alphanumericIcons = [
  ...letterIcons,
  ...digitIcons,
  glyphIcon('ampersand', '&'),
  glyphIcon('asterisk', '*'),
  glyphIcon('at-sign', '@'),
  glyphIcon('exclamation-mark', '!'),
  glyphIcon('question-mark', '?'),
  glyphIcon('percent', '%'),
  glyphIcon('slash', '/'),
  glyphIcon('backslash', '\\'),
  glyphIcon('equals', '='),
  glyphIcon('plus-minus', '\u00B1'),
  glyphIcon('parentheses', '()'),
  glyphIcon('brackets', '[]'),
];

const generatedModules = [
  ['navigation-extra.ts', 'navigationExtraIcons', navigationExtraIcons],
  ['status-extra.ts', 'statusExtraIcons', statusExtraIcons],
  ['actions-extra.ts', 'actionExtraIcons', actionExtraIcons],
  ['system-extra.ts', 'systemExtraIcons', systemExtraIcons],
  ['education-extra.ts', 'educationExtraIcons', educationExtraIcons],
  ['content-extra.ts', 'contentExtraIcons', contentExtraIcons],
  ['communication-extra.ts', 'communicationExtraIcons', communicationExtraIcons],
  ['media-extra.ts', 'mediaExtraIcons', mediaExtraIcons],
  ['finance-extra.ts', 'financeExtraIcons', financeExtraIcons],
  ['engagement-extra.ts', 'engagementExtraIcons', engagementExtraIcons],
  ['brands-extra.ts', 'brandExtraIcons', brandExtraIcons],
  ['alphanumeric.ts', 'alphanumericIcons', alphanumericIcons],
  ['commerce.ts', 'commerceIcons', commerceFamilyIcons()],
  ['files.ts', 'fileIcons', fileFamilyIcons()],
  ['people.ts', 'peopleIcons', peopleFamilyIcons()],
  ['navigation-ui.ts', 'navigationUiIcons', navigationUiIcons],
  ['actions-ui.ts', 'actionUiIcons', actionUiIcons],
  ['content-ui.ts', 'contentUiIcons', contentUiIcons],
  ['status-ui.ts', 'statusUiIcons', statusUiIcons],
  ['shapes.ts', 'shapeIcons', shapeRegistryIcons()],
  ['layout.ts', 'layoutIcons', layoutRegistryIcons()],
  ['design-tools.ts', 'designToolIcons', designToolRegistryIcons()],
  ['transport.ts', 'transportIcons', transportRegistryIcons],
  ['places.ts', 'placeIcons', placeRegistryIcons],
  ['accessibility.ts', 'accessibilityIcons', accessibilityRegistryIcons],
  ['developer.ts', 'developerIcons', developerRegistryIcons],
  ['time.ts', 'timeIcons', timeRegistryIcons],
  ['weather.ts', 'weatherIcons', weatherRegistryIcons],
  ['navigation-parity.ts', 'navigationParityIcons', navigationParityIcons],
  ['status-parity.ts', 'statusParityIcons', statusParityIcons],
  ['communication-parity.ts', 'communicationParityIcons', communicationParityIcons],
  ['system-parity.ts', 'systemParityIcons', systemParityIcons],
  ['media-parity.ts', 'mediaParityIcons', mediaParityIcons],
  ['content-parity.ts', 'contentParityIcons', contentParityIcons],
].map(([fileName, registryName, icons]) => ({ fileName, registryName, icons }));

async function main() {
  await Promise.all(
    generatedModules.map(({ fileName, registryName, icons }) =>
      emitModule(fileName, registryName, icons),
    ),
  );
  await emitGeneratedIndex(generatedModules);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
