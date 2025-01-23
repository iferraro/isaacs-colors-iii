import { createSignal, onMount } from "solid-js";
import { Color } from "../types.ts";
import ColorChart from "../Components/ColorChart.tsx";

export default function Index() {
  const [colors, setColors] = createSignal<Color[]>([]);

  onMount(async () => {
    try {
      const response = await fetch("/isaacs-custom-colors.json");
      const allColors = (await response.json()) as Color[];
      setColors(allColors);
    } catch (error) {
      console.error("Failed to fetch colors:", error);
    }
  });

  return (
    <div class="flex flex-col items-center">
      <h1 class="text-4xl font-bold my-4">Isaac's Custom Colors</h1>
      <ColorChart colors={colors()} />
    </div>
  );
}
