(function() {

  var templatesModule = {
    init: function() {
      this.cacheDOM();
      // this.bindEvents();
      this.loadTemplates();
    },
    cacheDOM: function() {
      this.$button = $('#submit');
      this.$templateField = $('#templateField');
    },
    bindEvents: function() {
      this.$button.click(function(e) {
        e.preventDefault();
        console.log("button clicked");
      })
    },
    loadTemplates: function() {
      var that = this;

      var request = $.get('../data/templates.json');
      request.done(function(data) {
        $.each(data, function(i, template) {
          console.log("this is the each loop")
          that.$templateField.append($('<option>', {
            value: template,
            text: template.name
          }));
        });
      });
    }
  }

  templatesModule.init();
})();
