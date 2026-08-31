// Copies the single source-of-truth app file (finforecast-lite.html, two
// levels up at the project root) into www/index.html before every cap sync
// — so the mobile app never drifts from the file you edit directly.
const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, '..', '..', '..', 'finforecast-lite.html');
const dest = path.join(__dirname, '..', 'www', 'index.html');

fs.mkdirSync(path.dirname(dest), { recursive: true });
fs.copyFileSync(src, dest);
console.log(`Synced ${src} -> ${dest}`);
