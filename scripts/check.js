// Sanity check for TierBloom.
// The app file now contains more than one inline <script> block, so the old
// greedy regex (<script> ... </script> before </body>) captured the HTML
// between blocks and failed with "Unexpected token '<'". That failure stopped
// the GitHub Pages deployment, so the live site stayed on the old version
// even though the repository itself had updated.
// This version parses EVERY inline <script> block separately.
const fs = require('fs');
const vm = require('vm');
const html = fs.readFileSync('index.html', 'utf8');
const blocks = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)];
if (blocks.length === 0) {
  console.error('No inline script found');
  process.exit(1);
}
blocks.forEach((m, i) => {
  try {
    new vm.Script(m[1]);
    console.log('OK: inline script ' + (i + 1) + ' parses (' + m[1].length + ' chars)');
  } catch (e) {
    console.error('Syntax error in script ' + (i + 1) + ':', e.message);
    process.exit(1);
  }
});
for (const f of ['manifest.webmanifest', 'sw.js', 'assets/og-image.png', 'assets/icon-512.png']) {
  if (!fs.existsSync(f)) {
    console.error('Missing ' + f);
    process.exit(1);
  }
}
console.log('OK: required files present');
