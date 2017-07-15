(function() {

  var templates = {
    init: function() {
      this.cacheDOM();
      this.bindEvents();
      this.loadTemplates();
    },
    cacheDOM: function() {
      this.$form = $('#simpleForm');
      this.$templateField = $('#templateField');
      this.$companyField = $('#companyField');
      this.$guestField = $('#guestField');
    },
    bindEvents: function() {
      this.$form.submit(this.populateTemplate.bind(this));
    },
    loadTemplates: function() {
      var request = $.get('../data/templates.json');
      request.done(function(data) {
        $.each(data, function(i, template) {
          this.$templateField.append($('<option>', {
            value: JSON.stringify(template),
            text: template.name
          }));
        }.bind(this));
      }.bind(this));
    },
    populateTemplate: function(event) {
      event.preventDefault();

      var template = JSON.parse(this.$templateField.val()),
          company = JSON.parse(this.$companyField.val()),
          guest = JSON.parse(this.$guestField.val());


    }
  }

  templates.init();
})();
