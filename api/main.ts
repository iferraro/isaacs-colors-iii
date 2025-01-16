import { Hono } from "@hono/hono";
import data from "./isaacs-custom-colors.json" with { type: "json" };

const app = new Hono();

app.get("/", (c) => {
  return c.text("Welcome to Isaac's Custom Colors!");
});
  
app.get("/api/colors", (c) => {
  return c.json(data);
});

Deno.serve(app.fetch);