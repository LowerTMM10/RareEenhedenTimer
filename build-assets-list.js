const fs = require("fs");
const path = require("path");

const dir = "./assets";
const files = fs.readdirSync(dir);

// schrijf naar JSON
fs.writeFileSync(path.join(dir, "files.json"), JSON.stringify(files, null, 2));

// desnoods ook direct een index.html genereren
const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Assets index</title>
</head>
<body>
  <h1>Assets index</h1>
  <ul>
    ${files.map(f => `<li><a href="${f}">${f}</a></li>`).join("")}
  </ul>
</body>
</html>
`;
fs.writeFileSync(path.join(dir, "index.html"), html);
