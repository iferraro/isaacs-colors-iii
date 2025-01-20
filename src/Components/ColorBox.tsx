import type { Color } from "../types.ts";

type ColorBoxProps = {
  color: Color;
};

export default function ColorBox({ color }: ColorBoxProps) {


  return (
    <button
      class="w-24 h-24 rounded-xl"
      style={{ "background-color": color.id }}
      aria-label={`${color.name}, ${color.id}`}
      onClick={() => copyToClipboard(color.id)}
      title="Click to copy color code"
    />
  );
}

function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text);
}
