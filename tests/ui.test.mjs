import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";

import {
  Button,
  calculateMarqueeCopies,
  Heading,
  Marquee,
  Navbar,
  StackedPanelContent,
  StaggeredList,
  StaggeredListItem,
} from "../dist/index.js";

const render = (component, props, ...children) =>
  renderToStaticMarkup(createElement(component, props, ...children));

test("default button has an interactive hover state", () => {
  const html = render(Button, null, "Save");
  assert.match(html, /hover:bg-primary\/80/);
  assert.doesNotMatch(html, /\[a\]:hover/);
});

test("all heading levels render their semantic element", () => {
  for (let level = 1; level <= 6; level += 1) {
    assert.match(render(Heading, { level }, `Heading ${level}`), new RegExp(`^<h${level}`));
  }
});

test("staggered list uses list semantics", () => {
  const html = render(
    StaggeredList,
    null,
    createElement(StaggeredListItem, { index: 0 }, "First"),
    createElement(StaggeredListItem, { index: 3 }, "Second"),
  );

  assert.match(html, /^<ul/);
  assert.equal((html.match(/<li/g) ?? []).length, 2);
  assert.match(html, /--staggered-max-offset:9px/);
});

test("navbar supports both navigation and non-navigation actions", () => {
  const navigationHtml = render(
    Navbar,
    {
      brand: "Fuse UI",
      center: createElement("a", { href: "#center" }, "Interactive center"),
      actions: createElement("a", { href: "#docs" }, "Docs"),
    },
  );
  const actionsHtml = render(
    Navbar,
    {
      brand: "Fuse UI",
      actions: createElement("button", { type: "button" }, "Open"),
      actionsLabel: "Header actions",
    },
  );

  assert.match(navigationHtml, /<nav[^>]+aria-label="Primary navigation"/);
  assert.doesNotMatch(navigationHtml, /pointer-events-none/);
  assert.match(actionsHtml, /role="group" aria-label="Header actions"/);
  assert.doesNotMatch(actionsHtml, /<nav/);
});

test("marquee fills wide containers and handles repeated labels", () => {
  assert.equal(calculateMarqueeCopies(1072, 132), 11);
  assert.equal(calculateMarqueeCopies(343, 132), 5);
  assert.equal(calculateMarqueeCopies(1000, 0), 2);

  const html = render(Marquee, { items: ["Repeat", "Repeat"] });
  assert.equal((html.match(/class="marquee-group"/g) ?? []).length, 2);
  assert.match(html, /--marquee-shift:-50%/);
});

test("stacked panels expose non-interactive content", () => {
  assert.match(render(StackedPanelContent, null, "Panel"), /^<div class="stacked-panel-content"/);
});

test("core styles preserve spacing, motion and theme invariants", async () => {
  const css = await readFile(new URL("../src/styles.css", import.meta.url), "utf8");

  assert.match(css, /\.dark\s*\{/);
  assert.match(css, /width: calc\(100% - var\(--staggered-max-offset\)\)/);
  assert.match(css, /padding: 0 8px 8px 0/);
  assert.match(css, /@media \(prefers-reduced-motion: reduce\)/);
  assert.doesNotMatch(css, /scrollbar-width:\s*none/);
  assert.doesNotMatch(css, /0\.(?:35|45|55|65|85)rem/);
  assert.doesNotMatch(css, /1\.(?:1|2|35)rem/);
});
