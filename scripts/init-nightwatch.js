const https = require('https');
const fs = require('fs');

const seleniumUrl = 'https://selenium-release.storage.googleapis.com/3.141/selenium-server-standalone-3.141.59.jar';
const outputDir = 'bin';
const outputFilename = 'selenium-server.jar';

(async () => {
  await fs.promises.mkdir(outputDir, { recursive: true });

  console.log(`Downloading ${seleniumUrl}...`);

  const file = fs.createWriteStream('bin/selenium-server.jar');
  const request = https.get(seleniumUrl, function(response) {
    response.pipe(file);
  });

  console.log(`Done!`);

})().catch(err => console.error(err));





