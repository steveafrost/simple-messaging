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
      this.$customArea = $('#customArea');
      this.$customField = $('#customField');
      this.$messageArea = $('#message');
    },
    bindEvents: function() {
      this.$form.submit(this.populateTemplate.bind(this));
      this.$templateField.change(this.toggleCustom.bind(this));
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
        return 'Good morning';
      } else if (currentTime < 16) {
        return 'Good afternoon';
      } else {
        return 'Good evening';
      }
    },
    render: function(message) {
      this.$messageArea.html('<h2>Message Sent</h2>' + message).show();
    },
    populateTemplate: function(event) {
      event.preventDefault();

      if(this.$templateField.val() === "custom") {
        this.render(this.$customField.val() + "<p id='note'>Note: guest & company info not populated with custom messages</p>");
        return;
      };

      var template = JSON.parse(this.$templateField.val()),
          company = JSON.parse(this.$companyField.val()),
          guest = JSON.parse(this.$guestField.val()),
          greeting = this.greeting();

      for(var parameter in template.parameters) {
        var trimmedParam = parameter.substring(1);

        if(guest[trimmedParam]) {
          template.message = template.message.replace(parameter, guest[trimmedParam]);
        } else if (guest['reservation'][trimmedParam]) {
          template.message = template.message.replace(parameter, guest['reservation'][trimmedParam]);
        } else if (company[trimmedParam]) {
          template.message = template.message.replace(parameter, company[trimmedParam]);
        } else {
          template.message = template.message.replace(parameter, greeting);
        }
      }

      this.render(template.message);
    },
    toggleCustom: function(event) {
      if(event.target.value === "custom") {
        this.$customArea.show();
      } else {
        this.$customArea.hide();
      }
    }
  };

  templates.init();
})();
