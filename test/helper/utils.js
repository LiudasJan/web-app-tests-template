/**
 * function generates random string for provided length.
 */

getRandomString = function (possible, length) {
    let text = "";
    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};

/**
 * function generates random test email.
 */

module.exports.getRandomEmail = function () {
    return getRandomString('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789', 36) + '@gmail.com';
};

/**
 * function generates random test name.
 */

module.exports.getRandomName = function (length) {
    return getRandomString('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 1) + getRandomString('abcdefghijklmnopqrstuvwxyz', length) ;
};

/**
 * set local storage
 */
module.exports.setLocalStorage = function (driver, name, value) {
    driver.execute(function (name, value) {
        window.localStorage.setItem(name, value);
        return true;
      })
};
