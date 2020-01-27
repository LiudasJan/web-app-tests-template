const datajs = require('../pages/data.js');
const utils = require('../helper/utils.js');
let data = datajs.getAll();

module.exports = {
  before: function (driver) {
    driver.maximizeWindow();
    // open landng page
    driver.url(driver.globals.web_url);
  },

  after: function (driver) {
    driver.end();
  },

  'Should be able to open about us page': function (driver) {
    driver.url(driver.globals.web_url);
    driver.click(data.home.aboutUsMenu);

    // wait and assert success message.
    driver.waitForElementPresent(data.about.headerTitle, 'Header is pressent.');
    driver.assert.containsText(data.about.headerTitle, 'About');
  },

};
