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
      this.$button.on('click', function(e) {
        e.preventDefault();
        console.log("button clicked");
      })
    },
    loadTemplates: function() {
      var that = this;

      var request = $.get('../data/templates.json');
      request.done(function(data) {
        $.each(data, function(i, template) {
          that.$templateField.append($('<option>', {
            value: template,
            text: template.name
          }));
        });
      });
    }
  }

  templates.init();
})();
