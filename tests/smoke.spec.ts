import { test as base, expect, type Page } from "@playwright/test";

// Smoke test of the static Storybook build (see playwright.config.ts).
// J1-J6 and J8 from the upgrade's behavior checks. Stories are opened at
// iframe.html?id=<id>&viewMode=story, the manager at ?path=/story/<id>.

// Story id prefix -> exported icon, in the sidebar's (alphabetical) order.
// Two titles differ from the export: "CusorClick" and "Pencil".
const ICONS: [string, string][] = [
  ["arrowrightboldicon", "ArrowRightBoldIcon"],
  ["backicon", "BackIcon"],
  ["checkcircleicon", "CheckCircleIcon"],
  ["chevrondownicon", "ChevronDownIcon"],
  ["chevronlefticon", "ChevronLeftIcon"],
  ["chevronrighticon", "ChevronRightIcon"],
  ["chevronupicon", "ChevronUpIcon"],
  ["circleboldicon", "CircleBoldIcon"],
  ["copyicon", "CopyIcon"],
  ["cusorclick", "CursorClickIcon"],
  ["dashboardicon", "DashboardIcon"],
  ["diamondboldicon", "DiamondBoldIcon"],
  ["documentduplicateicon", "DocumentDuplicateIcon"],
  ["downloadicon", "DownloadIcon"],
  ["duplicateicon", "DuplicateIcon"],
  ["erasericon", "EraserIcon"],
  ["forwardicon", "ForwardIcon"],
  ["horizontallineicon", "HorizontalLineIcon"],
  ["keyboldicon", "KeyBoldIcon"],
  ["libraryboldicon", "LibraryBoldIcon"],
  ["menuicon", "MenuIcon"],
  ["paletteboldicon", "PaletteBoldIcon"],
  ["pencil", "PencilBoldIcon"],
  ["photographboldicon", "PhotographBoldIcon"],
  ["redoicon", "RedoIcon"],
  ["rulerboldicon", "RulerBoldIcon"],
  ["squareboldicon", "SquareBoldIcon"],
  ["trashcanboldicon", "TrashCanBoldIcon"],
  ["trashcanicon", "TrashCanIcon"],
  ["undoicon", "UndoIcon"],
  ["usercircleboldicon", "UserCircleBoldIcon"],
];
const STORY_IDS = [
  "icongallery--gallery",
  ...ICONS.map(([id]) => `${id}--default-color-and-size`),
];
// The gallery labels each icon with its export name minus the first "Icon".
const LABELS = ICONS.map(([, name]) => name.replace("Icon", ""));
const DEFAULT_PAINT = "rgb(17, 24, 39)"; // #111827
const CHEVRONS = ["ChevronDown", "ChevronLeft", "ChevronRight", "ChevronUp"];

// J8, checked around every test: no page errors and no 4xx/5xx responses.
const test = base.extend<{ watched: void }>({
  watched: [
    async ({ page }, use) => {
      const problems: string[] = [];
      page.on("pageerror", (e) => problems.push(`page error: ${e.message}`));
      page.on("response", (r) => {
        if (r.status() >= 400) problems.push(`${r.status()} ${r.url()}`);
      });
      await use();
      expect(problems, "J8: page errors or 4xx/5xx responses").toEqual([]);
    },
    { auto: true },
  ],
});

type Svg = {
  width: string | null;
  height: string | null;
  className: string | null;
  box: [number, number];
  paints: string[];
  label: string | null;
};

// Every <svg> in the story root: size attributes, rendered box, the computed
// fill/stroke of its shapes, and its gallery label (if any).
function svgs(page: Page): Promise<Svg[]> {
  return page.evaluate(() =>
    [...document.querySelectorAll("#root svg")].map((svg) => {
      const r = svg.getBoundingClientRect();
      const paints = new Set<string>();
      for (const el of svg.querySelectorAll("path, line, circle, rect, polygon, polyline, ellipse")) {
        const cs = getComputedStyle(el);
        if (cs.fill && cs.fill !== "none") paints.add(cs.fill);
        if (cs.stroke && cs.stroke !== "none") paints.add(cs.stroke);
      }
      return {
        width: svg.getAttribute("width"),
        height: svg.getAttribute("height"),
        className: svg.getAttribute("class"),
        box: [Math.round(r.width), Math.round(r.height)] as [number, number],
        paints: [...paints],
        label: svg.closest("span")?.parentElement?.querySelector("p")?.textContent ?? null,
      };
    }),
  );
}

async function openStory(page: Page, id: string, extra = "") {
  await page.goto(`iframe.html?id=${id}&viewMode=story${extra}`);
  await page.locator("#root svg").first().waitFor();
}

test("J1: Storybook loads and lists IconGallery plus the 31 icon stories", async ({ page }) => {
  await page.goto("?path=/story/icongallery--gallery");
  const components = page.locator('[data-nodetype="component"]');
  await expect(components).toHaveCount(32);
  await expect(components.first()).toHaveAttribute("data-item-id", "icongallery");

  const preview = page.frameLocator("#storybook-preview-iframe");
  await expect(preview.locator("#root svg")).toHaveCount(31);
  const frame = page.frame({ url: /iframe\.html/ });
  const ids = await frame!.evaluate(() =>
    (window as any).__STORYBOOK_STORY_STORE__.raw().map((s: { id: string }) => s.id),
  );
  expect(ids).toEqual(STORY_IDS);
});

test("J2: the gallery renders 31 labelled 20x20 icons", async ({ page }) => {
  await openStory(page, "icongallery--gallery");
  const all = await svgs(page);
  expect(all.map((s) => s.label)).toEqual(LABELS);
  for (const s of all) {
    expect(s.width).toBe("20");
    expect(s.height).toBe("20");
    expect(s.box).toEqual([20, 20]);
    // The gallery story's args set color #000000.
    for (const p of s.paints) expect(p).toBe("rgb(0, 0, 0)");
  }
});

test("J3: gallery search filters case-insensitively", async ({ page }) => {
  await openStory(page, "icongallery--gallery");
  const input = page.getByPlaceholder("Search Icons");
  const labels = () => page.locator("#root p");

  await input.fill("chevron");
  await expect(labels()).toHaveText(CHEVRONS);
  await input.fill("CHEVRON");
  await expect(labels()).toHaveText(CHEVRONS);
  await input.fill("zzzz-no-such-icon");
  await expect(page.locator("#root svg")).toHaveCount(0);
  await input.fill("");
  await expect(page.locator("#root svg")).toHaveCount(31);
});

test("J4: every icon story renders one 20x20 svg in the default color", async ({ page }) => {
  for (const [id, name] of ICONS) {
    await openStory(page, `${id}--default-color-and-size`);
    const [s, ...rest] = await svgs(page);
    expect(rest, name).toHaveLength(0);
    expect([s.width, s.height], name).toEqual(["20", "20"]);
    expect(s.box, name).toEqual([20, 20]);
    expect(s.paints.length, name).toBeGreaterThan(0);
    if (name === "HorizontalLineIcon") {
      // Its line has a hard-coded black stroke, and its story sets a class name.
      expect(s.paints, name).toEqual(["rgb(0, 0, 0)"]);
      expect(s.className, name).toBe("my-class-name");
    } else {
      for (const p of s.paints) expect(p, name).toBe(DEFAULT_PAINT);
    }
  }
});

test("J5: args in the URL (size 40, red) render a 40x40 red icon", async ({ page }) => {
  // Pre-existing: Storybook 6.5 drops URL args whose type it can't tell
  // (docgen types size as SizeProp), so the icon stays 20x20 (but turns red).
  test.fail();
  await openStory(page, "chevrondownicon--default-color-and-size", "&args=size:40;color:red");
  const [s] = await svgs(page);
  expect(s.paints).toEqual(["rgb(255, 0, 0)"]);
  expect(s.box).toEqual([40, 40]);
});

test("J5b: args sent the way the Controls panel sends them render a 40x40 red icon", async ({ page }) => {
  const id = "chevrondownicon--default-color-and-size";
  await openStory(page, id);
  await page.evaluate((storyId) => {
    (window as any).__STORYBOOK_ADDONS_CHANNEL__.emit("updateStoryArgs", {
      storyId,
      updatedArgs: { size: 40, color: "red" },
    });
  }, id);
  await expect(page.locator("#root svg")).toHaveAttribute("width", "40");
  const [s] = await svgs(page);
  expect([s.width, s.height]).toEqual(["40", "40"]);
  expect(s.box).toEqual([40, 40]);
  expect(s.paints).toEqual(["rgb(255, 0, 0)"]);
});

test("J6: clicking a gallery icon logs \"clicked icon\" once per click", async ({ page }) => {
  const logs: string[] = [];
  page.on("console", (m) => logs.push(m.text()));
  await openStory(page, "icongallery--gallery");
  for (const i of [0, 15, 30]) await page.locator("#root svg").nth(i).click();
  await expect.poll(() => logs.filter((t) => t === "clicked icon").length).toBe(3);
});

test("J8: the manager and the gallery load with no errors", async ({ page }) => {
  // The fixture above fails the test on any page error or 4xx/5xx response.
  await page.goto("?path=/story/icongallery--gallery");
  await expect(page.frameLocator("#storybook-preview-iframe").locator("#root svg")).toHaveCount(31);
  await page.waitForLoadState("networkidle");
});
