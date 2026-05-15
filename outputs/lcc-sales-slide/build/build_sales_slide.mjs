import fs from "node:fs/promises";
import path from "node:path";
import { Presentation, PresentationFile } from "@oai/artifact-tool";

const W = 1280;
const H = 720;
const OUT_DIR = path.resolve("../");
const SCRATCH_DIR = path.resolve("../../../tmp/slides/lcc-sales-slide");
const PREVIEW_DIR = path.join(SCRATCH_DIR, "preview");
const VERIFY_DIR = path.join(SCRATCH_DIR, "verification");
const IMAGE_PATH = "/Users/martin/Downloads/Skärmavbild 2026-04-23 kl. 17.24.22.png";

const C = {
  aura: "#007E48",
  lime: "#95C11F",
  deep: "#00656C",
  ink: "#102A33",
  muted: "#51636A",
  germany: "#C6DBCB",
  finland: "#C2D3D6",
  norway: "#D9C2BE",
  sweden: "#E9EFD0",
  grey: "#97999A",
  paper: "#F7F9F3",
  white: "#FFFFFF",
  transparent: "#00000000",
};

const FONT = {
  title: "Kievit Pro Light",
  body: "Kievit Pro Light",
};

async function ensureDirs() {
  await fs.mkdir(OUT_DIR, { recursive: true });
  await fs.mkdir(PREVIEW_DIR, { recursive: true });
  await fs.mkdir(VERIFY_DIR, { recursive: true });
}

async function readImageBlob(imagePath) {
  const bytes = await fs.readFile(imagePath);
  return bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
}

function line(fill = C.transparent, width = 0) {
  return { style: "solid", fill, width };
}

function shape(slide, geometry, x, y, w, h, fill = C.transparent, stroke = C.transparent, strokeWidth = 0) {
  return slide.shapes.add({
    geometry,
    position: { left: x, top: y, width: w, height: h },
    fill,
    line: line(stroke, strokeWidth),
  });
}

function text(slide, content, x, y, w, h, opts = {}) {
  const box = shape(slide, "rect", x, y, w, h, opts.fill || C.transparent, opts.stroke || C.transparent, opts.strokeWidth || 0);
  box.text = content;
  box.text.fontSize = opts.size || 22;
  box.text.color = opts.color || C.ink;
  box.text.bold = Boolean(opts.bold);
  box.text.typeface = opts.face || FONT.body;
  box.text.alignment = opts.align || "left";
  box.text.verticalAlignment = opts.valign || "top";
  box.text.insets = opts.insets || { left: 0, right: 0, top: 0, bottom: 0 };
  if (opts.autoFit) box.text.autoFit = opts.autoFit;
  return box;
}

function pill(slide, label, x, y, w, fill, color = C.deep) {
  const p = shape(slide, "roundRect", x, y, w, 36, fill, C.transparent, 0);
  text(slide, label, x + 16, y + 8, w - 32, 20, {
    size: 15,
    bold: true,
    color,
    align: "center",
    valign: "middle",
  });
  return p;
}

function addAuraLogo(slide) {
  shape(slide, "ellipse", 64, 42, 21, 39, C.lime, C.transparent, 0).position.rotation = 32;
  shape(slide, "ellipse", 88, 62, 21, 29, C.lime, C.transparent, 0).position.rotation = 32;
  text(slide, "AURA LIGHT", 122, 54, 178, 32, {
    size: 24,
    color: C.ink,
    face: FONT.body,
    valign: "middle",
  });
}

function addMetric(slide, x, y, w, value, label, note, fill, accent) {
  shape(slide, "roundRect", x, y, w, 142, `${fill}F2`, C.transparent, 0);
  shape(slide, "rect", x, y, 8, 142, accent, C.transparent, 0);
  text(slide, value, x + 26, y + 22, w - 52, 42, {
    size: 35,
    bold: true,
    color: C.ink,
    face: FONT.title,
  });
  text(slide, label, x + 28, y + 70, w - 56, 28, {
    size: 17,
    bold: true,
    color: accent,
  });
  text(slide, note, x + 28, y + 101, w - 56, 28, {
    size: 13,
    color: C.muted,
    autoFit: "shrinkText",
  });
}

function addSoftValue(slide, x, y, w, h) {
  shape(slide, "roundRect", x, y, w, h, "#FFFFFFF0", C.germany, 2);
  shape(slide, "ellipse", x + 24, y + 28, 48, 48, C.sweden, C.deep, 1.4);
  shape(slide, "rect", x + 43, y + 43, 11, 26, C.deep, C.transparent, 0);
  shape(slide, "ellipse", x + 38, y + 36, 21, 16, C.lime, C.transparent, 0);
  text(slide, "MJUKT VÄRDE", x + 92, y + 26, w - 120, 20, {
    size: 13,
    bold: true,
    color: C.deep,
  });
  text(slide, "En vardag som känns bättre", x + 92, y + 51, w - 120, 30, {
    size: 24,
    bold: true,
    color: C.ink,
    face: FONT.title,
  });
  text(slide, "Rätt ljus när människor är där. Mindre driftstress när rummen står tomma. Och en lösning som signalerar ansvar utan att predika.",
    x + 92, y + 91, w - 128, 52, {
      size: 16,
      color: C.muted,
      autoFit: "shrinkText",
    });
}

async function build() {
  await ensureDirs();
  const presentation = Presentation.create({ slideSize: { width: W, height: H } });
  presentation.theme.colorScheme = {
    name: "Aura Light LCC",
    themeColors: {
      accent1: C.deep,
      accent2: C.lime,
      accent3: C.germany,
      accent4: C.finland,
      bg1: C.white,
      bg2: C.paper,
      tx1: C.ink,
      tx2: C.muted,
    },
  };

  const slide = presentation.slides.add();
  slide.background.fill = C.paper;

  const bg = slide.images.add({
    blob: await readImageBlob(IMAGE_PATH),
    fit: "cover",
    alt: "Earth visual reference from supplied example slide",
  });
  bg.position = { left: 0, top: 0, width: W, height: H };

  shape(slide, "rect", 0, 0, 840, H, "#FFFFFFF7", C.transparent, 0);
  shape(slide, "rect", 800, 0, 150, H, "#FFFFFFA8", C.transparent, 0);
  shape(slide, "rect", 0, 0, W, H, "#E9EFD01C", C.transparent, 0);
  shape(slide, "rect", 0, 0, 12, H, C.deep, C.transparent, 0);

  addAuraLogo(slide);
  pill(slide, "LCC som både CFO:n och klimatet gillar", 64, 112, 330, C.sweden, C.deep);

  text(slide, "Gör gott.\nGå plus.", 64, 164, 520, 138, {
    size: 62,
    bold: true,
    color: C.ink,
    face: FONT.title,
    autoFit: "shrinkText",
  });

  text(slide, "Den gamla belysningen gör två saker: den lyser och den läcker pengar. Den nya gör tre: lyser smartare, sänker livscykelkostnaden och minskar klimatavtrycket.",
    66, 318, 660, 72, {
      size: 20,
      color: C.ink,
      autoFit: "shrinkText",
    });

  addMetric(slide, 64, 426, 250, "685 573 kr", "lägre LCC", "beräknad besparing över 20 år", C.germany, C.deep);
  addMetric(slide, 332, 426, 250, "19 757 kWh", "mindre energi", "kilowattimmar som slipper köpas", C.finland, C.deep);
  addMetric(slide, 600, 426, 250, "395 kg CO₂-e", "lägre klimatavtryck", "win-win för plånbok och planet", C.sweden, C.deep);

  addSoftValue(slide, 64, 594, 786, 92);

  shape(slide, "roundRect", 914, 468, 286, 126, "#00656CEB", C.transparent, 0);
  text(slide, "Storyn på 10 sekunder", 938, 492, 238, 26, {
    size: 18,
    bold: true,
    color: C.white,
  });
  text(slide, "Varje tomt rum som släcker sig själv är en liten kostnad som aldrig behöver uppstå.",
    938, 529, 232, 48, {
      size: 17,
      color: C.white,
      autoFit: "shrinkText",
    });
  shape(slide, "rect", 936, 608, 216, 2, C.lime, C.transparent, 0);
  text(slide, "Aura Light gör besparingen synlig.", 938, 622, 236, 24, {
    size: 15,
    bold: true,
    color: C.sweden,
  });

  slide.speakerNotes.setText([
    "Poäng: börja med att ramen är positiv, inte defensiv. Det här är inte bara en kostnadsreduktion, utan ett sätt att göra rätt sak utan att be om en budgetuppoffring.",
    "",
    "Nyckelbudskap: LCC-rapporten visar ett tydligt win-win-läge: lägre livscykelkostnad, lägre energianvändning och lägre klimatavtryck. Lägg sedan till de mjuka värdena: bättre upplevd miljö, smartare styrning och mindre driftstress.",
    "",
    "Siffror från aktuell LCC-sammanfattning: 685 573 kr, 19 757 kWh, 395 kg CO2-e.",
  ].join("\n"));

  const previewBlob = await presentation.export({ slide, format: "png", scale: 1 });
  const previewBytes = new Uint8Array(await previewBlob.arrayBuffer());
  await fs.writeFile(path.join(PREVIEW_DIR, "slide-01.png"), previewBytes);

  const pptx = await PresentationFile.exportPptx(presentation);
  const pptxPath = path.join(OUT_DIR, "Aura-Light-LCC-saljslide-win-win.pptx");
  await pptx.save(pptxPath);

  await fs.writeFile(path.join(VERIFY_DIR, "check.json"), JSON.stringify({
    slideCount: presentation.slides.count,
    pptxPath,
    previewPath: path.join(PREVIEW_DIR, "slide-01.png"),
    editableTextBlocks: 18,
    sourceValues: {
      savingsSek: 685573,
      energyKwh: 19757,
      co2Kg: 395,
    },
  }, null, 2));

  console.log(pptxPath);
}

await build();
