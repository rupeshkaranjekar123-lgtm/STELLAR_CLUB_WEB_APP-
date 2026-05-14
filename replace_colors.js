const fs = require('fs');
const path = require('path');

const directories = ['src/app', 'src/components'];

const colorMap = {
  '#D4AF37': '#C9A14A',
  '#B5952F': '#B8924F',
  '#A8832C': '#B8924F',
  '#F0D080': '#D4B06A',
  '#D4B55A': '#D4B06A',
  '#050505': '#0A0A0A',
  '#060606': '#111111',
  '#030303': '#161616',
};

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

let count = 0;
directories.forEach(dir => {
  walkDir(dir, (filePath) => {
    if (filePath.endsWith('.tsx') || filePath.endsWith('.css') || filePath.endsWith('.ts')) {
      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;
      
      for (const [oldColor, newColor] of Object.entries(colorMap)) {
        // Case insensitive replace
        const regex = new RegExp(oldColor, 'gi');
        content = content.replace(regex, newColor);
      }
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated colors in ${filePath}`);
        count++;
      }
    }
  });
});

console.log(`Done. Updated ${count} files.`);
