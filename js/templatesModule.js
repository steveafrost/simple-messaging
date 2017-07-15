(function() {

  var templates = {
    init: function() {
      this.cacheDOM();
      this.bindEvents();
      this.loadTemplates();
    },
    cacheDOM: function() {
      this.$button = $('#submit');
      this.$templateField = $('#templateField');
    },
    bindEvents: function() {
      this.$button.on('click', this.populateTemplate);
    },
    loadTemplates: function() {
      var request = $.get('../data/templates.json');
      request.done(function(data) {
        $.each(data, function(i, template) {
          this.$templateField.append($('<option>', {
            value: template,
            text: template.name
          }));
        }.bind(this));
      }.bind(this));
    },
    populateTemplate: function(event) {
      event.preventDefault();
      console.log("button clicked");
    }
  }

  templates.init();
})();
