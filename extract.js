const fs = require('fs');
const path = require('path');

const HTMLParser = require('node-html-parser');

const html = fs.readFileSync(
    path.resolve(__dirname, './build/index.html'),
    'utf8'
);

const root = HTMLParser.parse(html);

fs.writeFileSync('./build/scr1.js', root.querySelector('script').textContent);
