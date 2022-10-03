const fs = require("fs");
const pinataSDLK = require("@pinata/sdk");
const path = require("path");

async function storeImages(imagesFilePath) {
  const fullImagesPath = path.resolve(imagesFilePath);
  const files = fs.readdirSync(fullImagesPath);
  console.log(files);
}
module.exports = { storeImages };
