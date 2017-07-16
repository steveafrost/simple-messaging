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
      this.$messageArea = $('#message');
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
    greeting: function() {
      var currentTime = new Date().getHours();

      if (currentTime < 12) {
        return "Good morning";
      } else if (currentTime < 16) {
        return "Good afternoon";
      } else {
        return "Good evening";
      };
    },
    render: function(message) {
      this.$messageArea.text(message);
    },
    populateTemplate: function(event) {
      event.preventDefault();

      var template = JSON.parse(this.$templateField.val()),
          company = JSON.parse(this.$companyField.val()),
          guest = JSON.parse(this.$guestField.val());
          greeting = this.greeting();

      for(parameter in template.parameters) {
        var trimmedParam = parameter.substring(1);

        if(guest[trimmedParam]) {
          template.message = template.message.replace(parameter, guest[trimmedParam]);
        } else if (company[trimmedParam]) {
          template.message = template.message.replace(parameter, company[trimmedParam]);
        } else {
          template.message = template.message.replace(parameter, greeting);
        }

      }

      this.render(template.message)
    }
  }

  templates.init();
})();
