/**
 * docx 파일에서 텍스트+서식(굵기, 글자 크기)을 추출해 HTML로 출력합니다.
 * 사용: node scripts/docx-to-html.cjs "C:\...\1.갑목 성향 3.docx"
 * 또는 프로젝트 루트에 docx를 두고: node scripts/docx-to-html.cjs "1.갑목 성향 3.docx"
 */
const fs = require("fs");
const path = require("path");
const JSZip = require("jszip");
const { XMLParser, XMLBuilder } = require("fast-xml-parser");

const docxPath = process.argv[2];
if (!docxPath) {
  console.error("사용법: node scripts/docx-to-html.cjs <docx 파일 경로>");
  process.exit(1);
}

const fullPath = path.isAbsolute(docxPath)
  ? docxPath
  : path.join(__dirname, "..", docxPath);

if (!fs.existsSync(fullPath)) {
  console.error("파일을 찾을 수 없습니다:", fullPath);
  process.exit(1);
}

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "@_",
  parseAttributeValue: true,
});

function getText(obj) {
  if (typeof obj === "string") return obj;
  if (!obj || typeof obj !== "object") return "";
  const t = obj["w:t"] ?? obj["t"];
  if (t === undefined) return "";
  if (typeof t === "string") return t;
  if (typeof t === "object" && t !== null) {
    if (typeof t["#text"] === "string") return t["#text"];
    if (t["@_xml:space"] !== undefined) return t["#text"] || "";
  }
  return "";
}

function getRunProps(obj) {
  if (!obj || typeof obj !== "object") return {};
  const rPr = obj["w:rPr"] ?? obj["rPr"];
  if (!rPr || typeof rPr !== "object") return {};
  const b = rPr["w:b"] ?? rPr["b"];
  const bold = b !== undefined && b !== false && b !== null;
  const szObj = rPr["w:sz"] ?? rPr["sz"];
  const val = szObj?.["@_w:val"] ?? szObj?.["@_val"];
  const szVal =
    typeof szObj === "number"
      ? szObj
      : val != null
        ? Number(val)
        : parseInt(szObj, 10);
  const pt = Number.isNaN(szVal) ? null : szVal / 2; // half-points -> pt
  return { bold, pt };
}

function runToHtml(run) {
  if (!run || typeof run !== "object") return "";
  const text = getText(run);
  if (!text) return "";
  const { bold, pt } = getRunProps(run);
  const parts = [];
  if (bold) parts.push("<strong>");
  if (pt != null && pt > 0) parts.push(`<span style="font-size:${pt}pt">`);
  parts.push(escapeHtml(text));
  if (pt != null && pt > 0) parts.push("</span>");
  if (bold) parts.push("</strong>");
  return parts.join("");
}

function escapeHtml(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function main() {
  const buf = fs.readFileSync(fullPath);
  const zip = await JSZip.loadAsync(buf);
  const docXml = await zip.file("word/document.xml")?.async("string");
  if (!docXml) {
    console.error("document.xml을 찾을 수 없습니다.");
    process.exit(1);
  }

  const doc = parser.parse(docXml);
  const body =
    doc["w:document"]?.["w:body"] ??
    doc["w:body"] ??
    doc["document"]?.["body"] ??
    doc["body"];
  if (!body) {
    console.error("w:body를 찾을 수 없습니다. 파싱된 키:", Object.keys(doc));
    process.exit(1);
  }

  const paragraphs = [];
  const rawP = body["w:p"] ?? body["p"];
  const arr = Array.isArray(rawP) ? rawP : rawP ? [rawP] : [];

  for (const p of arr) {
    const runs = p["w:r"] ?? p["r"];
    const runArr = Array.isArray(runs) ? runs : runs ? [runs] : [];
    let line = runArr.map(runToHtml).join("");
    if (line.trim()) paragraphs.push(line);
  }

  const html = paragraphs.map((line) => `<p class="gapmok-p">${line}</p>`).join("\n");
  console.log(html);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
