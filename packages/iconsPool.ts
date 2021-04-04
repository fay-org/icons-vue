interface IiconsPool {
  [propName: string]: string
}

const iconsPool: IiconsPool = {
  activity: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>',
  airplay:
    '<path d="M5 17H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2h-1"></path><path d="M12 15l5 6H7l5-6z"></path>',
  alertCircle:
    '<circle cx="12" cy="12" r="10" fill="currentColor"></circle><path d="M12 8v4" stroke="var(--primary-background)"></path><path d="M12 16h.01" stroke="var(--primary-background)"></path>',
  alertCircleFill:
    '<circle cx="12" cy="12" r="10" fill="currentColor"></circle><path d="M12 8v4" stroke="var(--primary-background)"></path><path d="M12 16h.01" stroke="var(--primary-background)"></path>',
  alertOctagon:
    '<path d="M7.86 2h8.28L22 7.86v8.28L16.14 22H7.86L2 16.14V7.86L7.86 2z"></path><path d="M12 8v4"></path><path d="M12 16h.01"></path>',
  alertTriangle:
    '<path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" fill="currentColor"></path><path d="M12 9v4" stroke="var(--primary-background)"></path><path d="M12 17h.01" stroke="var(--primary-background)"></path>',
  alertTriangleFill:
    '<path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" fill="currentColor"></path><path d="M12 9v4" stroke="var(--primary-background)"></path><path d="M12 17h.01" stroke="var(--primary-background)"></path>',
  alignCenter:
    '<path d="M18 10H6"></path><path d="M21 6H3"></path><path d="M21 14H3"></path><path d="M18 18H6"></path>',
  alignJustify:
    '<path d="M21 10H3"></path><path d="M21 6H3"></path><path d="M21 14H3"></path><path d="M21 18H3"></path>',
  alignLeft:
    '<path d="M17 10H3"></path><path d="M21 6H3"></path><path d="M21 14H3"></path><path d="M17 18H3"></path>',
  alignRight:
    '<path d="M21 10H7"></path><path d="M21 6H3"></path><path d="M21 14H3"></path><path d="M21 18H7"></path>',
  anchor:
    '<circle cx="12" cy="5" r="3"></circle><path d="M12 22V8"></path><path d="M5 12H2a10 10 0 0020 0h-3"></path>',
  aperture:
    '<circle cx="12" cy="12" r="10"></circle><path d="M14.31 8l5.74 9.94"></path><path d="M9.69 8h11.48"></path><path d="M7.38 12l5.74-9.94"></path><path d="M9.69 16L3.95 6.06"></path><path d="M14.31 16H2.83"></path><path d="M16.62 12l-5.74 9.94"></path>',
  archive:
    '<path d="M21 8v13H3V8"></path><path d="M1 3h22v5H1z"></path><path d="M10 12h4"></path>',
  arrowDown: '<path d="M12 5v14"></path><path d="M19 12l-7 7-7-7"></path>',
  arrowDownCircle:
    '<circle cx="12" cy="12" r="10"></circle><path d="M8 12l4 4 4-4"></path><path d="M12 8v8"></path>',
  arrowDownLeft: '<path d="M17 7L7 17"></path><path d="M17 17H7V7"></path>',
  arrowDownRight: '<path d="M7 7l10 10"></path><path d="M17 7v10H7"></path>',
  arrowLeft: '<path d="M19 12H5"></path><path d="M12 19l-7-7 7-7"></path>',
  arrowLeftCircle:
    '<circle cx="12" cy="12" r="10"></circle><path d="M12 8l-4 4 4 4"></path><path d="M16 12H8"></path>',
  arrowRight: '<path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path>',
  arrowRightCircle:
    '<circle cx="12" cy="12" r="10"></circle><path d="M12 16l4-4-4-4"></path><path d="M8 12h8"></path>',
  arrowRightCircleFill:
    '<circle cx="12" cy="12" r="10" fill="currentColor"></circle><path d="M12 16l4-4-4-4" fill="none" stroke="var(--primary-background)"></path><path d="M8 12h8" stroke="var(--primary-background)"></path>',
  arrowUp: '<path d="M12 19V5"></path><path d="M5 12l7-7 7 7"></path>',
  arrowUpCircle:
    '<circle cx="12" cy="12" r="10"></circle><path d="M16 12l-4-4-4 4"></path><path d="M12 16V8"></path>',
  arrowUpLeft: '<path d="M17 17L7 7"></path><path d="M7 17V7h10"></path>',
  arrowUpRight: '<path d="M7 17L17 7"></path><path d="M7 7h10v10"></path>',
  atSign:
    '<circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 006 0v-1a10 10 0 10-3.92 7.94"></path>',
  award:
    '<circle cx="12" cy="8" r="7"></circle><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"></path>',
  barChart:
    '<path d="M12 20V10"></path><path d="M18 20V4"></path><path d="M6 20v-4"></path>',
  barChart2:
    '<path d="M18 20V10"></path><path d="M12 20V4"></path><path d="M6 20v-6"></path>',
  battery:
    '<rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><path d="M23 13v-2"></path>',
  batteryCharging:
    '<path d="M5 18H3a2 2 0 01-2-2V8a2 2 0 012-2h3.19M15 6h2a2 2 0 012 2v8a2 2 0 01-2 2h-3.19"></path><path d="M23 13v-2"></path><path d="M11 6l-4 6h6l-4 6"></path>',
  bell:
    '<path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 01-3.46 0"></path>',
  bellOff:
    '<path d="M13.73 21a2 2 0 01-3.46 0"></path><path d="M18.63 13A17.89 17.89 0 0118 8"></path><path d="M6.26 6.26A5.86 5.86 0 006 8c0 7-3 9-3 9h14"></path><path d="M18 8a6 6 0 00-9.33-5"></path><path d="M1 1l22 22"></path>',
  bluetooth: '<path d="M6.5 6.5l11 11L12 23V1l5.5 5.5-11 11"></path>',
  bold:
    '<path d="M6 4h8a4 4 0 014 4 4 4 0 01-4 4H6z"></path><path d="M6 12h9a4 4 0 014 4 4 4 0 01-4 4H6z"></path>',
  book:
    '<path d="M4 19.5A2.5 2.5 0 016.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"></path>',
  bookOpen:
    '<path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"></path><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"></path>',
  bookmark: '<path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"></path>',
  box:
    '<path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"></path><path d="M3.27 6.96L12 12.01l8.73-5.05"></path><path d="M12 22.08V12"></path>',
  briefcase:
    '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"></path>',
  calendar:
    '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><path d="M16 2v4"></path><path d="M8 2v4"></path><path d="M3 10h18"></path>',
  camera:
    '<path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"></path><circle cx="12" cy="13" r="4"></circle>',
  cameraOff:
    '<path d="M1 1l22 22"></path><path d="M21 21H3a2 2 0 01-2-2V8a2 2 0 012-2h3m3-3h6l2 3h4a2 2 0 012 2v9.34m-7.72-2.06a4 4 0 11-5.56-5.56"></path>',
  cast:
    '<path d="M2 16.1A5 5 0 015.9 20M2 12.05A9 9 0 019.95 20M2 8V6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2h-6"></path><path d="M2 20h.01"></path>',
  check: '<path d="M20 6L9 17l-5-5"></path>',
  checkCircle:
    '<path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path><path d="M22 4L12 14.01l-3-3"></path>',
  checkInCircle:
    '<path d="M8 11.857l2.5 2.5L15.857 9M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z"></path>',
  checkInCircleFill:
    '<path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" fill="currentColor" stroke="currentColor"></path><path d="M8 11.8571L10.5 14.3572L15.8572 9" fill="none" stroke="var(--primary-background)"></path>',
  checkSquare:
    '<path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path>',
  checkbox:
    '<path d="M16.09 3H7.91A4.91 4.91 0 003 7.91v8.18A4.909 4.909 0 007.91 21h8.18A4.909 4.909 0 0021 16.09V7.91A4.909 4.909 0 0016.09 3z"></path>',
  checkboxFill:
    '<path d="M7.91 3h8.18a4.908 4.908 0 014.31 2.554l-8.273 8.377-2.592-2.638a.75.75 0 10-1.07 1.05l3.125 3.182a.75.75 0 001.069.002l8.281-8.386c.04.25.06.507.06.768v8.182A4.909 4.909 0 0116.09 21H7.91A4.909 4.909 0 013 16.09V7.91A4.91 4.91 0 017.91 3z" fill="currentColor" stroke="none"></path>',
  chevronDown: '<path d="M6 9l6 6 6-6"></path>',
  chevronDownCircle:
    '<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" fill="currentColor"></path><path d="M8 10.679l4 4 4-4" stroke="var(--primary-background)" fill="none"></path>',
  chevronDownCircleFill:
    '<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" fill="currentColor"></path><path d="M8 10.679l4 4 4-4" stroke="var(--primary-background)" fill="none"></path>',
  chevronLeft: '<path d="M15 18l-6-6 6-6"></path>',
  chevronLeftCircle:
    '<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" fill="currentColor"></path><path d="M13 8l-4 4 4 4" stroke="var(--primary-background)" fill="none"></path>',
  chevronLeftCircleFill:
    '<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" fill="currentColor"></path><path d="M13 8l-4 4 4 4" stroke="var(--primary-background)" fill="none"></path>',
  chevronRight: '<path d="M9 18l6-6-6-6"></path>',
  chevronRightCircle:
    '<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" fill="currentColor"></path><path d="M11 16l4-4-4-4" stroke="var(--primary-background)" fill="none"></path>',
  chevronRightCircleFill:
    '<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" fill="currentColor"></path><path d="M11 16l4-4-4-4" stroke="var(--primary-background)" fill="none"></path>',
  chevronUp: '<path d="M18 15l-6-6-6 6"></path>',
  chevronUpCircle:
    '<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" fill="currentColor"></path><path d="M16 14l-4-4-4 4" stroke="var(--primary-background)" fill="none"></path>',
  chevronUpCircleFill:
    '<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" fill="currentColor"></path><path d="M16 14l-4-4-4 4" stroke="var(--primary-background)" fill="none"></path>',
  chevronUpDown:
    '<path d="M17 8.517L12 3 7 8.517M7 15.48l5 5.517 5-5.517"></path>',
  chevronsDown: '<path d="M7 13l5 5 5-5"></path><path d="M7 6l5 5 5-5"></path>',
  chevronsLeft:
    '<path d="M11 17l-5-5 5-5"></path><path d="M18 17l-5-5 5-5"></path>',
  chevronsRight:
    '<path d="M13 17l5-5-5-5"></path><path d="M6 17l5-5-5-5"></path>',
  chevronsUp:
    '<path d="M17 11l-5-5-5 5"></path><path d="M17 18l-5-5-5 5"></path>',
  chrome:
    '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><path d="M21.17 8H12"></path><path d="M3.95 6.06L8.54 14"></path><path d="M10.88 21.94L15.46 14"></path>',
  circle: '<circle cx="12" cy="12" r="10"></circle>',
  clipboard:
    '<path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>',
  clock:
    '<circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path>',
  cloud: '<path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"></path>',
  cloudDrizzle:
    '<path d="M8 19v2"></path><path d="M8 13v2"></path><path d="M16 19v2"></path><path d="M16 13v2"></path><path d="M12 21v2"></path><path d="M12 15v2"></path><path d="M20 16.58A5 5 0 0018 7h-1.26A8 8 0 104 15.25"></path>',
  cloudLightning:
    '<path d="M19 16.9A5 5 0 0018 7h-1.26a8 8 0 10-11.62 9"></path><path d="M13 11l-4 6h6l-4 6"></path>',
  cloudOff:
    '<path d="M22.61 16.95A5 5 0 0018 10h-1.26a8 8 0 00-7.05-6M5 5a8 8 0 004 15h9a5 5 0 001.7-.3"></path><path d="M1 1l22 22"></path>',
  cloudRain:
    '<path d="M16 13v8"></path><path d="M8 13v8"></path><path d="M12 15v8"></path><path d="M20 16.58A5 5 0 0018 7h-1.26A8 8 0 104 15.25"></path>',
  cloudSnow:
    '<path d="M20 17.58A5 5 0 0018 8h-1.26A8 8 0 104 16.25"></path><path d="M8 16h.01"></path><path d="M8 20h.01"></path><path d="M12 18h.01"></path><path d="M12 22h.01"></path><path d="M16 16h.01"></path><path d="M16 20h.01"></path>',
  code: '<path d="M16 18l6-6-6-6"></path><path d="M8 6l-6 6 6 6"></path>',
  codepen:
    '<path d="M12 2l10 6.5v7L12 22 2 15.5v-7L12 2z"></path><path d="M12 22v-6.5"></path><path d="M22 8.5l-10 7-10-7"></path><path d="M2 15.5l10-7 10 7"></path><path d="M12 2v6.5"></path>',
  codesandbox:
    '<path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"></path><path d="M7.5 4.21l4.5 2.6 4.5-2.6"></path><path d="M7.5 19.79V14.6L3 12"></path><path d="M21 12l-4.5 2.6v5.19"></path><path d="M3.27 6.96L12 12.01l8.73-5.05"></path><path d="M12 22.08V12"></path>',
  coffee:
    '<path d="M18 8h1a4 4 0 010 8h-1"></path><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"></path><path d="M6 1v3"></path><path d="M10 1v3"></path><path d="M14 1v3"></path>',
  columns:
    '<path d="M12 3h7a2 2 0 012 2v14a2 2 0 01-2 2h-7m0-18H5a2 2 0 00-2 2v14a2 2 0 002 2h7m0-18v18"></path>',
  command:
    '<path d="M18 3a3 3 0 00-3 3v12a3 3 0 003 3 3 3 0 003-3 3 3 0 00-3-3H6a3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3V6a3 3 0 00-3-3 3 3 0 00-3 3 3 3 0 003 3h12a3 3 0 003-3 3 3 0 00-3-3z"></path>',
  compass:
    '<circle cx="12" cy="12" r="10"></circle><path d="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z"></path>',
  copy:
    '<path d="M8 17.929H6c-1.105 0-2-.912-2-2.036V5.036C4 3.91 4.895 3 6 3h8c1.105 0 2 .911 2 2.036v1.866m-6 .17h8c1.105 0 2 .91 2 2.035v10.857C20 21.09 19.105 22 18 22h-8c-1.105 0-2-.911-2-2.036V9.107c0-1.124.895-2.036 2-2.036z"></path>',
  cornerDownLeft:
    '<path d="M9 10l-5 5 5 5"></path><path d="M20 4v7a4 4 0 01-4 4H4"></path>',
  cornerDownRight:
    '<path d="M15 10l5 5-5 5"></path><path d="M4 4v7a4 4 0 004 4h12"></path>',
  cornerLeftDown:
    '<path d="M14 15l-5 5-5-5"></path><path d="M20 4h-7a4 4 0 00-4 4v12"></path>',
  cornerLeftUp:
    '<path d="M14 9L9 4 4 9"></path><path d="M20 20h-7a4 4 0 01-4-4V4"></path>',
  cornerRightDown:
    '<path d="M10 15l5 5 5-5"></path><path d="M4 4h7a4 4 0 014 4v12"></path>',
  cornerRightUp:
    '<path d="M10 9l5-5 5 5"></path><path d="M4 20h7a4 4 0 004-4V4"></path>',
  cornerUpLeft:
    '<path d="M9 14L4 9l5-5"></path><path d="M20 20v-7a4 4 0 00-4-4H4"></path>',
  cornerUpRight:
    '<path d="M15 14l5-5-5-5"></path><path d="M4 20v-7a4 4 0 014-4h12"></path>',
  cpu:
    '<rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><path d="M9 9h6v6H9z"></path><path d="M9 1v3"></path><path d="M15 1v3"></path><path d="M9 20v3"></path><path d="M15 20v3"></path><path d="M20 9h3"></path><path d="M20 14h3"></path><path d="M1 9h3"></path><path d="M1 14h3"></path>',
  creditCard:
    '<rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><path d="M1 10h22"></path>',
  crop:
    '<path d="M6.13 1L6 16a2 2 0 002 2h15"></path><path d="M1 6.13L16 6a2 2 0 012 2v15"></path>',
  crosshair:
    '<circle cx="12" cy="12" r="10"></circle><path d="M22 12h-4"></path><path d="M6 12H2"></path><path d="M12 6V2"></path><path d="M12 22v-4"></path>',
  database:
    '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>',
  delete:
    '<path d="M21 4H8l-7 8 7 8h13a2 2 0 002-2V6a2 2 0 00-2-2z"></path><path d="M18 9l-6 6"></path><path d="M12 9l6 6"></path>',
  disc:
    '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle>',
  display:
    '<path d="M2 13.381h20M8.66 19.05V22m6.84-2.95V22m-8.955 0h10.932M4 19.05h16a2 2 0 002-2V4a2 2 0 00-2-2H4a2 2 0 00-2 2v13.05a2 2 0 002 2z"></path>',
  divider: '<path d="M16.88 3.549L7.12 20.451"></path>',
  dollarSign:
    '<path d="M12 1v22"></path><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"></path>',
  download:
    '<path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"></path><path d="M7 10l5 5 5-5"></path><path d="M12 15V3"></path>',
  downloadCloud:
    '<path d="M8 17l4 4 4-4"></path><path d="M12 12v9"></path><path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>',
  droplet: '<path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"></path>',
  edit:
    '<path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"></path>',
  edit2:
    '<path d="M17 3a2.828 2.828 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>',
  edit3:
    '<path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"></path>',
  emoji:
    '<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="M7 14.5s0 4 5 4 5-4 5-4" fill="currentColor"></path><path d="M7 14.5s0 4 5 4 5-4 5-4H7z"></path><circle cx="15.5" cy="9.5" r=".75"></circle><circle cx="8.5" cy="9.5" r=".75"></circle>',
  externalLink:
    '<path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path><path d="M15 3h6v6"></path><path d="M10 14L21 3"></path>',
  eye:
    '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>',
  eyeOff:
    '<path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"></path><path d="M1 1l22 22"></path>',
  facebook:
    '<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>',
  fastForward:
    '<path d="M13 19l9-7-9-7v14z"></path><path d="M2 19l9-7-9-7v14z"></path>',
  feather:
    '<path d="M20.24 12.24a6 6 0 00-8.49-8.49L5 10.5V19h8.5z"></path><path d="M16 8L2 22"></path><path d="M17.5 15H9"></path>',
  figma:
    '<path d="M5 5.5A3.5 3.5 0 018.5 2H12v7H8.5A3.5 3.5 0 015 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 110 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 117 0 3.5 3.5 0 11-7 0z"></path><path d="M5 19.5A3.5 3.5 0 018.5 16H12v3.5a3.5 3.5 0 11-7 0z"></path><path d="M5 12.5A3.5 3.5 0 018.5 9H12v7H8.5A3.5 3.5 0 015 12.5z"></path>',
  file:
    '<path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"></path><path d="M13 2v7h7"></path>',
  fileFunction:
    '<path d="M13 2H6a2 2 0 00-2 2v16m0 0a2 2 0 002 2h12a2 2 0 002-2M4 20V9m16 11V9m0 11V4a2 2 0 00-2-2h-7"></path><path d="M9 11.236h2.848M9 18c1.934 0 2.848-.996 2.848-2.793v-3.97m0 0h2.813m-2.813 0V8.983c0-1.937 1.034-3.265 3.152-2.933"></path>',
  fileFunctionFill:
    '<path d="M4.055 2.055A2.75 2.75 0 016 1.25h12A2.75 2.75 0 0120.75 4v16A2.75 2.75 0 0118 22.75H6A2.75 2.75 0 013.25 20V4c0-.73.29-1.429.805-1.945zM15.116 5.31c-1.237-.194-2.29.086-3.02.83-.709.722-.998 1.758-.998 2.844v1.502H9a.75.75 0 100 1.5h2.098v3.22c0 .78-.197 1.257-.48 1.543-.283.284-.773.501-1.618.501a.75.75 0 000 1.5c1.088 0 2.023-.281 2.681-.944.658-.662.918-1.582.918-2.6v-3.22h2.062a.75.75 0 000-1.5h-2.063V8.984c0-.851.229-1.447.567-1.792.315-.32.838-.538 1.719-.4a.75.75 0 00.232-1.482z" fill="currentColor" stroke="none"></path>',
  fileLambda:
    '<path d="M13 2H6a2 2 0 00-2 2v16m0 0a2 2 0 002 2h12a2 2 0 002-2M4 20V9m16 11V9m0 11V4a2 2 0 00-2-2h-7"></path><path d="M7.716 6.783c0-.433.353-.783.79-.783.679 0 1.314.056 1.878.44.532.363.893.948 1.268 1.658l.009.015 1.053 2.229 2.333 4.835.005.009.164.355c.078.17.142.31.207.44.101.204.165.296.21.345l.003.004c.022.027.086.105.575.105.436 0 .789.35.789.782a.786.786 0 01-.79.783c-.683 0-1.278-.113-1.743-.619a3.01 3.01 0 01-.459-.704c-.076-.152-.159-.334-.247-.526l-.14-.303-1.72-3.563-3.446 5.353a.794.794 0 01-1.09.239.779.779 0 01-.24-1.08l3.976-6.178-.855-1.81c-.377-.71-.583-.96-.756-1.079-.143-.097-.353-.165-.985-.165a.786.786 0 01-.79-.782z" fill="currentColor" stroke="none"></path>',
  fileLambdaFill:
    '<path d="M18 2a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2h12z" fill="currentColor" stroke="currentColor"></path><path d="M7.716 6.783c0-.433.353-.783.79-.783.679 0 1.314.056 1.878.44.532.363.893.948 1.268 1.658l.009.015 1.053 2.229 2.333 4.835.005.009.164.355c.078.17.142.31.207.44.101.204.165.296.21.345l.003.004c.022.027.086.105.575.105.436 0 .789.35.789.782a.786.786 0 01-.79.783c-.683 0-1.278-.113-1.743-.619a3.01 3.01 0 01-.459-.704c-.076-.152-.159-.334-.247-.526l-.14-.303-1.72-3.563-3.446 5.353a.794.794 0 01-1.09.239.779.779 0 01-.24-1.08l3.976-6.178-.855-1.81c-.377-.71-.583-.96-.756-1.079-.143-.097-.353-.165-.985-.165a.786.786 0 01-.79-.782z" fill="var(--primary-background)" stroke="none"></path>',
  fileMinus:
    '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"></path><path d="M14 2v6h6"></path><path d="M9 15h6"></path>',
  filePlus:
    '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"></path><path d="M14 2v6h6"></path><path d="M12 18v-6"></path><path d="M9 15h6"></path>',
  fileText:
    '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"></path><path d="M14 2v6h6"></path><path d="M16 13H8"></path><path d="M16 17H8"></path><path d="M10 9H8"></path>',
  film:
    '<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><path d="M7 2v20"></path><path d="M17 2v20"></path><path d="M2 12h20"></path><path d="M2 7h5"></path><path d="M2 17h5"></path><path d="M17 17h5"></path><path d="M17 7h5"></path>',
  filter: '<path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"></path>',
  flag:
    '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><path d="M4 22v-7"></path>',
  folder:
    '<path d="M2.707 7.454V5.62C2.707 4.725 3.469 4 4.409 4h4.843c.451 0 .884.17 1.204.474l.49.467c.126.12.296.186.473.186h8.399c.94 0 1.55.695 1.55 1.59v.737m-18.661 0h-.354a.344.344 0 00-.353.35l.508 11.587c.015.34.31.609.668.609h17.283c.358 0 .652-.269.667-.61L22 7.805a.344.344 0 00-.353-.35h-.278m-18.662 0h18.662"></path>',
  folderMinus:
    '<path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"></path><path d="M9 14h6"></path>',
  folderPlus:
    '<path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"></path><path d="M12 11v6"></path><path d="M9 14h6"></path>',
  framer: '<path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"></path>',
  frown:
    '<circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><path d="M9 9h.01"></path><path d="M15 9h.01"></path>',
  fullScreen:
    '<path d="M15 3h6m0 0v6m0-6l-7 7M9 21H3m0 0v-6m0 6l7-7M3 9V3m0 0h6M3 3l7 7m11 5v6m0 0h-6m6 0l-7-7"></path>',
  fullScreenClose:
    '<path d="M4 14h6m0 0v6m0-6l-7 7m17-11h-6m0 0V4m0 6l7-7m-7 17v-6m0 0h6m-6 0l7 7M10 4v6m0 0H4m6 0L3 3"></path>',
  function:
    '<path d="M8 10.854h3.798M8 21c2.578 0 3.798-1.494 3.798-4.19v-5.956m0 0h3.75m-3.75 0V7.476c0-2.906 1.379-4.898 4.202-4.4"></path>',
  gift:
    '<path d="M20 12v10H4V12"></path><path d="M2 7h20v5H2z"></path><path d="M12 22V7"></path><path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"></path>',
  gitBranch:
    '<path d="M6 3v12"></path><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 01-9 9"></path>',
  gitCommit:
    '<circle cx="12" cy="12" r="4"></circle><path d="M1.05 12H7"></path><path d="M17.01 12h5.95"></path>',
  gitMerge:
    '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 009 9"></path>',
  gitPullRequest:
    '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 012 2v7"></path><path d="M6 9v12"></path>',
  github:
    '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"></path>',
  gitlab:
    '<path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 01-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 014.82 2a.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0118.6 2a.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.51L23 13.45a.84.84 0 01-.35.94z"></path>',
  globe:
    '<circle cx="12" cy="12" r="10"></circle><path d="M2 12h20"></path><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"></path>',
  grid:
    '<path d="M3 3h7v7H3z"></path><path d="M14 3h7v7h-7z"></path><path d="M14 14h7v7h-7z"></path><path d="M3 14h7v7H3z"></path>',
  hardDrive:
    '<path d="M22 12H2"></path><path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z"></path><path d="M6 16h.01"></path><path d="M10 16h.01"></path>',
  hash:
    '<path d="M4 9h16"></path><path d="M4 15h16"></path><path d="M10 3L8 21"></path><path d="M16 3l-2 18"></path>',
  headphones:
    '<path d="M3 18v-6a9 9 0 0118 0v6"></path><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>',
  heart:
    '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="currentColor"></path>',
  heartFill:
    '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="currentColor"></path>',
  helpCircle:
    '<circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path>',
  hexagon:
    '<path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"></path>',
  home:
    '<path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path><path d="M9 22V12h6v10"></path>',
  image:
    '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><path d="M21 15l-5-5L5 21"></path>',
  inbox:
    '<path d="M22 12h-6l-2 3h-4l-2-3H2"></path><path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z"></path>',
  infinity:
    '<path d="M13.833 8.875S15.085 7 18.043 7C21 7 23 9.5 23 12s-1.784 5-4.864 5-4.914-3.124-6.136-5c-1.222-1.875-3.392-5-6.446-5S1 9.5 1 12s1.351 5 4.648 5c3.296 0 4.519-1.875 4.519-1.875"></path>',
  info:
    '<circle cx="12" cy="12" r="10" fill="currentColor"></circle><path d="M12 16v-4" stroke="var(--primary-background)"></path><path d="M12 8h.01" stroke="var(--primary-background)"></path>',
  infoFill:
    '<circle cx="12" cy="12" r="10" fill="currentColor"></circle><path d="M12 16v-4" stroke="var(--primary-background)"></path><path d="M12 8h.01" stroke="var(--primary-background)"></path>',
  instagram:
    '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path><path d="M17.5 6.5h.01"></path>',
  italic:
    '<path d="M19 4h-9"></path><path d="M14 20H5"></path><path d="M15 4L9 20"></path>',
  key:
    '<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>',
  lambda:
    '  <path d="M1.99799968,0.500003998 C1.78162411,0.500869509 1.63364907,0.642137248 1.63364907,0.814271399 C1.63364907,0.985218642 1.78032508,1.1285428 1.97131342,1.12856172 L2.19867872,1.13056263 C3.10118421,1.14702589 3.60939673,1.26556347 4.03249851,1.568379 C4.44848628,1.86630467 4.81555118,2.36599046 5.30914132,3.29234706 L5.53635444,3.7319218 L7.127422,7.27537654 L6.98962107,7.5004737 L0.544625394,18.0283431 C0.486884418,18.1227208 0.485083442,18.2383317 0.539767758,18.3342249 C0.596620657,18.4339208 0.706568325,18.4981484 0.828403729,18.4999606 C0.950391011,18.501775 1.0625816,18.4406875 1.12276173,18.342323 L7.45742934,7.99500773 L7.84867238,8.84715959 L10.8910664,15.4738335 L11.3866691,16.600051 L11.4963288,16.8355567 C11.6974732,17.2598124 11.8703886,17.5497167 12.0716373,17.7798218 C12.5006231,18.2692457 13.0516354,18.4715747 13.9517354,18.4967326 L14.1338876,18.5007429 L14.2140555,18.4965687 C14.3788402,18.4747246 14.5,18.3402281 14.5,18.1853946 C14.5,18.0144473 14.353324,17.8711232 14.159766,17.8710753 L13.9667577,17.8683457 C13.23949,17.8471739 12.8730841,17.7079192 12.5747116,17.3670263 L12.5148848,17.2937701 C12.3862775,17.1267414 12.2591138,16.9035538 12.1043882,16.5789995 C12.0565097,16.4787037 12.0069781,16.3709095 11.9496307,16.2425932 L11.5034339,15.2259235 L7.80746029,7.17411382 L6.14520282,3.47634226 L5.9868176,3.16569971 C5.41304784,2.06259444 4.97093878,1.45201729 4.43388865,1.06822222 C3.88266741,0.671861393 3.24308245,0.52047405 2.2259303,0.50220525 L1.99799968,0.500003998 Z" transform="translate(5 3)"></path>',
  layers:
    '<path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path>',
  layout:
    '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path>',
  lifeBuoy:
    '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><path d="M4.93 4.93l4.24 4.24"></path><path d="M14.83 14.83l4.24 4.24"></path><path d="M14.83 9.17l4.24-4.24"></path><path d="M14.83 9.17l3.53-3.53"></path><path d="M4.93 19.07l4.24-4.24"></path>',
  link:
    '<path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"></path>',
  link2:
    '<path d="M15 7h3a5 5 0 015 5 5 5 0 01-5 5h-3m-6 0H6a5 5 0 01-5-5 5 5 0 015-5h3"></path><path d="M8 12h8"></path>',
  linkedin:
    '<path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"></path><path d="M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle>',
  list:
    '<path d="M8 6h13"></path><path d="M8 12h13"></path><path d="M8 18h13"></path><path d="M3 6h.01"></path><path d="M3 12h.01"></path><path d="M3 18h.01"></path>',
  loader:
    '<path d="M12 2v4"></path><path d="M12 18v4"></path><path d="M4.93 4.93l2.83 2.83"></path><path d="M16.24 16.24l2.83 2.83"></path><path d="M2 12h4"></path><path d="M18 12h4"></path><path d="M4.93 19.07l2.83-2.83"></path><path d="M16.24 7.76l2.83-2.83"></path>',
  lock:
    '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0110 0v4"></path>',
  logIn:
    '<path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4"></path><path d="M10 17l5-5-5-5"></path><path d="M15 12H3"></path>',
  logOut:
    '<path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"></path><path d="M16 17l5-5-5-5"></path><path d="M21 12H9"></path>',
  mail:
    '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><path d="M22 6l-10 7L2 6"></path>',
  map:
    '<path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4z"></path><path d="M8 2v16"></path><path d="M16 6v16"></path>',
  mapPin:
    '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path><circle cx="12" cy="10" r="3"></circle>',
  maximize:
    '<path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3"></path>',
  maximize2:
    '<path d="M15 3h6v6"></path><path d="M9 21H3v-6"></path><path d="M21 3l-7 7"></path><path d="M3 21l7-7"></path>',
  meh:
    '<circle cx="12" cy="12" r="10"></circle><path d="M8 15h8"></path><path d="M9 9h.01"></path><path d="M15 9h.01"></path>',
  menu:
    '<path d="M3 12h18"></path><path d="M3 6h18"></path><path d="M3 18h18"></path>',
  messageCircle:
    '<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>',
  messageSquare:
    '<path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"></path>',
  mic:
    '<path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"></path><path d="M19 10v2a7 7 0 01-14 0v-2"></path><path d="M12 19v4"></path><path d="M8 23h8"></path>',
  micOff:
    '<path d="M1 1l22 22"></path><path d="M9 9v3a3 3 0 005.12 2.12M15 9.34V4a3 3 0 00-5.94-.6"></path><path d="M17 16.95A7 7 0 015 12v-2m14 0v2a7 7 0 01-.11 1.23"></path><path d="M12 19v4"></path><path d="M8 23h8"></path>',
  minimize:
    '<path d="M8 3v3a2 2 0 01-2 2H3m18 0h-3a2 2 0 01-2-2V3m0 18v-3a2 2 0 012-2h3M3 16h3a2 2 0 012 2v3"></path>',
  minimize2:
    '<path d="M4 14h6v6"></path><path d="M20 10h-6V4"></path><path d="M14 10l7-7"></path><path d="M3 21l7-7"></path>',
  minus: '<path d="M5 12h14"></path>',
  minusCircle:
    '<circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path>',
  minusSquare:
    '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><path d="M8 12h8"></path>',
  monitor:
    '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><path d="M8 21h8"></path><path d="M12 17v4"></path>',
  moon: '<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>',
  moreHorizontal:
    '<circle cx="12" cy="12" r="1" fill="currentColor"></circle><circle cx="19" cy="12" r="1" fill="currentColor"></circle><circle cx="5" cy="12" r="1" fill="currentColor"></circle>',
  moreVertical:
    '<circle cx="12" cy="12" r="1" fill="currentColor"></circle><circle cx="12" cy="5" r="1" fill="currentColor"></circle><circle cx="12" cy="19" r="1" fill="currentColor"></circle>',
  mousePointer:
    '<path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path><path d="M13 13l6 6"></path>',
  move:
    '<path d="M5 9l-3 3 3 3"></path><path d="M9 5l3-3 3 3"></path><path d="M15 19l-3 3-3-3"></path><path d="M19 9l3 3-3 3"></path><path d="M2 12h20"></path><path d="M12 2v20"></path>',
  music:
    '<path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle>',
  navigation: '<path d="M3 11l19-9-9 19-2-8-8-2z"></path>',
  navigation2: '<path d="M12 2l7 19-7-4-7 4 7-19z"></path>',
  octagon:
    '<path d="M7.86 2h8.28L22 7.86v8.28L16.14 22H7.86L2 16.14V7.86L7.86 2z"></path>',
  package:
    '<path d="M16.5 9.4l-9-5.19"></path><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"></path><path d="M3.27 6.96L12 12.01l8.73-5.05"></path><path d="M12 22.08V12"></path>',
  paperclip:
    '<path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"></path>',
  pause:
    '<rect x="6" y="4" width="4" height="16" fill="currentColor"></rect><rect x="14" y="4" width="4" height="16" fill="currentColor"></rect>',
  pauseFill:
    '<rect x="6" y="4" width="4" height="16" fill="currentColor"></rect><rect x="14" y="4" width="4" height="16" fill="currentColor"></rect>',
  pauseCircle:
    '<circle cx="12" cy="12" r="10"></circle><path d="M10 15V9"></path><path d="M14 15V9"></path>',
  penTool:
    '<path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle>',
  percent:
    '<path d="M19 5L5 19"></path><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle>',
  phone:
    '<path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>',
  phoneCall:
    '<path d="M15.05 5A5 5 0 0119 8.95M15.05 1A9 9 0 0123 8.94m-1 7.98v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>',
  phoneForwarded:
    '<path d="M19 1l4 4-4 4"></path><path d="M15 5h8"></path><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>',
  phoneIncoming:
    '<path d="M16 2v6h6"></path><path d="M23 1l-7 7"></path><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>',
  phoneMissed:
    '<path d="M23 1l-6 6"></path><path d="M17 1l6 6"></path><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>',
  phoneOff:
    '<path d="M10.68 13.31a16 16 0 003.41 2.6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7 2 2 0 011.72 2v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.42 19.42 0 01-3.33-2.67m-2.67-3.34a19.79 19.79 0 01-3.07-8.63A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91"></path><path d="M23 1L1 23"></path>',
  phoneOutgoing:
    '<path d="M23 7V1h-6"></path><path d="M16 8l7-7"></path><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>',
  pieChart:
    '<path d="M21.21 15.89A10 10 0 118 2.83"></path><path d="M22 12A10 10 0 0012 2v10z"></path>',
  pin:
    '<path d="M6.52 10.2l4.24 5.65m.01-9.9a2 2 0 000-2.83l-.7-.71L3 9.49l.7.7a1.998 1.998 0 002.83 0m4.24 5.66l5.66-5.66m-5.66 5.66s-1.76 2.47.71 4.95l9.89-9.9c-2.47-2.48-4.95-.7-4.95-.7m-5.65 5.65l5.65-5.65m0 0l-5.66-4.25m5.66 9.9l4.24 4.24"></path>',
  play: '<polygon points="5 3 19 12 5 21 5 3" fill="currentColor"></polygon>',
  playFill:
    '<polygon points="5 3 19 12 5 21 5 3" fill="currentColor"></polygon>',
  playCircle:
    '<circle cx="12" cy="12" r="10"></circle><path d="M10 8l6 4-6 4V8z"></path>',
  plus: '<path d="M12 5v14"></path><path d="M5 12h14"></path>',
  plusCircle:
    '<circle cx="12" cy="12" r="10"></circle><path d="M12 8v8"></path><path d="M8 12h8"></path>',
  plusSquare:
    '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><path d="M12 8v8"></path><path d="M8 12h8"></path>',
  pocket:
    '<path d="M4 3h16a2 2 0 012 2v6a10 10 0 01-10 10A10 10 0 012 11V5a2 2 0 012-2z"></path><path d="M8 10l4 4 4-4"></path>',
  power:
    '<path d="M18.36 6.64a9 9 0 11-12.73 0"></path><path d="M12 2v10"></path>',
  printer:
    '<path d="M6 9V2h12v7"></path><path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"></path><path d="M6 14h12v8H6z"></path>',
  questionCircle:
    '<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"></path><circle cx="12" cy="17" r=".5"></circle>',
  radio:
    '<circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 010 8.49m-8.48-.01a6 6 0 010-8.49m11.31-2.82a10 10 0 010 14.14m-14.14 0a10 10 0 010-14.14"></path>',
  refreshCcw:
    '<path d="M1 4v6h6"></path><path d="M23 20v-6h-6"></path><path d="M20.49 9A9 9 0 005.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 013.51 15"></path>',
  refreshCw:
    '<path d="M23 4v6h-6"></path><path d="M1 20v-6h6"></path><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"></path>',
  repeat:
    '<path d="M17 1l4 4-4 4"></path><path d="M3 11V9a4 4 0 014-4h14"></path><path d="M7 23l-4-4 4-4"></path><path d="M21 13v2a4 4 0 01-4 4H3"></path>',
  rewind:
    '<path d="M11 19l-9-7 9-7v14z"></path><path d="M22 19l-9-7 9-7v14z"></path>',
  rotateCcw:
    '<path d="M1 4v6h6"></path><path d="M3.51 15a9 9 0 102.13-9.36L1 10"></path>',
  rotateCw:
    '<path d="M23 4v6h-6"></path><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"></path>',
  rss:
    '<path d="M4 11a9 9 0 019 9"></path><path d="M4 4a16 16 0 0116 16"></path><circle cx="5" cy="19" r="1"></circle>',
  save:
    '<path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"></path><path d="M17 21v-8H7v8"></path><path d="M7 3v5h8"></path>',
  scissors:
    '<circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M20 4L8.12 15.88"></path><path d="M14.47 14.48L20 20"></path><path d="M8.12 8.12L12 12"></path>',
  search:
    '<path d="M11 17.25a6.25 6.25 0 110-12.5 6.25 6.25 0 010 12.5z"></path><path d="M16 16l4.5 4.5"></path>',
  send:
    '<path d="M22 2L11 13"></path><path d="M22 2l-7 20-4-9-9-4 20-7z"></path>',
  server:
    '<rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><path d="M6 6h.01"></path><path d="M6 18h.01"></path>',
  settings:
    '<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"></path>',
  share:
    '<path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8"></path><path d="M16 6l-4-4-4 4"></path><path d="M12 2v13"></path>',
  share2:
    '<circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><path d="M8.59 13.51l6.83 3.98"></path><path d="M15.41 6.51l-6.82 3.98"></path>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>',
  shieldOff:
    '<path d="M19.69 14a6.9 6.9 0 00.31-2V5l-8-3-3.16 1.18"></path><path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 005.62-4.38"></path><path d="M1 1l22 22"></path>',
  shoppingBag:
    '<path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 01-8 0"></path>',
  shoppingCart:
    '<circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"></path>',
  shuffle:
    '<path d="M16 3h5v5"></path><path d="M4 20L21 3"></path><path d="M21 16v5h-5"></path><path d="M15 15l6 6"></path><path d="M4 4l5 5"></path>',
  sidebar:
    '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><path d="M9 3v18"></path>',
  skipBack: '<path d="M19 20L9 12l10-8v16z"></path><path d="M5 19V5"></path>',
  skipForward: '<path d="M5 4l10 8-10 8V4z"></path><path d="M19 5v14"></path>',
  slack:
    '<path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path>',
  slash:
    '<circle cx="12" cy="12" r="10"></circle><path d="M4.93 4.93l14.14 14.14"></path>',
  sliders:
    '<path d="M4 21v-7"></path><path d="M4 10V3"></path><path d="M12 21v-9"></path><path d="M12 8V3"></path><path d="M20 21v-5"></path><path d="M20 12V3"></path><path d="M1 14h6"></path><path d="M9 8h6"></path><path d="M17 16h6"></path>',
  smartphone:
    '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><path d="M12 18h.01"></path>',
  smile:
    '<circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><path d="M9 9h.01"></path><path d="M15 9h.01"></path>',
  speaker:
    '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><circle cx="12" cy="14" r="4"></circle><path d="M12 6h.01"></path>',
  square: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>',
  star:
    '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>',
  stopCircle:
    '<circle cx="12" cy="12" r="10"></circle><path d="M9 9h6v6H9z"></path>',
  sun:
    '<circle cx="12" cy="12" r="5"></circle><path d="M12 1v2"></path><path d="M12 21v2"></path><path d="M4.22 4.22l1.42 1.42"></path><path d="M18.36 18.36l1.42 1.42"></path><path d="M1 12h2"></path><path d="M21 12h2"></path><path d="M4.22 19.78l1.42-1.42"></path><path d="M18.36 5.64l1.42-1.42"></path>',
  sunrise:
    '<path d="M17 18a5 5 0 00-10 0"></path><path d="M12 2v7"></path><path d="M4.22 10.22l1.42 1.42"></path><path d="M1 18h2"></path><path d="M21 18h2"></path><path d="M18.36 11.64l1.42-1.42"></path><path d="M23 22H1"></path><path d="M8 6l4-4 4 4"></path>',
  sunset:
    '<path d="M17 18a5 5 0 00-10 0"></path><path d="M12 9V2"></path><path d="M4.22 10.22l1.42 1.42"></path><path d="M1 18h2"></path><path d="M21 18h2"></path><path d="M18.36 11.64l1.42-1.42"></path><path d="M23 22H1"></path><path d="M16 5l-4 4-4-4"></path>',
  tablet:
    '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><path d="M12 18h.01"></path>',
  tag:
    '<path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"></path><path d="M7 7h.01"></path>',
  target:
    '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>',
  terminal: '<path d="M4 17l6-6-6-6"></path><path d="M12 19h8"></path>',
  thermometer:
    '<path d="M14 14.76V3.5a2.5 2.5 0 00-5 0v11.26a4.5 4.5 0 105 0z"></path>',
  thumbsDown:
    '<path d="M10 15v4a3 3 0 003 3l4-9V2H5.72a2 2 0 00-2 1.7l-1.38 9a2 2 0 002 2.3zm7-13h2.67A2.31 2.31 0 0122 4v7a2.31 2.31 0 01-2.33 2H17"></path>',
  thumbsUp:
    '<path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3"></path>',
  toggleLeft:
    '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="8" cy="12" r="3"></circle>',
  toggleRight:
    '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="16" cy="12" r="3"></circle>',
  tool:
    '<path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"></path>',
  trash:
    '<path d="M3 6h18"></path><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"></path>',
  trash2:
    '<path d="M3 6h18"></path><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"></path><path d="M10 11v6"></path><path d="M14 11v6"></path>',
  trello:
    '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><path d="M7 7h3v9H7z"></path><path d="M14 7h3v5h-3z"></path>',
  trendingDown:
    '<path d="M23 18l-9.5-9.5-5 5L1 6"></path><path d="M17 18h6v-6"></path>',
  trendingUp:
    '<path d="M23 6l-9.5 9.5-5-5L1 18"></path><path d="M17 6h6v6"></path>',
  triangle:
    '<path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"></path>',
  truck:
    '<path d="M1 3h15v13H1z"></path><path d="M16 8h4l3 3v5h-7V8z"></path><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>',
  tv:
    '<rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><path d="M17 2l-5 5-5-5"></path>',
  twitch: '<path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>',
  twitter:
    '<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>',
  type:
    '<path d="M4 7V4h16v3"></path><path d="M9 20h6"></path><path d="M12 4v16"></path>',
  umbrella:
    '<path d="M23 12a11.05 11.05 0 00-22 0zm-5 7a3 3 0 01-6 0v-7"></path>',
  underline:
    '<path d="M6 3v7a6 6 0 006 6 6 6 0 006-6V3"></path><path d="M4 21h16"></path>',
  unlock:
    '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 019.9-1"></path>',
  upload:
    '<path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"></path><path d="M17 8l-5-5-5 5"></path><path d="M12 3v12"></path>',
  uploadCloud:
    '<path d="M16 16l-4-4-4 4"></path><path d="M12 12v9"></path><path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3"></path><path d="M16 16l-4-4-4 4"></path>',
  user:
    '<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>',
  userCheck:
    '<path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><path d="M17 11l2 2 4-4"></path>',
  userMinus:
    '<path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><path d="M23 11h-6"></path>',
  userPlus:
    '<path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><path d="M20 8v6"></path><path d="M23 11h-6"></path>',
  userX:
    '<path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><path d="M18 8l5 5"></path><path d="M23 8l-5 5"></path>',
  users:
    '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 00-3-3.87"></path><path d="M16 3.13a4 4 0 010 7.75"></path>',
  video:
    '<path d="M23 7l-7 5 7 5V7z"></path><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>',
  videoOff:
    '<path d="M16 16v1a2 2 0 01-2 2H3a2 2 0 01-2-2V7a2 2 0 012-2h2m5.66 0H14a2 2 0 012 2v3.34l1 1L23 7v10"></path><path d="M1 1l22 22"></path>',
  voicemail:
    '<circle cx="5.5" cy="11.5" r="4.5"></circle><circle cx="18.5" cy="11.5" r="4.5"></circle><path d="M5.5 16h13"></path>',
  volume: '<path d="M11 5L6 9H2v6h4l5 4V5z"></path>',
  volumeX:
    '<path d="M11 5L6 9H2v6h4l5 4V5z"></path><path d="M23 9l-6 6"></path><path d="M17 9l6 6"></path>',
  volume1:
    '<path d="M11 5L6 9H2v6h4l5 4V5z"></path><path d="M15.54 8.46a5 5 0 010 7.07"></path>',
  volume2:
    '<path d="M11 5L6 9H2v6h4l5 4V5z"></path><path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"></path>',
  watch:
    '<circle cx="12" cy="12" r="7"></circle><path d="M12 9v3l1.5 1.5"></path><path d="M16.51 17.35l-.35 3.83a2 2 0 01-2 1.82H9.83a2 2 0 01-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 019.83 1h4.35a2 2 0 012 1.82l.35 3.83"></path>',
  wifi:
    '<path d="M5 12.55a11 11 0 0114.08 0"></path><path d="M1.42 9a16 16 0 0121.16 0"></path><path d="M8.53 16.11a6 6 0 016.95 0"></path><path d="M12 20h.01"></path>',
  wifiOff:
    '<path d="M1 1l22 22"></path><path d="M16.72 11.06A10.94 10.94 0 0119 12.55"></path><path d="M5 12.55a10.94 10.94 0 015.17-2.39"></path><path d="M10.71 5.05A16 16 0 0122.58 9"></path><path d="M1.42 9a15.91 15.91 0 014.7-2.88"></path><path d="M8.53 16.11a6 6 0 016.95 0"></path><path d="M12 20h.01"></path>',
  wind:
    '<path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2"></path>',
  x: '<path d="M18 6L6 18"></path><path d="M6 6l12 12"></path>',
  xCircle:
    '<circle cx="12" cy="12" r="10" fill="currentColor"></circle><path d="M15 9l-6 6" stroke="var(--primary-background)"></path><path d="M9 9l6 6" stroke="var(--primary-background)"></path>',
  xCircleFill:
    '<circle cx="12" cy="12" r="10" fill="currentColor"></circle><path d="M15 9l-6 6" stroke="var(--primary-background)"></path><path d="M9 9l6 6" stroke="var(--primary-background)"></path>',
  xOctagon:
    '<path d="M7.86 2h8.28L22 7.86v8.28L16.14 22H7.86L2 16.14V7.86L7.86 2z"></path><path d="M15 9l-6 6"></path><path d="M9 9l6 6"></path>',
  xSquare:
    '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><path d="M9 9l6 6"></path><path d="M15 9l-6 6"></path>',
  youtube:
    '<path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z"></path><path d="M9.75 15.02l5.75-3.27-5.75-3.27v6.54z"></path>',
  zap: '<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>',
  zapOff:
    '<path d="M12.41 6.75L13 2l-2.43 2.92"></path><path d="M18.57 12.91L21 10h-5.34"></path><path d="M8 8l-5 6h9l-1 8 5-6"></path><path d="M1 1l22 22"></path>',
  zeroConfig:
    '<path d="M2.625 21.2992L21.2992 2.625M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"></path>',
  zoomIn:
    '<circle cx="11" cy="11" r="8"></circle><path d="M21 21l-4.35-4.35"></path><path d="M11 8v6"></path><path d="M8 11h6"></path>',
  zoomOut:
    '<circle cx="11" cy="11" r="8"></circle><path d="M21 21l-4.35-4.35"></path><path d="M8 11h6"></path>',
}

export default iconsPool
