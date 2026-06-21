// ============================================================
// PROPERTY CONFIG — change this one import to switch properties
// ============================================================
import data from "./barn.json";
// import data from './cottage.json';

// ============================================================
// UI STRINGS — change this one import to switch language
// ============================================================
import uiData from "./ui.json";
// import uiData from './ui-de.json';

import type { GuidebookData, UiStrings } from "./types";

export const guidebook = data as GuidebookData;
export const ui = uiData as UiStrings;
