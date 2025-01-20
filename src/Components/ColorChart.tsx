import type { Color } from "../types.ts";
import ColorBox from "./ColorBox.tsx";

type ColorChartProps = {
  colors: Color[];
};

export default function ColorChart(props: ColorChartProps) {
  const colors = () => props.colors;
  
  return (
    <section class="flex flex-col gap-4">
      {colors().map((color) => (
        <ColorBox color={color} />
      ))}
    </section>
  );
}
