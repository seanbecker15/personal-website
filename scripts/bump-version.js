const path = require('path');
const fs = require('fs');

const packageJson = require('../package.json');
const prevVersion = packageJson.version;
const prevVersionDate = packageJson.versionDate;

const now = new Date();
const newVersion = parseInt(prevVersion, 10) + 1;
const newVersionDate = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;

packageJson.version = newVersion.toString();
packageJson.versionDate = newVersionDate;

const packagePath = path.join(__dirname, '../package.json');
fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2), {
  encoding: 'utf-8',
});

const publicVersionPath = path.join(__dirname, '../public/version.json');
fs.writeFileSync(
  publicVersionPath,
  JSON.stringify({ version: newVersion, date: newVersionDate }, null, 2),
  {
    encoding: 'utf-8',
  },
);
