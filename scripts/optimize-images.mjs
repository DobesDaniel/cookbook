import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const imagesDirectory = path.resolve("public/images");
const sourceExtensions = new Set([".jpg", ".jpeg", ".png"]);
const files = (await readdir(imagesDirectory)).filter((file) =>
  sourceExtensions.has(path.extname(file).toLowerCase()),
);

for (const file of files) {
  const sourcePath = path.join(imagesDirectory, file);
  const baseName = path.basename(file, path.extname(file));
  const fullPath = path.join(imagesDirectory, `${baseName}.webp`);
  const cardPath = path.join(imagesDirectory, `${baseName}_card.webp`);

  await sharp(sourcePath)
    .rotate()
    .resize({
      width: 1600,
      height: 1200,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({ quality: 82, effort: 5 })
    .toFile(fullPath);

  await sharp(sourcePath)
    .rotate()
    .resize({
      width: 600,
      height: 400,
      fit: "cover",
      position: "attention",
    })
    .webp({ quality: 76, effort: 5 })
    .toFile(cardPath);

  const sourceSize = (await stat(sourcePath)).size;
  const fullSize = (await stat(fullPath)).size;
  const cardSize = (await stat(cardPath)).size;
  const savedPercent = Math.round(
    (1 - (fullSize + cardSize) / sourceSize) * 100,
  );

  console.log(
    `${file}: ${Math.round(sourceSize / 1024)} kB -> ` +
      `${Math.round(fullSize / 1024)} kB + ${Math.round(cardSize / 1024)} kB ` +
      `(${savedPercent}% smaller)`,
  );
}
