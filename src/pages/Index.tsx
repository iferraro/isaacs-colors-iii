import { createSignal, onMount } from "solid-js";
import { Color } from "../types.ts";

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
      {colors().map((color) => (
        <div>
          <h2>{color.name}</h2>
          <div class="w-12 h-12 bg-black" /*style={{ width: "100px", height: "100px", "background-color": color.id }} *//>
        </div>
      ))}
    </div>
  );
}
