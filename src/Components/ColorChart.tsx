import type { Color } from "../types.ts";
import ColorBox from "./ColorBox.tsx";

type ColorChartProps = {
  colors: Color[];
};

export default function ColorChart(props: ColorChartProps) {
  const colors = () => props.colors;
  
  return (
    <section class="max-w-3xl flex flex-wrap gap-4 justify-center p-4">
      {colors().map((color) => (
        <ColorBox color={color} />
      ))}
    </section>
  );
}
