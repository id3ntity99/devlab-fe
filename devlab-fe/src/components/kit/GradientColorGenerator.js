export const generate = () => {
  // 1. Pick a random base Hue (0-360)
  const baseHue = Math.floor(Math.random() * 361);

  // 2. Lock Saturation and Lightness for a "clean" look
  const saturation = "70%";
  const lightness = "60%";

  // 3. Offset the second color by 30-40 degrees for harmony
  const hue2 = (baseHue + 40) % 360;

  const color1 = `hsl(${baseHue}, ${saturation}, ${lightness})`;
  const color2 = `hsl(${hue2}, ${saturation}, ${lightness})`;
  const angle = Math.floor(Math.random() * 361);

  return `linear-gradient(${angle}deg, ${color1}, ${color2})`;
};
