import { createSignal, onMount } from "solid-js";
import { Color } from "../types.ts";
import ColorChart from "../Components/ColorChart.tsx";

export default function Index() {
  const [colors, setColors] = createSignal<Color[]>([]);

  onMount(async () => {
    try {
      const response = await fetch("/api/colors");
      const allColors = (await response.json()) as Color[];
      setColors(allColors);
      console.log("Fetched colors:", allColors);
    } catch (error) {
      console.error("Failed to fetch colors:", error);
    }
  });

  return (
    <div>
      <h1>Isaac's Custom Colors</h1>
      <ColorChart colors={colors()} />
    </div>
  );
}
