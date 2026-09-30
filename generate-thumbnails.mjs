import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputDir = path.resolve("src/assets/projects");
const outputDir = path.resolve("src/assets/project-thumbnails");

fs.mkdirSync(outputDir, { recursive: true });

const files = fs
  .readdirSync(inputDir)
  .filter((file) => file.toLowerCase().endsWith(".webp"));

for (const file of files) {
  const inputPath = path.join(inputDir, file);
  const outputPath = path.join(outputDir, file);

  try {
    await sharp(inputPath)
      .resize(960, 540, {
        fit: "cover",
        position: "top",
      })
      .webp({
        quality: 78,
      })
      .toFile(outputPath);

    console.log(`Created: ${file}`);
  } catch (error) {
    console.error(`Failed: ${file}`, error);
  }
}

console.log("Thumbnail generation complete.");