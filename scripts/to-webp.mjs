import { readdir, unlink } from "node:fs/promises";
import { join, extname } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const assetsDir = join(__dirname, "..", "src", "assets");

const files = await readdir(assetsDir);
const targets = files.filter((f) => /\.(png|jpe?g)$/i.test(f));

for (const file of targets) {
  const input = join(assetsDir, file);
  const output = join(assetsDir, file.replace(extname(file), ".webp"));
  await sharp(input).webp({ quality: 80, effort: 6 }).toFile(output);
  await unlink(input);
  console.log(`${file} -> ${file.replace(extname(file), ".webp")}`);
}

console.log(`Converted ${targets.length} images to WebP.`);
