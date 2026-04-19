const fs = require('fs');
const path = require('path');

const imageMap = {
  'SaveGram.App_624110756_18440604118129208_9072646923453274942_n.jpg': 'dining.jpg',
  'SaveGram.App_625052161_18441018373129208_6089264654800251255_n.jpg': 'gym.jpg',
  'SaveGram.App_626559385_18441199897129208_8783045402998492902_n.jpg': 'pool.jpg',
  'SaveGram.App_632510213_18444516832129208_6868920722152913359_n.jpg': 'exterior.jpg',
  'SaveGram.App_639770138_18445765708129208_9132165409241056620_n.jpg': 'membership.jpg',
  'SaveGram.App_642117337_18446323918129208_1331733728426310229_n.jpg': 'family.jpg',
  'SaveGram.App_655430269_18450329563129208_4058762230044991695_n.jpg': 'sports.jpg',
  'SaveGram.App_659199064_18454523305129208_4577910001447099179_n.jpg': 'fitness-steam.jpg',
  'SaveGram.App_661047406_18454523296129208_8447501521310598013_n.jpg': 'reception.jpg',
  'SaveGram.App_661053707_18454523314129208_5353316617917315525_n.jpg': 'gallery-1.jpg',
  'SaveGram.App_661073409_18454523323129208_8162785140642547387_n.jpg': 'gallery-2.jpg',
  'SaveGram.App_663082544_18454523287129208_1732103331672678332_n.jpg': 'gallery-3.jpg',
  'SaveGram.App_663194161_18454523341129208_3515237505840708429_n.jpg': 'gallery-4.jpg',
  'SaveGram.App_669566265_18454523332129208_6017702774088062797_n.jpg': 'gallery-5.jpg'
};

const imageDir = path.join(__dirname, 'public', 'images');
for (const [oldName, newName] of Object.entries(imageMap)) {
  const oldPath = path.join(imageDir, oldName);
  const newPath = path.join(imageDir, newName);
  if (fs.existsSync(oldPath)) {
    fs.renameSync(oldPath, newPath);
  }
}

// Handle videos
const videoDir = path.join(__dirname, 'public', 'videos');
if (fs.existsSync(videoDir)) {
  let counter = 1;
  const videos = fs.readdirSync(videoDir);
  for (const video of videos) {
    if (video.endsWith('.mp4') && video.startsWith('SaveGram.App_')) {
      const newName = `video-${counter++}.mp4`;
      imageMap[video] = newName;
      fs.renameSync(path.join(videoDir, video), path.join(videoDir, newName));
    }
  }
}

// Replace in codebase
function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;
      for (const [oldName, newName] of Object.entries(imageMap)) {
        if (content.includes(oldName)) {
          content = content.split(oldName).join(newName);
          modified = true;
        }
      }
      if (modified) {
        fs.writeFileSync(fullPath, content);
      }
    }
  }
}

replaceInDir(path.join(__dirname, 'src', 'app'));
console.log('Renaming and replacement complete.');
