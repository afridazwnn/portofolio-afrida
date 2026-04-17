import { removeBackground } from '@imgly/background-removal-node';
import fs from 'fs';

async function processImage() {
  try {
    const inputPath = 'file:///C:/Users/advan/.gemini/antigravity/brain/ae5383be-01f4-461f-94c3-a0d939feeda8/media__1776400595307.jpg';
    const outputPath = 'public/afrida-avatar.png';
    console.log('Processing image with file URI...');
    
    // Pass the file string directly with proper protocol
    const blob = await removeBackground(inputPath);
    const buffer = Buffer.from(await blob.arrayBuffer());
    fs.writeFileSync(outputPath, buffer);
    console.log('Successfully saved to ' + outputPath);
  } catch (err) {
    fs.writeFileSync('err.txt', err.stack || err.toString());
    console.error('Error removing background, see err.txt');
  }
}
processImage();
