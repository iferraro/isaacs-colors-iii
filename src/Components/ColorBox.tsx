import type { Color } from "../types.ts";

type ColorBoxProps = {
  color: Color;
};

export default function ColorBox({ color }: ColorBoxProps) {
  return (
    <div class="flex flex-col gap-2">
      <div class="w-12 h-12" style={{ "background-color": color.id }} />
      <div class="text-sm">{color.name}</div>
    </div>
  );
}
