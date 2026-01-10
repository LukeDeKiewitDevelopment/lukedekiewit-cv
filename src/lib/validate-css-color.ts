export const validateCSSColor = (hex?: string) => {
  if (!hex) {
    return;
  }

  const isValidHexValue =
    hex.startsWith("#") && hex.length >= 4 && hex.length <= 9;
  const isValidNoHexValue =
    !hex.startsWith("#") && hex.length >= 3 && hex.length <= 8;
  const isValidCSSVariable = hex.startsWith("var(") && hex.endsWith(")");

  if (isValidHexValue || isValidCSSVariable) {
    const cssColor = hex;
    return cssColor;
  } else if (isValidNoHexValue) {
    const cssColor = `#${hex}`;
    return cssColor;
  }
  return hex;
};
