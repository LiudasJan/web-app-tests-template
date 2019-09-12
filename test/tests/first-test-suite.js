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

  'Should be able to contact qaontime team when providing correct data': function (driver) {
    driver.url(driver.globals.web_url + data.contact.url);
    //  enter first/last name email and message
    driver.setValue(data.contact.firstNameField, utils.getRandomName(17));
    driver.setValue(data.contact.lastNameField, utils.getRandomName(22));
    driver.setValue(data.contact.emailField, utils.getRandomEmail());
    driver.setValue(data.contact.messageField, utils.getRandomName(128));
    driver.click(data.contact.submitButton);

    // wait and assert success message.
    driver.waitForElementPresent(data.contact.successMessage, 'Success message pressent.');
    driver.assert.containsText(data.contact.successMessage, 'Thanks for submitting your information');
  },

};
