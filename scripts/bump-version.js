/* eslint-disable */

const path = require("path");
const fs = require("fs");
const prevVersion = require("../package.json").version;
const prevVersionDate = require("../package.json").versionDate;

let [major, minor, patch] = prevVersion.split(".");
const update = {
  "--major": () => {
    patch = 0;
    minor = 0;
    major++;
  },
  "--minor": () => {
    patch = 0;
    minor++;
  },
  "--patch": () => {
    patch++;
  },
};

const option = process.argv[2] || "--minor";

if (!update[option]) {
  throw new Error(`Invalid option ${option}`);
}

update[option]();

const packagePath = path.join(__dirname, "../package.json");
const newVersion = `${major}.${minor}.${patch}`;
const now = new Date();
const newVersionDate = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
const prevPackageContent = fs.readFileSync(packagePath, { encoding: "utf-8" });
const newPackageContent = prevPackageContent
  .replace(`"version": "${prevVersion}"`, `"version": "${newVersion}"`)
  .replace(
    `"versionDate": "${prevVersionDate}"`,
    `"versionDate": "${newVersionDate}"`
  );

fs.writeFileSync(packagePath, newPackageContent, {
  encoding: "utf-8",
});
