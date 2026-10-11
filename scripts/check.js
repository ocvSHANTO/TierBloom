// Sanity check: extracts the inline script from index.html and verifies it parses.
const fs=require('fs'),vm=require('vm');
const html=fs.readFileSync('index.html','utf8');
const m=html.match(/<script>([\s\S]*)<\/script>\s*<\/body>/);
if(!m){console.error('No inline script found');process.exit(1)}
try{new vm.Script(m[1]);console.log('OK: inline script parses ('+m[1].length+' chars)')}
catch(e){console.error('Syntax error:',e.message);process.exit(1)}
for(const f of ['manifest.webmanifest','sw.js','assets/og-image.png','assets/icon-512.png']){if(!fs.existsSync(f)){console.error('Missing '+f);process.exit(1)}}
console.log('OK: required files present');
