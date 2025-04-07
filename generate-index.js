// generate-index.js
const fs = require('fs');
const path = require('path');

const folder = './for-kids';
const files = fs.readdirSync(folder).filter(file =>
  file.endsWith('.html') && file !== 'index.html'
);

const links = files.map(file => {
  const name = file.replace('.html', '').replace(/[-_]/g, ' ');
  return `<li><a href="${file}">${name.charAt(0).toUpperCase() + name.slice(1)}</a></li>`;
}).join('\n');

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Coloring Pages for Kids</title>
  <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Fredoka One', cursive;
      background: #fff6f0;
      color: #333;
      padding: 2rem;
      max-width: 700px;
      margin: auto;
    }
    h1 {
      text-align: center;
      color: #e07a5f;
    }
    ul {
      list-style: none;
      padding: 0;
      margin-top: 2rem;
    }
    li {
      background: #f4a261;
      margin-bottom: 10px;
      padding: 15px;
      border-radius: 12px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      transition: background 0.3s;
    }
    li:hover {
      background: #e76f51;
    }
    a {
      color: white;
      text-decoration: none;
      font-size: 1.2rem;
    }
  </style>
</head>
<body>
  <h1>🎨 Coloring Pages for Kids</h1>
  <ul>
    ${links}
  </ul>
</body>
</html>
`;

fs.writeFileSync(path.join(folder, 'index.html'), html);
console.log('index.html generated successfully!');
