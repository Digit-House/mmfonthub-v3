import type { Font, FontsJSON } from "@/types/font";
import FontData from "../data/font.json";

export const getFreeFonts = () => {
  return Object.values(FontData).reverse();
};

export const getAllFontsName = () => {
  const fontsName = Object.keys(FontData);
  return fontsName;
};

export const getFontByName = (fontName: string): Font | undefined => {
  const fontJsonWithIndex = FontData as FontsJSON;
  const font = fontJsonWithIndex[fontName];
  return font;
};
