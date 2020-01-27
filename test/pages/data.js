(function () {
  var data = {
    home: {
      url: '/',
      aboutUsMenu: '.menu-item.menu-item-type-post_type.menu-item-object-page.menu-item-10'
    },
    about: {
      url: '/about-us',
      headerTitle: '.entry-header.group'
    },
    contact: {
      url: '/contact',
      firstNameField: '.smFieldFirstName.smform-control.smform-field-sizelarge.required',
      lastNameField: '.smFieldLastName.smform-control.smform-field-sizelarge.required',
      emailField: '.smform-control.smform-controllabelpos.required.smform-field-sizemedium',
      messageField: '.smform-control.smform-controllabelpos.smform-field-sizelarge.smform-control.smform-controllabelpostextarea',
      submitButton: '.smform-submit',
      successMessage: '.smform-ajax-msg'
    }
  };
  exports.getAll = function () {
    return data;
  };

})();

